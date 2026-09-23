#!/usr/bin/env node
/**
 * scripts/update-fuel-prices.mjs
 *
 * Standalone Node CLI script for Hostinger Cron.
 * Prioritizes OilPrices.pk as primary real-time source, with PSO and Shell as fallbacks.
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataFilePath = path.resolve(__dirname, "../src/data/fuelPrices.json");

console.log("[IRIS TOURS] Fuel Price Synchronizer started at:", new Date().toISOString());

async function run() {
  if (!fs.existsSync(dataFilePath)) {
    console.error("[ERROR] fuelPrices.json not found at:", dataFilePath);
    process.exit(1);
  }

  const rawData = fs.readFileSync(dataFilePath, "utf-8");
  const fuelData = JSON.parse(rawData);

  // 1. Fetch Currency Rates
  try {
    console.log("[INFO] Fetching foreign exchange rates...");
    const forexRes = await fetch("https://open.er-api.com/v6/latest/USD", { signal: AbortSignal.timeout(8000) });
    if (forexRes.ok) {
      const fxJson = await forexRes.json();
      if (fxJson?.rates?.PKR) {
        fuelData.exchangeRates.rates = {
          ...fuelData.exchangeRates.rates,
          USD: 1.0,
          PKR: fxJson.rates.PKR,
          AED: fxJson.rates.AED || fuelData.exchangeRates.rates.AED,
          SAR: fxJson.rates.SAR || fuelData.exchangeRates.rates.SAR,
          GBP: fxJson.rates.GBP || fuelData.exchangeRates.rates.GBP,
          CAD: fxJson.rates.CAD || fuelData.exchangeRates.rates.CAD,
          EUR: fxJson.rates.EUR || fuelData.exchangeRates.rates.EUR,
        };
        fuelData.exchangeRates.lastUpdated = new Date().toISOString();
        console.log(`[SUCCESS] Exchange rates updated. USD/PKR = ${fxJson.rates.PKR}`);
      }
    }
  } catch (err) {
    console.warn("[WARN] Could not update forex rates:", err.message);
  }

  // 2. Fetch from OilPrices.pk (Primary & Fastest)
  let updatedPakistan = false;
  try {
    console.log("[INFO] Checking OilPrices.pk API for latest OGRA fuel rates...");
    const oilRes = await fetch("https://oilprices.pk/api/price-history", {
      signal: AbortSignal.timeout(9000),
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (oilRes.ok) {
      const historyArr = await oilRes.json();
      if (Array.isArray(historyArr) && historyArr.length > 0) {
        const sorted = [...historyArr].sort(
          (a, b) => new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime()
        );
        const uniqueDates = Array.from(new Set(sorted.map((item) => item.effectiveDate)));
        const latestDate = uniqueDates[0];
        const prevDate = uniqueDates[1];

        const latestItems = sorted.filter((x) => x.effectiveDate === latestDate);
        const prevItems = prevDate ? sorted.filter((x) => x.effectiveDate === prevDate) : [];

        const petrolItem = latestItems.find((x) =>
          x.product.toLowerCase().includes("petrol") || x.product.toLowerCase().includes("motor spirit")
        );
        const prevPetrolItem = prevItems.find((x) =>
          x.product.toLowerCase().includes("petrol") || x.product.toLowerCase().includes("motor spirit")
        );

        const dieselItem = latestItems.find((x) =>
          x.product.toLowerCase().includes("diesel") || x.product.toLowerCase().includes("hsd")
        );
        const prevDieselItem = prevItems.find((x) =>
          x.product.toLowerCase().includes("diesel") || x.product.toLowerCase().includes("hsd")
        );

        const skoItem = latestItems.find((x) =>
          x.product.toLowerCase().includes("kerosene") || x.product.toLowerCase().includes("sko")
        );

        if (petrolItem && petrolItem.pricePkr > 200 && petrolItem.pricePkr < 600) {
          const p = fuelData.pakistan.petrol;
          p.previousPrice = prevPetrolItem ? prevPetrolItem.pricePkr : p.price;
          p.price = petrolItem.pricePkr;
          p.change = Math.round((p.price - p.previousPrice) * 100) / 100;
          p.changePercent =
            p.previousPrice > 0
              ? Math.round(((p.price - p.previousPrice) / p.previousPrice) * 10000) / 100
              : 0;

          if (dieselItem) {
            const d = fuelData.pakistan.diesel;
            d.previousPrice = prevDieselItem ? prevDieselItem.pricePkr : d.price;
            d.price = dieselItem.pricePkr;
            d.change = Math.round((d.price - d.previousPrice) * 100) / 100;
            d.changePercent =
              d.previousPrice > 0
                ? Math.round(((d.price - d.previousPrice) / d.previousPrice) * 10000) / 100
                : 0;
          }

          if (skoItem) {
            fuelData.pakistan.kerosene.price = skoItem.pricePkr;
          }

          fuelData.meta.effectiveFrom = latestDate;
          fuelData.meta.lastChecked = new Date().toISOString();
          fuelData.meta.source = "OilPrices.pk (Live OGRA Notified Feed)";
          updatedPakistan = true;
          console.log(`[SUCCESS] OilPrices.pk verified: Petrol Rs. ${p.price}, Diesel Rs. ${fuelData.pakistan.diesel.price}`);
        }
      }
    }
  } catch (err) {
    console.warn("[WARN] OilPrices.pk check note:", err.message);
  }

  // 3. Fallback to PSO if OilPrices.pk did not update
  if (!updatedPakistan) {
    try {
      console.log("[INFO] Fallback check: Pakistan State Oil (PSO) pricing feed...");
      const psoRes = await fetch("https://psopk.com/en/fuels/fuel-prices", {
        signal: AbortSignal.timeout(10000),
        headers: { "User-Agent": "Mozilla/5.0" },
      });

      if (psoRes.ok) {
        const html = await psoRes.text();
        const petrolMatch = html.match(/Premier\s*Euro\s*5[^0-9<]*([0-9]+\.[0-9]{2})/i);
        const dieselMatch = html.match(/Hi-Cetane|High\s*Speed\s*Diesel[^0-9<]*([0-9]+\.[0-9]{2})/i);

        if (petrolMatch) {
          const petrol = parseFloat(petrolMatch[1]);
          if (petrol > 200 && petrol < 600) {
            fuelData.pakistan.petrol.price = petrol;
            fuelData.meta.source = "Pakistan State Oil (PSO) Direct Feed";
            updatedPakistan = true;
            console.log(`[SUCCESS] PSO Petrol verified: Rs. ${petrol}`);
          }
        }
        if (dieselMatch) {
          const diesel = parseFloat(dieselMatch[1]);
          if (diesel > 200 && diesel < 600) {
            fuelData.pakistan.diesel.price = diesel;
            console.log(`[SUCCESS] PSO Diesel verified: Rs. ${diesel}`);
          }
        }
      }
    } catch (err) {
      console.warn("[WARN] PSO feed check note:", err.message);
    }
  }

  // Update PK international entry
  const pkUsdRate = fuelData.exchangeRates.rates.PKR || 280.25;
  const pkEntry = fuelData.international.find((c) => c.code === "PK");
  if (pkEntry) {
    pkEntry.petrolLocal = fuelData.pakistan.petrol.price;
    pkEntry.dieselLocal = fuelData.pakistan.diesel.price;
    pkEntry.petrolUsd = Math.round((pkEntry.petrolLocal / pkUsdRate) * 1000) / 1000;
    pkEntry.dieselUsd = Math.round((pkEntry.dieselLocal / pkUsdRate) * 1000) / 1000;
  }

  // Write updated data
  fs.writeFileSync(dataFilePath, JSON.stringify(fuelData, null, 2), "utf-8");
  console.log("[IRIS TOURS] Synchronizer finished successfully. fuelPrices.json saved.");

  // 4. Ping live website to invalidate cache if site is reachable
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL || "https://iristours.net";
  const cronSecret = process.env.IRIS_CRON_SECRET || "iris_fuel_sync_secret_2026";
  try {
    console.log(`[INFO] Pinging ${appUrl}/api/fuel-prices/sync to revalidate production cache...`);
    const pingRes = await fetch(`${appUrl}/api/fuel-prices/sync?secret=${encodeURIComponent(cronSecret)}`, {
      signal: AbortSignal.timeout(10000),
      headers: { "User-Agent": "IrisTours-Cron-Notifier/1.0" },
    });
    if (pingRes.ok) {
      console.log("[SUCCESS] Live website cache revalidated successfully!");
    } else {
      console.warn(`[WARN] Live ping returned status ${pingRes.status}`);
    }
  } catch (pingErr) {
    console.warn("[WARN] Could not ping live site:", pingErr.message);
  }
}

run().catch((e) => {
  console.error("[FATAL ERROR]", e);
  process.exit(1);
});

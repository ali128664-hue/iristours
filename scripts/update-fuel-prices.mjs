#!/usr/bin/env node
/**
 * scripts/update-fuel-prices.mjs
 *
 * Standalone Node CLI script for Hostinger Cron.
 * Can be scheduled in Hostinger cPanel / hPanel Cron Jobs:
 *   node /path/to/project/scripts/update-fuel-prices.mjs
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

  // 2. Fetch Pakistan Rates (PSO / OGRA)
  let updatedPakistan = false;
  try {
    console.log("[INFO] Checking Pakistan State Oil (PSO) pricing feed...");
    const psoRes = await fetch("https://psopk.com/en/fuels/fuel-prices", {
      signal: AbortSignal.timeout(10000),
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/122.0.0.0 Safari/537.36",
      },
    });

    if (psoRes.ok) {
      const html = await psoRes.text();
      const petrolMatch = html.match(/Premier\s*Euro\s*5[^0-9<]*([0-9]+\.[0-9]{2})/i);
      const dieselMatch = html.match(/Hi-Cetane|High\s*Speed\s*Diesel[^0-9<]*([0-9]+\.[0-9]{2})/i);

      if (petrolMatch) {
        const petrol = parseFloat(petrolMatch[1]);
        if (petrol > 200 && petrol < 600) {
          if (fuelData.pakistan.petrol.price !== petrol) {
            fuelData.pakistan.petrol.previousPrice = fuelData.pakistan.petrol.price;
            fuelData.pakistan.petrol.price = petrol;
            fuelData.pakistan.petrol.change = Math.round((petrol - fuelData.pakistan.petrol.previousPrice) * 100) / 100;
          }
          fuelData.meta.lastChecked = new Date().toISOString();
          fuelData.meta.source = "Pakistan State Oil (PSO) Direct Feed";
          updatedPakistan = true;
          console.log(`[SUCCESS] PSO Petrol verified: Rs. ${petrol}`);
        }
      }

      if (dieselMatch) {
        const diesel = parseFloat(dieselMatch[1]);
        if (diesel > 200 && diesel < 600) {
          if (fuelData.pakistan.diesel.price !== diesel) {
            fuelData.pakistan.diesel.previousPrice = fuelData.pakistan.diesel.price;
            fuelData.pakistan.diesel.price = diesel;
            fuelData.pakistan.diesel.change = Math.round((diesel - fuelData.pakistan.diesel.previousPrice) * 100) / 100;
          }
          console.log(`[SUCCESS] PSO Diesel verified: Rs. ${diesel}`);
        }
      }
    }
  } catch (err) {
    console.warn("[WARN] PSO feed check note:", err.message);
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
}

run().catch((e) => {
  console.error("[FATAL ERROR]", e);
  process.exit(1);
});

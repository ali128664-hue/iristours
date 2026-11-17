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

const round2 = (n) => Math.round(n * 100) / 100;
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const HISTORY_LIMIT = 15;

/** A new price is only trusted if it is within 15% of the stored one (guards against feed glitches). */
function isPlausible(newPrice, oldPrice) {
  if (typeof newPrice !== "number" || !(newPrice > 0)) return false;
  if (!(oldPrice > 0)) return true;
  return Math.abs(newPrice - oldPrice) / oldPrice <= 0.15;
}

/** Updates price + previousPrice + change + changePercent together. Returns true if the price changed. */
function applyPrice(entry, newPrice, previousFromFeed) {
  const matchesStored = isPlausible(newPrice, entry.price);
  const matchesFeedHistory = typeof previousFromFeed === "number" && isPlausible(newPrice, previousFromFeed);
  if (!matchesStored && !matchesFeedHistory) {
    console.warn(`[WARN] Ignored implausible price for ${entry.name}: ${newPrice} (stored ${entry.price})`);
    return false;
  }
  const changed = Math.abs(entry.price - newPrice) > 0.001;
  if (typeof previousFromFeed === "number" && isPlausible(previousFromFeed, newPrice)) {
    entry.previousPrice = previousFromFeed;
  } else if (changed) {
    entry.previousPrice = entry.price;
  }
  entry.price = newPrice;
  entry.change = round2(entry.price - entry.previousPrice);
  entry.changePercent = entry.previousPrice > 0 ? round2(((entry.price - entry.previousPrice) / entry.previousPrice) * 100) : 0;
  return changed;
}

/** "2026-11-17" -> "Nov 17, 2026" (falls back to the raw text if it is not a date) */
function shortDate(value) {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return String(value);
  return `${MONTHS[d.getUTCMonth()].slice(0, 3)} ${String(d.getUTCDate()).padStart(2, "0")}, ${d.getUTCFullYear()}`;
}

/** OGRA reviews prices on the 1st and 16th of each month — returns the next one after today. */
function nextRevisionDate(now = new Date()) {
  const y = now.getUTCFullYear();
  const m = now.getUTCMonth();
  const day = now.getUTCDate();
  const next = day < 16 ? new Date(Date.UTC(y, m, 16)) : new Date(Date.UTC(y, m + 1, 1));
  return `${MONTHS[next.getUTCMonth()]} ${String(next.getUTCDate()).padStart(2, "0")}, ${next.getUTCFullYear()}`;
}

async function run() {
  if (!fs.existsSync(dataFilePath)) {
    console.error("[ERROR] fuelPrices.json not found at:", dataFilePath);
    process.exit(1);
  }

  const rawData = fs.readFileSync(dataFilePath, "utf-8");
  const fuelData = JSON.parse(rawData);
  let pricesChanged = false;
  let ratesRefreshed = false;

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
        ratesRefreshed = true;
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
          const d = fuelData.pakistan.diesel;
          const petrolChanged = applyPrice(p, petrolItem.pricePkr, prevPetrolItem?.pricePkr);
          const dieselChanged = dieselItem ? applyPrice(d, dieselItem.pricePkr, prevDieselItem?.pricePkr) : false;
          const keroseneChanged = skoItem ? applyPrice(fuelData.pakistan.kerosene, skoItem.pricePkr) : false;

          if (petrolChanged || dieselChanged) {
            // Keep the history table on the website in step with the live price
            const entryDate = shortDate(latestDate);
            const entry = {
              date: entryDate,
              petrolPrice: p.price,
              petrolChange: p.change,
              dieselPrice: d.price,
              dieselChange: d.change,
              notes: "Rate revision recorded from the live price feed.",
            };
            const history = Array.isArray(fuelData.history) ? fuelData.history : [];
            fuelData.history = [entry, ...history.filter((h) => h.date !== entryDate)].slice(0, HISTORY_LIMIT);
          }

          if (petrolChanged || dieselChanged || keroseneChanged) {
            pricesChanged = true;
            fuelData.meta.effectiveFrom = latestDate;
          }
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
        const dieselMatch = html.match(/(?:Hi-Cetane|High\s*Speed\s*Diesel)[^0-9<]*([0-9]+\.[0-9]{2})/i);

        if (petrolMatch) {
          const petrol = parseFloat(petrolMatch[1]);
          if (petrol > 200 && petrol < 600 && isPlausible(petrol, fuelData.pakistan.petrol.price)) {
            if (applyPrice(fuelData.pakistan.petrol, petrol)) pricesChanged = true;
            fuelData.meta.source = "Pakistan State Oil (PSO) Direct Feed";
            updatedPakistan = true;
            console.log(`[SUCCESS] PSO Petrol verified: Rs. ${petrol}`);
          }
        }
        if (dieselMatch) {
          const diesel = parseFloat(dieselMatch[1]);
          if (diesel > 200 && diesel < 600 && isPlausible(diesel, fuelData.pakistan.diesel.price)) {
            if (applyPrice(fuelData.pakistan.diesel, diesel)) pricesChanged = true;
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

  fuelData.meta.nextExpectedRevision = nextRevisionDate();

  // Only rewrite the file (and so only create a git commit) when a price actually
  // changed, or once a week to keep exchange rates reasonably fresh.
  const original = JSON.parse(rawData);
  const lastWrite = new Date(original.exchangeRates?.lastUpdated || 0).getTime();
  const ratesAreStale = ratesRefreshed && Date.now() - lastWrite > 7 * 24 * 60 * 60 * 1000;
  const revisionDateMoved = original.meta?.nextExpectedRevision !== fuelData.meta.nextExpectedRevision;

  if (pricesChanged || ratesAreStale || revisionDateMoved) {
    fuelData.meta.lastChecked = new Date().toISOString();
    fs.writeFileSync(dataFilePath, JSON.stringify(fuelData, null, 2) + "\n", "utf-8");
    console.log("[IRIS TOURS] Changes found. fuelPrices.json saved.");
  } else {
    console.log("[IRIS TOURS] No price changes. fuelPrices.json left untouched.");
  }

  // 4. Ask the live website to refresh its cache (needs the IRIS_CRON_SECRET environment variable)
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.APP_URL || "https://iristours.net";
  const cronSecret = process.env.IRIS_CRON_SECRET;
  if (!cronSecret) {
    console.warn("[WARN] IRIS_CRON_SECRET is not set — skipping live cache refresh.");
    return;
  }
  try {
    console.log(`[INFO] Pinging ${appUrl}/api/fuel-prices/sync to revalidate production cache...`);
    const pingRes = await fetch(`${appUrl}/api/fuel-prices/sync`, {
      signal: AbortSignal.timeout(15000),
      headers: { "User-Agent": "IrisTours-Cron-Notifier/1.0", "x-cron-secret": cronSecret },
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

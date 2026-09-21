import fs from "fs";
import path from "path";
import defaultFuelData from "@/data/fuelPrices.json";

export interface SyncResult {
  success: boolean;
  message: string;
  timestamp: string;
  source: string;
  pakistanUpdated: boolean;
  ratesUpdated: boolean;
  data: typeof defaultFuelData;
}

/**
 * Parses numeric price from text
 */
function parsePrice(text: string): number | null {
  const cleaned = text.replace(/[^0-9.]/g, "").trim();
  const num = parseFloat(cleaned);
  return isNaN(num) || num <= 0 ? null : Math.round(num * 100) / 100;
}

/**
 * Fetch latest exchange rates against USD
 */
async function fetchExchangeRates(): Promise<typeof defaultFuelData.exchangeRates.rates | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    const res = await fetch("https://open.er-api.com/v6/latest/USD", {
      signal: controller.signal,
      next: { revalidate: 86400 }, // cache 24h
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const json = await res.json();
    if (json && json.rates) {
      return {
        USD: 1.0,
        PKR: json.rates.PKR || 280.25,
        AED: json.rates.AED || 3.67,
        SAR: json.rates.SAR || 3.75,
        GBP: json.rates.GBP || 0.77,
        CAD: json.rates.CAD || 1.36,
        EUR: json.rates.EUR || 0.92,
        INR: json.rates.INR || 83.50,
        CNY: json.rates.CNY || 7.23,
        AUD: json.rates.AUD || 1.50,
        QAR: json.rates.QAR || 3.64,
        OMR: json.rates.OMR || 0.385,
        TRY: json.rates.TRY || 34.80,
        MYR: json.rates.MYR || 4.65,
      };
    }
  } catch (err) {
    console.warn("Forex API sync notice:", (err as Error).message);
  }
  return null;
}

/**
 * Fetch fuel rates from Pakistan source feeds
 */
async function fetchPakistanFuelRates(): Promise<{
  petrol?: number;
  diesel?: number;
  lightDiesel?: number;
  kerosene?: number;
  hiOctane?: number;
  lpg?: number;
  effectiveDate?: string;
  source: string;
} | null> {
  // Source 1: Pakistan State Oil (PSO)
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch("https://psopk.com/en/fuels/fuel-prices", {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });
    clearTimeout(timeout);

    if (res.ok) {
      const html = await res.text();
      // Look for table rows containing fuel names and prices
      const petrolMatch = html.match(/Premier\s*Euro\s*5[^0-9<]*([0-9]+\.[0-9]{2})/i);
      const dieselMatch = html.match(/Hi-Cetane|High\s*Speed\s*Diesel[^0-9<]*([0-9]+\.[0-9]{2})/i);
      const hobcMatch = html.match(/Altron\s*Premium|Hi-Octane[^0-9<]*([0-9]+\.[0-9]{2})/i);
      const ldoMatch = html.match(/Light\s*Diesel[^0-9<]*([0-9]+\.[0-9]{2})/i);
      const skoMatch = html.match(/Kerosene|SKO[^0-9<]*([0-9]+\.[0-9]{2})/i);

      const petrol = petrolMatch ? parsePrice(petrolMatch[1]) : null;
      const diesel = dieselMatch ? parsePrice(dieselMatch[1]) : null;

      if (petrol && petrol > 200 && petrol < 600) {
        return {
          petrol,
          diesel: diesel && diesel > 200 ? diesel : undefined,
          hiOctane: hobcMatch ? parsePrice(hobcMatch[1]) || undefined : undefined,
          lightDiesel: ldoMatch ? parsePrice(ldoMatch[1]) || undefined : undefined,
          kerosene: skoMatch ? parsePrice(skoMatch[1]) || undefined : undefined,
          source: "Pakistan State Oil (PSO) Direct Feed",
        };
      }
    }
  } catch (e) {
    console.warn("PSO Direct feed sync notice:", (e as Error).message);
  }

  // Source 2: Shell / OGRA Feed (petrolratetoday.pk)
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    const res = await fetch("https://petrolratetoday.pk/", {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });
    clearTimeout(timeout);

    if (res.ok) {
      const html = await res.text();
      const petrolMatch = html.match(/Petrol\s*Price[^0-9]*Rs\.?\s*([0-9]+\.[0-9]{2})/i);
      const dieselMatch = html.match(/Diesel\s*Price[^0-9]*Rs\.?\s*([0-9]+\.[0-9]{2})/i);
      const hobcMatch = html.match(/Hi-Octane[^0-9]*Rs\.?\s*([0-9]+\.[0-9]{2})/i);
      const ldoMatch = html.match(/Light\s*Diesel[^0-9]*Rs\.?\s*([0-9]+\.[0-9]{2})/i);
      const skoMatch = html.match(/Kerosene[^0-9]*Rs\.?\s*([0-9]+\.[0-9]{2})/i);

      const petrol = petrolMatch ? parsePrice(petrolMatch[1]) : null;
      const diesel = dieselMatch ? parsePrice(dieselMatch[1]) : null;

      if (petrol && petrol > 200 && petrol < 600) {
        return {
          petrol,
          diesel: diesel && diesel > 200 ? diesel : undefined,
          hiOctane: hobcMatch ? parsePrice(hobcMatch[1]) || undefined : undefined,
          lightDiesel: ldoMatch ? parsePrice(ldoMatch[1]) || undefined : undefined,
          kerosene: skoMatch ? parsePrice(skoMatch[1]) || undefined : undefined,
          source: "Shell Pakistan / OGRA Feed (petrolratetoday.pk)",
        };
      }
    }
  } catch (e) {
    console.warn("Secondary feed sync notice:", (e as Error).message);
  }

  return null;
}

/**
 * Execute automated sync with multi-tier fallback
 */
export async function syncFuelPrices(): Promise<SyncResult> {
  const currentData = { ...defaultFuelData };
  let pakistanUpdated = false;
  let ratesUpdated = false;
  let sourceReport = "Retained Verified Baseline";

  // 1. Sync Currency Rates
  const latestRates = await fetchExchangeRates();
  if (latestRates) {
    currentData.exchangeRates = {
      base: "USD",
      lastUpdated: new Date().toISOString(),
      rates: latestRates as typeof defaultFuelData.exchangeRates.rates,
    };
    ratesUpdated = true;
  }

  // 2. Sync Pakistan Fuel Rates
  const pakRates = await fetchPakistanFuelRates();
  if (pakRates && pakRates.petrol) {
    sourceReport = pakRates.source;

    // Helper to update product with previous comparison
    const updateProduct = (key: "petrol" | "diesel" | "hiOctane" | "lightDiesel" | "kerosene" | "lpg", newPrice?: number) => {
      if (newPrice && newPrice > 50) {
        const prod = currentData.pakistan[key];
        if (Math.abs(prod.price - newPrice) > 0.001) {
          prod.previousPrice = prod.price;
          prod.price = newPrice;
          prod.change = Math.round((newPrice - prod.previousPrice) * 100) / 100;
          prod.changePercent =
            prod.previousPrice > 0
              ? Math.round(((newPrice - prod.previousPrice) / prod.previousPrice) * 10000) / 100
              : 0;
        }
        prod.status = "verified";
      }
    };

    updateProduct("petrol", pakRates.petrol);
    if (pakRates.diesel) updateProduct("diesel", pakRates.diesel);
    if (pakRates.hiOctane) updateProduct("hiOctane", pakRates.hiOctane);
    if (pakRates.lightDiesel) updateProduct("lightDiesel", pakRates.lightDiesel);
    if (pakRates.kerosene) updateProduct("kerosene", pakRates.kerosene);
    if (pakRates.lpg) updateProduct("lpg", pakRates.lpg);

    currentData.meta.lastChecked = new Date().toISOString();
    currentData.meta.source = pakRates.source;
    currentData.meta.isLiveVerified = true;
    pakistanUpdated = true;

    // Update international entry for Pakistan
    const pkUsdRate = currentData.exchangeRates.rates.PKR || 280.25;
    const pkIntl = currentData.international.find((i) => i.code === "PK");
    if (pkIntl) {
      pkIntl.petrolLocal = currentData.pakistan.petrol.price;
      pkIntl.dieselLocal = currentData.pakistan.diesel.price;
      pkIntl.petrolUsd = Math.round((pkIntl.petrolLocal / pkUsdRate) * 1000) / 1000;
      pkIntl.dieselUsd = Math.round((pkIntl.dieselLocal / pkUsdRate) * 1000) / 1000;
    }
  }

  // 3. Persist to disk if allowed (works in local Node / Hostinger CLI)
  try {
    const filePath = path.join(process.cwd(), "src", "data", "fuelPrices.json");
    if (fs.existsSync(path.dirname(filePath))) {
      fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), "utf-8");
    }
  } catch (fsErr) {
    // Non-fatal if runtime filesystem is read-only (e.g. serverless containers)
    console.warn("Runtime disk write note (using in-memory):", (fsErr as Error).message);
  }

  return {
    success: true,
    message: pakistanUpdated
      ? `Successfully refreshed fuel prices via ${sourceReport}`
      : "Retained last verified fuel prices (upstream rate check completed).",
    timestamp: new Date().toISOString(),
    source: sourceReport,
    pakistanUpdated,
    ratesUpdated,
    data: currentData,
  };
}

/**
 * Load latest cached fuel data
 */
export function getLatestFuelData(): typeof defaultFuelData {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "fuelPrices.json");
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(raw);
    }
  } catch (e) {
    // Fall back to imported default
  }
  return defaultFuelData;
}

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
function parsePrice(text: string | undefined): number | null {
  if (!text) return null;
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
 * Fetch fuel rates from Pakistan source feeds:
 * Primary: OilPrices.pk (Fastest & most immediate updates in Pakistan)
 * Secondary: Pakistan State Oil (PSO)
 * Tertiary: Shell Pakistan / OGRA Feed
 */
async function fetchPakistanFuelRates(): Promise<{
  petrol?: number;
  previousPetrol?: number;
  diesel?: number;
  previousDiesel?: number;
  lightDiesel?: number;
  kerosene?: number;
  hiOctane?: number;
  lpg?: number;
  effectiveDate?: string;
  source: string;
} | null> {
  // ─── SOURCE 1: OilPrices.pk (Primary & Fastest) ───────────────────────────
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);

    // Fetch OilPrices.pk API
    const apiRes = await fetch("https://oilprices.pk/api/price-history", {
      signal: controller.signal,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      },
    });

    if (apiRes.ok) {
      const historyArr: Array<{
        effectiveDate: string;
        product: string;
        pricePkr: number;
        unit: string;
      }> = await apiRes.json();

      if (Array.isArray(historyArr) && historyArr.length > 0) {
        // Sort newest first
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

        // Fetch LPG and HOBC from homepage
        let lpgPrice: number | undefined;
        let hobcPrice: number | undefined;
        let formattedDate: string | undefined = latestDate;

        try {
          const homeRes = await fetch("https://oilprices.pk/", {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
            },
          });
          if (homeRes.ok) {
            const html = await homeRes.text();
            const lpgMatch =
              html.match(/op-figure-lpg[^>]*>([0-9.]+)/i) ||
              html.match(/LPG[^0-9]*([0-9]+\.[0-9]{2})/i);
            if (lpgMatch) lpgPrice = parsePrice(lpgMatch[1]) || undefined;

            const dateMatch = html.match(/Effective\s*<!--\s*-->([0-9A-Za-z-]+)<!--\s*-->/i);
            if (dateMatch) formattedDate = dateMatch[1].replace(/-/g, " ");
          }
        } catch {
          // Non-fatal if homepage fetch fails
        }

        clearTimeout(timeout);

        if (petrolItem && petrolItem.pricePkr > 200 && petrolItem.pricePkr < 600) {
          return {
            petrol: petrolItem.pricePkr,
            previousPetrol: prevPetrolItem?.pricePkr,
            diesel: dieselItem?.pricePkr,
            previousDiesel: prevDieselItem?.pricePkr,
            kerosene: skoItem?.pricePkr,
            lpg: lpgPrice,
            effectiveDate: formattedDate || latestDate,
            source: "OilPrices.pk (Live Real-time OGRA Notified Feed)",
          };
        }
      }
    }
    clearTimeout(timeout);
  } catch (err) {
    console.warn("OilPrices.pk primary feed notice:", (err as Error).message);
  }

  // ─── SOURCE 2: Pakistan State Oil (PSO) Fallback ──────────────────────────
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
      const petrolMatch = html.match(/Premier\s*Euro\s*5[^0-9<]*([0-9]+\.[0-9]{2})/i);
      const dieselMatch = html.match(/(?:Hi-Cetane|High\s*Speed\s*Diesel)[^0-9<]*([0-9]+\.[0-9]{2})/i);
      const hobcMatch = html.match(/(?:Altron\s*Premium|Hi-Octane)[^0-9<]*([0-9]+\.[0-9]{2})/i);
      const ldoMatch = html.match(/Light\s*Diesel[^0-9<]*([0-9]+\.[0-9]{2})/i);
      const skoMatch = html.match(/(?:Kerosene|SKO)[^0-9<]*([0-9]+\.[0-9]{2})/i);

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

  // ─── SOURCE 3: Shell / OGRA Feed (petrolratetoday.pk) ─────────────────────
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

      const petrol = petrolMatch ? parsePrice(petrolMatch[1]) : null;
      const diesel = dieselMatch ? parsePrice(dieselMatch[1]) : null;

      if (petrol && petrol > 200 && petrol < 600) {
        return {
          petrol,
          diesel: diesel && diesel > 200 ? diesel : undefined,
          source: "Shell Pakistan / OGRA Feed",
        };
      }
    }
  } catch (e) {
    console.warn("Secondary feed sync notice:", (e as Error).message);
  }

  return null;
}

const round2 = (n: number) => Math.round(n * 100) / 100;
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const HISTORY_LIMIT = 15;

interface PriceEntry {
  name: string;
  price: number;
  previousPrice: number;
  change: number;
  changePercent: number;
  status?: string;
}

/** A new price is only trusted if it is within 15% of a known reference (guards against feed glitches). */
function isPlausible(newPrice: number | undefined, reference: number): newPrice is number {
  if (typeof newPrice !== "number" || !(newPrice > 0)) return false;
  if (!(reference > 0)) return true;
  return Math.abs(newPrice - reference) / reference <= 0.15;
}

/** Updates price + previousPrice + change + changePercent together. Returns true if the price changed. */
function applyPrice(entry: PriceEntry, newPrice: number | undefined, previousFromFeed?: number): boolean {
  if (typeof newPrice !== "number") return false;
  const matchesStored = isPlausible(newPrice, entry.price);
  const matchesFeedHistory = typeof previousFromFeed === "number" && isPlausible(newPrice, previousFromFeed);
  if (!matchesStored && !matchesFeedHistory) {
    console.warn(`Ignored implausible price for ${entry.name}: ${newPrice} (stored ${entry.price})`);
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
  entry.status = "verified";
  return changed;
}

function shortDate(value: string): string {
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return `${MONTHS[d.getUTCMonth()].slice(0, 3)} ${String(d.getUTCDate()).padStart(2, "0")}, ${d.getUTCFullYear()}`;
}

/** OGRA reviews prices on the 1st and 16th of each month — returns the next one after today. */
function nextRevisionDate(now: Date = new Date()): string {
  const y = now.getUTCFullYear();
  const m = now.getUTCMonth();
  const next = now.getUTCDate() < 16 ? new Date(Date.UTC(y, m, 16)) : new Date(Date.UTC(y, m + 1, 1));
  return `${MONTHS[next.getUTCMonth()]} ${String(next.getUTCDate()).padStart(2, "0")}, ${next.getUTCFullYear()}`;
}

let memoryCache: {
  data: typeof defaultFuelData;
  timestamp: number;
} | null = null;

const CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes in memory

/**
 * Reset memory cache (called on sync endpoint)
 */
export function clearFuelCache(): void {
  memoryCache = null;
}

/**
 * Execute automated sync with multi-tier fallback
 */
export async function syncFuelPrices(): Promise<SyncResult> {
  const currentData = JSON.parse(JSON.stringify(getLatestFuelData())) as typeof defaultFuelData;
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

    const pk = currentData.pakistan;
    const petrolChanged = applyPrice(pk.petrol, pakRates.petrol, pakRates.previousPetrol);
    const dieselChanged = applyPrice(pk.diesel, pakRates.diesel, pakRates.previousDiesel);
    applyPrice(pk.kerosene, pakRates.kerosene);
    applyPrice(pk.lpg, pakRates.lpg);
    applyPrice(pk.hiOctane, pakRates.hiOctane);
    applyPrice(pk.lightDiesel, pakRates.lightDiesel);

    if (petrolChanged || dieselChanged) {
      if (pakRates.effectiveDate) {
        currentData.meta.effectiveFrom = pakRates.effectiveDate;
      }
      // Keep the history table in step with the live price
      const entryDate = shortDate(pakRates.effectiveDate || new Date().toISOString());
      const entry = {
        date: entryDate,
        petrolPrice: pk.petrol.price,
        petrolChange: pk.petrol.change,
        dieselPrice: pk.diesel.price,
        dieselChange: pk.diesel.change,
        notes: "Rate revision recorded from the live price feed.",
      };
      currentData.history = [entry, ...currentData.history.filter((h) => h.date !== entryDate)].slice(0, HISTORY_LIMIT);
    }

    currentData.meta.nextExpectedRevision = nextRevisionDate();
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

  // 3. Persist to disk if allowed
  try {
    const filePath = path.join(process.cwd(), "src", "data", "fuelPrices.json");
    if (fs.existsSync(path.dirname(filePath))) {
      fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), "utf-8");
    }
  } catch (fsErr) {
    console.warn("Runtime disk write note:", (fsErr as Error).message);
  }

  // Update in-memory cache
  memoryCache = {
    data: currentData,
    timestamp: Date.now(),
  };

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
 * Load latest cached fuel data from disk or bundled fallback
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

/**
 * Get live fuel data for Server Components.
 * Uses 30-minute in-memory caching with automatic live refresh from OilPrices.pk / PSO.
 */
export async function getLiveFuelData(): Promise<typeof defaultFuelData> {
  const now = Date.now();
  if (memoryCache && now - memoryCache.timestamp < CACHE_TTL_MS) {
    return memoryCache.data;
  }

  try {
    const result = await syncFuelPrices();
    if (result && result.data) {
      return result.data;
    }
  } catch (err) {
    console.warn("[getLiveFuelData] Upstream refresh failed, using local baseline:", (err as Error).message);
  }

  const fallback = getLatestFuelData();
  memoryCache = {
    data: fallback,
    timestamp: now,
  };
  return fallback;
}

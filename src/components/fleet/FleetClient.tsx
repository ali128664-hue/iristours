/**
 * FleetClient.tsx — Fleet Listing (فلیٹ لسٹنگ)
 *
 * Search, type filter, brand filter and sorting for the /fleet page.
 * Categories must match the `category` values in src/data/fleet.json.
 * Brands are read from fleet.json automatically.
 */

"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Search, X } from "lucide-react";
import clsx from "clsx";
import VehicleCard from "./VehicleCard";

interface FleetClientProps {
  initialData: any[];
}

const CATEGORIES = [
  { label: "All", value: "All" },
  { label: "Economy", value: "Economy" },
  { label: "Sedans", value: "Sedan" },
  { label: "SUVs", value: "SUV" },
  { label: "Luxury", value: "Luxury" },
  { label: "Vans", value: "Van" },
];

const SORTS = ["Lowest price", "Highest price", "Most seats", "Newest"];

const priceOf = (v: any) => v.rent?.local ?? v.rent?.daily ?? v.rent?.withDriver?.local ?? 0;

export default function FleetClient({ initialData }: FleetClientProps) {
  return (
    <Suspense fallback={<div className="container mx-auto px-5 py-16 text-text-secondary">Loading cars...</div>}>
      <FleetClientContent initialData={initialData} />
    </Suspense>
  );
}

function FleetClientContent({ initialData }: FleetClientProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState(SORTS[0]);

  // Pick up ?category=SUV (any letter case) from links on other pages
  const searchParams = useSearchParams();
  useEffect(() => {
    const param = searchParams.get("category");
    if (!param) return;
    const match = CATEGORIES.find((c) => c.value.toLowerCase() === param.toLowerCase());
    if (match) setCategory(match.value);
  }, [searchParams]);

  const brands = useMemo(() => ["All", ...Array.from(new Set(initialData.map((v) => v.brand))).sort()], [initialData]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = initialData.filter(
      (v) =>
        (category === "All" || v.category === category) &&
        (brand === "All" || v.brand === brand) &&
        (!q || `${v.name} ${v.brand} ${v.category}`.toLowerCase().includes(q))
    );
    switch (sort) {
      case "Highest price":
        return list.sort((a, b) => priceOf(b) - priceOf(a));
      case "Most seats":
        return list.sort((a, b) => (b.seats || 0) - (a.seats || 0));
      case "Newest":
        return list.sort((a, b) => (b.year || 0) - (a.year || 0));
      default:
        return list.sort((a, b) => priceOf(a) - priceOf(b));
    }
  }, [initialData, query, category, brand, sort]);

  const filtered = Boolean(query) || category !== "All" || brand !== "All";
  const reset = () => {
    setQuery("");
    setCategory("All");
    setBrand("All");
  };

  const selectClass =
    "w-full appearance-none rounded-full border border-border-primary bg-white px-4 py-2.5 text-[15px] text-text-primary focus:border-accent-primary focus:outline-none";

  return (
    <>
      {/* Filters — stick under the menu while scrolling */}
      <div className="sticky top-[72px] z-30 border-b border-border-primary bg-bg-primary/95 backdrop-blur-md">
        <div className="container mx-auto px-5 md:px-12 py-3 md:py-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <label className="relative block lg:w-72">
              <span className="sr-only">Search cars</span>
              <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by car or brand"
                className="w-full rounded-full border border-border-primary bg-white py-2.5 pl-11 pr-4 text-text-primary placeholder:text-slate-400 focus:border-accent-primary focus:outline-none"
              />
            </label>

            <div className="-mx-5 flex gap-2 overflow-x-auto px-5 scrollbar-hide lg:mx-0 lg:flex-1 lg:px-0" role="group" aria-label="Car type">
              {CATEGORIES.map((c) => (
                <button
                  key={c.value}
                  type="button"
                  onClick={() => setCategory(c.value)}
                  aria-pressed={category === c.value}
                  className={clsx(
                    "flex-shrink-0 rounded-full border px-4 py-2 text-[15px] font-medium transition-colors",
                    category === c.value ? "border-brand-ink bg-brand-ink text-white" : "border-border-primary bg-white text-text-primary hover:border-slate-400"
                  )}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 lg:w-[360px]">
              <label>
                <span className="sr-only">Brand</span>
                <select value={brand} onChange={(e) => setBrand(e.target.value)} className={selectClass}>
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b === "All" ? "All brands" : b}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                <span className="sr-only">Sort by</span>
                <select value={sort} onChange={(e) => setSort(e.target.value)} className={selectClass}>
                  {SORTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-12 py-8 md:py-12">
        <div className="mb-6 flex items-center justify-between gap-3" aria-live="polite">
          <p className="text-text-secondary">
            <span className="font-semibold text-text-primary">{results.length}</span> of {initialData.length} cars
          </p>
          {filtered && (
            <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 font-semibold text-text-primary hover:bg-slate-100">
              <X size={16} aria-hidden="true" />
              Clear filters
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {results.map((vehicle, i) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} priority={i < 3} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-border-primary bg-white px-6 py-16 text-center">
            <p className="text-xl font-semibold text-text-primary">No cars match these filters</p>
            <p className="mt-2 text-text-secondary">Try another type or brand, or clear the search.</p>
            <button type="button" onClick={reset} className="mt-6 rounded-full bg-brand-ink px-6 py-3 font-semibold text-white">
              Show all cars
            </button>
          </div>
        )}
      </div>
    </>
  );
}

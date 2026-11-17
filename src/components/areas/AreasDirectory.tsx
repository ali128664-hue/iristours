"use client";

/**
 * AreasDirectory.tsx — searchable list of every service area on /areas.
 * Areas come from src/data/serviceAreas.json (grouped by city, then by group).
 */

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import clsx from "clsx";

type Area = { name: string; city: string; slug: string; group: string };

export default function AreasDirectory({ areas }: { areas: Area[] }) {
  const [query, setQuery] = useState("");
  const cities = useMemo(() => Array.from(new Set(areas.map((a) => a.city))), [areas]);
  const [city, setCity] = useState("All");

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out: Record<string, Record<string, Area[]>> = {};
    for (const a of areas) {
      if (city !== "All" && a.city !== city) continue;
      if (q && !`${a.name} ${a.group}`.toLowerCase().includes(q)) continue;
      ((out[a.city] ||= {})[a.group] ||= []).push(a);
    }
    return out;
  }, [areas, query, city]);

  const count = Object.values(grouped).reduce((n, g) => n + Object.values(g).reduce((m, l) => m + l.length, 0), 0);

  return (
    <>
      <div className="sticky top-[72px] z-30 border-b border-border-primary bg-bg-primary/95 backdrop-blur-md">
        <div className="container mx-auto flex flex-col gap-3 px-5 py-3 md:px-12 md:py-4 lg:flex-row lg:items-center">
          <label className="relative block lg:w-80">
            <span className="sr-only">Search areas</span>
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find your area, e.g. DHA Phase 6"
              className="w-full rounded-full border border-border-primary bg-white py-2.5 pl-11 pr-4 text-text-primary placeholder:text-slate-400 focus:border-accent-primary focus:outline-none"
            />
          </label>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 scrollbar-hide lg:mx-0 lg:px-0" role="group" aria-label="City">
            {["All", ...cities].map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCity(c)}
                aria-pressed={city === c}
                className={clsx(
                  "flex-shrink-0 rounded-full border px-4 py-2 text-[15px] font-medium transition-colors",
                  city === c ? "border-brand-ink bg-brand-ink text-white" : "border-border-primary bg-white text-text-primary hover:border-slate-400"
                )}
              >
                {c === "All" ? "All cities" : c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-12 py-8 md:py-12">
        <p className="mb-8 text-text-secondary" aria-live="polite">
          <span className="font-semibold text-text-primary">{count}</span> areas
        </p>

        {count === 0 && (
          <div className="rounded-3xl border border-dashed border-border-primary bg-white px-6 py-14 text-center">
            <p className="text-xl font-semibold text-text-primary">We could not find that area</p>
            <p className="mt-2 text-text-secondary">We probably still cover it. Message us on WhatsApp with your location to check.</p>
          </div>
        )}

        <div className="space-y-12">
          {Object.entries(grouped).map(([cityName, groups]) => (
            <section key={cityName} id={cityName} className="scroll-mt-40">
              <h2 className="border-b border-border-primary pb-3 text-3xl">{cityName}</h2>
              <div className="mt-6 grid gap-x-10 gap-y-8 lg:grid-cols-2">
                {Object.entries(groups).map(([groupName, list]) => (
                  <div key={groupName}>
                    <h3 className="text-lg text-text-primary">{groupName}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {list.map((a) => (
                        <li key={a.slug}>
                          <Link
                            href={`/areas/${a.slug}`}
                            className="inline-block rounded-full border border-border-primary bg-white px-3.5 py-1.5 text-[15px] text-text-primary hover:border-brand-orange hover:text-accent-primary transition-colors"
                          >
                            {a.name.split(",")[0]}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

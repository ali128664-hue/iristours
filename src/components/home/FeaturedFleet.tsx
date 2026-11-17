/**
 * FeaturedFleet.tsx — "Pick your car" on the homepage.
 * Phones: swipe sideways through the cars. Desktop: grid of six.
 *
 * HOW TO CHANGE: edit FEATURED_SLUGS (slugs from src/data/fleet.json)
 */

import Link from "next/link";
import VehicleCard from "@/components/fleet/VehicleCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import fleetData from "@/data/fleet.json";

const FEATURED_SLUGS = [
  "toyota-yaris",
  "toyota-corolla-altis-1-6",
  "honda-civic",
  "toyota-fortuner",
  "toyota-land-cruiser-prado",
  "toyota-hiace-grand-cabin",
];

const CATEGORIES = [
  { label: "Economy", value: "Economy" },
  { label: "Sedans", value: "Sedan" },
  { label: "SUVs", value: "SUV" },
  { label: "Luxury", value: "Luxury" },
  { label: "Vans", value: "Van" },
];

export default function FeaturedFleet() {
  const featured = FEATURED_SLUGS.map((s) => fleetData.find((v) => v.slug === s)).filter(
    (v): v is (typeof fleetData)[number] => Boolean(v)
  );

  return (
    <Section>
      <SectionHeading
        title="Pick your car"
        intro="Every car comes with a professional driver and a clear daily rate."
        action={{ href: "/fleet", label: `See all ${fleetData.length} cars` }}
      />

      <div className="-mx-5 mb-6 flex gap-2 overflow-x-auto px-5 pb-1 scrollbar-hide md:mx-0 md:px-0" aria-label="Browse by type">
        {CATEGORIES.map((c) => {
          const count = fleetData.filter((v) => v.category === c.value).length;
          return (
            <Link
              key={c.value}
              href={`/fleet?category=${c.value}`}
              className="flex-shrink-0 rounded-full border border-border-primary bg-white px-4 py-2 text-[15px] font-medium text-text-primary hover:border-slate-400 transition-colors"
            >
              {c.label} <span className="text-slate-400">{count}</span>
            </Link>
          );
        })}
      </div>

      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
        {featured.map((vehicle) => (
          <div key={vehicle.id} className="w-[84%] flex-shrink-0 snap-start sm:w-[60%] md:w-auto">
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}
      </div>
    </Section>
  );
}

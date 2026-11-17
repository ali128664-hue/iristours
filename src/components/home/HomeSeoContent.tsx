/**
 * HomeSeoContent.tsx — "Rent a car in Lahore" guide on the homepage.
 *
 * Real, useful text for visitors (and for Google): what it costs, which car
 * to pick, where we pick up, and links into the right pages. Prices are read
 * from src/data/fleet.json so they never go out of date.
 *
 * HOW TO CHANGE: edit the text below, or the AREA_LINKS / ROUTE_LINKS lists.
 */

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import fleetData from "@/data/fleet.json";

const rate = (slug: string) => {
  const v = fleetData.find((f) => f.slug === slug);
  return v ? `Rs. ${v.rent.local.toLocaleString("en-US")}` : "";
};

const PRICE_ROWS = [
  { car: "Toyota Yaris", type: "Economy, 5 seats", slug: "toyota-yaris" },
  { car: "Toyota Corolla Altis", type: "Sedan, 5 seats", slug: "toyota-corolla-altis-1-6" },
  { car: "Honda Civic", type: "Executive sedan", slug: "honda-civic" },
  { car: "Toyota Fortuner", type: "SUV, 7 seats", slug: "toyota-fortuner" },
  { car: "Toyota Land Cruiser Prado", type: "SUV, 7 seats", slug: "toyota-land-cruiser-prado" },
  { car: "Toyota Hiace Grand Cabin", type: "Van, 15 seats", slug: "toyota-hiace-grand-cabin" },
  { car: "Toyota Land Cruiser V8", type: "Luxury SUV", slug: "toyota-land-cruiser-v8" },
  { car: "Mercedes-Benz C-Class", type: "Luxury sedan", slug: "mercedes-benz-c-class-c180" },
];

const AREA_LINKS = [
  { label: "DHA Phase 5", href: "/areas/dha-phase-5-lahore" },
  { label: "DHA Phase 6", href: "/areas/dha-phase-6-lahore" },
  { label: "Gulberg III", href: "/areas/gulberg-iii-lahore" },
  { label: "Johar Town", href: "/areas/johar-town-block-a-lahore" },
  { label: "Bahria Town", href: "/areas/bahria-town-sector-c-lahore" },
  { label: "Model Town", href: "/areas/model-town-block-c-lahore" },
  { label: "Lahore Cantt", href: "/areas/lahore-cantt-lahore" },
  { label: "Wapda Town", href: "/areas/wapda-town-lahore" },
  { label: "Allama Iqbal Town", href: "/areas/allama-iqbal-town-lahore" },
  { label: "Valencia Town", href: "/areas/valencia-town-lahore" },
  { label: "Blue Area, Islamabad", href: "/areas/blue-area-islamabad" },
  { label: "F-7, Islamabad", href: "/areas/sector-f-7-islamabad" },
];

const ROUTE_LINKS = [
  { label: "Lahore to Islamabad by car", href: "/blog/lahore-to-islamabad-car-rental" },
  { label: "Lahore to Swat and Kalam", href: "/blog/lahore-to-swat-kalam-car-rental-road-guide" },
  { label: "Lahore to northern areas and KPK", href: "/blog/rent-a-car-lahore-northern-areas-kpk-guide" },
  { label: "Hunza, Skardu and Swat tours", href: "/tours" },
];

export default function HomeSeoContent() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* ─── Guide text ───────────────────────────────────────────────── */}
        <div className="lg:col-span-7">
          <h2 className="text-[2.1rem] md:text-5xl">Rent a car in Lahore: prices, cars and pickup</h2>

          <div className="article-body mt-6 max-w-2xl">
            <p>
              Iris Tours is a <strong>rent a car service in Lahore</strong> that supplies every car with a professional
              driver. You tell us where and when, and a clean, air-conditioned car arrives at your home, office, hotel or
              Allama Iqbal International Airport. The same service runs in Islamabad and Rawalpindi, and for trips to any
              city in Pakistan.
            </p>

            <h3>How much does it cost to rent a car in Lahore?</h3>
            <p>
              A day with driver inside Lahore starts at {rate("toyota-yaris")} for a Toyota Yaris and
              {" "}{rate("toyota-corolla-altis-1-6")} for a Corolla. SUVs such as the Toyota Fortuner start at{" "}
              {rate("toyota-fortuner")}, and luxury cars like the Land Cruiser V8 or a Mercedes start at{" "}
              {rate("toyota-land-cruiser-v8")}. Trips to other cities have their own daily rate, fuel is
              handed over on a full-tank-to-full-tank basis, and you get the full price in writing before you confirm.
            </p>

            <h3>Which car should I choose?</h3>
            <p>
              For one to four people inside the city, a Yaris, Corolla or Civic is the most economical choice. Families and
              trips to Murree or the north are more comfortable in a Fortuner or Prado. For groups of up to 14 people, book
              a <Link href="/fleet/toyota-hiace-grand-cabin">Toyota Hiace Grand Cabin</Link>, and for weddings and VIP guests
              choose from our <Link href="/services/wedding-cars">wedding cars</Link> and{" "}
              <Link href="/fleet?category=Luxury">luxury cars</Link>.
            </p>

            <h3>Why rent with a driver?</h3>
            <p>
              Our drivers know Lahore&apos;s traffic, the motorway and the mountain roads. You don&apos;t need to worry about
              parking, tolls or directions, and for <Link href="/services/airport-transfer">airport transfers</Link> the
              driver tracks your flight and waits at arrivals. Companies use the same service for daily staff transport
              through <Link href="/services/corporate-rentals">corporate rentals</Link>.
            </p>
          </div>
        </div>

        {/* ─── Price table + links ──────────────────────────────────────── */}
        <aside className="lg:col-span-5 space-y-6">
          <div className="shadow-lift overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-slate-200/80">
            <div className="bg-brand-ink px-6 py-5 text-white">
              <p className="font-display text-xl font-bold">Daily rates in Lahore</p>
              <p className="mt-0.5 text-sm text-white/65">With driver, within city limits</p>
            </div>
            <table className="w-full text-left text-[15px]">
              <caption className="sr-only">Car rental rates per day in Lahore with driver</caption>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Car</th>
                  <th scope="col">Starting rate per day</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PRICE_ROWS.map((r) => (
                  <tr key={r.slug}>
                    <th scope="row" className="px-6 py-3.5 font-normal">
                      <Link href={`/fleet/${r.slug}`} className="font-semibold text-text-primary hover:text-accent-primary">
                        {r.car}
                      </Link>
                      <span className="block text-sm text-slate-500">{r.type}</span>
                    </th>
                    <td className="whitespace-nowrap px-6 py-3.5 text-right font-semibold">{rate(r.slug)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Link
              href="/fleet"
              className="flex items-center justify-between border-t border-slate-100 px-6 py-4 font-semibold text-text-primary hover:bg-slate-50"
            >
              See all {fleetData.length} cars <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div>
            <p className="font-semibold">Pickup areas</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {AREA_LINKS.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="inline-block rounded-full bg-white px-3.5 py-2 text-sm text-text-secondary ring-1 ring-slate-200 hover:text-text-primary hover:ring-slate-400 transition-colors"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="inline-block rounded-full px-3.5 py-2 text-sm font-semibold text-accent-secondary hover:underline">
                  All 200 areas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Popular routes</p>
            <ul className="mt-3 divide-y divide-slate-200 border-y border-slate-200">
              {ROUTE_LINKS.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="group flex items-center justify-between py-3 text-text-secondary hover:text-text-primary">
                    {r.label}
                    <ArrowUpRight size={17} className="text-slate-400 group-hover:text-brand-orange" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  );
}

/**
 * QuickCategories.tsx — "What do you need the car for?" service tiles on the homepage.
 *
 * HOW TO CHANGE: edit the SERVICES list (title, short line, photo in /public, link)
 */

import Image from "next/image";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";

const SERVICES = [
  { title: "Airport transfer", line: "Pickup with a name board at Lahore and Islamabad airports", image: "/categories/airport.jpg", link: "/services/airport-transfer" },
  { title: "Wedding cars", line: "Decorated Prado, V8, Mercedes and Audi for the barat", image: "/categories/wedding.jpg", link: "/services/wedding-cars" },
  { title: "Northern tours", line: "4x4s and vans with mountain-trained drivers", image: "/tours/hunza.jpg", link: "/tours" },
  { title: "Corporate rentals", line: "Daily staff transport and monthly contracts", image: "/categories/corporate.jpg", link: "/services/corporate-rentals" },
  { title: "SUVs and 4x4", line: "Fortuner, Prado and Land Cruiser", image: "/categories/suv.jpg", link: "/fleet?category=SUV" },
  { title: "Luxury cars", line: "Audi, Mercedes, Range Rover and G-Wagon", image: "/categories/luxury.jpg", link: "/fleet?category=Luxury" },
];

export default function QuickCategories() {
  return (
    <Section tone="white">
      <SectionHeading title="What do you need a car for?" action={{ href: "/services", label: "All services" }} />

      <ul className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <li key={s.title}>
            <Link href={s.link} className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-slate-200 sm:aspect-[4/3] md:rounded-3xl">
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-3.5 md:p-6">
                <span className="block text-lg md:text-2xl font-semibold leading-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
                  {s.title}
                </span>
                <span className="mt-1 hidden text-sm text-white/80 sm:block">{s.line}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/**
 * QuickCategories.tsx — "What do you need the car for?" service tiles on the homepage.
 *
 * HOW TO CHANGE: edit the SERVICES list (title, short line, photo in /public, link)
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

// Bento layout: one large tile, one wide tile, then smaller tiles.
const LAYOUT = [
  "col-span-2 lg:row-span-2",
  "col-span-2",
  "",
  "",
  "lg:col-span-2",
  "lg:col-span-2",
];

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
      <SectionHeading title="What do you need a car for?"
        intro="From a quick airport run to a week in Hunza, there is a car and a driver for it." action={{ href: "/services", label: "All services" }} />

      <ul className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4 lg:auto-rows-[250px]">
        {SERVICES.map((s, i) => (
          <li key={s.title} className={LAYOUT[i]}>
            <Link
              href={s.link}
              className="group relative block h-full min-h-[200px] overflow-hidden rounded-[1.4rem] bg-slate-200 sm:min-h-[240px] md:rounded-[1.75rem]"
            >
              <Image
                src={s.image}
                alt=""
                fill
                sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 50vw, 25vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-6">
                <span>
                  <span className={`font-display block font-bold leading-tight text-white ${i === 0 ? "text-2xl md:text-4xl" : "text-lg md:text-2xl"}`}>
                    {s.title}
                  </span>
                  <span className={`mt-1.5 text-sm text-white/80 ${i === 0 ? "block max-w-sm md:text-base" : "hidden sm:block"}`}>{s.line}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="hidden h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-brand-ink transition-colors group-hover:bg-brand-orange sm:flex"
                >
                  <ArrowUpRight size={20} />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

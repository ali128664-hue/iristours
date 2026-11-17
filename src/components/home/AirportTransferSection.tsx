/**
 * AirportTransferSection.tsx — airport pickup and drop band on the homepage.
 */

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";

const POINTS = [
  "Driver waits at arrivals with your name on a board",
  "We track your flight, so delays are covered",
  "60 minutes of free waiting time on pickups",
  "Lahore (LHE) and Islamabad (ISB) airports",
];

export default function AirportTransferSection() {
  return (
    <Section tone="ink">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white/5 lg:order-2">
          <Image src="/categories/airport.jpg" alt="Chauffeur meeting a passenger at the airport" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        </div>
        <div>
          <h2 className="text-[2.1rem] md:text-5xl text-white">Airport pickup and drop</h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-white/70">
            Land, walk out and your car is waiting. Book one way or a return trip with any car in the fleet.
          </p>
          <ul className="mt-6 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/85">
                <Check size={19} className="mt-0.5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/services/airport-transfer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-orange px-7 py-3.5 font-semibold text-brand-ink hover:bg-white transition-colors"
          >
            Airport transfer rates
          </Link>
        </div>
      </div>
    </Section>
  );
}

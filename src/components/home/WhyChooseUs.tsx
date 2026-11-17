/**
 * WhyChooseUs.tsx — "How booking works" on the homepage:
 * a chauffeur photo on one side, the three real booking steps on the other,
 * and what every booking includes.
 */

import Image from "next/image";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";

const STEPS = [
  { title: "Choose a car", text: "Compare cars and daily rates. Not sure which fits? Tell us how many people are travelling and we will suggest one." },
  { title: "Send your dates on WhatsApp", text: "Share pickup point, dates and destination. We confirm availability and the final price in writing." },
  { title: "Your driver arrives", text: "A clean car and a uniformed driver reach your door, hotel or airport gate on time." },
];

const INCLUDED = [
  "Professional, background-checked driver",
  "Clean, serviced car with working AC",
  "Doorstep pickup anywhere in Lahore",
  "Free cancellation up to 24 hours before",
];

export default function WhyChooseUs() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-200 sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/blog/chauffeur-rental.jpg"
              alt="Iris Tours chauffeur opening the door of a black Mercedes for a customer in Lahore"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="shadow-float absolute -bottom-6 right-4 max-w-[17rem] rounded-2xl bg-brand-ink p-5 text-white sm:right-8 lg:-right-8">
            <p className="font-display text-4xl font-bold">24/7</p>
            <p className="mt-1 text-sm text-white/75">Bookings, airport pickups and support, every day of the year.</p>
          </div>
        </div>

        <div className="lg:col-span-7 pt-6 lg:pt-0">
          <h2 className="text-[2.1rem] md:text-5xl">Booked in minutes, on WhatsApp</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
            No account or online payment needed. Message us, get a written quote, and your driver is on the way.
          </p>

          <ol className="mt-9 space-y-0">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative flex gap-5 pb-8 last:pb-0">
                {i < STEPS.length - 1 && <span aria-hidden="true" className="absolute left-[21px] top-12 bottom-1 w-px bg-slate-200" />}
                <span
                  className="font-display flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand-orange text-lg font-bold text-brand-ink"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-1.5 max-w-lg leading-relaxed text-text-secondary">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-[1.5rem] bg-white p-6 ring-1 ring-slate-200">
            <p className="font-semibold text-text-primary">Included in every booking</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-text-secondary">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/15">
                    <Check size={13} className="text-accent-secondary" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

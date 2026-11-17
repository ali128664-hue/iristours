/**
 * WhyChooseUs.tsx — "How booking works" on the homepage:
 * three real steps, then the four things every booking includes.
 */

import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

const STEPS = [
  { title: "Choose a car", text: "Browse the fleet and compare daily rates. Not sure which car fits? Tell us the number of passengers and we will suggest one." },
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
      <SectionHeading title="How booking works" intro="Booking takes a few minutes on WhatsApp, any time of day or night." />

      <ol className="grid gap-4 md:grid-cols-3 md:gap-6">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex gap-4 rounded-3xl border border-border-primary bg-white p-5 md:block md:p-7">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange text-lg font-semibold text-brand-ink" aria-hidden="true">
              {i + 1}
            </span>
            <div>
              <h3 className="text-xl md:mt-5">{s.title}</h3>
              <p className="mt-1.5 leading-relaxed text-text-secondary md:mt-2">{s.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-6 rounded-3xl bg-brand-ink p-6 md:mt-8 md:p-8">
        <p className="text-lg font-semibold text-white">Included in every booking</p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-white/80">
              <Check size={18} className="mt-0.5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

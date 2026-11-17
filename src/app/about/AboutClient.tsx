/**
 * AboutClient.tsx — About page content (ہمارے بارے میں)
 * Edit STATS, VALUES and the story paragraphs below.
 */

import Image from "next/image";
import { Shield, Car, Users, MapPin } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import fleetData from "@/data/fleet.json";

const STATS = [
  { value: "15+", label: "years in business" },
  { value: "10,000+", label: "customers served" },
  { value: `${fleetData.length}`, label: "car models to choose from" },
  { value: "20+", label: "cities covered" },
];

const VALUES = [
  { icon: Shield, title: "Safety first", text: "Every car is checked before each trip, and every driver is background-checked." },
  { icon: Car, title: "Well-kept cars", text: "From an economy Yaris to a Land Cruiser V8, cars are clean, serviced and ready on time." },
  { icon: Users, title: "Courteous drivers", text: "Trained, polite drivers who know the city roads, motorways and northern routes." },
  { icon: MapPin, title: "Across Pakistan", text: "Based in Lahore and Islamabad, with trips to every major city and the northern valleys." },
];

export default function AboutClient() {
  return (
    <>
      <PageHeader
        title="About Iris Tours"
        intro="A Lahore car rental company built on one idea: the trip should be as comfortable as the destination."
        crumbs={[{ label: "About" }]}
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-200">
            <Image src="/categories/about_fleet.jpg" alt="Iris Tours cars lined up" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="text-3xl md:text-[2.6rem]">Our story</h2>
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-text-secondary">
              <p>
                Iris Tours is founded and led by <strong className="text-text-primary">Munir Hussain</strong>. For more than a decade we have driven executives, families and visitors from abroad across Pakistan.
              </p>
              <p>
                We believe the details matter: a clean car, a driver who arrives early, and a price that is clear before you travel. Many European and international clients book with us every time they visit.
              </p>
              <p>
                Whether you need a sedan for a business meeting, an SUV for the mountains or a Land Cruiser for a wedding, we will find the right car for you.
              </p>
            </div>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-4 md:mt-16 lg:grid-cols-4 md:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-3xl border border-border-primary bg-white p-5 md:p-6">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-4xl font-semibold text-text-primary md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
                  {s.value}
                </span>
                <span className="mt-1 block text-text-secondary">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="white">
        <SectionHeading title="What we stand for" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {VALUES.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-3xl border border-border-primary bg-bg-primary p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink text-brand-orange">
                <Icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl">{title}</h3>
              <p className="mt-2 leading-relaxed text-text-secondary">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <CtaBand />
      </Section>
    </>
  );
}

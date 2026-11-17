/**
 * ServicePage.tsx — shared layout for the service pages
 * (airport transfer, wedding cars, corporate rentals).
 *
 * Each service page passes its own title, text, features and the cars to show.
 */

import { Check } from "lucide-react";
import PageHeader, { HeaderButtons } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import VehicleCard from "@/components/fleet/VehicleCard";
import fleetData from "@/data/fleet.json";
import { PHONE, whatsappLink } from "@/lib/site";

export interface ServiceFeature {
  title: string;
  text: string;
}

export default function ServicePage({
  crumb,
  title,
  intro,
  whatsappMessage,
  features,
  featuresTitle = "What you get",
  carSlugs,
  carsTitle,
  carsIntro,
  children,
  cta,
}: {
  crumb: string;
  title: string;
  intro: string;
  whatsappMessage: string;
  features: ServiceFeature[];
  featuresTitle?: string;
  carSlugs: string[];
  carsTitle: string;
  carsIntro?: string;
  children?: React.ReactNode;
  cta: { title: string; text: string };
}) {
  const cars = carSlugs.map((s) => fleetData.find((v) => v.slug === s)).filter((v): v is (typeof fleetData)[number] => Boolean(v));

  return (
    <>
      <PageHeader
        title={title}
        intro={intro}
        crumbs={[{ label: "Services", href: "/services" }, { label: crumb }]}
        actions={<HeaderButtons whatsappHref={whatsappLink(whatsappMessage)} phoneHref={`tel:${PHONE.tel}`} phoneLabel={PHONE.display} />}
      />

      <Section>
        <SectionHeading title={featuresTitle} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {features.map((f) => (
            <li key={f.title} className="rounded-3xl border border-border-primary bg-white p-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange/15 text-accent-primary">
                <Check size={18} aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-xl">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-text-secondary">{f.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {children}

      <Section tone="white">
        <SectionHeading title={carsTitle} intro={carsIntro} action={{ href: "/fleet", label: "All cars" }} />
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
          {cars.map((v) => (
            <div key={v.id} className="w-[84%] flex-shrink-0 snap-start sm:w-[60%] md:w-auto">
              <VehicleCard vehicle={v} />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CtaBand title={cta.title} text={cta.text} message={whatsappMessage} />
      </Section>
    </>
  );
}

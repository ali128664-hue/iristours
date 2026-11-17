import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PageHeader, { HeaderButtons } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import { PHONE, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Car Rental & Chauffeur Services in Lahore | Iris Tours",
  description: "Explore our range of premium car rental services in Lahore: 24/7 Airport transfers, luxury wedding cars, corporate monthly rentals, and inter-city chauffeur tours across Pakistan.",
  alternates: {
    canonical: "https://iristours.net/services",
  },
  openGraph: {
    title: "Car Rental & Chauffeur Services in Lahore | Iris Tours",
    description: "Explore premium car rental services: Airport transfers, wedding cars, corporate mobility, and Northern tour charters.",
    url: "https://iristours.net/services",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/blog/rent-a-car-lahore-fleet-lineup.jpg",
        width: 1200,
        height: 630,
        alt: "Car Rental Services in Lahore - Iris Tours",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental & Chauffeur Services in Lahore | Iris Tours",
    description: "Explore premium car rental services in Lahore with Iris Tours.",
    images: ["https://iristours.net/blog/rent-a-car-lahore-fleet-lineup.jpg"],
  },
};

const services = [
  {
    title: "Airport transfers",
    href: "/services/airport-transfer",
    desc: "Pickup and drop at Allama Iqbal (LHE) and Islamabad (ISB) airports. Your driver tracks the flight and meets you at arrivals with a name board.",
    image: "/categories/airport.jpg",
  },
  {
    title: "Wedding cars",
    href: "/services/wedding-cars",
    desc: "Decorated Mercedes, Audi A6, Prado and Land Cruiser V8 for the barat, mehndi and valima, with smartly dressed drivers.",
    image: "/categories/wedding.jpg",
  },
  {
    title: "Corporate rentals",
    href: "/services/corporate-rentals",
    desc: "Executive cars for visiting clients and delegations, plus daily, weekly and monthly packages with one account manager.",
    image: "/categories/corporate.jpg",
  },
  {
    title: "Northern Pakistan tours",
    href: "/tours",
    desc: "Private 4x4 trips to Hunza, Skardu, Deosai, Swat and Murree with mountain-trained drivers. Fuel and tolls included.",
    image: "/tours/hunza.jpg",
  },
  {
    title: "Daily and monthly rental",
    href: "/fleet",
    desc: "Any car from the fleet with a driver, for a day in the city, an inter-city trip or a month-long contract.",
    image: "/blog/rent-a-car-lahore-fleet-lineup.jpg",
  },
];

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Iris Tours Car Rental & Chauffeur Services",
    "provider": {
      "@type": "AutoRental",
      "name": "Iris Tours",
      "url": "https://iristours.net",
      "telephone": "+923154973906",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "143 Street, 153, Sector-H, DHA Phase-1",
        "addressLocality": "Lahore",
        "addressCountry": "PK"
      }
    },
    "areaServed": ["Lahore", "Islamabad", "Rawalpindi", "Multan", "Faisalabad"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Rental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfer Service Lahore & Islamabad"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Car Rental Lahore"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Car Rental"
          }
        }
      ]
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <PageHeader
        title="Car rental services"
        intro="Every service comes with a professional driver. Choose what you need the car for and we will suggest the right one."
        crumbs={[{ label: "Services" }]}
        actions={<HeaderButtons whatsappHref={whatsappLink("Hi Iris Tours! I want to ask about your services.")} phoneHref={`tel:${PHONE.tel}`} phoneLabel={PHONE.display} />}
      />

      <Section>
        <ul className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {services.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="group grid h-full overflow-hidden rounded-3xl border border-border-primary bg-white sm:grid-cols-5">
                <span className="relative block aspect-[16/9] sm:col-span-2 sm:aspect-auto sm:min-h-[200px]">
                  <Image src={s.image} alt="" fill sizes="(max-width: 640px) 100vw, 20vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </span>
                <span className="flex flex-col p-5 sm:col-span-3 md:p-6">
                  <span className="text-xl font-semibold text-text-primary" style={{ fontFamily: "var(--font-display)" }}>{s.title}</span>
                  <span className="mt-2 flex-1 leading-relaxed text-text-secondary">{s.desc}</span>
                  <span className="mt-4 inline-flex items-center gap-2 font-semibold text-text-primary group-hover:text-accent-primary">
                    View details
                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <CtaBand title="Not sure which service fits?" text="Tell us where you are going and how many people are travelling. We will suggest the right car and send the price." />
      </Section>
    </>
  );
}

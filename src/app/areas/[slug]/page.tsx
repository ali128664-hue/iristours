import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ChevronDown, Check } from "lucide-react";
import PageHeader, { HeaderButtons } from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import { PHONE, whatsappLink } from "@/lib/site";
import serviceAreas from "@/data/serviceAreas.json";
import fleetData from "@/data/fleet.json";
import VehicleCard from "@/components/fleet/VehicleCard";
import Link from "next/link";
import RichText from "@/components/ui/RichText";
import { getGuide, guidesLinkingTo, type Guide } from "@/data/guides";

// Generate static params so Next.js pre-builds all 200+ area pages for lightning-fast SEO
export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

// Helpful blog guides for each city (shown at the bottom of area pages)
const CITY_GUIDES: Record<string, string[]> = {
  Lahore: ["rent-a-car-lahore-price-list", "rent-a-car-lahore-airport", "wedding-car-rental-lahore-shaadi-season"],
  Islamabad: ["rent-a-car-islamabad", "lahore-to-murree-by-car-snowfall", "lahore-to-islamabad-car-rental"],
  Rawalpindi: ["rent-a-car-rawalpindi", "lahore-to-murree-by-car-snowfall", "lahore-to-naran-kaghan-by-car"],
};
const DEFAULT_GUIDES = ["intercity-car-rental-from-lahore", "rent-a-car-lahore-price-list", "lahore-smog-fog-travel-guide"];

function areaGuides(slug: string, city: string): Guide[] {
  const linked = guidesLinkingTo(`/areas/${slug}`, 3);
  const extra = (CITY_GUIDES[city] || DEFAULT_GUIDES).map((s) => getGuide(s)).filter((g): g is Guide => Boolean(g));
  return [...linked, ...extra.filter((g) => !linked.includes(g))].slice(0, 3);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find(a => a.slug === slug);
  if (!area) return { title: 'Area Not Found' };

  const baseUrl = "https://iristours.net";
  const place = area.name;
  const seoTitle = `Rent a Car in ${place} with Driver`;
  const seoDescription = `Car rental with driver in ${place}: doorstep pickup, sedans from Rs. 7,000/day, SUVs, luxury cars and vans for city, airport and outstation trips. Book 24/7.`;

  return {
    title: seoTitle,
    description: seoDescription,
    alternates: {
      canonical: `${baseUrl}/areas/${area.slug}`,
    },
    openGraph: {
      title: `${seoTitle} | Iris Tours`,
      description: seoDescription,
      url: `${baseUrl}/areas/${area.slug}`,
      siteName: "Iris Tours",
      images: [
        {
          url: `${baseUrl}/opengraph-image.jpg`,
          width: 1200,
          height: 630,
          alt: seoTitle,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | Iris Tours`,
      description: seoDescription,
      images: [`${baseUrl}/opengraph-image.jpg`],
    }
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreas.find(a => a.slug === slug);
  if (!area) notFound();

  // Pick top 6 cars to showcase
  const showcaseCars = ["toyota-yaris", "toyota-corolla-altis-1-6", "honda-civic", "toyota-fortuner", "toyota-land-cruiser-prado", "toyota-hiace-grand-cabin"]
    .map((s) => fleetData.find((v) => v.slug === s))
    .filter((v): v is (typeof fleetData)[number] => Boolean(v));
  const nearby = serviceAreas.filter((a) => a.group === area.group && a.slug !== area.slug).slice(0, 12);

  // Localized FAQs for Google Rich Snippets & User Convenience
  const localFaqs = [
    {
      q: `How quickly can I get a rental car delivered in ${area.name}?`,
      a: `Iris Tours provides prompt doorstep car delivery in ${area.name} within 30 to 45 minutes of booking confirmation. You can reserve directly via WhatsApp or call.`
    },
    {
      q: `Are professional chauffeurs (drivers) included for rentals in ${area.name}?`,
      a: `Yes! All our rental vehicles in ${area.name} come with experienced, route-familiar, and courteous chauffeurs to ensure a stress-free travel experience across Lahore and outstation routes.`
    },
    {
      q: `What types of vehicles can I rent in ${area.name}?`,
      a: `We maintain an extensive fleet in ${area.name}, including luxury SUVs (Toyota Prado, Land Cruiser V8, Fortuner), executive sedans (Honda Civic, Corolla Altis), budget economy cars (Toyota Yaris), and group vans (Toyota Hiace Grand Cabin, Coasters).`
    },
    {
      q: `How do I book a rental car in ${area.name}?`,
      a: `Booking is 100% frictionless. Simply contact our 24/7 reservation desk on WhatsApp (+92 315 4973906) or phone call. Confirm your chosen vehicle and timing, and your car will be dispatched promptly.`
    }
  ];

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://iristours.net"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Service Areas",
        "item": "https://iristours.net/areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": area.name,
        "item": `https://iristours.net/areas/${area.slug}`
      }
    ]
  };

  // FAQPage Schema for Google SERP Rich Snippets
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": localFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  // AutoRental LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": `Iris Tours - Rent a Car in ${area.name}`,
    "url": `https://iristours.net/areas/${area.slug}`,
    "telephone": "+923154973906",
    "priceRange": "PKR",
    "areaServed": {
      "@type": "Place",
      "name": area.name
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Iris Tours",
      "telephone": "+923154973906",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "143 Street, 153, Sector-H, DHA Phase-1",
        "addressLocality": "Lahore",
        "addressCountry": "PK"
      }
    }
  };

  const whatsappInquiryUrl = whatsappLink(`Hi Iris Tours! I am looking for a rental car in ${area.name}. Please share available cars and rates.`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <PageHeader
        breadcrumbSchema={false}
        image="/blog/bahria-dha.jpg"
        title={`Rent a car in ${area.name}`}
        intro={`Chauffeur-driven cars delivered to your door in ${area.name.split(",")[0]}, any time of day.`}
        crumbs={[{ label: "Areas", href: "/areas" }, { label: area.name.split(",")[0] }]}
        actions={<HeaderButtons whatsappHref={whatsappInquiryUrl} phoneHref={`tel:${PHONE.tel}`} phoneLabel={PHONE.display} />}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl">Car rental in {area.name.split(",")[0]}</h2>
            <RichText text={area.description} className="mt-5 text-[17px] text-text-secondary" />
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-brand-ink p-6 text-white md:p-7">
              <p className="text-lg font-semibold">Every booking includes</p>
              <ul className="mt-4 space-y-3">
                {["Doorstep pickup and drop", "Professional, background-checked driver", "Clean car with working AC", "Support on WhatsApp, 24 hours"].map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/85">
                    <Check size={18} className="mt-0.5 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <SectionHeading title={`Cars available in ${area.name.split(",")[0]}`} action={{ href: "/fleet", label: `All ${fleetData.length} cars` }} />
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
          {showcaseCars.map((vehicle) => (
            <div key={vehicle.id} className="w-[84%] flex-shrink-0 snap-start sm:w-[60%] md:w-auto">
              <VehicleCard vehicle={vehicle} />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <h2 className="text-[2.1rem] md:text-5xl lg:col-span-4">Questions about {area.name.split(",")[0]}</h2>
          <div className="divide-y divide-border-primary border-y border-border-primary lg:col-span-8">
            {localFaqs.map((faq) => (
              <details key={faq.q} className="group py-1">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-base md:text-lg font-semibold text-text-primary [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronDown size={20} className="flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pb-5 pr-8 leading-relaxed text-text-secondary">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {nearby.length > 0 && (
        <Section tone="white">
          <SectionHeading title={`Nearby in ${area.group}`} action={{ href: "/areas", label: "All areas" }} />
          <ul className="flex flex-wrap gap-2">
            {nearby.map((a) => (
              <li key={a.slug}>
                <Link href={`/areas/${a.slug}`} className="inline-block rounded-full border border-border-primary bg-bg-primary px-4 py-2 text-[15px] text-text-primary hover:border-brand-orange transition-colors">
                  {a.name.split(",")[0]}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section>
        <h2 className="text-3xl md:text-4xl">Helpful guides</h2>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {areaGuides(area.slug, area.city).map((g) => (
            <li key={g.slug}>
              <Link href={`/blog/${g.slug}`} className="group block h-full rounded-[1.4rem] bg-white p-5 ring-1 ring-slate-200 hover:ring-slate-400 transition-colors">
                <span className="text-sm text-text-secondary">{g.category}</span>
                <span className="font-display mt-1 block text-lg font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{g.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <CtaBand title={`Need a car in ${area.name.split(",")[0]}?`} text="Send your pickup time and destination on WhatsApp and we will confirm the car and price." message={`Hi Iris Tours! I need a car in ${area.name}.`} />
      </Section>
    </>
  );
}

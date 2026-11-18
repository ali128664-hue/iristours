/**
 * page.tsx — Individual Car Detail Page (گاڑی کی تفصیلی صفحہ)
 * Route: /fleet/[slug]  (e.g., /fleet/honda-hr-v)
 *
 * This page is automatically generated for each car in fleet.json.
 * It shows:
 *  - Hero image with car name, brand, and category
 *  - Image gallery strip
 *  - Overview, specifications, features, policies
 *  - Sticky sidebar: pricing, WhatsApp & Call buttons, "Why Choose Iris Tours"
 *  - Related vehicles at the bottom
 *
 * HOW TO CHANGE:
 *  - WhatsApp number → change the number in `whatsappUrl` below
 *  - "Why Choose Iris Tours" selling points → find the bullet list array below
 *  - Domain URL → change `baseUrl` when you deploy to production
 */

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Settings2, Users, Fuel, Briefcase, Check, MapPin, Clock, Gauge, ChevronRight } from "lucide-react";
import Link from "next/link";
import VehiclePricing from "@/components/fleet/VehiclePricing";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { whatsappLink } from "@/lib/site";
import fleetData from "@/data/fleet.json";
import VehicleCard from "@/components/fleet/VehicleCard";
import VehicleFuelEstimator from "@/components/fuel/VehicleFuelEstimator";
import VehicleThumbStrip from "@/components/fleet/VehicleThumbStrip";
import RichText, { stripMarkdown } from "@/components/ui/RichText";
import { guidesLinkingTo } from "@/data/guides";

interface Props {
  params: Promise<{ slug: string }>;
}

// Generates all valid slugs at build time so Next.js can pre-render each car page
export async function generateStaticParams() {
  return fleetData.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

// Generates SEO metadata (title, description, Open Graph) for each car page.
// Data comes from the `seo` field in fleet.json for each vehicle.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = fleetData.find((v) => v.slug === slug);

  if (!vehicle) {
    return { title: "Vehicle Not Found" };
  }

  // Production domain for canonical and metadata URLs
  const baseUrl = "https://iristours.net";
  const thumbnail = vehicle.images.thumbnail.startsWith("http")
    ? vehicle.images.thumbnail
    : `${baseUrl}${vehicle.images.thumbnail}`;

  // Short, specific title and description built from the car's own data
  // (the site name is added automatically by the title template in layout.tsx).
  const rate = `Rs. ${vehicle.rent.local.toLocaleString("en-US")}`;
  const seoTitle = `${vehicle.name} for Rent in Lahore | ${rate}/day`;
  const seoDescription = `Rent a ${vehicle.name} in Lahore with a professional driver from ${rate} per day. ${vehicle.seats} seats, ${vehicle.transmission.toLowerCase()}, ${vehicle.fuel.toLowerCase()}. City, airport, wedding and outstation trips. Book 24/7.`;

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      `${vehicle.name} rent a car Lahore`,
      `${vehicle.name} rental Pakistan`,
      `${vehicle.brand} car rental Lahore`,
      `${vehicle.category} car rental DHA Lahore`,
      "Iris Tours car rental",
      "rent a car Lahore",
    ].join(", "),
    alternates: {
      canonical: `${baseUrl}/fleet/${vehicle.slug}`,
    },
    openGraph: {
      title: `${seoTitle} | Iris Tours`,
      description: seoDescription,
      url: `${baseUrl}/fleet/${vehicle.slug}`,
      images: [{ url: thumbnail, width: 1200, height: 630, alt: vehicle.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${seoTitle} | Iris Tours`,
      description: seoDescription,
      images: [thumbnail],
    },
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = fleetData.find((v) => v.slug === slug) as any;

  if (!vehicle) {
    notFound();
  }

  // Blog guides that mention this car (internal links back from the blog)
  const carGuides = guidesLinkingTo(`/fleet/${vehicle.slug}`, 3);

  // Find related vehicles by matching slugs listed in the vehicle's relatedVehicles array
  const relatedVehicles = fleetData.filter((v) =>
    (vehicle.relatedVehicles || []).includes(v.slug)
  );

  // WhatsApp number is set in src/lib/site.ts
  const whatsappUrl = whatsappLink(`Hi Iris Tours! I want to book the ${vehicle.name}. Please share availability and rates.`);

  // Schema.org Product markup — helps Google understand this is a rentable product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${vehicle.name} Rent a Car Lahore`,
    description: stripMarkdown(vehicle.description),
    brand: { "@type": "Brand", name: vehicle.brand },
    offers: {
      "@type": "Offer",
      priceCurrency: "PKR",
      price: vehicle.rent?.daily || 0,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "Iris Tours",
        address: {
          "@type": "PostalAddress",
          streetAddress: "143 Street, 153, Sector-H, DHA Phase-1",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        telephone: "+92-315-497-3906",
      },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://iristours.net",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fleet",
        "item": "https://iristours.net/fleet",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": vehicle.name,
        "item": `https://iristours.net/fleet/${vehicle.slug}`,
      },
    ],
  };

  const gallery: string[] = vehicle.images.gallery?.length ? vehicle.images.gallery : [vehicle.images.thumbnail];
  const luggage = String(vehicle.specifications?.luggage || vehicle.luggage || "2 bags");
  const specs = [
    { icon: Users, label: "Seats", value: `${vehicle.seats}` },
    { icon: Settings2, label: "Gearbox", value: vehicle.transmission },
    { icon: Fuel, label: "Fuel", value: vehicle.fuel || vehicle.fuelType },
    { icon: Briefcase, label: "Luggage", value: /bag/i.test(luggage) ? luggage : `${luggage} bags` },
    ...(vehicle.specifications?.engine ? [{ icon: Gauge, label: "Engine", value: vehicle.specifications.engine }] : []),
  ];
  const policies = [
    { icon: Fuel, label: "Fuel", value: vehicle.policies?.fuelPolicy },
    { icon: Clock, label: "Mileage", value: vehicle.policies?.mileagePolicy },
    { icon: MapPin, label: "Out of city", value: vehicle.policies?.outstationPolicy },
  ].filter((p) => p.value);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="border-b border-border-primary bg-white">
        <div className="container mx-auto px-5 md:px-12 py-6 md:py-10">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-text-primary">Home</Link></li>
              <li className="flex items-center gap-1.5"><ChevronRight size={14} aria-hidden="true" /><Link href="/fleet" className="hover:text-text-primary">Fleet</Link></li>
              <li className="flex items-center gap-1.5"><ChevronRight size={14} aria-hidden="true" /><span className="text-text-primary" aria-current="page">{vehicle.name}</span></li>
            </ol>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Photos */}
            <div className="lg:col-span-7">
              <div className={`relative aspect-[16/10] overflow-hidden rounded-[1.8rem] ${/\.png$/i.test(gallery[0]) ? "car-stage" : "bg-slate-100"}`}>
                <Image src={gallery[0]} alt={vehicle.name} fill priority sizes="(max-width: 1024px) 100vw, 58vw" className={/\.png$/i.test(gallery[0]) ? "object-contain px-6 pb-4 pt-10 md:px-12" : "object-cover"} />
              </div>
              {gallery.length > 1 && (
                <div className="mt-3">
                  <VehicleThumbStrip images={gallery} alt={vehicle.name} />
                </div>
              )}
            </div>

            {/* Name, specs and price */}
            <div className="lg:col-span-5">
              <p className="text-slate-500">{vehicle.brand} &middot; {vehicle.category}</p>
              <h1 className="mt-1 text-[2.6rem] md:text-6xl">{vehicle.name}</h1>
              <ul className="mt-5 flex flex-wrap gap-2">
                {specs.slice(0, 4).map(({ icon: Icon, label, value }) => (
                  <li key={label} className="flex items-center gap-2 rounded-full border border-border-primary px-3.5 py-2 text-sm text-text-primary">
                    <Icon size={15} className="text-slate-400" aria-hidden="true" />
                    <span className="sr-only">{label}: </span>
                    {label === "Seats" ? `${value} seats` : value}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <VehiclePricing rent={vehicle.rent} whatsappUrl={whatsappUrl} vehicleName={vehicle.name} category={vehicle.category} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="text-3xl">About this car</h2>
            <RichText text={vehicle.description} className="mt-5 text-[17px] text-text-secondary" />
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80 p-6">
              <h2 className="text-2xl">Specifications</h2>
              <dl className="mt-4 divide-y divide-border-primary">
                {specs.map(({ label, value }) => (
                  <div key={label} className="flex justify-between gap-4 py-3 text-[15px]">
                    <dt className="text-text-secondary">{label}</dt>
                    <dd className="text-right font-semibold text-text-primary">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {vehicle.features?.length > 0 && (
              <div className="shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80 p-6">
                <h2 className="text-2xl">Features</h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {vehicle.features.map((f: string) => (
                    <li key={f} className="flex items-start gap-2.5 text-[15px] text-text-primary">
                      <Check size={17} className="mt-0.5 flex-shrink-0 text-accent-primary" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {policies.length > 0 && (
              <div className="shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80 p-6">
                <h2 className="text-2xl">Rental rules</h2>
                <dl className="mt-4 space-y-4">
                  {policies.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex gap-3">
                      <Icon size={18} className="mt-0.5 flex-shrink-0 text-accent-primary" aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-text-primary">{label}</dt>
                        <dd className="text-[15px] leading-relaxed text-text-secondary">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      </Section>

      <Section tone="white">
        <VehicleFuelEstimator vehicleSlug={vehicle.slug} vehicleName={vehicle.name} fuelType={vehicle.fuel || vehicle.fuelType || "Petrol"} />
      </Section>

      {relatedVehicles.length > 0 && (
        <Section>
          <SectionHeading title="Similar cars" action={{ href: "/fleet", label: "All cars" }} />
          <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 lg:grid-cols-3">
            {relatedVehicles.slice(0, 3).map((v) => (
              <div key={v.id} className="w-[84%] flex-shrink-0 snap-start sm:w-[60%] md:w-auto">
                <VehicleCard vehicle={v} />
              </div>
            ))}
          </div>
        </Section>
      )}

      {carGuides.length > 0 && (
        <Section tone="white">
          <SectionHeading title={`Guides for renting the ${vehicle.name}`} action={{ href: "/blog", label: "All guides" }} />
          <ul className="grid gap-5 md:grid-cols-3">
            {carGuides.map((g) => (
              <li key={g.slug}>
                <Link href={`/blog/${g.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-white shadow-lift ring-1 ring-slate-200/80">
                  <span className="relative block aspect-[16/10] overflow-hidden bg-slate-200">
                    <Image src={g.image} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </span>
                  <span className="flex flex-1 flex-col p-5">
                    <span className="font-display text-lg font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{g.title}</span>
                    <span className="mt-2 line-clamp-2 text-[15px] text-text-secondary">{g.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}

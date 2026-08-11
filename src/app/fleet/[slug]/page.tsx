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
import { Settings, Users, Fuel, Briefcase, CheckCircle2, Phone, MessageCircle, Star, ArrowLeft, MapPin, Clock, Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import fleetData from "@/data/fleet.json";
import VehicleCard from "@/components/fleet/VehicleCard";

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

  // Change this to your actual domain when deploying to production
  // e.g., "https://iristours.net" or "https://yourdomain.com"
  const baseUrl = "https://iristours.com";
  const thumbnail = vehicle.images.thumbnail.startsWith("http")
    ? vehicle.images.thumbnail
    : `${baseUrl}${vehicle.images.thumbnail}`;

  return {
    title: vehicle.seo.title,
    description: vehicle.seo.description,
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
      title: vehicle.seo.title,
      description: vehicle.seo.description,
      url: `${baseUrl}/fleet/${vehicle.slug}`,
      images: [{ url: thumbnail, width: 1200, height: 630, alt: vehicle.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: vehicle.seo.title,
      description: vehicle.seo.description,
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

  // Find related vehicles by matching slugs listed in the vehicle's relatedVehicles array
  const relatedVehicles = fleetData.filter((v) =>
    (vehicle.relatedVehicles || []).includes(v.slug)
  );

  // ─── WHATSAPP BOOKING URL ───────────────────────────────────────────────────
  // Change WhatsApp number here for the "Book on WhatsApp" button on car detail pages.
  // Replace 923001234567 with the actual number (country code + number, no spaces).
  const whatsappMsg = encodeURIComponent(
    `Hi Iris Tours! I want to book the ${vehicle.name}. Please share availability and rates.`
  );
  const whatsappUrl = `https://wa.me/923001234567?text=${whatsappMsg}`;

  // Schema.org Product markup — helps Google understand this is a rentable product
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${vehicle.name} Rent a Car Lahore`,
    description: vehicle.description,
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
          streetAddress: "DHA Phase 5",
          addressLocality: "Lahore",
          addressCountry: "PK",
        },
        telephone: "+92-300-123-4567",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-bg-primary min-h-screen">
        {/* Hero Section — large vehicle image with name overlay */}
        <div className="relative h-[55vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={vehicle.images.gallery?.[0] || vehicle.images.thumbnail}
            alt={vehicle.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-black/50 to-black/20" />

          {/* Back button — returns user to the fleet listing page */}
          <div className="absolute top-6 left-6">
            <Link
              href="/fleet"
              className="flex items-center gap-2 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20 hover:bg-black/60 transition-all text-sm font-medium"
            >
              <ArrowLeft size={16} />
              Back to Fleet
            </Link>
          </div>

          {/* Hero Text — vehicle name, category, brand, and location */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="container mx-auto">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-accent-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  {vehicle.category}
                </span>
                <span className="bg-white/10 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                  {vehicle.brand}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-2 tracking-tight">
                {vehicle.name}
              </h1>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={14} />
                <span className="text-sm">Available in Lahore, DHA &amp; Pakistan-wide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* ─── Main Content (left/centre) ───────────────────────────────────── */}
            <div className="lg:col-span-2 space-y-10">

              {/* Image Gallery Strip — shows thumbnails if more than 1 image exists */}
              {vehicle.images.gallery && vehicle.images.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {vehicle.images.gallery.map((img: string, idx: number) => (
                    <div key={idx} className="relative flex-shrink-0 w-36 h-24 rounded-xl overflow-hidden border-2 border-border-primary hover:border-accent-primary transition-all cursor-pointer">
                      <Image
                        src={img}
                        alt={`${vehicle.name} view ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="144px"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Overview — reads from the `description` field in fleet.json */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-4 flex items-center gap-3">
                  <span className="w-1 h-7 bg-accent-primary rounded-full inline-block" />
                  Overview
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {vehicle.description}
                </p>
              </section>

              {/* Key Specifications — reads from fleet.json (transmission, fuel, seats, luggage) */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                  <span className="w-1 h-7 bg-accent-primary rounded-full inline-block" />
                  Key Specifications
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { icon: Settings, label: "Transmission", value: vehicle.transmission },
                    { icon: Fuel, label: "Fuel", value: vehicle.fuel || vehicle.fuelType },
                    { icon: Users, label: "Passengers", value: `${vehicle.seats} Seats` },
                    { icon: Briefcase, label: "Luggage", value: `${vehicle.specifications?.luggage || vehicle.luggage || 2} Bags` },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="bg-bg-secondary p-5 rounded-2xl border border-border-primary flex flex-col items-center justify-center text-center gap-2 hover:border-accent-primary/50 hover:shadow-md transition-all">
                      <Icon className="text-accent-primary" size={26} />
                      <span className="text-xs text-text-secondary font-medium tracking-wide uppercase">{label}</span>
                      <span className="font-bold text-text-primary text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Premium Features — reads from the `features` array in fleet.json */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                  <span className="w-1 h-7 bg-accent-primary rounded-full inline-block" />
                  Premium Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {vehicle.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-3 bg-bg-secondary p-3 rounded-xl border border-border-primary">
                      <CheckCircle2 className="text-accent-primary flex-shrink-0" size={18} />
                      <span className="text-text-secondary text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Rental Policies — reads from the `policies` object in fleet.json */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
                  <span className="w-1 h-7 bg-accent-primary rounded-full inline-block" />
                  Rental Policies
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: Fuel, label: "Fuel Policy", value: vehicle.policies?.fuelPolicy },
                    { icon: Clock, label: "Mileage Policy", value: vehicle.policies?.mileagePolicy },
                    { icon: MapPin, label: "Outstation Policy", value: vehicle.policies?.outstationPolicy },
                  ].filter(p => p.value).map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start gap-4 p-4 bg-bg-secondary rounded-xl border border-border-primary">
                      <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-accent-primary" size={18} />
                      </div>
                      <div>
                        <p className="font-semibold text-text-primary text-sm mb-1">{label}</p>
                        <p className="text-text-secondary text-sm">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Trust Badges — static icons shown below the policies */}
              <section className="grid grid-cols-3 gap-4">
                {[
                  { icon: Shield, title: "Safe & Insured", desc: "All vehicles fully insured" },
                  { icon: Clock, title: "24/7 Support", desc: "Always available on WhatsApp" },
                  { icon: Star, title: "5-Star Rated", desc: "Trusted by 1000+ customers" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="text-center p-4 bg-bg-secondary rounded-2xl border border-border-primary">
                    <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mx-auto mb-3">
                      <Icon className="text-accent-primary" size={22} />
                    </div>
                    <p className="font-bold text-text-primary text-sm">{title}</p>
                    <p className="text-text-secondary text-xs mt-1">{desc}</p>
                  </div>
                ))}
              </section>
            </div>

            {/* ─── Sidebar (sticky on desktop) ──────────────────────────────────── */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                {/* Price Card — prices pulled from the `rent` object in fleet.json */}
                <div className="bg-bg-card border border-border-primary rounded-3xl p-6 shadow-xl">
                  <p className="text-text-secondary text-sm font-medium mb-2">Starting from</p>
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-4xl font-extrabold text-accent-primary">
                      PKR {(vehicle.rent?.daily || vehicle.rent?.withDriver?.local || 0).toLocaleString()}
                    </span>
                    <span className="text-text-secondary mb-1">/day</span>
                  </div>

                  {/* Detailed price breakdown */}
                  {vehicle.rent && (
                    <div className="space-y-3 mb-6">
                      {vehicle.rent.withDriver?.local && (
                        <div className="flex justify-between items-center py-2 border-b border-border-primary">
                          <span className="text-text-secondary text-sm">With Driver (Local)</span>
                          <span className="font-semibold text-text-primary">PKR {vehicle.rent.withDriver.local.toLocaleString()}</span>
                        </div>
                      )}
                      {vehicle.rent.withDriver?.interCity && (
                        <div className="flex justify-between items-center py-2 border-b border-border-primary">
                          <span className="text-text-secondary text-sm">With Driver (Inter-City)</span>
                          <span className="font-semibold text-text-primary">PKR {vehicle.rent.withDriver.interCity.toLocaleString()}</span>
                        </div>
                      )}
                      {vehicle.rent.withDriver?.outstation && (
                        <div className="flex justify-between items-center py-2 border-b border-border-primary">
                          <span className="text-text-secondary text-sm">Outstation</span>
                          <span className="font-semibold text-text-primary">PKR {vehicle.rent.withDriver.outstation.toLocaleString()}</span>
                        </div>
                      )}
                      {vehicle.rent.weekly && (
                        <div className="flex justify-between items-center py-2 border-b border-border-primary">
                          <span className="text-text-secondary text-sm">Weekly</span>
                          <span className="font-semibold text-text-primary">PKR {vehicle.rent.weekly.toLocaleString()}</span>
                        </div>
                      )}
                      {vehicle.rent.monthly && (
                        <div className="flex justify-between items-center py-2">
                          <span className="text-text-secondary text-sm">Monthly</span>
                          <span className="font-semibold text-text-primary">PKR {vehicle.rent.monthly.toLocaleString()}</span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* WhatsApp Booking Button — uses whatsappUrl defined at the top of this file */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5"
                  >
                    <MessageCircle size={20} />
                    Book on WhatsApp
                  </a>
                  {/* Call Now button — update this phone number if needed */}
                  <a
                    href="tel:+923001234567"
                    className="flex items-center justify-center gap-3 w-full mt-3 border border-border-primary bg-bg-secondary hover:border-accent-primary text-text-primary font-semibold py-3 rounded-2xl transition-all"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>
                </div>

                {/* ─── WHY CHOOSE IRIS TOURS ─────────────────────────────────────────
                    Edit these bullet points to change the selling points shown
                    on every car detail page sidebar.
                    Add a new string to the array to add a new bullet point.
                ──────────────────────────────────────────────────────────────────── */}
                <div className="bg-bg-card border border-border-primary rounded-3xl p-5">
                  <p className="font-bold text-text-primary mb-3">Why Choose Iris Tours?</p>
                  <ul className="space-y-2">
                    {[
                      "Professional, uniformed drivers",
                      "Flexible hourly, daily & monthly packages",
                      "Pick-up & drop anywhere in Lahore",
                      "Free cancellation up to 24 hours",
                      "Corporate & wedding packages available",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="text-accent-primary mt-0.5 flex-shrink-0" size={15} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Related Vehicles — shown at the bottom using relatedVehicles slugs from fleet.json */}
          {relatedVehicles.length > 0 && (
            <div className="mt-20 border-t border-border-primary pt-16">
              <h2 className="text-3xl font-bold text-text-primary mb-10 text-center">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedVehicles.slice(0, 3).map((relatedVehicle: any, index: number) => (
                  <VehicleCard key={relatedVehicle.id} vehicle={relatedVehicle} index={index} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

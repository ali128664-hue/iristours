import { Metadata } from "next";
import Link from "next/link";
import {
  Fuel,
  ChevronRight,
  ShieldCheck,
  Zap,
  TrendingDown,
  Globe,
  Navigation,
  Sparkles,
  HelpCircle,
  Clock,
  MapPin,
} from "lucide-react";
import fuelData from "@/data/fuelPrices.json";
import FuelPriceCards from "@/components/fuel/FuelPriceCards";
import FuelCalculator from "@/components/fuel/FuelCalculator";
import VehicleComparison from "@/components/fuel/VehicleComparison";
import InternationalFuelPrices from "@/components/fuel/InternationalFuelPrices";
import FuelPriceHistory from "@/components/fuel/FuelPriceHistory";
import FleetShowcaseSection from "@/components/fuel/FleetShowcaseSection";

// Hostinger automated ISR revalidation: refresh page every 6 hours
export const revalidate = 21600;

interface PageProps {
  searchParams: Promise<{ vehicle?: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const petrolPrice = fuelData.pakistan.petrol.price.toFixed(2);
  const dieselPrice = fuelData.pakistan.diesel.price.toFixed(2);
  const effectiveDate = fuelData.meta.effectiveFrom;

  const title = `Pakistan Petrol Price Today | Rs. ${petrolPrice}/L | Iris Tours Fuel Cost Calculator`;
  const description = `Current Pakistan fuel prices today (w.e.f. ${effectiveDate}): Petrol at Rs. ${petrolPrice}/L, High-Speed Diesel at Rs. ${dieselPrice}/L. Calculate trip fuel consumption and travel costs across 36 luxury Iris Tours rental vehicles.`;
  const url = "https://iristours.net/fuel-prices-pakistan";

  return {
    title,
    description,
    keywords: [
      "petrol price in pakistan today",
      "diesel price pakistan today",
      "fuel cost calculator pakistan",
      "pakistan fuel prices today",
      "oilprices pk petrol rate",
      "petrol rate today lahore",
      "car rental fuel calculator pakistan",
      "hi octane price pakistan",
      "iris tours fuel calculator",
      "lahore to islamabad fuel cost",
    ].join(", "),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: "https://iristours.net/og-fuel-prices.jpg",
          width: 1200,
          height: 630,
          alt: "Pakistan Petrol Price Today and Iris Tours Fuel Calculator",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function FuelPricesPage({ searchParams }: PageProps) {
  const { vehicle } = await searchParams;
  const initialVehicleSlug = vehicle || "toyota-corolla-altis-1-6";

  const petrol = fuelData.pakistan.petrol;
  const diesel = fuelData.pakistan.diesel;
  const effectiveDate = fuelData.meta.effectiveFrom;
  const usdPkr = fuelData.exchangeRates.rates.PKR || 277.92;

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://iristours.net/fuel-prices-pakistan/#webpage",
        url: "https://iristours.net/fuel-prices-pakistan",
        name: `Pakistan Petrol Price Today | Rs. ${petrol.price.toFixed(2)}/L | Iris Tours Vehicle Fuel Cost Calculator`,
        description: `Official retail fuel prices in Pakistan w.e.f. ${effectiveDate} with interactive vehicle trip fuel cost calculator for Iris Tours fleet.`,
        datePublished: "2026-09-01T00:00:00+05:00",
        dateModified: new Date().toISOString(),
        breadcrumb: {
          "@id": "https://iristours.net/fuel-prices-pakistan/#breadcrumb",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://iristours.net/fuel-prices-pakistan/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://iristours.net/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Fuel Prices & Calculator",
            item: "https://iristours.net/fuel-prices-pakistan",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://iristours.net/fuel-prices-pakistan/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is today's petrol price in Pakistan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `As of ${effectiveDate}, the official retail price of Petrol (Premier Euro 5 / MS 92) in Pakistan is Rs. ${petrol.price.toFixed(2)} per litre.`,
            },
          },
          {
            "@type": "Question",
            name: "What is today's high-speed diesel price in Pakistan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `As of ${effectiveDate}, the official High-Speed Diesel (HSD) price in Pakistan is Rs. ${diesel.price.toFixed(2)} per litre.`,
            },
          },
          {
            "@type": "Question",
            name: "How often are petroleum prices updated in Pakistan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Petroleum prices in Pakistan are notified bi-weekly (on the 1st and 16th of each month) by the Oil and Gas Regulatory Authority (OGRA) and the Ministry of Energy based on international Platts Arab Gulf benchmarks.",
            },
          },
          {
            "@type": "Question",
            name: "How do I calculate trip fuel cost for an Iris Tours car rental?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Use our interactive Vehicle Fuel Cost Calculator to pick any car from our 36-vehicle fleet, specify your route or distance, and select your driving condition to get total litres needed, fuel expense in PKR, and cost per kilometer.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      q: "What is today's official petrol price in Pakistan?",
      a: `As of ${effectiveDate}, the official retail price of Petrol (Premier Euro 5 / MS 92 RON) is Rs. ${petrol.price.toFixed(2)} per litre across all licensed fuel stations in Pakistan, verified via OilPrices.pk and OGRA official notifications.`,
    },
    {
      q: "What is the high-speed diesel price in Pakistan today?",
      a: `High-Speed Diesel (Hi-Cetane Euro 5) is officially notified at Rs. ${diesel.price.toFixed(2)} per litre. Diesel powers commercial fleet vehicles, luxury SUVs like the Toyota Land Cruiser V8, Prado, Fortuner, and Hiace Grand Cabin vans.`,
    },
    {
      q: "How does the Inland Freight Equalization Margin (IFEM) affect prices?",
      a: "Due to the government-mandated IFEM pool, official retail petroleum prices remain uniform across every major city in Pakistan (Lahore, Karachi, Islamabad, Peshawar, Quetta, Multan, and Rawalpindi) regardless of transport distance from sea ports.",
    },
    {
      q: "How accurate are the fuel consumption figures for Iris Tours vehicles?",
      a: "Our calculator incorporates verified, real-world tested fuel economy figures (km/L) for all 36 vehicles in our fleet. We test separate mileage profiles for city stop-and-go traffic, motorway high-speed cruising, and northern mountain hill climbs.",
    },
    {
      q: "Can I book a rental car with fuel included from Iris Tours?",
      a: "Yes! While standard self-drive rentals follow a full-tank-to-full-tank policy, our chauffeur-driven outstation packages, corporate rentals, and Northern Tours (Murree, Hunza, Skardu) can be booked with fuel fully inclusive directly via WhatsApp.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-bg-primary min-h-screen pt-24 md:pt-28 pb-0">
        {/* Real-time Ticker Bar */}
        <div className="bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white py-2.5 px-4 border-b border-neutral-700/60 shadow-inner">
          <div className="container mx-auto flex items-center justify-between gap-6 overflow-x-auto scrollbar-hide text-xs">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-black uppercase tracking-wider text-amber-400">
                LIVE FUEL INDEX
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-300">
                Petrol: <strong className="text-white">Rs. {petrol.price.toFixed(2)}/L</strong>{" "}
                <span className="text-emerald-400">({petrol.change < 0 ? petrol.change.toFixed(2) : `+${petrol.change.toFixed(2)}`})</span>
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-300">
                Diesel: <strong className="text-white">Rs. {diesel.price.toFixed(2)}/L</strong>{" "}
                <span className="text-emerald-400">({diesel.change < 0 ? diesel.change.toFixed(2) : `+${diesel.change.toFixed(2)}`})</span>
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-300">
                Hi-Octane: <strong className="text-white">Rs. {fuelData.pakistan.hiOctane.price.toFixed(2)}/L</strong>
              </span>
              <span className="text-neutral-400">•</span>
              <span className="text-neutral-300">
                LPG: <strong className="text-white">Rs. {fuelData.pakistan.lpg.price.toFixed(2)}/kg</strong>
              </span>
            </div>

            <div className="hidden lg:flex items-center gap-3 text-neutral-400 whitespace-nowrap">
              <span>USD/PKR: <strong className="text-white">{usdPkr.toFixed(2)}</strong></span>
              <span>•</span>
              <span className="text-emerald-400 font-medium">Synced via OilPrices.pk &amp; OGRA</span>
            </div>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12 my-6">
          <nav className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
            <Link href="/" className="hover:text-accent-primary transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-text-primary">Fuel Prices &amp; Calculator</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 lg:px-12 mb-16">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-bg-secondary via-white to-amber-50/60 border border-border-primary p-8 md:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
            {/* Background luxury ambient glow */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-border-primary shadow-xs mb-6 flex-wrap">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-text-primary">
                  Official Notification w.e.f. {effectiveDate}
                </span>
                <span className="text-text-secondary text-xs">•</span>
                <span className="text-xs font-extrabold text-emerald-700 flex items-center gap-1">
                  <ShieldCheck size={15} />
                  Live Sync via OilPrices.pk
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-text-primary tracking-tight leading-[1.08] mb-6 font-heading">
                Pakistan Fuel Prices Today <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-amber-600 to-accent-secondary">
                  &amp; Vehicle Fuel Cost Calculator
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-xl text-text-secondary leading-relaxed max-w-3xl mb-8">
                Official petrol, diesel, and LPG rates across Pakistan updated in real-time. Calculate exact trip fuel expenses for all <strong>36 Iris Tours luxury vehicles</strong>, compare fleet consumption side-by-side, and benchmark against international rates.
              </p>

              {/* Quick Navigation Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border-primary/60">
                <span className="text-xs font-black uppercase tracking-wider text-text-secondary mr-2">
                  Jump To:
                </span>
                <a
                  href="#live-prices"
                  className="px-4 py-2 rounded-xl bg-white border border-border-primary text-xs font-bold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all shadow-xs"
                >
                  Live Rates
                </a>
                <a
                  href="#calculator"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-accent-secondary to-accent-primary text-white text-xs font-bold shadow-md shadow-accent-primary/25 hover:brightness-110 transition-all"
                >
                  Fuel Cost Calculator
                </a>
                <a
                  href="#compare"
                  className="px-4 py-2 rounded-xl bg-white border border-border-primary text-xs font-bold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all shadow-xs"
                >
                  Compare Vehicles
                </a>
                <a
                  href="#international"
                  className="px-4 py-2 rounded-xl bg-white border border-border-primary text-xs font-bold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all shadow-xs"
                >
                  Global Benchmarks
                </a>
                <a
                  href="#history"
                  className="px-4 py-2 rounded-xl bg-white border border-border-primary text-xs font-bold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all shadow-xs"
                >
                  Price History
                </a>
                <a
                  href="#fleet"
                  className="px-4 py-2 rounded-xl bg-bg-secondary border border-border-primary text-xs font-bold text-accent-primary hover:bg-white transition-all shadow-xs"
                >
                  Explore Fleet (36)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Live Rates Grid */}
        <section id="live-prices" className="container mx-auto px-4 md:px-8 lg:px-12 mb-24 scroll-mt-28">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
              Official Petroleum Retail Rates in Pakistan
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Uniform national retail prices established under the Inland Freight Equalization Margin (IFEM).
            </p>
          </div>

          <FuelPriceCards
            pakistanData={fuelData.pakistan}
            effectiveFrom={effectiveDate}
            lastChecked={fuelData.meta.lastChecked}
          />
        </section>

        {/* Section 2: Interactive Fuel Calculator */}
        <section id="calculator" className="container mx-auto px-4 md:px-8 lg:px-12 mb-24 scroll-mt-28">
          <FuelCalculator initialVehicleSlug={initialVehicleSlug} />
        </section>

        {/* Section 3: Vehicle Comparison Tool */}
        <section id="compare" className="container mx-auto px-4 md:px-8 lg:px-12 mb-24 scroll-mt-28">
          <VehicleComparison />
        </section>

        {/* Section 4: International Fuel Prices */}
        <section id="international" className="container mx-auto px-4 md:px-8 lg:px-12 mb-24 scroll-mt-28">
          <InternationalFuelPrices />
        </section>

        {/* Section 5: Price History */}
        <section id="history" className="container mx-auto px-4 md:px-8 lg:px-12 mb-24 scroll-mt-28">
          <FuelPriceHistory />
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section id="faq" className="container mx-auto px-4 md:px-8 lg:px-12 mb-24 scroll-mt-28">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Insights &amp; Policies
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Authoritative guidance on fuel pricing, mileage estimation, and rental vehicle travel in Pakistan.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-border-primary p-6 md:p-7 shadow-xs hover:border-accent-primary/50 transition-all"
                >
                  <h3 className="text-base md:text-lg font-black text-text-primary flex items-start gap-3 mb-2">
                    <HelpCircle size={19} className="text-accent-primary mt-0.5 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: EXPLORE OUR FLEET (Prominent Showcase at Bottom before Footer) */}
        <div id="fleet">
          <FleetShowcaseSection />
        </div>
      </div>
    </>
  );
}

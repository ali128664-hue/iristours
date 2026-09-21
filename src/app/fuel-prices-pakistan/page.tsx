import { Metadata } from "next";
import Link from "next/link";
import {
  Fuel,
  Calculator,
  Compass,
  Globe,
  History,
  HelpCircle,
  Car,
  ChevronRight,
  ShieldCheck,
  Zap,
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

  const petrolPrice = fuelData.pakistan.petrol.price.toFixed(2);
  const dieselPrice = fuelData.pakistan.diesel.price.toFixed(2);
  const effectiveDate = fuelData.meta.effectiveFrom;

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://iristours.net/fuel-prices-pakistan/#webpage",
        url: "https://iristours.net/fuel-prices-pakistan",
        name: `Pakistan Petrol Price Today | Rs. ${petrolPrice}/L | Iris Tours Vehicle Fuel Cost Calculator`,
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
            name: "What is the petrol price in Pakistan today?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `The current official retail price of Petrol (Premier Euro 5) in Pakistan is Rs. ${petrolPrice} per litre, effective from ${effectiveDate}.`,
            },
          },
          {
            "@type": "Question",
            name: "What is the high-speed diesel price in Pakistan today?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `The current official retail price of High-Speed Diesel (Hi-Cetane Euro 5) in Pakistan is Rs. ${dieselPrice} per litre, effective from ${effectiveDate}.`,
            },
          },
          {
            "@type": "Question",
            name: "How often are fuel prices revised in Pakistan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Fuel prices in Pakistan are revised on a bi-weekly basis (every 15 days, usually on the 1st and 16th of each month) by the Oil and Gas Regulatory Authority (OGRA) and the Ministry of Petroleum based on international crude oil benchmarks and currency parity.",
            },
          },
          {
            "@type": "Question",
            name: "How do I calculate trip fuel cost for an Iris Tours car rental?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Select any vehicle from our 36-car fleet on our interactive Fuel Calculator, enter your trip distance or pick a preset route (e.g., Lahore to Islamabad 380 km), choose your driving environment (highway, city, or mixed), and the calculator provides total litres needed, fuel cost in PKR, and cost per kilometer.",
            },
          },
          {
            "@type": "Question",
            name: "Which vehicles in the Iris Tours fleet have the highest fuel efficiency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Toyota Prius Hybrid (22–24 km/L highway), Toyota Corolla Cross Hybrid (20–22 km/L highway), and Suzuki Alto (18–21 km/L) provide the most fuel-efficient journeys in our fleet.",
            },
          },
        ],
      },
    ],
  };

  const faqs = [
    {
      q: "What is the current petrol price in Pakistan today?",
      a: `As of ${effectiveDate}, the official retail price of Petrol (Premier Euro 5) is Rs. ${petrolPrice} per litre across Pakistan, verified via Pakistan State Oil (PSO) and Shell / OGRA.`,
    },
    {
      q: "What is the high-speed diesel price in Pakistan today?",
      a: `High-Speed Diesel (Hi-Cetane Euro 5) is officially priced at Rs. ${dieselPrice} per litre. Diesel is used for commercial vehicles, SUVs (Fortuner, Prado, Land Cruiser V8), Hiace Grand Cabins, and Coaster Saloons.`,
    },
    {
      q: "How often are petroleum rates revised in Pakistan?",
      a: "The Government of Pakistan and OGRA review petroleum rates bi-weekly on the 1st and 16th of every calendar month, reflecting international Platt pricing, shipping premiums, exchange rates, and the Petroleum Development Levy (PDL).",
    },
    {
      q: "How accurate is the Iris Tours Vehicle Fuel Cost Calculator?",
      a: "Our calculator incorporates real-world tested fuel economy ratings (km/L) for all 36 vehicles in our fleet under city, motorway, and combined driving conditions. It also allows custom km/L and price overrides for complete accuracy.",
    },
    {
      q: "Is fuel included in Iris Tours rental packages?",
      a: "Iris Tours offers flexible rental packages. For standard daily self-drive rentals, fuel is managed by the client (full tank to full tank policy). For chauffeur-driven outstation and corporate tours, customized packages with fuel included can be booked directly on WhatsApp.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-bg-primary min-h-screen pt-28 pb-0">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 md:px-8 lg:px-12 mb-6">
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
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-bg-secondary via-white to-amber-50/50 border border-border-primary p-8 md:p-14 shadow-lg">
            {/* Background ambient accents */}
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-accent-primary/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-border-primary shadow-sm mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-black uppercase tracking-wider text-text-primary">
                  Live Rates w.e.f. {effectiveDate}
                </span>
                <span className="text-text-secondary text-xs">•</span>
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck size={14} />
                  PSO &amp; OGRA Verified
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-6xl font-black text-text-primary tracking-tight leading-[1.1] mb-6">
                Pakistan Fuel Prices Today <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                  &amp; Vehicle Fuel Cost Calculator
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-3xl mb-8">
                Official retail petroleum prices across Pakistan updated automatically. Plan your travel budget, estimate fuel costs for any trip with our <strong>36 Iris Tours fleet vehicles</strong>, compare side-by-side fuel consumption, and view international rates.
              </p>

              {/* Quick Jump Anchors */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border-primary/60">
                <span className="text-xs font-bold uppercase text-text-secondary mr-2">
                  Quick Navigation:
                </span>
                <a
                  href="#live-prices"
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-border-primary text-xs font-bold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all shadow-sm"
                >
                  Live Rates
                </a>
                <a
                  href="#calculator"
                  className="px-3.5 py-1.5 rounded-xl bg-accent-primary text-white text-xs font-bold hover:brightness-110 transition-all shadow-sm"
                >
                  Fuel Cost Calculator
                </a>
                <a
                  href="#compare"
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-border-primary text-xs font-bold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all shadow-sm"
                >
                  Compare Vehicles
                </a>
                <a
                  href="#international"
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-border-primary text-xs font-bold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all shadow-sm"
                >
                  International Rates
                </a>
                <a
                  href="#history"
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-border-primary text-xs font-bold text-text-primary hover:border-accent-primary hover:text-accent-primary transition-all shadow-sm"
                >
                  Price History
                </a>
                <a
                  href="#fleet"
                  className="px-3.5 py-1.5 rounded-xl bg-bg-secondary border border-border-primary text-xs font-bold text-accent-primary hover:bg-white transition-all shadow-sm"
                >
                  Explore Fleet (36)
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Live Rates Grid */}
        <section id="live-prices" className="container mx-auto px-4 md:px-8 lg:px-12 mb-20 scroll-mt-28">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary tracking-tight">
              Official Retail Fuel Rates in Pakistan
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Current maximum ex-depot retail rates notified by the Government of Pakistan.
            </p>
          </div>

          <FuelPriceCards
            pakistanData={fuelData.pakistan}
            effectiveFrom={effectiveDate}
            lastChecked={fuelData.meta.lastChecked}
          />
        </section>

        {/* Section 2: Interactive Vehicle Fuel Cost Calculator */}
        <section id="calculator" className="container mx-auto px-4 md:px-8 lg:px-12 mb-20 scroll-mt-28">
          <FuelCalculator initialVehicleSlug={initialVehicleSlug} />
        </section>

        {/* Section 3: Vehicle Comparison Tool */}
        <section id="compare" className="container mx-auto px-4 md:px-8 lg:px-12 mb-20 scroll-mt-28">
          <VehicleComparison />
        </section>

        {/* Section 4: International Fuel Prices */}
        <section id="international" className="container mx-auto px-4 md:px-8 lg:px-12 mb-20 scroll-mt-28">
          <InternationalFuelPrices />
        </section>

        {/* Section 5: Fuel Price History & Bi-Weekly Trend */}
        <section id="history" className="container mx-auto px-4 md:px-8 lg:px-12 mb-20 scroll-mt-28">
          <FuelPriceHistory />
        </section>

        {/* Section 6: Frequently Asked Questions & Travel Fuel Guide */}
        <section id="faq" className="container mx-auto px-4 md:px-8 lg:px-12 mb-20 scroll-mt-28">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                Knowledge &amp; Insights
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-text-secondary mt-1">
                Everything you need to know about Pakistan fuel pricing, mileage calculations, and trip budgets.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-border-primary p-6 shadow-sm hover:border-accent-primary/50 transition-colors"
                >
                  <h3 className="text-base font-extrabold text-text-primary flex items-start gap-3 mb-2">
                    <HelpCircle size={18} className="text-accent-primary mt-0.5 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed pl-7">
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

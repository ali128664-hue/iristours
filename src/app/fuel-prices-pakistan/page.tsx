import { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
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
import { getLiveFuelData } from "@/utils/fuelSync";
import FuelPriceCards from "@/components/fuel/FuelPriceCards";
import FuelCalculator from "@/components/fuel/FuelCalculator";
import VehicleComparison from "@/components/fuel/VehicleComparison";
import InternationalFuelPrices from "@/components/fuel/InternationalFuelPrices";
import FuelPriceHistory from "@/components/fuel/FuelPriceHistory";
import FleetShowcaseSection from "@/components/fuel/FleetShowcaseSection";

// Automated ISR revalidation: check fresh rates every 30 minutes
export const revalidate = 1800;

interface PageProps {
  searchParams: Promise<{ vehicle?: string }>;
}

export async function generateMetadata(): Promise<Metadata> {
  const fuelData = await getLiveFuelData();
  const petrolPrice = fuelData.pakistan.petrol.price.toFixed(2);
  const dieselPrice = fuelData.pakistan.diesel.price.toFixed(2);
  const effectiveDate = fuelData.meta.effectiveFrom;

  const title = `Petrol Price in Pakistan Today: Rs. ${petrolPrice}/L & Fuel Cost Calculator`;
  const description = `Current Pakistan fuel prices today (w.e.f. ${effectiveDate}): Petrol at Rs. ${petrolPrice}/L, High-Speed Diesel at Rs. ${dieselPrice}/L. Calculate trip fuel consumption and travel costs across 17 luxury Iris Tours rental vehicles.`;
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
  const fuelData = await getLiveFuelData();
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
              text: "Use our interactive Vehicle Fuel Cost Calculator to pick any car from our 17-vehicle fleet, specify your route or distance, and select your driving condition to get total litres needed, fuel expense in PKR, and cost per kilometer.",
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
      a: "Our calculator incorporates verified, real-world tested fuel economy figures (km/L) for all 17 vehicles in our fleet. We test separate mileage profiles for city stop-and-go traffic, motorway high-speed cruising, and northern mountain hill climbs.",
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

      <div className="bg-bg-primary min-h-screen pb-0">
        <PageHeader
          breadcrumbSchema={false}
          title="Petrol and diesel prices in Pakistan today"
          intro={`Official rates effective ${effectiveDate}, checked automatically twice a day. Use the calculator below to work out the fuel cost of any trip in our cars.`}
          crumbs={[{ label: "Fuel prices" }]}
        >
          <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:max-w-3xl">
            {[
              { label: "Petrol", value: petrol.price, unit: "L", change: petrol.change },
              { label: "Diesel", value: diesel.price, unit: "L", change: diesel.change },
              { label: "Hi-Octane", value: fuelData.pakistan.hiOctane.price, unit: "L", change: null },
              { label: "LPG", value: fuelData.pakistan.lpg.price, unit: "kg", change: null },
            ].map((f) => (
              <div key={f.label} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                <dt className="text-sm text-white/65">{f.label}</dt>
                <dd className="mt-1">
                  <span className="text-xl font-semibold text-white sm:text-2xl">Rs. {f.value.toFixed(2)}</span>
                  <span className="text-sm text-white/60"> /{f.unit}</span>
                  {typeof f.change === "number" && f.change !== 0 && (
                    <span className={`block text-sm ${f.change < 0 ? "text-emerald-400" : "text-rose-400"}`}>
                      {f.change < 0 ? "Down" : "Up"} Rs. {Math.abs(f.change).toFixed(2)}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <nav aria-label="On this page" className="mt-6 flex flex-wrap gap-2">
            {[
              ["#calculator", "Trip fuel calculator"],
              ["#compare", "Compare two cars"],
              ["#history", "Price history"],
              ["#international", "Other countries"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85 hover:border-white hover:text-white transition-colors">
                {label}
              </a>
            ))}
          </nav>
          <p className="mt-5 text-sm text-white/50">USD/PKR {usdPkr.toFixed(2)}. Source: OilPrices.pk and OGRA notifications.</p>
        </PageHeader>
        <div className="pt-12 md:pt-16" />

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
          <FuelCalculator
            initialVehicleSlug={initialVehicleSlug}
            liveFuelPrices={fuelData.pakistan}
          />
        </section>

        {/* Section 3: Vehicle Comparison Tool */}
        <section id="compare" className="container mx-auto px-4 md:px-8 lg:px-12 mb-24 scroll-mt-28">
          <VehicleComparison liveFuelPrices={fuelData.pakistan} />
        </section>

        {/* Section 4: International Fuel Prices */}
        <section id="international" className="container mx-auto px-4 md:px-8 lg:px-12 mb-24 scroll-mt-28">
          <InternationalFuelPrices
            exchangeRates={fuelData.exchangeRates}
            international={fuelData.international}
          />
        </section>

        {/* Section 5: Price History */}
        <section id="history" className="container mx-auto px-4 md:px-8 lg:px-12 mb-24 scroll-mt-28">
          <FuelPriceHistory
            history={fuelData.history}
            meta={fuelData.meta}
          />
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

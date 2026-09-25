import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, PhoneCall, ShieldCheck, Clock, CheckCircle2, HelpCircle, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import serviceAreas from "@/data/serviceAreas.json";
import fleetData from "@/data/fleet.json";
import VehicleCard from "@/components/fleet/VehicleCard";

// Generate static params so Next.js pre-builds all 200+ area pages for lightning-fast SEO
export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find(a => a.slug === slug);
  if (!area) return { title: 'Area Not Found' };

  const baseUrl = "https://iristours.net";

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: `${baseUrl}/areas/${area.slug}`,
    },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `${baseUrl}/areas/${area.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
    }
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreas.find(a => a.slug === slug);
  if (!area) notFound();

  // Pick top 6 cars to showcase
  const showcaseCars = fleetData.slice(0, 6);

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

  const whatsappInquiryUrl = `https://wa.me/923154973906?text=${encodeURIComponent(
    `Hi Iris Tours! 🚗 I am looking for a rental car in ${area.name}. Please share available vehicles and rates.`
  )}`;

  return (
    <>
      {/* Structured Data Schemas for SEO Ranking & Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="bg-bg-primary min-h-screen pb-20">
        {/* Hero Section */}
        <div className="relative min-h-[380px] flex items-center justify-center overflow-hidden border-b border-border-primary py-16 bg-gradient-to-b from-white to-bg-secondary">
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-secondary font-bold text-xs uppercase tracking-wider mb-6">
              <MapPin size={15} className="text-accent-primary" />
              <span>Verified Service Area: {area.name}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-5 tracking-tight leading-tight">
              Rent a Car in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">{area.name}</span>
            </h1>

            <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8 font-medium">
              Premium chauffeur-driven car rental and tour mobility solutions in {area.name}, Lahore. 24/7 on-demand doorstep service.
            </p>

            {/* Instant Action CTA inside Hero */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-green-500/25 active:scale-[0.99] transition-all"
              >
                <FaWhatsapp size={18} />
                <span>WhatsApp Instant Quote</span>
              </a>

              <a
                href="tel:+923154973906"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white border border-border-primary hover:border-accent-primary text-text-primary font-bold text-sm tracking-wide shadow-sm transition-all"
              >
                <Phone size={16} className="text-accent-primary" />
                <span>Call Chauffeur Desk: 0315-4973906</span>
              </a>
            </div>
          </div>
        </div>

        {/* Local Fast Delivery Callout Strip */}
        <div className="bg-accent-primary/10 border-y border-accent-primary/20 py-3.5 px-6 text-center">
          <p className="text-xs md:text-sm font-bold text-text-primary flex items-center justify-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
            <span>Need a luxury SUV or economy car delivered to <strong>{area.name}</strong> within 30 minutes? Call our 24/7 dispatch desk.</span>
          </p>
        </div>

        <div className="container mx-auto px-6 mt-16">
          
          {/* SEO Content Section — 100% Original Content Preserved */}
          <div className="max-w-4xl mx-auto mb-20 bg-bg-secondary p-8 md:p-12 rounded-3xl border border-border-primary shadow-sm prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary">
            <h2 className="text-3xl font-bold mb-6">Why Rent a Car in {area.name} with Us?</h2>
            <p className="text-lg leading-relaxed mb-6">{area.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 not-prose">
              <div className="flex flex-col items-center text-center p-5 bg-white/70 rounded-2xl border border-border-primary/80">
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mb-4">
                  <Clock className="text-accent-primary" size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-2 text-base">Prompt 30-Min Service</h3>
                <p className="text-xs text-text-secondary">Rapid doorstep pickup and drop-off anywhere in {area.name}.</p>
              </div>
              <div className="flex flex-col items-center text-center p-5 bg-white/70 rounded-2xl border border-border-primary/80">
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="text-accent-primary" size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-2 text-base">Safe & Verified Drivers</h3>
                <p className="text-xs text-text-secondary">Fully vetted, background-checked professional chauffeurs.</p>
              </div>
              <div className="flex flex-col items-center text-center p-5 bg-white/70 rounded-2xl border border-border-primary/80">
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mb-4">
                  <PhoneCall className="text-accent-primary" size={24} />
                </div>
                <h3 className="font-bold text-text-primary mb-2 text-base">24/7 Live Support</h3>
                <p className="text-xs text-text-secondary">Always accessible on WhatsApp for immediate bookings.</p>
              </div>
            </div>
          </div>

          {/* Fleet Showcase */}
          <div className="mb-14 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-3">
              Available Vehicles for Rent in {area.name}
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto">
              Choose from our diverse fleet of premium SUVs, luxury sedans, and economical family cars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {showcaseCars.map(vehicle => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="text-center mb-20">
            <Link 
              href="/fleet" 
              className="inline-block px-8 py-4 bg-bg-secondary border border-border-primary rounded-2xl text-text-primary font-bold hover:border-accent-primary hover:text-accent-primary transition-all shadow-sm"
            >
              Explore Full 35+ Vehicle Fleet
            </Link>
          </div>

          {/* Local Area FAQs Section (Matches FAQ Schema for SEO Rich Results) */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-primary/10 text-accent-secondary font-bold text-xs uppercase tracking-wider mb-3">
                <HelpCircle size={14} className="text-accent-primary" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary">
                Common Questions About Car Rental in {area.name}
              </h2>
            </div>

            <div className="space-y-4">
              {localFaqs.map((faq, idx) => (
                <div key={idx} className="bg-bg-secondary border border-border-primary rounded-2xl p-6 shadow-sm">
                  <h3 className="text-base md:text-lg font-bold text-text-primary mb-2 flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-accent-primary mt-1 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom High-Converting Action Box */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-bg-secondary to-white border border-border-primary rounded-3xl p-8 md:p-12 text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-3">
              Ready to Book Your Ride in {area.name}?
            </h3>
            <p className="text-text-secondary text-sm md:text-base max-w-xl mx-auto mb-8">
              Contact Iris Tours now for instant confirmation, immaculate vehicles, and professional chauffeurs delivered right to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-green-500/25 transition-all"
              >
                <FaWhatsapp size={20} />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:+923154973906"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-text-primary hover:bg-black text-white font-bold text-sm tracking-wide transition-all"
              >
                <Phone size={16} />
                <span>Call Directly: +92 315 4973906</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

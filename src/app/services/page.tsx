import { Metadata } from "next";
import Link from "next/link";
import { Plane, Heart, Building, Compass, ShieldCheck, Clock, PhoneCall, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Car Rental & Chauffeur Services in Lahore & Islamabad | Iris Tours",
  description: "Explore our range of premium car rental services: 24/7 Airport transfers, luxury wedding cars, corporate monthly rentals, and inter-city chauffeur tours across Pakistan.",
  alternates: {
    canonical: "https://iristours.net/services",
  },
  openGraph: {
    title: "Car Rental & Chauffeur Services in Lahore | Iris Tours",
    description: "Explore premium car rental services: Airport transfers, wedding cars, corporate mobility, and Northern tour charters.",
    url: "https://iristours.net/services",
  },
};

const services = [
  {
    title: "Airport Transfers",
    slug: "airport-transfer",
    badge: "24/7 Flight Tracking",
    icon: Plane,
    desc: "Seamless, punctually guaranteed airport pick-up and drop-off at Allama Iqbal International (LHE) and Islamabad International (ISB). VIP meet & greet with luggage handling.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop",
    linkText: "View Airport Transfer Details",
  },
  {
    title: "Luxury Wedding Cars",
    slug: "wedding-cars",
    badge: "Decorated Fleet",
    icon: Heart,
    desc: "Make your barat or valima entrance truly unforgettable. Choose from decorated Mercedes-Benz, Audi A6, Toyota Prado, and Land Cruiser V8 with uniformed chauffeurs.",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    linkText: "Explore Wedding Car Packages",
  },
  {
    title: "Corporate Fleet Solutions",
    slug: "corporate-rentals",
    badge: "Monthly & Long-Term",
    icon: Building,
    desc: "Executive transportation for business delegations, multinational firms, and VIP clients. Flexible daily, weekly, and monthly packages with dedicated account management.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    linkText: "Corporate Rental Plans",
  },
  {
    title: "Northern Pakistan Tours",
    slug: "../tours",
    badge: "Mountain Chauffeurs",
    icon: Compass,
    desc: "Private 4x4 SUV expeditions to Hunza Valley, Skardu, Deosai, Swat, and Murree. Expert mountain drivers, fuel, tolls, and 24/7 road assistance included.",
    image: "https://images.unsplash.com/photo-1588667614138-028f096cf5d5?q=80&w=800&auto=format&fit=crop",
    linkText: "Explore Tour Packages",
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
    <div className="bg-bg-primary min-h-screen pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <div className="relative h-[45vh] min-h-[420px] flex items-center justify-center overflow-hidden border-b border-border-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1920&auto=format&fit=crop"
            alt="Iris Tours Rental Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/70 to-bg-primary" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-widest mb-4">
            World-Class Mobility Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary mb-4 tracking-tight">
            Premium Car Rental &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
              Chauffeur Services
            </span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From 24/7 airport pickups in Lahore and Islamabad to grand wedding processions and executive corporate fleets, Iris Tours delivers flawless service.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <div
                key={idx}
                className="bg-bg-secondary rounded-3xl border border-border-primary overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-transparent to-transparent opacity-90" />
                  <div className="absolute top-4 left-4 bg-bg-primary/90 backdrop-blur-md border border-border-primary rounded-full px-3.5 py-1 text-xs font-bold text-accent-primary">
                    {svc.badge}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 flex items-center justify-center text-accent-primary mb-5">
                      <IconComponent size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary mb-3">{svc.title}</h2>
                    <p className="text-text-secondary leading-relaxed text-sm mb-6">{svc.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-border-primary/60 flex items-center justify-between">
                    <Link
                      href={svc.slug.startsWith("..") ? "/tours" : `/services/${svc.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-bold text-accent-primary hover:text-accent-secondary transition-colors"
                    >
                      {svc.linkText} <ArrowRight size={16} />
                    </Link>
                    <a
                      href={`https://wa.me/923154973906?text=${encodeURIComponent(`Hi! I'm interested in your ${svc.title} service.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold transition-colors"
                    >
                      Quick WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Book With Iris Tours Banner */}
        <div className="bg-gradient-to-r from-bg-secondary to-bg-card border border-border-primary rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lg">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold mb-4">
            <Star size={14} className="fill-amber-500" /> Rated 4.9/5 by 350+ Happy Travelers
          </div>
          <h3 className="text-3xl font-extrabold text-text-primary mb-4">
            Need a Customized Itinerary or Long-Term Rental?
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto mb-8 text-sm md:text-base">
            Our booking coordinators are available 24/7 to tailor special quotes for events, inter-city business tours, and foreign delegations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923154973906?text=Hi!%20I%20need%20a%20custom%20car%20rental%20quote."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" className="px-8 py-3.5">
                Chat on WhatsApp (+92 315 4973906)
              </Button>
            </a>
            <a href="tel:+923154973906">
              <Button variant="outline" className="px-8 py-3.5 flex items-center gap-2">
                <PhoneCall size={16} /> Call Directly
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

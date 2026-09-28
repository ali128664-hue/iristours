import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Rent a Car in Bahria Town & DHA Lahore | Fast Doorstep Delivery - Iris Tours",
  description: "Need a premium car rental in Bahria Town, DHA Lahore, Lake City, or Johar Town? Iris Tours offers fast doorstep delivery with professional chauffeurs. Book instantly.",
  alternates: {
    canonical: "https://iristours.net/blog/rent-a-car-bahria-town-dha-lahore",
  },
  openGraph: {
    title: "Rent a Car in Bahria Town & DHA Lahore | Iris Tours",
    description: "Doorstep car rental in DHA Lahore (Phases 1-9), Bahria Town, and Lake City with verified chauffeurs.",
    url: "https://iristours.net/blog/rent-a-car-bahria-town-dha-lahore",
    images: ["https://iristours.net/blog/bahria-dha.jpg"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Your Guide to Premium Car Rentals in DHA & Bahria Town Lahore",
    "description": "How to get doorstep chauffeur car rental in DHA Lahore, Bahria Town, and gated societies.",
    "image": "https://iristours.net/blog/bahria-dha.jpg",
    "author": {
      "@type": "Organization",
      "name": "Iris Tours",
      "url": "https://iristours.net"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Iris Tours",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iristours.net/logo.png"
      }
    },
    "datePublished": "2024-03-05",
    "dateModified": new Date().toISOString().split("T")[0],
    "mainEntityOfPage": "https://iristours.net/blog/rent-a-car-bahria-town-dha-lahore"
  };

  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-6">
          <Link href="/" className="hover:text-accent-primary">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-accent-primary">Blog</Link>
          <span>/</span>
          <span className="text-text-primary truncate">Rent a Car in Bahria Town & DHA Lahore</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          Your Guide to Premium Car Rentals in DHA &amp; Bahria Town Lahore
        </h1>
        
        <img 
          src="/blog/bahria-dha.jpg" 
          alt="A modern high-end sedan parked on a wide street in Bahria Town Lahore near the Eiffel Tower replica" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-lg"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg leading-relaxed">
            Living in or visiting the upscale neighborhoods of South Lahore means you expect a certain standard of service. When you are looking to <strong>rent a car in Bahria Town Lahore</strong> or need immediate transport in DHA, you shouldn't have to wait hours for an unreliable cab to arrive from the other side of the city.
          </p>
          
          <p>
            At Iris Tours, we specialize in hyper-local, premium chauffeur-driven car rentals tailored specifically for Lahore's most prestigious communities.
          </p>

          <h2>Serving Lahore's Premium Neighborhoods</h2>
          <p>Our logistical hubs are strategically placed to ensure rapid response times across South Lahore. We provide direct doorstep service to:</p>
          <ul>
            <li><strong>Bahria Town &amp; Sector Targets:</strong> Rapid deployment to all sectors, including Safari Villas, Sector C, and the Grand Jamia Mosque area.</li>
            <li><strong>DHA Lahore:</strong> From Phase 1 to <Link href="/areas/dha-phase-9-lahore" className="text-accent-primary hover:underline">DHA Phase 9</Link> and DHA Raya, we ensure absolute VIP transport for residents and their guests.</li>
            <li><strong>Johar Town &amp; Township:</strong> Quick connections for shopping trips and commercial meetings.</li>
            <li><strong>Lake City &amp; Beyond:</strong> Unmatched reliability for the gated communities on Raiwind Road.</li>
          </ul>

          <h2>Why Choose a Localized Service?</h2>
          <p>
            Searching for a <strong>rent a car DHA Lahore</strong> or a <strong>Lake City rent a car</strong> typically brings up generic services. By choosing a provider that understands the localized security protocols of these gated communities, you avoid the hassle of guard check delays and lost drivers.
          </p>
          
          <p>
            Our chauffeurs are intimately familiar with the layout of Bahria Town's sectors and DHA's phases, ensuring you reach your destination via the fastest, most efficient routes.
          </p>

          <h2>A Fleet for Every Occasion</h2>
          <p>
            Whether you need a compact sedan for a quick trip to <Link href="/areas/liberty-market-lahore" className="text-accent-primary hover:underline">Liberty Market</Link> or a luxury SUV for a family gathering, our <Link href="/fleet" className="text-accent-primary hover:underline">diverse fleet</Link> is ready to deploy.
          </p>

          <h2>Conclusion</h2>
          <p>Don't settle for subpar transportation in premium neighborhoods. Experience the convenience of a high-end car rental service that respects your time and your lifestyle.</p>

          <div className="mt-12 text-center p-8 bg-bg-secondary rounded-2xl border border-border-primary">
            <h3 className="text-2xl font-bold text-text-primary mb-3">Book Your Ride in DHA or Bahria Town</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">Chauffeur-driven delivery right to your door within minutes.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/923154973906?text=Hi!%20I%20need%20a%20car%20in%20DHA%20/%20Bahria%20Town%20Lahore." target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="px-8 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white">Book via WhatsApp</Button>
              </a>
              <Link href="/areas">
                <Button variant="outline" className="px-8 py-3">View Service Areas</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

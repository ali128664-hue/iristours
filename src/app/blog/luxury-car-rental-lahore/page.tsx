import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Luxury Car Rental Lahore | Rent VIP Sedans & Limousines - Iris Tours",
  description: "Elevate your journey with Iris Tours' luxury car rental in Lahore. Rent premium vehicles like Mercedes, Audi, Prado, and limousines with professional VIP chauffeurs.",
  alternates: {
    canonical: "https://iristours.net/blog/luxury-car-rental-lahore",
  },
  openGraph: {
    title: "Luxury Car Rental Lahore | Iris Tours",
    description: "Premium Mercedes, Audi, and limousine rental in Lahore with verified VIP chauffeurs.",
    url: "https://iristours.net/blog/luxury-car-rental-lahore",
    images: ["https://iristours.net/blog/luxury-rental.jpg"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Experience True Elegance: The Ultimate Guide to Luxury Car Rental in Lahore",
    "description": "Comprehensive guide to renting luxury cars, Mercedes, Audi, and VIP sedans in Lahore DHA.",
    "image": "https://iristours.net/blog/luxury-rental.jpg",
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
    "datePublished": "2024-03-20",
    "dateModified": new Date().toISOString().split("T")[0],
    "mainEntityOfPage": "https://iristours.net/blog/luxury-car-rental-lahore"
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
          <span className="text-text-primary truncate">Luxury Car Rental Lahore</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          Experience True Elegance: The Ultimate Guide to Luxury Car Rental in Lahore
        </h1>
        
        <img 
          src="/blog/luxury-rental.jpg" 
          alt="A sleek black Mercedes sedan parked outside an upscale building in Lahore" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-lg"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg leading-relaxed">
            Lahore is a city that celebrates grandeur. From the bustling, high-end commercial avenues of Gulberg to the sprawling, manicured estates of DHA, the city's elite lifestyle demands transportation that matches its prestige. Whether you are hosting international corporate delegates or attending a high-profile wedding, a standard rental simply won't suffice.
          </p>
          
          <p>
            This is where Iris Tours steps in, offering a flawless <strong>luxury car rental</strong> experience tailored to those who refuse to compromise on style, comfort, or service.
          </p>

          <h2>What Defines a True VIP Car Rental Experience?</h2>
          <p>Renting a premium vehicle isn't just about the badge on the hood; it is about the entire ecosystem of service that accompanies it. Our VIP car service is defined by:</p>
          <ul>
            <li><strong>Immaculate Fleet:</strong> Our luxury vehicles are maintained in absolute showroom condition. Pristine interiors, premium fragrance, and spotless exterior finish.</li>
            <li><strong>Discreet, Elite Chauffeurs:</strong> A luxury car requires a luxury driver. Our chauffeurs are highly trained in defensive driving, route optimization, and VIP etiquette.</li>
            <li><strong>Seamless Logistics:</strong> From a pickup at <Link href="/services/airport-transfer" className="text-accent-primary hover:underline">Allama Iqbal International Airport</Link> to a grand entrance at a wedding hall, the execution is seamless.</li>
          </ul>

          <h2>Top Luxury Cars for Rent in Our Fleet</h2>
          <p>When you <Link href="/fleet" className="text-accent-primary hover:underline">browse our premium selection</Link>, you will find vehicles suited for every high-end occasion.</p>

          <h3>The Corporate Standard: Mercedes &amp; Audi</h3>
          <p>Nothing commands respect in the corporate world quite like a Mercedes-Benz or an Audi. These vehicles offer whisper-quiet cabins, making them perfect for executive travel, airport transfers, and diplomatic visits.</p>

          <h3>The Grand Entrance: Limousines &amp; Luxury SUVs</h3>
          <p>If you are planning a wedding or a major VIP event, a limousine or Toyota Land Cruiser V8 offers unmatched presence. The elongated chassis and opulent interiors guarantee all eyes are on you when you arrive.</p>

          <h2>Booking Considerations for High-End Vehicles</h2>
          <ul>
            <li><strong>Advance Notice:</strong> Premium vehicles are in extremely high demand, especially on weekends and peak wedding months. Book at least a week in advance.</li>
            <li><strong>Custom Requests:</strong> Need specific refreshments or route planning? Inform our booking team; our VIP concierge accommodates bespoke requests.</li>
          </ul>

          <h2>Conclusion</h2>
          <p>Your transportation should be an extension of your personal or corporate brand. Don't settle for ordinary when extraordinary is just a phone call away. Experience the finest fleet in the city.</p>

          <div className="mt-12 text-center p-8 bg-bg-secondary rounded-2xl border border-border-primary">
            <h3 className="text-2xl font-bold text-text-primary mb-3">Book Your Luxury Ride in Lahore</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">Mercedes, Audi, Prado, and V8 available with uniformed chauffeurs.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/923154973906?text=Hi!%20I%20want%20to%20rent%20a%20luxury%20car%20in%20Lahore." target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="px-8 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white">Book on WhatsApp</Button>
              </a>
              <Link href="/fleet?category=Luxury">
                <Button variant="outline" className="px-8 py-3">View Luxury Fleet</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

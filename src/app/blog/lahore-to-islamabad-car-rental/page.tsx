import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Lahore to Islamabad Car Rental with Driver | Intercity Rates - Iris Tours",
  description: "Book door-to-door Lahore to Islamabad car rental via M2 Motorway. Premium sedans, Toyota Prado, Fortuner, and Hiace Grand Cabin with professional chauffeurs.",
  alternates: {
    canonical: "https://iristours.net/blog/lahore-to-islamabad-car-rental",
  },
  openGraph: {
    title: "Lahore to Islamabad Car Rental with Driver | Iris Tours",
    description: "Door-to-door car rental from Lahore DHA to Islamabad. Luxury sedans, Fortuner, and Grand Cabin with verified drivers.",
    url: "https://iristours.net/blog/lahore-to-islamabad-car-rental",
    images: ["https://iristours.net/blog/lahore-islamabad.jpg"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Ultimate Guide to Lahore to Islamabad Car Rental",
    "description": "Comprehensive guide for traveling between Lahore and Islamabad via M2 motorway using chauffeur-driven car rental.",
    "image": "https://iristours.net/blog/lahore-islamabad.jpg",
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
    "datePublished": "2024-03-15",
    "dateModified": new Date().toISOString().split("T")[0],
    "mainEntityOfPage": "https://iristours.net/blog/lahore-to-islamabad-car-rental"
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
          <span className="text-text-primary truncate">Lahore to Islamabad Car Rental</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          The Ultimate Guide to Lahore to Islamabad Car Rental
        </h1>
        
        <img 
          src="/blog/lahore-islamabad.jpg" 
          alt="A premium black SUV driving on the Lahore to Islamabad M2 motorway at sunset" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-lg"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg leading-relaxed">
            Traveling between Pakistan’s cultural heart and its capital is a journey thousands make every week. Whether you are heading to Islamabad for a crucial corporate meeting, a diplomatic appointment, or a weekend getaway to the Margalla Hills, the 380-kilometer drive demands comfort, safety, and reliability.
          </p>
          
          <p>
            While buses and flights are options, nothing beats the privacy, convenience, and door-to-door service of a premium <strong>Lahore to Islamabad car rental</strong>. At Iris Tours, we specialize in making this intercity transit as smooth as the M2 motorway itself.
          </p>

          <h2>Why Choose a Private Car Rental Over Other Options?</h2>
          <ul>
            <li><strong>Door-to-Door Convenience:</strong> Our chauffeurs pick you up directly from your doorstep—whether you are in <Link href="/areas/dha-phase-5-lahore" className="text-accent-primary hover:underline">DHA Phase 5</Link>, Bahria Town, or Lake City—and drop you off exactly at your destination in Islamabad.</li>
            <li><strong>Unmatched Comfort:</strong> Renting a premium SUV or luxury sedan ensures you arrive refreshed, not exhausted.</li>
            <li><strong>Flexible Scheduling:</strong> Flights and buses operate on strict timetables. With a private rental, you depart precisely when you want.</li>
            <li><strong>Productivity on the Go:</strong> For corporate travelers, the back seat of a luxury vehicle becomes a mobile office with air-conditioned comfort.</li>
          </ul>

          <h2>Best Vehicles for the Lahore to Islamabad Route</h2>
          
          <h3>1. The Executive Choice: Sedans</h3>
          <p>For solo travelers or couples heading to the capital for business, premium sedans (Toyota Corolla Altis, Yaris, Honda Civic) offer a quiet, smooth ride with excellent fuel efficiency.</p>

          <h3>2. The Power & Prestige: Premium SUVs</h3>
          <p>If you want to make an entrance or need extra space for luggage, an SUV is the ultimate choice. A Toyota Fortuner or Prado provides commanding road presence and unparalleled stability on the motorway.</p>

          <h3>3. Family and Group Travel: Vans & Coasters</h3>
          <p>Traveling with a large family or a corporate team? A Toyota Grand Cabin or a Coaster ensures everyone travels together comfortably without compromising on luggage space.</p>

          <div className="bg-bg-secondary p-6 rounded-2xl border border-border-primary my-8">
            <h3 className="text-2xl mt-0">Vehicle Comparison for Intercity Travel</h3>
            <table className="w-full mt-4 text-left border-collapse">
              <thead>
                <tr className="border-b border-border-primary">
                  <th className="py-2">Vehicle Type</th>
                  <th className="py-2">Ideal Passengers</th>
                  <th className="py-2">Comfort Level</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border-primary/30">
                  <td className="py-2">Toyota Corolla / Yaris</td>
                  <td className="py-2">1–3 Passengers</td>
                  <td className="py-2">High</td>
                </tr>
                <tr className="border-b border-border-primary/30">
                  <td className="py-2"><Link href="/fleet/honda-hr-v" className="text-accent-primary hover:underline">Honda HR-V</Link> / Kia Sportage</td>
                  <td className="py-2">3–4 Passengers</td>
                  <td className="py-2">Very High</td>
                </tr>
                <tr>
                  <td className="py-2"><Link href="/fleet/toyota-fortuner" className="text-accent-primary hover:underline">Toyota Fortuner</Link> / Prado</td>
                  <td className="py-2">4–6 Passengers</td>
                  <td className="py-2">Exceptional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Pricing Guidance and Considerations</h2>
          <p>When you book a <Link href="/services/corporate-rentals" className="text-accent-primary hover:underline">Lahore car rental with driver</Link> through Iris Tours for an outstation trip, our transparent pricing includes the vehicle, chauffeur's allowance, and round-the-clock roadside support.</p>

          <h2>Conclusion</h2>
          <p>The journey from Lahore to Islamabad shouldn't be a chore. Choose a professional car rental service to guarantee punctuality, safety, and absolute comfort. Browse <Link href="/fleet" className="text-accent-primary hover:underline">our fleet options</Link> and reserve your vehicle today.</p>

          <div className="mt-12 text-center p-8 bg-bg-secondary rounded-2xl border border-border-primary">
            <h3 className="text-2xl font-bold text-text-primary mb-3">Book Your Lahore to Islamabad Car</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">Available 24/7 with doorstep pickup anywhere in Lahore.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/923154973906?text=Hi!%20I%20want%20to%20book%20a%20car%20from%20Lahore%20to%20Islamabad." target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="px-8 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white">Book via WhatsApp</Button>
              </a>
              <Link href="/fleet">
                <Button variant="outline" className="px-8 py-3">Explore Fleet</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Rent a Limousine in Lahore | Luxury Wedding Limos - Iris Tours",
  description: "Make your grand entrance unforgettable. Rent a luxurious stretch limousine in Lahore with driver for weddings, VIP corporate events, and red-carpet arrivals.",
  alternates: {
    canonical: "https://iristours.net/blog/limousine-rental-lahore",
  },
  openGraph: {
    title: "Rent a Limousine in Lahore | Iris Tours",
    description: "Stretch limousine rental in Lahore with professional VIP chauffeur for weddings and grand ceremonies.",
    url: "https://iristours.net/blog/limousine-rental-lahore",
    images: ["https://iristours.net/blog/limousine-wedding.jpg"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Rent a Limousine in Lahore: Make an Unforgettable Grand Entrance",
    "description": "How to rent a stretch limousine for weddings and VIP events in Lahore.",
    "image": "https://iristours.net/blog/limousine-wedding.jpg",
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
    "datePublished": "2024-03-10",
    "dateModified": new Date().toISOString().split("T")[0],
    "mainEntityOfPage": "https://iristours.net/blog/limousine-rental-lahore"
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
          <span className="text-text-primary truncate">Rent a Limousine in Lahore</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          Rent a Limousine in Lahore: Make an Unforgettable Grand Entrance
        </h1>
        
        <img 
          src="/blog/limousine-wedding.jpg" 
          alt="A luxurious white stretch limousine parked outside a grand wedding marquee in Lahore at night" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-lg"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg leading-relaxed">
            In a city known for its vibrant culture and extravagant celebrations, arriving in style is not just an option—it is an expectation. Whether it is a grand Baraat, a lavish corporate gala, or a high-profile VIP arrival, nothing turns heads quite like the elongated elegance of a stretch limousine.
          </p>
          
          <p>
            If you are looking for a <strong>limousine rent in Lahore</strong>, Iris Tours offers the most pristine, opulent fleet designed to make your special day truly unforgettable.
          </p>

          <h2>Why Hire a Limousine for Your Wedding?</h2>
          <p>The query for a <strong>hire of limousine</strong> spikes heavily during Lahore's winter wedding season. Here is why couples and planners consistently choose this premium vehicle:</p>
          <ul>
            <li><strong>The Ultimate Photo Op:</strong> A beautifully decorated white or black limo provides a stunning backdrop for wedding photography.</li>
            <li><strong>Bridal Comfort:</strong> Voluminous wedding dresses require space. The massive interior of a limo ensures the bride and groom can sit comfortably without wrinkling their attire.</li>
            <li><strong>The VIP Experience:</strong> Enjoy privacy partitions, custom ambient lighting, and luxury seating as you transition from the salon to the wedding hall.</li>
          </ul>

          <h2>Our Premium Limousine Services</h2>
          <p>Searching to <strong>rent a limousine</strong> should lead you to a service that values punctuality and presentation. Our specialized <Link href="/services/wedding-cars" className="text-accent-primary hover:underline">wedding car packages</Link> include:</p>
          <ul>
            <li>Immaculately detailed interior and exterior (V8 and standard stretch available).</li>
            <li>A sharply dressed, highly professional chauffeur experienced in VIP protocols.</li>
            <li>Coordination with your event planners and florists for custom floral decorations.</li>
          </ul>

          <h2>Booking Your Limousine in Advance</h2>
          <p>Because these vehicles are rare and highly sought after, <strong>hiring a limousine</strong> requires early planning. We recommend booking at least a month in advance, especially if your event falls on a weekend.</p>

          <h2>Conclusion</h2>
          <p>Your grand event deserves a grand entrance. Let Iris Tours handle the logistics while you enjoy the luxury. Browse our <Link href="/fleet/v8-limousine" className="text-accent-primary hover:underline">V8 Limousine details</Link> and reserve your vehicle today.</p>

          <div className="mt-12 text-center p-8 bg-bg-secondary rounded-2xl border border-border-primary">
            <h3 className="text-2xl font-bold text-text-primary mb-3">Book a Limousine for Your Event</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">Floral decoration and uniformed chauffeur included.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/923154973906?text=Hi!%20I%20want%20to%20inquire%20about%20renting%20a%20Limousine%20in%20Lahore." target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="px-8 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white">Inquire on WhatsApp</Button>
              </a>
              <Link href="/services/wedding-cars">
                <Button variant="outline" className="px-8 py-3">View Wedding Packages</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Toyota Hiace & Grand Cabin Rental Lahore | Group Tours - Iris Tours",
  description: "Rent Toyota Hiace Grand Cabin and Saloon Coaster in Lahore with driver for family trips, Northern Area tours, and corporate delegations. Best group rates.",
  alternates: {
    canonical: "https://iristours.net/blog/toyota-hiace-grand-cabin-rental",
  },
  openGraph: {
    title: "Toyota Hiace & Grand Cabin Rental Lahore | Iris Tours",
    description: "Spacious 14-seater Grand Cabin and Coaster bus rental in Lahore with experienced long-route chauffeurs.",
    url: "https://iristours.net/blog/toyota-hiace-grand-cabin-rental",
    images: ["https://iristours.net/blog/hiace-rental.jpg"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Group Travel Made Easy: Renting a Hiace or Grand Cabin in Lahore",
    "description": "How to choose between Toyota Hiace, Grand Cabin, and Coaster for family vacations and corporate tours in Pakistan.",
    "image": "https://iristours.net/blog/hiace-rental.jpg",
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
    "datePublished": "2024-04-01",
    "dateModified": new Date().toISOString().split("T")[0],
    "mainEntityOfPage": "https://iristours.net/blog/toyota-hiace-grand-cabin-rental"
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
          <span className="text-text-primary truncate">Toyota Hiace & Grand Cabin Rental</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          Group Travel Made Easy: Renting a Hiace or Grand Cabin in Lahore
        </h1>
        
        <img 
          src="/blog/hiace-rental.jpg" 
          alt="A white Toyota Grand Cabin parked with a family getting ready to travel" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-lg"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg leading-relaxed">
            Traveling with a large group brings its own unique set of logistical challenges. Whether you are organizing a corporate team-building retreat, a large family trip to the Northern Areas, or transporting guests for a destination wedding, coordinating multiple small cars is a recipe for delays and frustration.
          </p>
          
          <p>
            The solution? Keep everyone together. By opting for a <strong>Toyota Hiace rental</strong> or upgrading to a luxurious <strong>Grand Cabin</strong>, you ensure that the journey becomes a shared, joyful experience rather than a logistical headache.
          </p>

          <h2>Which Vehicle is Right for Your Group?</h2>
          <p>At Iris Tours, we maintain a diverse fleet of high-capacity vehicles. Understanding the differences will help you choose the perfect match for your itinerary.</p>

          <h3>7-Seater SUVs (BR-V, Fortuner, Prado)</h3>
          <p>Perfect for large single families (5 to 7 people). These vehicles offer excellent comfort and handle rough terrain beautifully. (Check out our <Link href="/fleet/toyota-fortuner" className="text-accent-primary hover:underline">Toyota Fortuner</Link>).</p>

          <h3>The Toyota Hiace (Standard 14-Seater)</h3>
          <p>The workhorse of group travel. A standard Hiace comfortably seats up to 14 passengers. It is highly reliable, economical, and air-conditioned.</p>

          <h3>The Toyota Grand Cabin</h3>
          <p>If you want the space of a Hiace but the comfort of a luxury sedan, the Grand Cabin is the answer. It features high roof clearance, plush reclining seats, enhanced suspension for a smooth ride, and superior AC cooling.</p>

          <h3>The Toyota Coaster (Saloon Bus)</h3>
          <p>For groups of 20 to 29 people, a <strong>Coaster rental</strong> is mandatory. It offers massive cabin space, dedicated luggage compartments, and the ability to stand and move around comfortably.</p>

          <h2>Tips for Organizing a Successful Group Trip</h2>
          <ul>
            <li><strong>Count the Luggage, Not Just the People:</strong> A 14-seater van cannot hold 14 people and 14 large suitcases. Leave empty seats for luggage if traveling for multi-day tours.</li>
            <li><strong>Plan Rest Stops:</strong> Traveling with a large group means bathroom breaks and food stops take longer. Coordinate with your chauffeur beforehand.</li>
            <li><strong>Centralize Pickup:</strong> Designate a central, easy-to-access meeting point in DHA, Gulberg, or Thokar Niaz Baig instead of multiple pickups in narrow residential alleys.</li>
          </ul>

          <h2>Conclusion</h2>
          <p>Don't let transportation logistics ruin your group event. Keep your family or team together, safe, and comfortable from departure to arrival. Explore our <Link href="/fleet?category=Van" className="text-accent-primary hover:underline">fleet of high-capacity vehicles</Link> and let our booking team help you select the perfect van.</p>

          <div className="mt-12 text-center p-8 bg-bg-secondary rounded-2xl border border-border-primary">
            <h3 className="text-2xl font-bold text-text-primary mb-3">Book a Hiace or Grand Cabin</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">Experienced highway chauffeurs for Northern trips and family tours.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/923154973906?text=Hi!%20I%20want%20to%20rent%20a%20Toyota%20Grand%20Cabin%20/%20Hiace%20in%20Lahore." target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="px-8 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white">Book on WhatsApp</Button>
              </a>
              <Link href="/fleet?category=Van">
                <Button variant="outline" className="px-8 py-3">View Van Fleet</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "A Day in the Walled City: Exploring Lahore With a Private Driver - Iris Tours",
  description: "Experience the magic of Badshahi Mosque and Lahore Fort without traffic stress. Read our travel diary on using a premium chauffeur car service in Lahore.",
  alternates: {
    canonical: "https://iristours.net/blog/a-day-in-the-walled-city-lahore",
  },
  openGraph: {
    title: "Exploring the Walled City of Lahore With a Private Chauffeur | Iris Tours",
    description: "Sightseeing in Lahore without traffic headaches. Professional chauffeurs for cultural and heritage tours.",
    url: "https://iristours.net/blog/a-day-in-the-walled-city-lahore",
    images: ["https://iristours.net/blog/lahore-cultural-tour.jpg"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "A Day in the Heart of Lahore: Exploring the Walled City with Iris Tours",
    "description": "Travel diary of exploring Badshahi Mosque, Lahore Fort, and Haveli Restaurant with a chauffeur-driven car rental.",
    "image": "https://iristours.net/blog/lahore-cultural-tour.jpg",
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
    "datePublished": "2024-02-15",
    "dateModified": new Date().toISOString().split("T")[0],
    "mainEntityOfPage": "https://iristours.net/blog/a-day-in-the-walled-city-lahore"
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
          <span className="text-text-primary truncate">A Day in the Walled City Lahore</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          A Day in the Heart of Lahore: Exploring the Walled City with Iris Tours
        </h1>
        
        <img 
          src="/blog/lahore-cultural-tour.jpg" 
          alt="A happy family stepping out of a luxurious black sedan near the beautiful Badshahi Mosque in Lahore" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-lg"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg leading-relaxed">
            <em>“Those who haven’t seen Lahore, haven’t been born,”</em> goes the famous Punjabi proverb. But anyone who has actually tried to navigate the narrow, bustling streets of the Walled City knows that finding parking near the Badshahi Mosque can age you a few years!
          </p>
          
          <p>
            Last weekend, my family decided to become tourists in our own city. Instead of taking three separate cars and fighting the chaotic traffic of circular road, we made a smart choice: we opted for a <strong>rent a car Lahore with driver</strong> from Iris Tours.
          </p>

          <h2>The Morning Departure</h2>
          <p>
            The journey started perfectly. A pristine, air-conditioned black sedan arrived at our <Link href="/areas/dha-phase-5-lahore" className="text-accent-primary hover:underline">DHA Phase 5</Link> residence exactly at 9:00 AM. Our chauffeur, dressed sharply and wearing a warm smile, held the door open for us. Instantly, the stress of the day evaporated.
          </p>
          <p>
            As we cruised down the Canal Road towards the old city, we actually got to talk to each other instead of yelling at passing motorcycles. This is the true luxury of a premium <strong>car service in Lahore</strong>.
          </p>

          <h2>Arriving at the Grandeur: Badshahi Mosque</h2>
          <p>
            As we approached the iconic Badshahi Mosque, traffic came to its usual standstill. Carts, rickshaws, and pedestrians wove an intricate dance. If I were driving, I would be sweating over my side mirrors. Instead, I was taking photos from the back seat.
          </p>
          <p>
            Our driver dropped us right at the VIP entrance. "Take your time, sir. Just call me five minutes before you are ready to leave, and I will be right here," he assured us.
          </p>

          <h2>A Feast at Haveli</h2>
          <p>
            After exploring the magnificent red sandstone courtyards of the mosque and the historic Lahore Fort, we were famished. We walked over to the famous food street and enjoyed a majestic rooftop view at Haveli Restaurant.
          </p>
          <p>
            When we were done, completely exhausted but happy, there was no long trek to a distant parking lot. One quick phone call, and our cool, comfortable ride pulled up to whisk us away.
          </p>

          <h2>Why You Should Always Hire a Driver for Inner City Tours</h2>
          <p>
            If you are planning to <strong>rent a car in Lahore</strong> for sightseeing, always choose the chauffeur-driven option. It completely transforms your day from a logistical nightmare into a luxurious, memorable vacation.
          </p>
          
          <p>
            Want to recreate this perfect day out? Check out Iris Tours' <Link href="/services/corporate-rentals" className="text-accent-primary hover:underline">chauffeur services</Link> and let them handle the traffic while you enjoy the view.
          </p>

          <div className="mt-12 text-center p-8 bg-bg-secondary rounded-2xl border border-border-primary">
            <h3 className="text-2xl font-bold text-text-primary mb-3">Book Your Lahore Sightseeing Tour</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">Explore Badshahi Mosque, Shalimar Gardens, and Liberty Market in air-conditioned luxury.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/923154973906?text=Hi!%20I%20want%20to%20book%20a%20car%20for%20a%20Lahore%20city%20tour." target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="px-8 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white">Book via WhatsApp</Button>
              </a>
              <Link href="/fleet">
                <Button variant="outline" className="px-8 py-3">View Fleet</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

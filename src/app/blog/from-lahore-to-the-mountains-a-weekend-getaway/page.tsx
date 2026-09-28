import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "From Lahore to the Mountains: Toyota Fortuner Weekend Getaway - Iris Tours",
  description: "Read the story of a road trip from Lahore to Northern Areas in a chauffeur-driven Toyota Fortuner. Mountain driving tips, comfort, and SUV rental rates.",
  alternates: {
    canonical: "https://iristours.net/blog/from-lahore-to-the-mountains-a-weekend-getaway",
  },
  openGraph: {
    title: "From Lahore to the Mountains: Weekend in a Toyota Fortuner | Iris Tours",
    description: "4x4 SUV road trip from Lahore to Northern Pakistan with a professional mountain driver.",
    url: "https://iristours.net/blog/from-lahore-to-the-mountains-a-weekend-getaway",
    images: ["https://iristours.net/blog/northern-areas-fortuner.jpg"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "From Lahore to the Mountains: A Weekend Getaway in a Toyota Fortuner",
    "description": "Travel diary of a mountain road trip from Lahore to the Northern Areas in a chauffeur-driven Toyota Fortuner.",
    "image": "https://iristours.net/blog/northern-areas-fortuner.jpg",
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
    "datePublished": "2024-02-20",
    "dateModified": new Date().toISOString().split("T")[0],
    "mainEntityOfPage": "https://iristours.net/blog/from-lahore-to-the-mountains-a-weekend-getaway"
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
          <span className="text-text-primary truncate">From Lahore to the Mountains</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 leading-tight">
          From Lahore to the Mountains: A Weekend Getaway in a Toyota Fortuner
        </h1>
        
        <img 
          src="/blog/northern-areas-fortuner.jpg" 
          alt="A white Toyota Fortuner SUV driving on a beautiful, lush green mountainous road in Northern Pakistan" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10 shadow-lg"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg leading-relaxed">
            The city summer was becoming unbearable. We needed an escape—fast. The plan was simple: four friends, one weekend, and a road trip from Lahore straight to the cool, crisp air of the Northern Areas.
          </p>
          
          <p>
            We knew that taking a small sedan on those steep, winding mountain roads was a terrible idea. We needed power, space, and reliability. So, we decided to search for a <strong>fortuner on rent in Lahore</strong>.
          </p>

          <h2>The Departure: Conquering the M2 Motorway</h2>
          <p>
            Iris Tours delivered a gleaming white Toyota Fortuner Sigma 4 to our door right on schedule. The best part? We opted for a driver. None of us wanted to deal with the fatigue of a 10-hour drive.
          </p>
          <p>
            The journey started as a smooth <strong>rent a car from Lahore to Islamabad</strong> experience. The Fortuner cruised down the M2 Motorway effortlessly. We adjusted the dual AC, pushed back our leather seats, and connected our playlist. The ride was so smooth that most of us slept through the Salt Range.
          </p>

          <h2>Into the Mountains: The Real Test</h2>
          <p>
            Past Islamabad, the terrain changed. The highways narrowed into steep, winding tracks wrapping around the mountains towards Naran and Kaghan. This is where the <strong>Toyota Fortuner for rent</strong> truly proved its worth.
          </p>
          <p>
            Our chauffeur navigated the sharp hairpin turns and uneven gravel patches with absolute expertise. While other smaller cars struggled and overheated on the inclines, our 4x4 SUV didn't even break a sweat. Looking out the window at the lush green valleys and roaring rivers, we felt completely safe and immensely comfortable.
          </p>

          <h2>The Ultimate Travel Hack in Pakistan</h2>
          <p>
            Many tourists think they need to drive themselves to have an adventure. But having a professional driver meant we could all enjoy the breathtaking scenery together, without anyone getting tired or stressed about the unfamiliar roads.
          </p>
          <p>
            If you are looking to <strong>rent a car in Pakistan</strong> for a northern adventure, I cannot recommend this setup enough. The combination of a powerful SUV and an experienced mountain driver is the ultimate travel hack.
          </p>

          <h2>Plan Your Own Escape</h2>
          <p>
            Ready for your own mountain getaway? You can browse the <Link href="/fleet/toyota-fortuner" className="text-accent-primary hover:underline">Toyota Fortuner</Link> details on Iris Tours and book your adventure today. Let them handle the driving; you just focus on making memories.
          </p>

          <div className="mt-12 text-center p-8 bg-bg-secondary rounded-2xl border border-border-primary">
            <h3 className="text-2xl font-bold text-text-primary mb-3">Book Your Northern Expedition SUV</h3>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">4x4 Prado, Fortuner, and V8 with expert mountain drivers.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/923154973906?text=Hi!%20I%20want%20to%20rent%20an%20SUV%20for%20a%20Northern%20Pakistan%20tour." target="_blank" rel="noopener noreferrer">
                <Button variant="primary" className="px-8 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white">Book on WhatsApp</Button>
              </a>
              <Link href="/tours">
                <Button variant="outline" className="px-8 py-3">View Tour Packages</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

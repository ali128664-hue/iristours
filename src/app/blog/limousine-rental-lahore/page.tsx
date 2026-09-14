import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Rent a Limousine in Lahore | Premium Wedding Car Rentals",
  description: "Make your grand entrance unforgettable. Rent a luxurious stretch limousine for weddings, VIP events, and red-carpet arrivals in Lahore.",
};

export default function BlogPost() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Rent a Limousine in Lahore: Make an Unforgettable Grand Entrance</h1>
        
        <img 
          src="/blog/limousine-wedding.jpg" 
          alt="A luxurious white stretch limousine parked outside a grand wedding marquee in Lahore at night" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg">In a city known for its vibrant culture and extravagant celebrations, arriving in style is not just an option—it is an expectation. Whether it is a grand Baraat, a lavish corporate gala, or a high-profile VIP arrival, nothing turns heads quite like the elongated elegance of a stretch limousine.</p>
          
          <p>If you are looking for a <strong>limousine rent in Lahore</strong>, Iris Tours offers the most pristine, opulent fleet designed to make your special day truly unforgettable.</p>

          <h2>Why Hire a Limousine for Your Wedding?</h2>
          <p>The query for a <strong>hire of limousine</strong> spikes heavily during Lahore's winter wedding season. Here is why couples and planners consistently choose this premium vehicle:</p>
          <ul>
            <li><strong>The Ultimate Photo Op:</strong> A beautifully decorated white or black limo provides a stunning backdrop for wedding photography.</li>
            <li><strong>Bridal Comfort:</strong> Voluminous wedding dresses require space. The massive interior of a limo ensures the bride and groom can sit comfortably without wrinkling their attire.</li>
            <li><strong>The VIP Experience:</strong> Enjoy privacy partitions, custom ambient lighting, and luxury seating as you transition from the salon to the wedding hall.</li>
          </ul>

          <h2>Our Premium Limousine Services</h2>
          <p>Searching to <strong>rent a limousine</strong> should lead you to a service that values punctuality and presentation. Our specialized <Link href="/services/wedding-cars" className="text-accent-primary">wedding car packages</Link> include:</p>
          <ul>
            <li>Immaculately detailed interior and exterior (V8 and standard stretch available).</li>
            <li>A sharply dressed, highly professional chauffeur experienced in VIP protocols.</li>
            <li>Coordination with your event planners and florists for custom floral decorations.</li>
          </ul>

          <h2>Booking Your Limousine in Advance</h2>
          <p>Because these vehicles are rare and highly sought after, <strong>hiring a limousine</strong> requires early planning. We recommend booking at least a month in advance, especially if your event falls on a weekend.</p>

          <h2>Conclusion</h2>
          <p>Your grand event deserves a grand entrance. Let Iris Tours handle the logistics while you enjoy the luxury. Browse our <Link href="/fleet/v8-limousine" className="text-accent-primary">V8 Limousine details</Link> and reserve your premium vehicle today.</p>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button variant="primary" className="px-8 py-3">Reserve Your Limousine</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

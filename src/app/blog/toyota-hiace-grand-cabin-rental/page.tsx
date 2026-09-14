import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Toyota Hiace & Grand Cabin Rental | Group Tours & Travel",
  description: "Planning a family trip or corporate tour? Rent a Toyota Hiace, Grand Cabin, or Coaster in Lahore with Iris Tours for spacious, comfortable group travel.",
};

export default function BlogPost() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Group Travel Made Easy: Renting a Hiace or Grand Cabin in Lahore</h1>
        
        <img 
          src="/blog/hiace-rental.jpg" 
          alt="A white Toyota Grand Cabin parked with a family getting ready to travel" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg">Traveling with a large group brings its own unique set of logistical challenges. Whether you are organizing a corporate team-building retreat, a large family trip to the Northern Areas, or transporting guests for a destination wedding, coordinating multiple small cars is a recipe for delays and frustration.</p>
          
          <p>The solution? Keep everyone together. By opting for a <strong>Toyota Hiace rental</strong> or upgrading to a luxurious <strong>Grand Cabin</strong>, you ensure that the journey becomes a shared, joyful experience rather than a logistical nightmare.</p>

          <h2>Which Vehicle is Right for Your Group?</h2>
          <p>At Iris Tours, we maintain a diverse fleet of high-capacity vehicles. Understanding the differences will help you choose the perfect match for your itinerary.</p>

          <h3>7-Seater SUVs (BR-V, Fortuner)</h3>
          <p>Perfect for large, single families (5 to 7 people). These vehicles offer excellent comfort and handle rough terrain beautifully. (Check out our <Link href="/fleet/toyota-fortuner" className="text-accent-primary">Toyota Fortuner</Link>).</p>

          <h3>The Toyota Hiace (Standard)</h3>
          <p>The workhorse of group travel. A standard Hiace comfortably seats up to 14 passengers. It is highly reliable and highly cost-effective.</p>

          <h3>The Toyota Grand Cabin</h3>
          <p>If you want the space of a Hiace but the comfort of a luxury sedan, the Grand Cabin is the answer. It features plush, reclining seats, enhanced suspension for a smoother ride, and superior sound insulation.</p>

          <h3>The Coaster</h3>
          <p>For groups of 20 to 29 people, a <strong>Coaster rental</strong> is mandatory. It offers massive cabin space, dedicated luggage compartments, and the ability to stand and move around comfortably.</p>

          <h2>Tips for Organizing a Successful Group Trip</h2>
          <ul>
            <li><strong>Count the Luggage, Not Just the People:</strong> A 14-seater van cannot hold 14 people and 14 large suitcases. Leave empty seats for luggage if required.</li>
            <li><strong>Plan Rest Stops:</strong> Traveling with a large group means bathroom breaks and food stops take longer.</li>
            <li><strong>Centralize Pickup:</strong> Designate a central, easy-to-access meeting point instead of individual pickups in narrow streets.</li>
          </ul>

          <h2>Conclusion</h2>
          <p>Don't let transportation logistics ruin your group event. Keep your family or team together, safe, and comfortable from departure to arrival. Explore our <Link href="/fleet" className="text-accent-primary">fleet of high-capacity vehicles</Link> and let our booking team help you select the perfect van.</p>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button variant="primary" className="px-8 py-3">Contact Our Booking Team</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

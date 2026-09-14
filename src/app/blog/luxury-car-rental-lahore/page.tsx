import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Luxury Car Rental Lahore | Rent VIP Sedans & Limousines",
  description: "Elevate your journey with Iris Tours' luxury car rental in Lahore. Rent premium vehicles like Mercedes, Audi, and limousines with professional VIP chauffeurs today.",
};

export default function BlogPost() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Experience True Elegance: The Ultimate Guide to Luxury Car Rental in Lahore</h1>
        
        <img 
          src="/blog/luxury-rental.jpg" 
          alt="A sleek black Mercedes sedan parked outside an upscale building in Lahore" 
          className="w-full h-[400px] object-cover rounded-3xl mb-10"
        />

        <div className="prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary max-w-none">
          <p className="text-lg">Lahore is a city that celebrates grandeur. From the bustling, high-end commercial avenues of Gulberg to the sprawling, manicured estates of DHA, the city's elite lifestyle demands transportation that matches its prestige. Whether you are hosting international corporate delegates or attending a high-profile wedding, a standard rental simply won't suffice.</p>
          
          <p>This is where Iris Tours steps in, offering a flawless <strong>luxury car rental</strong> experience tailored to those who refuse to compromise on style, comfort, or service.</p>

          <h2>What Defines a True VIP Car Rental Experience?</h2>
          <p>Renting a premium vehicle isn't just about the badge on the hood; it is about the entire ecosystem of service that accompanies it. Our VIP car service is defined by:</p>
          <ul>
            <li><strong>Immaculate Fleet:</strong> Our luxury vehicles are maintained in absolute showroom condition. No scratches, no odors, just pure perfection.</li>
            <li><strong>Discreet, Elite Chauffeurs:</strong> A luxury car requires a luxury driver. Our chauffeurs are highly trained in defensive driving, route optimization, and VIP etiquette.</li>
            <li><strong>Seamless Logistics:</strong> From a pickup at <Link href="/services/airport-transfer" className="text-accent-primary">Allama Iqbal International Airport</Link> to a grand entrance at a <Link href="/services/wedding-cars" className="text-accent-primary">wedding hall on Mall Road</Link>, the execution is flawless.</li>
          </ul>

          <h2>Top Luxury Cars for Rent in Our Fleet</h2>
          <p>When you <Link href="/fleet" className="text-accent-primary">browse our premium selection</Link>, you will find vehicles suited for every high-end occasion.</p>

          <h3>The Corporate Standard: Mercedes & Audi</h3>
          <p>Nothing commands respect in the corporate world quite like a Mercedes-Benz or an Audi e-tron. These vehicles offer whisper-quiet cabins, making them perfect for executive travel, airport transfers, and diplomatic visits.</p>

          <h3>The Grand Entrance: Limousines & Vintage Cars</h3>
          <p>If you are planning a wedding or a major red-carpet event, a limousine rental offers unmatched presence. The elongated chassis and opulent interiors guarantee that all eyes will be on you when you arrive.</p>

          <h2>Booking Considerations for High-End Vehicles</h2>
          <ul>
            <li><strong>Advance Notice:</strong> Premium vehicles are in extremely high demand. Book at least two weeks in advance.</li>
            <li><strong>Custom Requests:</strong> Need specific refreshments in the cabin? Inform our booking agents; our VIP service accommodates bespoke requests.</li>
          </ul>

          <h2>Conclusion</h2>
          <p>Your transportation should be an extension of your personal or corporate brand. Don't settle for ordinary when extraordinary is just a phone call away. Experience the finest fleet in the city.</p>

          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button variant="primary" className="px-8 py-3">Reserve Your VIP Vehicle</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

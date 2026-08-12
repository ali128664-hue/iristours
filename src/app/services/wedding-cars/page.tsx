import { Metadata } from "next";
import { Heart, Sparkles, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Wedding Cars | Iris Tours",
  description: "Make your special day unforgettable with our premium fleet of decorated wedding cars. Rent Mercedes, BMW, Audi, and Land Cruiser for weddings in Pakistan.",
};

export default function WeddingCarsPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-border-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1920&auto=format&fit=crop"
            alt="Wedding Cars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/50 to-bg-primary" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <Heart className="w-16 h-16 text-accent-secondary mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-tight">
            Luxury <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-yellow-200">Wedding Cars</span>
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Premium Fleet • Floral Decorations • Professional Chauffeurs
          </p>
          <a href="https://wa.me/923154973906?text=I%20want%20to%20book%20a%20wedding%20car" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="px-10 py-4">Plan Your Big Day</Button>
          </a>
        </div>
      </div>

      {/* Services Content */}
      <div className="container mx-auto px-6 md:px-12 py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-bg-secondary p-8 rounded-3xl border border-border-primary text-center">
            <Sparkles size={40} className="text-accent-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">Floral Decorations</h3>
            <p className="text-text-secondary leading-relaxed">
              We offer bespoke floral decoration services tailored to your wedding theme and preferences.
            </p>
          </div>
          <div className="bg-bg-secondary p-8 rounded-3xl border border-border-primary text-center">
            <ShieldCheck size={40} className="text-accent-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">Professional Drivers</h3>
            <p className="text-text-secondary leading-relaxed">
              Our impeccably dressed chauffeurs ensure a smooth, luxurious, and stress-free ride on your special day.
            </p>
          </div>
          <div className="bg-bg-secondary p-8 rounded-3xl border border-border-primary text-center">
            <Heart size={40} className="text-accent-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">Wedding Convoy</h3>
            <p className="text-text-secondary leading-relaxed">
              Book multiple vehicles for the bride, groom, and VIP family members with our special convoy packages.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-bg-secondary rounded-3xl p-12 text-center border border-border-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Make Your Grand Entrance</h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              From Mercedes S-Class to Toyota Land Cruiser V8, we have the perfect vehicle to match your style.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/923154973906?text=I%20want%20to%20book%20a%20wedding%20car" target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Contact on WhatsApp</Button>
              </a>
              <Link href="/fleet">
                <Button variant="secondary">Browse Luxury Fleet</Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import { Metadata } from "next";
import { Building, ShieldCheck, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Corporate Car Rentals | Iris Tours",
  description: "Executive and corporate car rental services in Pakistan. Monthly contracts, VIP transport, and reliable business travel solutions.",
};

export default function CorporateRentalsPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-border-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop"
            alt="Corporate Rentals"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/50 to-bg-primary" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <Building className="w-16 h-16 text-text-primary mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-tight">
            Corporate <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-text-secondary">Mobility Solutions</span>
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Monthly Contracts • Executive Travel • Dedicated Account Managers
          </p>
          <a href="https://wa.me/923154973906?text=I%20need%20corporate%20rental%20services" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="px-10 py-4 text-bg-primary bg-text-primary hover:bg-text-secondary">Partner With Us</Button>
          </a>
        </div>
      </div>

      {/* Services Content */}
      <div className="container mx-auto px-6 md:px-12 py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-bg-secondary p-8 rounded-3xl border border-border-primary text-center">
            <Briefcase size={40} className="text-text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">Monthly Contracts</h3>
            <p className="text-text-secondary leading-relaxed">
              Flexible and cost-effective monthly rental plans for businesses, including maintenance and replacement vehicles.
            </p>
          </div>
          <div className="bg-bg-secondary p-8 rounded-3xl border border-border-primary text-center">
            <ShieldCheck size={40} className="text-text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">Executive Chauffeurs</h3>
            <p className="text-text-secondary leading-relaxed">
              Highly trained, discreet, and professional drivers experienced in navigating executive transport requirements.
            </p>
          </div>
          <div className="bg-bg-secondary p-8 rounded-3xl border border-border-primary text-center">
            <Building size={40} className="text-text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">VIP Delegation Transport</h3>
            <p className="text-text-secondary leading-relaxed">
              Seamless logistics for foreign delegates and VIP guests, ensuring absolute comfort and security.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-bg-secondary rounded-3xl p-12 text-center border border-border-primary">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Elevate Your Corporate Travel</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Join the leading businesses in Pakistan who trust Iris Tours for their executive transportation needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/923154973906?text=I%20need%20corporate%20rental%20services" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" className="text-bg-primary bg-text-primary hover:bg-text-secondary border-none">Get a Corporate Quote</Button>
            </a>
            <Link href="/fleet">
              <Button variant="secondary">View Executive Fleet</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

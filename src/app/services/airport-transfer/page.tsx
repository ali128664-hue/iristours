import { Metadata } from "next";
import { Plane, Clock, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium Airport Transfers | Iris Tours",
  description: "Reliable, luxurious, and on-time airport transfers across major airports in Pakistan. VIP meet & greet service.",
};

const airports = [
  { name: "Allama Iqbal Int. Airport", code: "LHE", city: "Lahore" },
  { name: "Islamabad Int. Airport", code: "ISB", city: "Islamabad" },
  { name: "Jinnah Int. Airport", code: "KHI", city: "Karachi" },
  { name: "Multan Int. Airport", code: "MUX", city: "Multan" },
  { name: "Sialkot Int. Airport", code: "SKT", city: "Sialkot" },
  { name: "Peshawar Int. Airport", code: "PEW", city: "Peshawar" },
];

export default function AirportTransferPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden border-b border-border-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1920&auto=format&fit=crop"
            alt="Airport Transfer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/50 to-bg-primary" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
          <Plane className="w-16 h-16 text-accent-primary mx-auto mb-6 opacity-80" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight leading-tight">
            Premium Airport <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-blue-400">Transfers Across Pakistan</span>
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Professional Drivers • Flight Tracking • 24/7 Service • Luxury Vehicles
          </p>
          <a href="https://wa.me/923154973906?text=I%20need%20an%20airport%20transfer" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" className="px-10 py-4">Book on WhatsApp</Button>
          </a>
        </div>
      </div>

      {/* Services Content */}
      <div className="container mx-auto px-6 md:px-12 py-24">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-bg-secondary p-8 rounded-3xl border border-border-primary text-center">
            <Clock size={40} className="text-accent-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">Punctuality Guaranteed</h3>
            <p className="text-text-secondary leading-relaxed">
              We track your flight in real-time. Whether you arrive early or late, your chauffeur will be waiting.
            </p>
          </div>
          <div className="bg-bg-secondary p-8 rounded-3xl border border-border-primary text-center">
            <ShieldCheck size={40} className="text-accent-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">VIP Meet & Greet</h3>
            <p className="text-text-secondary leading-relaxed">
              Your chauffeur will meet you at the arrivals hall with a personalized name board and assist with luggage.
            </p>
          </div>
          <div className="bg-bg-secondary p-8 rounded-3xl border border-border-primary text-center">
            <Plane size={40} className="text-accent-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-text-primary mb-4">All Major Airports</h3>
            <p className="text-text-secondary leading-relaxed">
              Operating seamlessly across Lahore, Islamabad, Karachi, and other major hubs in Pakistan.
            </p>
          </div>
        </div>

        {/* Covered Airports */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-12 text-center">Airports We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {airports.map((airport, idx) => (
              <div key={idx} className="bg-bg-card p-6 rounded-2xl border border-border-primary flex items-center gap-4 hover:border-accent-primary transition-colors cursor-pointer group">
                <div className="bg-bg-primary w-16 h-16 rounded-xl flex items-center justify-center border border-border-primary flex-shrink-0 group-hover:bg-accent-primary/20 transition-colors">
                  <span className="text-xl font-bold text-text-primary group-hover:text-accent-primary">{airport.code}</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary mb-1">{airport.name}</h4>
                  <p className="text-text-secondary text-sm flex items-center gap-1"><MapPin size={14}/> {airport.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-accent-primary/10 rounded-3xl p-12 text-center border border-accent-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">Need a ride from the airport?</h2>
          <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
            Book your premium airport transfer today. Skip the taxi lines and travel in ultimate comfort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://wa.me/923154973906?text=I%20need%20an%20airport%20transfer" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Book on WhatsApp</Button>
            </a>
            <Link href="/fleet">
              <Button variant="secondary">View Our Fleet</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

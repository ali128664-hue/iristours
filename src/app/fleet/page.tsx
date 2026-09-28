import { Metadata } from "next";
import FleetClient from "@/components/fleet/FleetClient";
import fleetData from "@/data/fleet.json";

export const metadata: Metadata = {
  title: "Rent a Car Fleet Lahore & Islamabad | Luxury SUVs, Sedans & Vans - Iris Tours",
  description: "Explore 36+ premium vehicles for rent in Lahore DHA & Islamabad. Toyota Prado, Fortuner, Land Cruiser V8, Mercedes, Civic, and Hiace Grand Cabin with chauffeurs.",
  alternates: {
    canonical: "https://iristours.net/fleet",
  },
  openGraph: {
    title: "Rent a Car Fleet Lahore & Islamabad | Iris Tours",
    description: "Explore 36+ luxury SUVs, sedans, and vans for rent in Lahore DHA and Islamabad with verified drivers.",
    url: "https://iristours.net/fleet",
  }
};

export default function FleetPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Fleet Hero */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-border-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury Cars"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/70 to-bg-primary" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Perfect Ride</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Explore our curated selection of premium vehicles designed to elevate your travel experience.
          </p>
        </div>
      </div>

      {/* Fleet Client Component (Handles Search & Filters) */}
      <FleetClient initialData={fleetData} />
    </div>
  );
}

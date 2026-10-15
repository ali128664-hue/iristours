import { Metadata } from "next";
import FleetClient from "@/components/fleet/FleetClient";
import fleetData from "@/data/fleet.json";

export const metadata: Metadata = {
  title: "Rent a Car Fleet in Lahore | 3D Luxury SUVs, Sedans & Vans - Iris Tours",
  description: "Browse 36+ verified rental cars in Lahore in an interactive 3D fleet showcase. Toyota Fortuner, Prado, Land Cruiser V8, Mercedes, Civic, and Hiace Grand Cabin with professional chauffeurs. Book 24/7!",
  alternates: {
    canonical: "https://iristours.net/fleet",
  },
  openGraph: {
    title: "Rent a Car Fleet in Lahore | 3D Luxury SUVs, Sedans & Vans - Iris Tours",
    description: "Browse 36+ verified rental cars in Lahore in an interactive 3D fleet showcase. Toyota Fortuner, Prado, Land Cruiser V8, Mercedes, Civic, and Hiace Grand Cabin with professional chauffeurs.",
    url: "https://iristours.net/fleet",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/blog/rent-a-car-lahore-fleet-lineup.jpg",
        width: 1200,
        height: 630,
        alt: "Rent a Car Fleet in Lahore - Iris Tours 3D Showcase",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent a Car Fleet in Lahore | 3D Luxury SUVs & Sedans - Iris Tours",
    description: "Browse 36+ verified rental cars in Lahore with professional chauffeurs in our interactive 3D fleet showcase.",
    images: ["https://iristours.net/blog/rent-a-car-lahore-fleet-lineup.jpg"],
  },
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

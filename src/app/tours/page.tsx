import { Metadata } from "next";
import TourCard from "@/components/tours/TourCard";
import toursData from "@/data/tours.json";

export const metadata: Metadata = {
  title: "Northern Pakistan Tours | Iris Tours",
  description: "Explore the breathtaking beauty of Northern Pakistan with our luxury tour packages. Travel in comfort with premium SUVs and professional drivers.",
  openGraph: {
    title: "Northern Pakistan Tours | Iris Tours",
    description: "Premium luxury tour packages for Northern Pakistan.",
  }
};

export default function ToursPage() {
  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Tours Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-border-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1588667614138-028f096cf5d5?q=80&w=1920&auto=format&fit=crop"
            alt="Northern Pakistan Beauty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/50 to-bg-primary" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h2 className="text-accent-secondary font-semibold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
            Discover Paradise
          </h2>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 tracking-tight">
            Explore the Beauty of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-blue-400">Northern Pakistan</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Travel in absolute luxury with our premium SUVs, expert mountain drivers, and meticulously curated itineraries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toursData.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

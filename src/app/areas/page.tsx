import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Map } from "lucide-react";
import serviceAreas from "@/data/serviceAreas.json";

export const metadata: Metadata = {
  title: "Service Areas | Rent a Car in Lahore, Islamabad & More - Iris Tours",
  description: "Browse our complete list of service areas across Pakistan. We provide premium rent a car services in Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Gujranwala, and Sialkot.",
};

export default function AreasIndexPage() {
  // Group areas by city first, then by their "group" property
  const cities = serviceAreas.reduce((acc, area) => {
    if (!acc[area.city]) {
      acc[area.city] = {};
    }
    if (!acc[area.city][area.group]) {
      acc[area.city][area.group] = [];
    }
    acc[area.city][area.group].push(area);
    return acc;
  }, {} as Record<string, Record<string, typeof serviceAreas>>);

  return (
    <div className="bg-bg-primary min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[30vh] min-h-[300px] flex items-center justify-center overflow-hidden border-b border-border-primary">
        <div className="absolute inset-0 bg-bg-secondary" />
        <div className="relative z-10 text-center px-6 mt-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Service Areas</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We provide premium rent a car services across all major cities in Pakistan.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 space-y-24">
        {Object.entries(cities).map(([cityName, groups]) => (
          <div key={cityName} id={cityName} className="scroll-mt-32">
            
            {/* City Header */}
            <div className="flex items-center gap-4 mb-10 pb-4 border-b border-border-primary">
              <div className="w-14 h-14 rounded-full bg-accent-primary/10 flex items-center justify-center">
                <Map className="text-accent-primary" size={28} />
              </div>
              <h2 className="text-4xl font-bold text-text-primary">{cityName}</h2>
            </div>

            {/* Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(groups).map(([groupName, areas]) => (
                <div key={groupName} className="bg-bg-secondary p-6 rounded-2xl border border-border-primary shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                    <MapPin className="text-accent-primary" size={24} />
                    {groupName}
                  </h3>
                  <ul className="space-y-3">
                    {areas.map(area => (
                      <li key={area.slug}>
                        <Link 
                          href={`/areas/${area.slug}`}
                          className="text-text-secondary hover:text-accent-primary hover:pl-2 transition-all duration-300 flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50" />
                          {area.name.split(',')[0]} {/* Show only the area name, hide the city name here since it's redundant */}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

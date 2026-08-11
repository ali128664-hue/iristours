import { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import serviceAreas from "@/data/serviceAreas.json";

export const metadata: Metadata = {
  title: "Service Areas | Rent a Car in Lahore - Iris Tours",
  description: "Browse our complete list of service areas across Lahore. We provide premium rent a car services with professional chauffeurs in DHA, Model Town, Gulberg, Bahria Town and more.",
};

export default function AreasIndexPage() {
  // Group areas by their "group" property
  const groupedAreas = serviceAreas.reduce((acc, area) => {
    if (!acc[area.group]) {
      acc[area.group] = [];
    }
    acc[area.group].push(area);
    return acc;
  }, {} as Record<string, typeof serviceAreas>);

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
            We provide premium rent a car services across all major locations in Lahore.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedAreas).map(([groupName, areas]) => (
            <div key={groupName} className="bg-bg-secondary p-6 rounded-2xl border border-border-primary shadow-sm hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                <MapPin className="text-accent-primary" size={24} />
                {groupName}
              </h2>
              <ul className="space-y-3">
                {areas.map(area => (
                  <li key={area.slug}>
                    <Link 
                      href={`/areas/${area.slug}`}
                      className="text-text-secondary hover:text-accent-primary hover:pl-2 transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/50" />
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, PhoneCall, ShieldCheck, Clock } from "lucide-react";
import serviceAreas from "@/data/serviceAreas.json";
import fleetData from "@/data/fleet.json";
import VehicleCard from "@/components/fleet/VehicleCard";

// Generate static params so Next.js pre-builds these 100+ pages for super fast SEO performance
export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = serviceAreas.find(a => a.slug === slug);
  if (!area) return { title: 'Area Not Found' };

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
    }
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = serviceAreas.find(a => a.slug === slug);
  if (!area) notFound();

  // Pick top 6 cars to showcase
  const showcaseCars = fleetData.slice(0, 6);

  return (
    <div className="bg-bg-primary min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-border-primary">
        <div className="absolute inset-0 bg-bg-secondary" />
        <div className="relative z-10 text-center px-6 mt-16">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary font-medium text-sm mb-6">
            <MapPin size={16} />
            Service Area: {area.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Rent a Car in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">{area.name}</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Experience premium mobility solutions in {area.name}, Lahore with Iris Tours.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16">
        
        {/* SEO Content Section */}
        <div className="max-w-4xl mx-auto mb-20 bg-bg-secondary p-8 md:p-12 rounded-3xl border border-border-primary shadow-sm prose prose-invert prose-p:text-text-secondary prose-headings:text-text-primary">
          <h2 className="text-3xl font-bold mb-6">Why Rent a Car in {area.name} with Us?</h2>
          <p className="text-lg leading-relaxed mb-6">{area.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mb-4">
                <Clock className="text-accent-primary" size={24} />
              </div>
              <h3 className="font-bold text-text-primary mb-2">Prompt Service</h3>
              <p className="text-sm text-text-secondary">Quick pickup and drop-off in {area.name}.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mb-4">
                <ShieldCheck className="text-accent-primary" size={24} />
              </div>
              <h3 className="font-bold text-text-primary mb-2">Safe & Secure</h3>
              <p className="text-sm text-text-secondary">Professional, verified chauffeurs.</p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center mb-4">
                <PhoneCall className="text-accent-primary" size={24} />
              </div>
              <h3 className="font-bold text-text-primary mb-2">24/7 Support</h3>
              <p className="text-sm text-text-secondary">Always here to help you on your journey.</p>
            </div>
          </div>
        </div>

        {/* Fleet Showcase */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Available Vehicles in {area.name}</h2>
          <p className="text-text-secondary">Choose from our diverse fleet of luxury and economy cars.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {showcaseCars.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/fleet" className="inline-block px-8 py-4 bg-bg-secondary border border-border-primary rounded-xl text-text-primary font-bold hover:border-accent-primary hover:text-accent-primary transition-all">
            View All Vehicles
          </Link>
        </div>
        
        {/* Call to Action */}
        <div className="mt-24 text-center">
          <Link
            href={`https://wa.me/923066305875?text=Hi!%20I%20am%20looking%20to%20rent%20a%20car%20in%20${encodeURIComponent(area.name)}.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-tr from-accent-secondary to-accent-primary text-white font-bold text-lg uppercase tracking-wider hover:brightness-110 shadow-lg shadow-accent-primary/20 transition-all hover:-translate-y-1"
          >
            <PhoneCall size={20} />
            Book Your Ride in {area.name}
          </Link>
        </div>

      </div>
    </div>
  );
}

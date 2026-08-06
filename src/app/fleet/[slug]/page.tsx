import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Settings, Users, Fuel, Briefcase, CheckCircle2 } from "lucide-react";
import fleetData from "@/data/fleet.json";
import VehicleGallery from "@/components/fleet/VehicleGallery";
import VehicleDetailClient from "@/components/fleet/VehicleDetailClient";
import VehicleCard from "@/components/fleet/VehicleCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return fleetData.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = fleetData.find((v) => v.slug === slug);

  if (!vehicle) {
    return { title: "Vehicle Not Found" };
  }

  return {
    title: vehicle.seo.title,
    description: vehicle.seo.description,
    openGraph: {
      title: vehicle.seo.title,
      description: vehicle.seo.description,
      images: [vehicle.images.thumbnail],
    }
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { slug } = await params;
  const vehicle = fleetData.find((v) => v.slug === slug);

  if (!vehicle) {
    notFound();
  }

  // Find related vehicles
  const relatedVehicles = fleetData.filter(v => vehicle.relatedVehicles.includes(v.slug));

  return (
    <div className="bg-bg-primary min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2 text-text-secondary text-sm font-medium tracking-wider uppercase">
            <span>Fleet</span>
            <span>/</span>
            <span className="text-accent-primary">{vehicle.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-2">{vehicle.name}</h1>
          <p className="text-lg text-text-secondary">{vehicle.brand} • {vehicle.year}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Gallery Component */}
            <VehicleGallery images={vehicle.images.gallery} alt={vehicle.name} />

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4 border-b border-border-primary pb-2">Overview</h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {vehicle.description}
              </p>
            </section>

            {/* Key Specifications Grid */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-primary pb-2">Key Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-bg-secondary p-4 rounded-xl border border-border-primary flex flex-col items-center justify-center text-center">
                  <Settings className="text-accent-primary mb-2" size={24} />
                  <span className="text-sm text-text-secondary mb-1">Transmission</span>
                  <span className="font-semibold text-text-primary">{vehicle.transmission}</span>
                </div>
                <div className="bg-bg-secondary p-4 rounded-xl border border-border-primary flex flex-col items-center justify-center text-center">
                  <Fuel className="text-accent-primary mb-2" size={24} />
                  <span className="text-sm text-text-secondary mb-1">Fuel</span>
                  <span className="font-semibold text-text-primary">{vehicle.fuel}</span>
                </div>
                <div className="bg-bg-secondary p-4 rounded-xl border border-border-primary flex flex-col items-center justify-center text-center">
                  <Users className="text-accent-primary mb-2" size={24} />
                  <span className="text-sm text-text-secondary mb-1">Passengers</span>
                  <span className="font-semibold text-text-primary">{vehicle.seats}</span>
                </div>
                <div className="bg-bg-secondary p-4 rounded-xl border border-border-primary flex flex-col items-center justify-center text-center">
                  <Briefcase className="text-accent-primary mb-2" size={24} />
                  <span className="text-sm text-text-secondary mb-1">Luggage</span>
                  <span className="font-semibold text-text-primary">{vehicle.specifications.luggage}</span>
                </div>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-primary pb-2">Premium Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {vehicle.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-primary flex-shrink-0" size={20} />
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Policies */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-primary pb-2">Rental Policies</h2>
              <ul className="space-y-4 text-text-secondary">
                <li><strong className="text-text-primary">Fuel:</strong> {vehicle.policies.fuelPolicy}</li>
                <li><strong className="text-text-primary">Mileage:</strong> {vehicle.policies.mileagePolicy}</li>
                <li><strong className="text-text-primary">Outstation:</strong> {vehicle.policies.outstationPolicy}</li>
              </ul>
            </section>

          </div>

          {/* Sidebar (Booking & Summary) */}
          <div className="lg:col-span-1">
            <VehicleDetailClient vehicle={vehicle} />
          </div>
        </div>

        {/* Related Vehicles */}
        {relatedVehicles.length > 0 && (
          <div className="mt-24 border-t border-border-primary pt-16">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">Similar Vehicles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedVehicles.slice(0,3).map((relatedVehicle, index) => (
                <VehicleCard key={relatedVehicle.id} vehicle={relatedVehicle} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

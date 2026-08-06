import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Clock, Users, Car, MapPin, CheckCircle2 } from "lucide-react";
import toursData from "@/data/tours.json";
import VehicleGallery from "@/components/fleet/VehicleGallery";
import TourDetailClient from "@/components/tours/TourDetailClient";
import TourCard from "@/components/tours/TourCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return toursData.map((tour) => ({
    slug: tour.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = toursData.find((t) => t.slug === slug);

  if (!tour) {
    return { title: "Tour Not Found" };
  }

  return {
    title: tour.seo.title,
    description: tour.seo.description,
    openGraph: {
      title: tour.seo.title,
      description: tour.seo.description,
      images: [tour.images.thumbnail],
    }
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = toursData.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  // Find related tours (just taking others for demo)
  const relatedTours = toursData.filter(t => t.slug !== tour.slug).slice(0, 3);

  return (
    <div className="bg-bg-primary min-h-screen py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2 text-text-secondary text-sm font-medium tracking-wider uppercase">
            <span>Tours</span>
            <span>/</span>
            <span className="text-accent-primary">Northern Pakistan</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">{tour.title}</h1>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-bg-secondary px-4 py-2 rounded-full border border-border-primary">
              <Clock size={16} className="text-accent-primary" />
              <span className="text-sm font-medium">{tour.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-bg-secondary px-4 py-2 rounded-full border border-border-primary">
              <Users size={16} className="text-accent-primary" />
              <span className="text-sm font-medium">Max {tour.maxPassengers} Persons</span>
            </div>
            <div className="flex items-center gap-2 bg-bg-secondary px-4 py-2 rounded-full border border-border-primary">
              <Car size={16} className="text-accent-primary" />
              <span className="text-sm font-medium">{tour.recommendedVehicle}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Gallery Component */}
            <VehicleGallery images={tour.images.gallery} alt={tour.title} />

            {/* Description */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-4 border-b border-border-primary pb-2">Tour Overview</h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                {tour.description}
              </p>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-primary pb-2">Places to Visit</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 bg-bg-secondary p-4 rounded-xl border border-border-primary">
                    <MapPin className="text-accent-secondary flex-shrink-0" size={20} />
                    <span className="text-text-primary font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Included */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6 border-b border-border-primary pb-2">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tour.included.map((item: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent-primary flex-shrink-0" size={20} />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar (Booking & Summary) */}
          <div className="lg:col-span-1">
            <TourDetailClient tour={tour} />
          </div>
        </div>

        {/* Related Tours */}
        {relatedTours.length > 0 && (
          <div className="mt-24 border-t border-border-primary pt-16">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">More Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedTours.map((relatedTour, index) => (
                <TourCard key={relatedTour.id} tour={relatedTour} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

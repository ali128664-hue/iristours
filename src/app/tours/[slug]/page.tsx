import { notFound } from "next/navigation";
import { Metadata } from "next";
import toursData from "@/data/tours.json";
import TourDetailClient from "@/components/tours/TourDetailClient";
import TourCard from "@/components/tours/TourCard";
import { Clock, Users, Car, MapPin, Check } from "lucide-react";
import VehicleGallery from "@/components/fleet/VehicleGallery";
import PageHeader from "@/components/ui/PageHeader";
import { Section, SectionHeading } from "@/components/ui/Section";

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

  const baseUrl = "https://iristours.net";
  const ogImage = tour.images.thumbnail.startsWith("http")
    ? tour.images.thumbnail
    : `${baseUrl}${tour.images.thumbnail}`;

  return {
    title: tour.seo.title.replace(/\s*\|\s*Iris Tours$/, ""),
    description: tour.seo.description,
    alternates: {
      canonical: `${baseUrl}/tours/${slug}`,
    },
    openGraph: {
      title: tour.seo.title,
      description: tour.seo.description,
      url: `${baseUrl}/tours/${slug}`,
      siteName: "Iris Tours",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: tour.seo.title,
      description: tour.seo.description,
      images: [ogImage],
    },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = toursData.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  const otherTours = toursData.filter((t) => t.slug !== tour.slug).slice(0, 3);
  const facts = [
    { icon: Clock, text: tour.duration },
    { icon: Users, text: `Up to ${tour.maxPassengers} people` },
    { icon: Car, text: tour.recommendedVehicle },
  ];

  return (
    <>
      <PageHeader image={tour.images.thumbnail} title={tour.title} crumbs={[{ label: "Tours", href: "/tours" }, { label: tour.title }]}>
        <ul className="mt-6 flex flex-wrap gap-2">
          {facts.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
              <Icon size={16} className="text-brand-orange" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </PageHeader>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-10 lg:col-span-8">
            <VehicleGallery images={tour.images.gallery} alt={tour.title} />

            <div>
              <h2 className="text-3xl">About this tour</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-text-secondary">{tour.description}</p>
            </div>

            <div>
              <h2 className="text-3xl">Places you will visit</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.highlights.map((h: string) => (
                  <li key={h} className="flex items-start gap-3 rounded-2xl border border-border-primary bg-white p-4 text-text-primary">
                    <MapPin size={18} className="mt-0.5 flex-shrink-0 text-accent-primary" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl">Included in the price</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {tour.included.map((item: string) => (
                  <li key={item} className="flex items-start gap-3 text-text-primary">
                    <Check size={19} className="mt-0.5 flex-shrink-0 text-accent-primary" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <TourDetailClient tour={tour} />
          </aside>
        </div>
      </Section>

      {otherTours.length > 0 && (
        <Section tone="white">
          <SectionHeading title="Other tours" action={{ href: "/tours", label: "All tours" }} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {otherTours.map((t) => (
              <TourCard key={t.id} tour={t} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}

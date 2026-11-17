import { Metadata } from "next";
import TourCard from "@/components/tours/TourCard";
import PageHeader, { HeaderButtons } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import { PHONE, whatsappLink } from "@/lib/site";
import toursData from "@/data/tours.json";

export const metadata: Metadata = {
  title: "Northern Pakistan Tours from Lahore: Hunza, Skardu & Swat",
  description: "Explore Hunza, Skardu, Swat, and Northern Pakistan with luxury 4x4 SUVs (Prado, Fortuner, V8) and mountain-expert chauffeurs from Lahore. Custom tour packages.",
  alternates: {
    canonical: "https://iristours.net/tours",
  },
  openGraph: {
    title: "Northern Pakistan Tours & 4x4 SUV Rental | Iris Tours",
    description: "Premium luxury tour packages for Northern Pakistan with expert mountain chauffeurs.",
    url: "https://iristours.net/tours",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/blog/lahore-northern-areas-kpk-4x4-rental.jpg",
        width: 1200,
        height: 630,
        alt: "Northern Pakistan Tours from Lahore - Iris Tours",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Northern Pakistan Tours & 4x4 SUV Rental | Iris Tours",
    description: "Premium luxury tour packages for Northern Pakistan with expert mountain chauffeurs.",
    images: ["https://iristours.net/blog/lahore-northern-areas-kpk-4x4-rental.jpg"],
  },
};

export default function ToursPage() {
  return (
    <>
      <PageHeader
        image="/tours/hunza.jpg"
        title="Northern Pakistan tours with a driver"
        intro="Private trips to Hunza, Skardu and Swat in a 4x4 or van. Mountain-trained drivers, fuel and tolls included. Every itinerary can be changed to suit you."
        crumbs={[{ label: "Tours" }]}
        actions={<HeaderButtons whatsappHref={whatsappLink("Hi Iris Tours! I want to plan a northern tour.")} phoneHref={`tel:${PHONE.tel}`} phoneLabel={PHONE.display} />}
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {toursData.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </Section>
      <Section className="pt-0 md:pt-0">
        <CtaBand
          title="Want a different route?"
          text="Murree, Naran, Kaghan, Neelum or a mix. Send your dates and group size and we will plan the trip and the right car."
          message="Hi Iris Tours! I want a custom northern tour. Dates and group size:"
        />
      </Section>
    </>
  );
}

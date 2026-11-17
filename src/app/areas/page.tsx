import { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import AreasDirectory from "@/components/areas/AreasDirectory";
import { Section } from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import serviceAreas from "@/data/serviceAreas.json";

export const metadata: Metadata = {
  title: "Rent a Car Near You: 200 Areas in Lahore & Islamabad",
  description: "Doorstep car rental with driver in 200 areas of Lahore, Islamabad, Rawalpindi and more: DHA, Gulberg, Johar Town, Bahria Town, Model Town and Cantt.",
  alternates: {
    canonical: "https://iristours.net/areas",
  },
  openGraph: {
    title: "Service Areas | Iris Tours Rent a Car in Lahore",
    description: "Doorstep car rental delivery across 200+ areas in Lahore and Punjab with professional chauffeurs.",
    url: "https://iristours.net/areas",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iris Tours Service Areas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Iris Tours Rent a Car in Lahore",
    description: "Doorstep car rental delivery across 200+ areas in Lahore and Punjab.",
    images: ["https://iristours.net/opengraph-image.jpg"],
  },
};

export default function AreasIndexPage() {
  const cities = Array.from(new Set(serviceAreas.map((a) => a.city)));
  return (
    <>
      <PageHeader
        image="/blog/bahria-dha.jpg"
        title="Areas we cover"
        intro={`Doorstep pickup in ${serviceAreas.length} areas across ${cities.join(", ")}. Find yours below.`}
        crumbs={[{ label: "Areas" }]}
      />
      <AreasDirectory areas={serviceAreas} />
      <Section className="pt-0 md:pt-0">
        <CtaBand title="Area not listed?" text="We travel across Pakistan. Send your pickup location on WhatsApp and we will confirm." />
      </Section>
    </>
  );
}

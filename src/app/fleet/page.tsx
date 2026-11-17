import { Metadata } from "next";
import FleetClient from "@/components/fleet/FleetClient";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";
import fleetData from "@/data/fleet.json";

export const metadata: Metadata = {
  title: "Rent a Car Fleet in Lahore | Luxury SUVs, Sedans & Vans - Iris Tours",
  description: "Browse verified rental cars in Lahore with daily rates. Toyota Fortuner, Prado, Land Cruiser V8, Mercedes, Civic, and Hiace Grand Cabin with professional chauffeurs. Book 24/7!",
  alternates: {
    canonical: "https://iristours.net/fleet",
  },
  openGraph: {
    title: "Rent a Car Fleet in Lahore | Luxury SUVs, Sedans & Vans - Iris Tours",
    description: "Browse verified rental cars in Lahore with daily rates. Toyota Fortuner, Prado, Land Cruiser V8, Mercedes, Civic, and Hiace Grand Cabin with professional chauffeurs.",
    url: "https://iristours.net/fleet",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/blog/rent-a-car-lahore-fleet-lineup.jpg",
        width: 1200,
        height: 630,
        alt: "Rent a Car Fleet in Lahore - Iris Tours",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent a Car Fleet in Lahore | Luxury SUVs & Sedans - Iris Tours",
    description: "Browse verified rental cars in Lahore with professional chauffeurs with daily rates.",
    images: ["https://iristours.net/blog/rent-a-car-lahore-fleet-lineup.jpg"],
  },
};

export default function FleetPage() {
  return (
    <>
      <PageHeader
        title="Cars for rent with a driver"
        intro={`${fleetData.length} cars, from an economy Yaris to a Land Cruiser V8. Rates below are per day within the city, driver included.`}
        crumbs={[{ label: "Fleet" }]}
      />
      <FleetClient initialData={fleetData} />
      <Section className="pt-0 md:pt-0">
        <CtaBand title="Can't decide on a car?" text="Tell us how many people are travelling and where. We will suggest the right car and send the price." />
      </Section>
    </>
  );
}

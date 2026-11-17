import { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Lahore Airport Transfer: 24/7 Pickup & Drop with Driver",
  description: "Book 24/7 Allama Iqbal International Airport (LHE) Lahore transfer car rental with driver. Flight tracking, terminal meet & greet, and transparent rates. Book now!",
  alternates: {
    canonical: "https://iristours.net/services/airport-transfer",
  },
  openGraph: {
    title: "Airport Transfer Lahore | 24/7 Airport Car Rental - Iris Tours",
    description: "24/7 on-time airport pickup & drop-off at Allama Iqbal International Airport Lahore with luxury sedans and SUVs.",
    url: "https://iristours.net/services/airport-transfer",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/blog/lahore-airport-car-rental-service.jpg",
        width: 1200,
        height: 630,
        alt: "Airport Transfer Lahore - Iris Tours",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airport Transfer Lahore | Iris Tours",
    description: "24/7 airport pickup & drop-off at Allama Iqbal International Airport Lahore with luxury sedans and SUVs.",
    images: ["https://iristours.net/blog/lahore-airport-car-rental-service.jpg"],
  },
};

const AIRPORTS = [
  { name: "Allama Iqbal International Airport", code: "LHE", city: "Lahore" },
  { name: "Islamabad International Airport", code: "ISB", city: "Islamabad" },
  { name: "Multan International Airport", code: "MUX", city: "Multan" },
  { name: "Sialkot International Airport", code: "SKT", city: "Sialkot" },
  { name: "Jinnah International Airport", code: "KHI", city: "Karachi" },
  { name: "Peshawar International Airport", code: "PEW", city: "Peshawar" },
];

export default function AirportTransferPage() {
  return (
    <ServicePage
      image="/categories/airport.jpg"
      crumb="Airport transfer"
      title="Airport pickup and drop in Lahore and Islamabad"
      intro="Your driver waits at arrivals with your name on a board, tracks your flight and helps with luggage. Available 24 hours, for one-way or return trips."
      whatsappMessage="Hi Iris Tours! I need an airport transfer. Flight number:"
      features={[
        { title: "We track your flight", text: "Arriving early or late, the driver adjusts to your actual landing time at no extra cost." },
        { title: "Meet and greet at arrivals", text: "A uniformed driver meets you with a name board and helps with your bags to the car." },
        { title: "60 minutes free waiting", text: "Immigration and baggage take time. The first hour of waiting on pickups is free." },
        { title: "Any time, day or night", text: "Early morning and late-night flights are covered. Book on WhatsApp at any hour." },
        { title: "Room for your luggage", text: "Sedans for two, SUVs and Hiace vans for families and groups with lots of bags." },
        { title: "Clear price before you travel", text: "We confirm the fare on WhatsApp when you book, so there are no hidden charges." },
      ]}
      carSlugs={["toyota-corolla-altis-1-6", "honda-civic", "toyota-fortuner", "toyota-land-cruiser-prado", "toyota-hiace-grand-cabin", "mercedes-benz-c-class-c180"]}
      carsTitle="Cars for airport transfers"
      carsIntro="Pick by the number of passengers and bags."
      cta={{ title: "Landing soon?", text: "Send your flight number, date and drop-off address on WhatsApp and we will confirm your driver." }}
    >
      <Section tone="white">
        <SectionHeading title="Airports we cover" />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AIRPORTS.map((a) => (
            <li key={a.code} className="flex items-center gap-4 rounded-2xl border border-border-primary bg-bg-primary p-4">
              <span className="flex h-12 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-ink font-semibold text-white">{a.code}</span>
              <span>
                <span className="block font-semibold text-text-primary">{a.name}</span>
                <span className="block text-sm text-text-secondary">{a.city}</span>
              </span>
            </li>
          ))}
        </ul>
      </Section>
    </ServicePage>
  );
}

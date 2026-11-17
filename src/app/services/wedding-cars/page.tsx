import { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Wedding Car Rental in Lahore | Decorated Luxury Cars - Iris Tours",
  description: "Rent luxury wedding cars in Lahore. Mercedes, Audi, Prado, Land Cruiser V8, and limousines with professional uniformed drivers and custom floral decorations. Book 24/7!",
  alternates: {
    canonical: "https://iristours.net/services/wedding-cars",
  },
  openGraph: {
    title: "Wedding Car Rental in Lahore | Decorated Luxury Cars - Iris Tours",
    description: "Make your wedding day unforgettable with decorated Mercedes, Audi, Prado, and Land Cruiser V8 rentals in Lahore with Iris Tours.",
    url: "https://iristours.net/services/wedding-cars",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/blog/limousine-wedding.jpg",
        width: 1200,
        height: 630,
        alt: "Wedding Car Rental in Lahore - Iris Tours",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Car Rental in Lahore | Iris Tours",
    description: "Make your wedding day unforgettable with decorated Mercedes, Audi, Prado, and Land Cruiser V8 rentals in Lahore.",
    images: ["https://iristours.net/blog/limousine-wedding.jpg"],
  },
};

export default function WeddingCarsPage() {
  return (
    <ServicePage
      crumb="Wedding cars"
      title="Wedding cars in Lahore"
      intro="Decorated Prado, Land Cruiser V8, Mercedes and Audi for the barat, mehndi and valima, with a smartly dressed driver who knows the venue routes."
      whatsappMessage="Hi Iris Tours! I want to book a wedding car. Date and venue:"
      features={[
        { title: "Floral decoration", text: "Fresh flower decoration matched to your theme and colours. Tell us what you have in mind." },
        { title: "Smart, punctual drivers", text: "Drivers arrive early, dressed for the occasion, and handle the convoy timing for you." },
        { title: "Convoy packages", text: "Book several cars together for the groom, bride and close family, all arriving as one convoy." },
        { title: "Barat, mehndi and valima", text: "Hire a car for one event or for every day of the wedding." },
      ]}
      carSlugs={["toyota-land-cruiser-v8", "toyota-land-cruiser-prado", "mercedes-benz-c-class-c180", "audi-a6", "range-rover", "mercedes-benz-g-wagon"]}
      carsTitle="Popular wedding cars"
      carsIntro="Rates below are for the car with driver. Decoration is quoted separately."
      cta={{ title: "Planning your wedding?", text: "Send your dates, venues and how many cars you need. We will send a full quote with decoration." }}
    />
  );
}

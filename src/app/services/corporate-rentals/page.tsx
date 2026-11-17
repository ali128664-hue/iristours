import { Metadata } from "next";
import ServicePage from "@/components/services/ServicePage";

export const metadata: Metadata = {
  title: "Corporate Car Rental in Lahore | Executive Fleet Solutions - Iris Tours",
  description: "Monthly and daily corporate car rentals in Lahore. Premium executive sedans, Hiace vans, and luxury SUVs for businesses with verified professional chauffeurs.",
  alternates: {
    canonical: "https://iristours.net/services/corporate-rentals",
  },
  openGraph: {
    title: "Corporate Car Rental in Lahore | Iris Tours",
    description: "Executive transportation and corporate fleet contracts in Lahore with dedicated chauffeurs and luxury fleet.",
    url: "https://iristours.net/services/corporate-rentals",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/blog/luxury-rental.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Car Rental in Lahore - Iris Tours",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Car Rental in Lahore | Iris Tours",
    description: "Executive transportation and corporate fleet contracts in Lahore with dedicated chauffeurs.",
    images: ["https://iristours.net/blog/luxury-rental.jpg"],
  },
};

export default function CorporateRentalsPage() {
  return (
    <ServicePage
      crumb="Corporate rentals"
      title="Corporate car rental with drivers"
      intro="Daily staff transport, executive cars for visiting guests and monthly contracts for companies in Lahore and Islamabad."
      whatsappMessage="Hi Iris Tours! I want a corporate car rental quote. Company name:"
      features={[
        { title: "Monthly contracts", text: "Fixed monthly rate per car with driver, including maintenance and a replacement car if one is in the workshop." },
        { title: "Executive drivers", text: "Discreet, well-presented drivers who know the business districts, hotels and airports." },
        { title: "Guests and delegations", text: "Airport pickups, hotel transfers and full-day cars for visiting clients and VIP delegations." },
        { title: "Easy payment", text: "Pay by bank transfer, or by company cheque with prior approval." },
        { title: "Dedicated account manager", text: "One person handles your bookings and changes, reachable on WhatsApp." },
        { title: "Lahore and Islamabad", text: "Cars and drivers available in both cities, plus inter-city trips." },
      ]}
      carSlugs={["toyota-corolla-altis-1-6", "honda-civic", "toyota-corolla-grande-1-8", "toyota-fortuner", "toyota-hiace-grand-cabin", "toyota-coaster-saloon"]}
      carsTitle="Cars for business travel"
      cta={{ title: "Need cars for your company?", text: "Tell us how many cars, for how long and in which city. We will send a written quote." }}
    />
  );
}

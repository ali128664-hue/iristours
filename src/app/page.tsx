import HeroSection from "@/components/home/HeroSection";
import QuickCategories from "@/components/home/QuickCategories";
import FeaturedFleet from "@/components/home/FeaturedFleet";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PopularDestinations from "@/components/home/PopularDestinations";
import AirportTransferSection from "@/components/home/AirportTransferSection";
import CustomerReviews from "@/components/home/CustomerReviews";
import CompanyStatistics from "@/components/home/CompanyStatistics";
import HomeFAQ from "@/components/home/HomeFAQ";
import BankDetailsSection from "@/components/home/BankDetailsSection";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rent a Car in Lahore | Best Car Rental Service - Iris Tours",
  description: "Looking to rent a car in Lahore? Iris Tours offers verified chauffeur-driven cars, luxury SUVs (Prado, Fortuner, V8), executive sedans, and wedding car rentals at transparent daily rates. Book 24/7!",
  alternates: {
    canonical: "https://iristours.net",
  },
  openGraph: {
    title: "Rent a Car in Lahore | Best Car Rental Service - Iris Tours",
    description: "Looking to rent a car in Lahore? Iris Tours offers verified chauffeur-driven cars, luxury SUVs (Prado, Fortuner, V8), executive sedans, and wedding car rentals at transparent daily rates.",
    url: "https://iristours.net",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rent a Car in Lahore - Iris Tours",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent a Car in Lahore | Best Car Rental Service - Iris Tours",
    description: "Looking to rent a car in Lahore? Iris Tours offers verified chauffeur-driven cars, luxury SUVs, sedans & wedding car rentals at transparent daily rates.",
    images: ["https://iristours.net/opengraph-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedFleet />
      <QuickCategories />
      <WhyChooseUs />
      <PopularDestinations />
      <AirportTransferSection />
      <CustomerReviews />
      <CompanyStatistics />
      <HomeFAQ />
      <BankDetailsSection />
    </>
  );
}

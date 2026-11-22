import HeroSection from "@/components/home/HeroSection";
import QuickCategories from "@/components/home/QuickCategories";
import FeaturedFleet from "@/components/home/FeaturedFleet";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PopularDestinations from "@/components/home/PopularDestinations";
import AirportTransferSection from "@/components/home/AirportTransferSection";
import CustomerReviews from "@/components/home/CustomerReviews";
import HomeFAQ from "@/components/home/HomeFAQ";
import HomeSeoContent from "@/components/home/HomeSeoContent";
import LatestGuides from "@/components/home/LatestGuides";
import BankDetailsSection from "@/components/home/BankDetailsSection";

import { Metadata } from "next";

// Refresh hourly so newly scheduled blog posts appear without a deploy
export const revalidate = 3600;

export const metadata: Metadata = {
  title: { absolute: "Rent a Car in Lahore with Driver from Rs. 7,000/day | Iris Tours" },
  description: "Rent a car in Lahore with a professional driver. Yaris, Corolla, Civic, Fortuner, Prado, V8, luxury cars and vans for airport, wedding and tours. Book 24/7.",
  alternates: {
    canonical: "https://iristours.net",
  },
  openGraph: {
    title: "Rent a Car in Lahore | Best Luxury Car Rental Service - Iris Tours",
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
    title: "Rent a Car in Lahore | Best Luxury Car Rental Service - Iris Tours",
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
      <AirportTransferSection />
      <CustomerReviews />
      <PopularDestinations />
      <HomeSeoContent />
      <LatestGuides />
      <BankDetailsSection />
      <HomeFAQ />
    </>
  );
}

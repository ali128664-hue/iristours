import HeroSection from "@/components/home/HeroSection";
import QuickCategories from "@/components/home/QuickCategories";
import FeaturedFleet from "@/components/home/FeaturedFleet";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PopularDestinations from "@/components/home/PopularDestinations";
import AirportTransferSection from "@/components/home/AirportTransferSection";
import CustomerReviews from "@/components/home/CustomerReviews";
import CompanyStatistics from "@/components/home/CompanyStatistics";
import HomeFAQ from "@/components/home/HomeFAQ";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Rent a Car in Lahore DHA & Pakpattan | Luxury Fleet - Iris Tours",
  description: "Experience the best rent a car service in Lahore DHA and Pakpattan. From Luxury SUVs like Prado & V8 to affordable daily rentals and wedding cars. Book instantly!",
  openGraph: {
    title: "Iris Tours | Premium Rent a Car in Lahore & Pakpattan",
    description: "Experience the best rent a car service in Lahore DHA and Pakpattan. From Luxury SUVs like Prado & V8 to affordable daily rentals and wedding cars.",
  }
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
    </>
  );
}

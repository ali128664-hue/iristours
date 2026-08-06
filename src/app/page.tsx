import HeroSection from "@/components/home/HeroSection";
import QuickCategories from "@/components/home/QuickCategories";
import FeaturedFleet from "@/components/home/FeaturedFleet";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PopularDestinations from "@/components/home/PopularDestinations";
import AirportTransferSection from "@/components/home/AirportTransferSection";
import CustomerReviews from "@/components/home/CustomerReviews";
import CompanyStatistics from "@/components/home/CompanyStatistics";
import HomeFAQ from "@/components/home/HomeFAQ";

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickCategories />
      <FeaturedFleet />
      <WhyChooseUs />
      <PopularDestinations />
      <AirportTransferSection />
      <CustomerReviews />
      <CompanyStatistics />
      <HomeFAQ />
    </>
  );
}

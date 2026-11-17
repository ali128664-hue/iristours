/**
 * PopularDestinations.tsx — northern tour packages on the homepage.
 * Tours come from src/data/tours.json
 */

import TourCard from "@/components/tours/TourCard";
import { Section, SectionHeading } from "@/components/ui/Section";
import toursData from "@/data/tours.json";

export default function PopularDestinations() {
  return (
    <Section tone="white">
      <SectionHeading
        title="Northern Pakistan tours"
        intro="Hunza, Skardu and Swat in a 4x4 or van with a driver who knows the mountain roads."
        action={{ href: "/tours", label: "All tours" }}
      />
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
        {toursData.map((tour) => (
          <div key={tour.id} className="w-[84%] flex-shrink-0 snap-start sm:w-[60%] md:w-auto">
            <TourCard tour={tour} />
          </div>
        ))}
      </div>
    </Section>
  );
}

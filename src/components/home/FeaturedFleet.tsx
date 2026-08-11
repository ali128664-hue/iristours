"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import VehicleCard from "@/components/fleet/VehicleCard";
import fleetData from "@/data/fleet.json";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedFleet() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
            >
              Our Complete Fleet
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg"
            >
              Experience the pinnacle of automotive engineering. Swipe or click through our premium collection to find your perfect ride.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <div className="flex gap-2 mr-4">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-border-primary bg-bg-card flex items-center justify-center text-text-primary hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-colors shadow-sm"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-border-primary bg-bg-card flex items-center justify-center text-text-primary hover:bg-accent-primary hover:text-white hover:border-accent-primary transition-colors shadow-sm"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <Link href="/fleet" className="hidden sm:block">
              <Button variant="secondary">View Full Fleet</Button>
            </Link>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-6 md:-mx-12 px-6 md:px-12">
          <div 
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {fleetData.map((vehicle, index) => (
              <div key={vehicle.id} className="min-w-[300px] md:min-w-[400px] snap-start flex-shrink-0">
                <VehicleCard vehicle={vehicle} index={index} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center sm:hidden">
            <Link href="/fleet">
              <Button variant="secondary" className="w-full">View Full Fleet</Button>
            </Link>
        </div>
      </div>

      {/* Hide scrollbar styles for Webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}

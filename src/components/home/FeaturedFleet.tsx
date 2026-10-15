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
    <section className="py-24 bg-slate-50/50 backdrop-blur-md relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
            >
              Our Complete Fleet
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 text-lg font-medium"
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
                className="w-12 h-12 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-slate-200 bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-800 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors shadow-sm cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <Link href="/fleet" className="hidden sm:block">
              <Button variant="secondary" className="bg-slate-900 hover:bg-slate-800 text-white font-bold">View Full Fleet</Button>
            </Link>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative -mx-4 sm:-mx-6 md:-mx-12 px-4 sm:px-6 md:px-12 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] md:w-[calc(100%+6rem)] overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 pt-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {fleetData.map((vehicle) => (
              <div key={vehicle.id} className="w-[84vw] max-w-[360px] sm:w-[350px] md:w-[380px] snap-center sm:snap-start flex-shrink-0">
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center sm:hidden">
            <Link href="/fleet">
              <Button variant="secondary" className="w-full bg-slate-900 text-white font-bold">View Full Fleet</Button>
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

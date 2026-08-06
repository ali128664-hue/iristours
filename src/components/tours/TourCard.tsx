"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, Car } from "lucide-react";
import { Button } from "@/components/ui/Button";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";

interface TourProps {
  tour: any;
  index?: number;
}

export default function TourCard({ tour, index = 0 }: TourProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative bg-bg-card rounded-2xl overflow-hidden border border-border-primary transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-accent-primary/50 flex flex-col h-full"
      >
        <div className="relative h-72 w-full overflow-hidden">
          <Image
            src={tour.images.thumbnail}
            alt={tour.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent opacity-90" />
          
          <div className="absolute bottom-4 left-6 right-6">
            <h3 className="text-2xl font-bold text-text-primary mb-2 line-clamp-2">{tour.title}</h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-1.5 text-xs font-medium text-text-secondary bg-bg-primary/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border-primary">
                <Clock size={12} className="text-accent-primary" />
                {tour.duration}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-medium text-text-secondary bg-bg-primary/50 backdrop-blur-sm px-2.5 py-1 rounded-full border border-border-primary">
                <Users size={12} className="text-accent-primary" />
                Max {tour.maxPassengers}
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 flex-grow flex flex-col">
          <p className="text-text-secondary text-sm line-clamp-3 mb-6 flex-grow">
            {tour.description}
          </p>
          
          <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-bg-primary border border-border-primary">
            <Car size={16} className="text-accent-primary flex-shrink-0" />
            <span className="text-xs text-text-primary line-clamp-1">Best With: {tour.recommendedVehicle}</span>
          </div>
          
          <div className="flex gap-3 mt-auto">
            <Button variant="primary" className="flex-1 text-xs py-2.5" onClick={() => setIsPopupOpen(true)}>
              Book Tour
            </Button>
            <Link href={`/tours/${tour.slug}`} className="flex-1" passHref>
              <Button variant="secondary" className="w-full text-xs py-2.5">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      <WhatsAppBookingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productName={tour.title}
        category="Tour Package"
      />
    </>
  );
}

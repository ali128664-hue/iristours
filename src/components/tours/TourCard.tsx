"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, Car } from "lucide-react";
import { Button } from "@/components/ui/Button";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";
import Card3DTilt from "@/components/3d/Card3DTilt";

interface TourProps {
  tour: any;
  index?: number;
}

export default function TourCard({ tour, index = 0 }: TourProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Card3DTilt max={10} speed={400} glare={true} maxGlare={0.22} scale={1.03} className="h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative bg-slate-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(245,158,11,0.25)] hover:border-accent-primary/50 flex flex-col h-full [transform-style:preserve-3d]"
        >
          <div className="relative h-72 w-full overflow-hidden [transform:translateZ(35px)] [transform-style:preserve-3d]">
            <Image
              src={tour.images.thumbnail}
              alt={tour.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-90" />
            
            <div className="absolute bottom-4 left-6 right-6 [transform:translateZ(25px)]">
              <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">{tour.title}</h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-950/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  <Clock size={12} className="text-accent-primary" />
                  {tour.duration}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-300 bg-slate-950/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10">
                  <Users size={12} className="text-accent-primary" />
                  Max {tour.maxPassengers}
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 flex-grow flex flex-col [transform-style:preserve-3d]">
            <p className="text-slate-300 text-sm line-clamp-3 mb-6 flex-grow [transform:translateZ(15px)]">
              {tour.description}
            </p>
            
            <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-slate-950/60 border border-white/5 [transform:translateZ(20px)]">
              <Car size={16} className="text-accent-primary flex-shrink-0" />
              <span className="text-xs text-slate-200 line-clamp-1">Best With: {tour.recommendedVehicle}</span>
            </div>
            
            <div className="flex gap-3 mt-auto [transform:translateZ(30px)]">
              <Button variant="primary" className="flex-1 text-xs py-2.5 shadow-lg shadow-accent-primary/20" onClick={() => setIsPopupOpen(true)}>
                Book Tour
              </Button>
              <Link href={`/tours/${tour.slug}`} className="flex-1" passHref>
                <Button variant="secondary" className="w-full text-xs py-2.5 bg-slate-800/80 hover:bg-slate-700/80 text-white border-white/10">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Card3DTilt>

      <WhatsAppBookingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productName={tour.title}
        category="Tour Package"
      />
    </>
  );
}

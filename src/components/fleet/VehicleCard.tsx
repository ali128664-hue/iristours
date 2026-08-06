"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Settings, Fuel, ShieldCheck, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";

interface VehicleProps {
  vehicle: any;
  index?: number;
}

export default function VehicleCard({ vehicle, index = 0 }: VehicleProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="group relative bg-gradient-to-b from-white to-bg-card rounded-2xl overflow-hidden border border-white/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15),0_0_0_1px_rgba(245,158,11,0.2),inset_0_2px_4px_rgba(255,255,255,1)] hover:border-accent-primary/30"
      >
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src={vehicle.images.thumbnail}
            alt={vehicle.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent opacity-80" />
          
          <div className="absolute top-4 left-4 bg-bg-primary/80 backdrop-blur-md border border-border-primary rounded-full px-3 py-1 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-text-primary uppercase">{vehicle.category}</span>
          </div>
          
          {vehicle.driverIncluded && (
            <div className="absolute top-4 right-4 bg-accent-primary text-white backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 shadow-md">
              <UserCircle2 size={14} className="text-white" />
              <span className="text-xs font-bold tracking-wide uppercase">Driver</span>
            </div>
          )}
        </div>
        
        <div className="p-6 relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-text-primary mb-1">{vehicle.name}</h3>
              <p className="text-text-secondary text-sm">{vehicle.brand} • {vehicle.category}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-text-secondary uppercase tracking-wider mb-1">City Rate</p>
              <p className="text-lg font-bold text-accent-primary">Rs. {(vehicle.rent.local ?? vehicle.rent.daily ?? 0).toLocaleString()}</p>
              {vehicle.rent.interCity && <p className="text-xs text-text-secondary">Inter-City: Rs. {vehicle.rent.interCity.toLocaleString()}</p>}
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-2 mb-6">
            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-bg-primary border border-border-primary">
              <Settings size={15} className="text-text-secondary mb-1" />
              <span className="text-xs text-text-primary text-center leading-tight">{vehicle.transmission}</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-bg-primary border border-border-primary">
              <Users size={15} className="text-text-secondary mb-1" />
              <span className="text-xs text-text-primary text-center leading-tight">{vehicle.seats} Seats</span>
            </div>
            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-bg-primary border border-border-primary">
              <Fuel size={15} className="text-text-secondary mb-1" />
              <span className="text-xs text-text-primary text-center leading-tight">{vehicle.fuel}</span>
            </div>
            <div className={`flex flex-col items-center justify-center p-2 rounded-lg border ${
              vehicle.driverIncluded
                ? "bg-accent-primary/10 border-accent-primary/40"
                : "bg-bg-primary border-border-primary"
            }`}>
              <UserCircle2 size={15} className={vehicle.driverIncluded ? "text-accent-primary mb-1" : "text-text-secondary mb-1"} />
              <span className={`text-xs text-center leading-tight font-semibold ${
                vehicle.driverIncluded ? "text-accent-primary" : "text-text-secondary"
              }`}>{vehicle.driverIncluded ? "Driver" : "Self Drive"}</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button variant="primary" className="flex-1 text-xs py-2.5" onClick={() => setIsPopupOpen(true)}>
              Book Now
            </Button>
            <Link href={`/fleet/${vehicle.slug}`} className="flex-1" passHref>
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
        productName={vehicle.name}
        category={vehicle.category}
        dailyPrice={vehicle.rent.daily}
      />
    </>
  );
}

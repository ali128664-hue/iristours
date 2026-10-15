"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Users, Car, MapPin, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";
import Card3DTilt from "@/components/3d/Card3DTilt";

interface TourProps {
  tour: any;
  index?: number;
}

export default function TourCard({ tour, index = 0 }: TourProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const directWhatsAppUrl = `https://wa.me/923154973906?text=${encodeURIComponent(
    `Hi Iris Tours! 🏔️ I am interested in booking the *${tour.title}* Northern Pakistan Tour package. Please share itinerary details and 4x4 vehicle availability.`
  )}`;

  return (
    <>
      <Card3DTilt max={7} speed={400} glare={true} maxGlare={0.16} scale={1.02} className="h-full w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -6 }}
          className="group relative bg-white/85 backdrop-blur-2xl rounded-[28px] p-3 border border-white/90 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.07),0_1px_3px_rgba(15,23,42,0.03)] hover:shadow-[0_30px_60px_-12px_rgba(217,119,6,0.22)] hover:border-amber-400/60 transition-all duration-500 flex flex-col h-full w-full max-w-full overflow-hidden md:[transform-style:preserve-3d]"
        >
          {/* ─── Hero Image with Inset Squircle & Badges ─────────────────── */}
          <div className="relative h-60 sm:h-72 w-full rounded-[22px] overflow-hidden md:[transform:translateZ(35px)] md:[transform-style:preserve-3d] shadow-sm flex-shrink-0">
            <Image
              src={tour.images.thumbnail}
              alt={tour.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent opacity-95" />

            {/* Top Category Badge */}
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-full px-3 py-1 flex items-center gap-1.5 z-10 shadow-sm">
              <MapPin size={12} className="text-amber-600" />
              <span className="text-[11px] font-extrabold tracking-wider text-slate-800 uppercase">
                Northern Tour
              </span>
            </div>

            {/* In-Image Title & Quick Badges (translateZ: 25px) */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-5 sm:right-5 md:[transform:translateZ(25px)]">
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2 line-clamp-2 leading-tight tracking-tight drop-shadow-md">
                {tour.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 shadow-sm">
                  <Clock size={13} className="text-amber-400" />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30 shadow-sm">
                  <Users size={13} className="text-amber-400" />
                  <span>Max {tour.maxPassengers} Guests</span>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Card Body ───────────────────────────────────────────────── */}
          <div className="p-3 sm:p-4 pt-4 flex-grow flex flex-col md:[transform-style:preserve-3d]">
            <p className="text-slate-600 text-sm line-clamp-3 mb-4 flex-grow font-medium leading-relaxed md:[transform:translateZ(15px)]">
              {tour.description}
            </p>

            {/* Recommended Vehicle Chip */}
            <div className="flex items-center gap-2 mb-4 p-2.5 sm:p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 md:[transform:translateZ(20px)] group-hover:bg-amber-50/40 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-600 flex-shrink-0">
                <Car size={16} />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block">Recommended Vehicle</span>
                <span className="text-xs text-slate-800 font-bold truncate block">{tour.recommendedVehicle}</span>
              </div>
            </div>

            {/* Dual Action Buttons (Always High Contrast & Responsive) */}
            <div className="flex gap-2 mt-auto md:[transform:translateZ(25px)]">
              {/* WhatsApp Direct Inquiry */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:shadow-green-500/25 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <FaWhatsapp size={16} className="flex-shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* View Tour Details */}
              <Link href={`/tours/${tour.slug}`} className="flex-1" passHref>
                <button
                  type="button"
                  className="w-full h-full flex items-center justify-center gap-1 py-2.5 sm:py-3 px-2 sm:px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  <span>Details</span>
                  <ArrowRight size={13} className="flex-shrink-0" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </Card3DTilt>

      {/* WhatsApp Booking Popup */}
      <WhatsAppBookingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productName={tour.title}
        category="Tour Package"
      />
    </>
  );
}

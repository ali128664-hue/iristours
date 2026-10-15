"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Settings, Users, Fuel, UserCircle2, ChevronLeft, ChevronRight, ShieldCheck, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";
import { useCurrency } from "@/context/CurrencyContext";
import { convertAndFormatPrice } from "@/utils/currency";
import Card3DTilt from "@/components/3d/Card3DTilt";

interface VehicleCardProps {
  vehicle: {
    id: string;
    slug: string;
    name: string;
    brand: string;
    category: string;
    images: {
      thumbnail: string;
      gallery?: string[];
    };
    transmission: string;
    seats: number;
    fuel: string;
    driverIncluded: boolean;
    rent: {
      local?: number;
      daily?: number;
      interCity?: number;
      withDriver?: {
        local?: number;
        daily?: number;
      };
    };
  };
  index?: number;
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { currency } = useCurrency();

  const displayPrice = vehicle.rent.local || vehicle.rent.daily || vehicle.rent.withDriver?.local || 0;

  const directWhatsAppUrl = `https://wa.me/923154973906?text=${encodeURIComponent(
    `Hi Iris Tours! 🚗 I would like to book the *${vehicle.name}* (${vehicle.category}, City Rate: Rs. ${displayPrice.toLocaleString()}). Please confirm availability.`
  )}`;

  return (
    <>
      <Card3DTilt max={6} speed={350} maxGlare={0.15} scale={1.01} className="h-full w-full">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="group relative bg-white/92 backdrop-blur-2xl rounded-[24px] sm:rounded-[28px] p-2.5 sm:p-3 border border-slate-200/90 shadow-[0_10px_30px_-8px_rgba(15,23,42,0.06),0_1px_3px_rgba(15,23,42,0.02)] hover:shadow-[0_24px_50px_-10px_rgba(217,119,6,0.18)] hover:border-amber-400/60 transition-all duration-300 h-full flex flex-col w-full max-w-full overflow-hidden md:[transform-style:preserve-3d]"
        >
          {/* ─── Responsive Aspect-Ratio Image Container (Cars NEVER get cropped) ───────── */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-[18px] sm:rounded-[22px] overflow-hidden bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-200/50 p-2 sm:p-2.5 flex items-center justify-center group/slider md:[transform:translateZ(30px)] md:[transform-style:preserve-3d] shadow-inner flex-shrink-0">
            <Image
              src={vehicle.images.gallery?.[currentImageIndex] || vehicle.images.thumbnail}
              alt={vehicle.name}
              fill
              className="object-contain p-1.5 sm:p-2 transition-transform duration-500 ease-out group-hover:scale-105 filter drop-shadow-[0_8px_16px_rgba(15,23,42,0.12)]"
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 32vw"
              priority={false}
            />

            {/* Slider Navigation Arrows */}
            {vehicle.images.gallery && vehicle.images.gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const gallery = vehicle.images.gallery || [];
                    setCurrentImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:scale-105 shadow-md z-20 cursor-pointer"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const gallery = vehicle.images.gallery || [];
                    setCurrentImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/90 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:scale-105 shadow-md z-20 cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Dot Pagination */}
                <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1.5 z-20">
                  {vehicle.images.gallery.map((_: any, idx: number) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "w-4 sm:w-5 bg-amber-500 shadow-sm" : "w-1.5 bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Category Badge (Top Left) */}
            <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 flex items-center gap-1.5 z-10 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-extrabold tracking-wider text-slate-800 uppercase">
                {vehicle.category}
              </span>
            </div>

            {/* Chauffeur / Driver Badge (Top Right) */}
            {vehicle.driverIncluded && (
              <div className="absolute top-2.5 right-2.5 bg-amber-500/95 text-white backdrop-blur-md rounded-full px-2.5 py-0.5 sm:px-3 sm:py-1 flex items-center gap-1 shadow-md z-10">
                <UserCircle2 size={12} className="text-white" />
                <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase">Chauffeur</span>
              </div>
            )}
          </div>

          {/* ─── Card Body with 3D Layering on Desktop ───────────────────────── */}
          <div className="p-2.5 sm:p-4 pt-3 flex-grow flex flex-col md:[transform-style:preserve-3d]">
            {/* Header: Title, Brand & Price Display */}
            <div className="flex justify-between items-start gap-2 mb-3 md:[transform:translateZ(20px)]">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-[11px] sm:text-xs font-bold text-amber-600 uppercase tracking-wider truncate">
                    {vehicle.brand}
                  </span>
                  <span className="text-slate-300 text-xs">•</span>
                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-slate-500 font-medium whitespace-nowrap">
                    <ShieldCheck size={11} className="text-green-600 flex-shrink-0" />
                    Verified
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors truncate">
                  {vehicle.name}
                </h3>
              </div>

              {/* Price Tag */}
              <div className="text-right flex-shrink-0">
                <span className="block text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider font-bold">From</span>
                <span className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-none block">
                  {convertAndFormatPrice(displayPrice, currency)}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-500 font-semibold block mt-0.5">/ day intra-city</span>
              </div>
            </div>

            {/* Key Specs Grid (Fully Responsive 4-column) */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-4 md:[transform:translateZ(15px)]">
              <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl bg-slate-50/90 border border-slate-200/80 transition-colors group-hover:bg-amber-50/40">
                <Settings size={14} className="text-slate-600 mb-0.5 flex-shrink-0" />
                <span className="text-[10px] sm:text-[11px] text-slate-800 font-bold text-center leading-tight truncate w-full">
                  {vehicle.transmission}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl bg-slate-50/90 border border-slate-200/80 transition-colors group-hover:bg-amber-50/40">
                <Users size={14} className="text-slate-600 mb-0.5 flex-shrink-0" />
                <span className="text-[10px] sm:text-[11px] text-slate-800 font-bold text-center leading-tight truncate w-full">
                  {vehicle.seats} Seats
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl bg-slate-50/90 border border-slate-200/80 transition-colors group-hover:bg-amber-50/40">
                <Fuel size={14} className="text-slate-600 mb-0.5 flex-shrink-0" />
                <span className="text-[10px] sm:text-[11px] text-slate-800 font-bold text-center leading-tight truncate w-full">
                  {vehicle.fuel}
                </span>
              </div>
              <div
                className={`flex flex-col items-center justify-center p-1.5 sm:p-2 rounded-xl border transition-colors ${
                  vehicle.driverIncluded
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-700"
                    : "bg-slate-50/90 border-slate-200/80 text-slate-800"
                }`}
              >
                <UserCircle2 size={14} className={vehicle.driverIncluded ? "text-amber-600 mb-0.5 flex-shrink-0" : "text-slate-600 mb-0.5 flex-shrink-0"} />
                <span className="text-[10px] sm:text-[11px] font-bold text-center leading-tight truncate w-full">
                  {vehicle.driverIncluded ? "Chauffeur" : "Self Drive"}
                </span>
              </div>
            </div>

            {/* Action Buttons (Always High Contrast & Responsive) */}
            <div className="flex gap-2 mt-auto md:[transform:translateZ(25px)]">
              {/* Instant WhatsApp 1-Tap Booking */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 sm:py-3 px-2 sm:px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-[11px] sm:text-xs uppercase tracking-wider shadow-md hover:shadow-green-500/25 active:scale-[0.98] transition-all whitespace-nowrap"
              >
                <FaWhatsapp size={16} className="flex-shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* View Details Page */}
              <Link href={`/fleet/${vehicle.slug}`} className="flex-1" passHref>
                <button
                  type="button"
                  className="w-full h-full flex items-center justify-center gap-1 py-2.5 sm:py-3 px-2 sm:px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  <span>Details</span>
                  <ArrowRight size={13} className="flex-shrink-0" />
                </button>
              </Link>
            </div>

            {/* Quick Custom Booking Option */}
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="w-full text-center text-[10px] sm:text-[11px] text-slate-500 hover:text-amber-600 mt-2 font-semibold transition-colors cursor-pointer"
            >
              Need outstation or special dates? <span className="underline font-bold text-slate-800 hover:text-amber-600">Quick Form</span>
            </button>
          </div>
        </motion.div>
      </Card3DTilt>

      {/* WhatsApp Booking Popup */}
      <WhatsAppBookingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productName={vehicle.name}
        category={vehicle.category}
        dailyPrice={displayPrice}
      />
    </>
  );
}

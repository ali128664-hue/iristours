"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Settings, Users, Fuel, UserCircle2, ChevronLeft, ChevronRight, ShieldCheck, ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
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
      <Card3DTilt max={7} speed={400} maxGlare={0.16} scale={1.02} className="h-full">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="group relative bg-white/85 backdrop-blur-2xl rounded-[28px] p-3 border border-white/90 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.07),0_1px_3px_rgba(15,23,42,0.03)] hover:shadow-[0_30px_60px_-12px_rgba(217,119,6,0.22)] hover:border-amber-400/60 transition-all duration-500 h-full flex flex-col [transform-style:preserve-3d]"
        >
          {/* ─── Modern Image Container (Aspect-ratio & Inset Glass) ───────── */}
          <div className="relative h-64 w-full rounded-[22px] overflow-hidden group/slider [transform:translateZ(35px)] [transform-style:preserve-3d] shadow-sm">
            <Image
              src={vehicle.images.gallery?.[currentImageIndex] || vehicle.images.thumbnail}
              alt={vehicle.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Subtle luxury ambient daylight gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-50" />

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
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:scale-105 shadow-md z-20 cursor-pointer"
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
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/85 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all hover:bg-white hover:scale-105 shadow-md z-20 cursor-pointer"
                  aria-label="Next photo"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Dot Pagination */}
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-20">
                  {vehicle.images.gallery.map((_: any, idx: number) => (
                    <div
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? "w-5 bg-amber-500 shadow-sm" : "w-1.5 bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Category Badge (Top Left) */}
            <div className="absolute top-3 left-3 bg-white/92 backdrop-blur-md border border-slate-200/90 rounded-full px-3 py-1 flex items-center gap-1.5 z-10 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[11px] font-extrabold tracking-wider text-slate-800 uppercase">
                {vehicle.category}
              </span>
            </div>

            {/* Chauffeur / Driver Badge (Top Right) */}
            {vehicle.driverIncluded && (
              <div className="absolute top-3 right-3 bg-amber-500/95 text-white backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1.5 shadow-md z-10">
                <UserCircle2 size={13} className="text-white" />
                <span className="text-[10px] font-extrabold tracking-wider uppercase">Chauffeur</span>
              </div>
            )}
          </div>

          {/* ─── Card Body with 3D Layering ───────────────────────────────── */}
          <div className="p-4 pt-4 flex-grow flex flex-col [transform-style:preserve-3d]">
            {/* Header: Title, Brand & Price Display */}
            <div className="flex justify-between items-start mb-4 [transform:translateZ(25px)]">
              <div className="flex-1 pr-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">{vehicle.brand}</span>
                  <span className="text-slate-300 text-xs">•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <ShieldCheck size={12} className="text-green-600" />
                    Verified Fleet
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors line-clamp-1">
                  {vehicle.name}
                </h3>
              </div>

              {/* Price Tag */}
              <div className="text-right flex-shrink-0">
                <span className="block text-[10px] text-slate-400 uppercase tracking-wider font-bold">From</span>
                <span className="text-2xl font-black text-slate-900 tracking-tight leading-none block">
                  {convertAndFormatPrice(displayPrice, currency)}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold block mt-0.5">/ day intra-city</span>
              </div>
            </div>

            {/* Key Specs Grid (translateZ: 20px) */}
            <div className="grid grid-cols-4 gap-2 mb-5 [transform:translateZ(20px)]">
              <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/90 border border-slate-200/80 transition-colors group-hover:bg-amber-50/40">
                <Settings size={15} className="text-slate-600 mb-1" />
                <span className="text-[11px] text-slate-800 font-bold text-center leading-tight">
                  {vehicle.transmission}
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/90 border border-slate-200/80 transition-colors group-hover:bg-amber-50/40">
                <Users size={15} className="text-slate-600 mb-1" />
                <span className="text-[11px] text-slate-800 font-bold text-center leading-tight">
                  {vehicle.seats} Seats
                </span>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-xl bg-slate-50/90 border border-slate-200/80 transition-colors group-hover:bg-amber-50/40">
                <Fuel size={15} className="text-slate-600 mb-1" />
                <span className="text-[11px] text-slate-800 font-bold text-center leading-tight">
                  {vehicle.fuel}
                </span>
              </div>
              <div
                className={`flex flex-col items-center justify-center p-2 rounded-xl border transition-colors ${
                  vehicle.driverIncluded
                    ? "bg-amber-500/10 border-amber-500/30 text-amber-700"
                    : "bg-slate-50/90 border-slate-200/80 text-slate-800"
                }`}
              >
                <UserCircle2 size={15} className={vehicle.driverIncluded ? "text-amber-600 mb-1" : "text-slate-600 mb-1"} />
                <span className="text-[11px] font-bold text-center leading-tight">
                  {vehicle.driverIncluded ? "With Driver" : "Self Drive"}
                </span>
              </div>
            </div>

            {/* Action Buttons (translateZ: 30px) */}
            <div className="flex gap-2.5 mt-auto [transform:translateZ(30px)]">
              {/* Instant WhatsApp 1-Tap Booking */}
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-[1.3] flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-green-500/25 active:scale-[0.98] transition-all"
              >
                <FaWhatsapp size={17} />
                <span>Book WhatsApp</span>
              </a>

              {/* View Details Page */}
              <Link href={`/fleet/${vehicle.slug}`} className="flex-1" passHref>
                <button
                  type="button"
                  className="w-full h-full flex items-center justify-center gap-1 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-[0.98] cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight size={13} />
                </button>
              </Link>
            </div>

            {/* Quick Custom Booking Option */}
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="w-full text-center text-[11px] text-slate-500 hover:text-amber-600 mt-2.5 font-semibold transition-colors cursor-pointer"
            >
              Need custom dates or outstation? <span className="underline font-bold text-slate-800 hover:text-amber-600">Quick Booking Form</span>
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

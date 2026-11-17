"use client";

/**
 * VehicleCard.tsx — one car in a list (fleet page, homepage, area pages).
 * Shows photo, name, key specs and the starting daily rate, with
 * "Details" (car page) and "Book now" (booking form → WhatsApp).
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Settings2, Fuel } from "lucide-react";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";
import { useCurrency } from "@/context/CurrencyContext";
import { convertAndFormatPrice } from "@/utils/currency";

export interface VehicleCardData {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: string;
  images: { thumbnail: string; gallery?: string[] };
  transmission: string;
  seats: number;
  fuel: string;
  rent: { local?: number; daily?: number; withDriver?: { local?: number } };
}

export default function VehicleCard({ vehicle, priority = false }: { vehicle: VehicleCardData; index?: number; priority?: boolean }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { currency } = useCurrency();
  const price = vehicle.rent.local || vehicle.rent.daily || vehicle.rent.withDriver?.local || 0;
  const href = `/fleet/${vehicle.slug}`;
  // Cut-out PNGs sit on a studio floor; full photos fill the frame.
  const cutout = /\.png$/i.test(vehicle.images.thumbnail);

  return (
    <>
      <article className="shadow-lift group flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-white ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
        <Link
          href={href}
          className={`relative block aspect-[16/10] overflow-hidden ${cutout ? "car-stage" : "bg-slate-100"}`}
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={vehicle.images.thumbnail}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
            className={`transition-transform duration-700 group-hover:scale-[1.05] ${cutout ? "object-contain px-6 pb-3 pt-8" : "object-cover"}`}
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-text-primary shadow-sm backdrop-blur">
            {vehicle.category}
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm text-slate-500">{vehicle.brand}</p>
              <h3 className="text-[1.35rem] leading-tight">
                <Link href={href} className="hover:text-accent-primary transition-colors">
                  {vehicle.name}
                </Link>
              </h3>
            </div>
          </div>

          <ul className="mt-4 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl bg-slate-50 py-2.5 text-center text-[13px] text-slate-600">
            <li className="flex flex-col items-center gap-1 px-1">
              <Users size={16} className="text-slate-400" aria-hidden="true" />
              {vehicle.seats} seats
            </li>
            <li className="flex flex-col items-center gap-1 px-1">
              <Settings2 size={16} className="text-slate-400" aria-hidden="true" />
              {vehicle.transmission}
            </li>
            <li className="flex flex-col items-center gap-1 px-1">
              <Fuel size={16} className="text-slate-400" aria-hidden="true" />
              {vehicle.fuel}
            </li>
          </ul>

          <div className="mt-auto flex items-end justify-between gap-3 pt-5">
            <p className="whitespace-nowrap leading-none">
              <span className="block text-xs text-slate-500">From, with driver</span>
              <span className="mt-1.5 inline-block text-[1.6rem] font-bold tracking-tight text-text-primary">{convertAndFormatPrice(price, currency)}</span>
              <span className="text-sm text-slate-500"> /day</span>
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              href={href}
              className="flex items-center justify-center rounded-full border border-slate-300 py-3 text-[15px] font-semibold text-text-primary hover:border-brand-ink transition-colors"
            >
              Details
            </Link>
            <button
              type="button"
              onClick={() => setIsPopupOpen(true)}
              className="flex items-center justify-center rounded-full bg-brand-ink py-3 text-[15px] font-semibold text-white hover:bg-brand-orange hover:text-brand-ink transition-colors"
            >
              Book now
            </button>
          </div>
        </div>
      </article>

      <WhatsAppBookingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productName={vehicle.name}
        category={vehicle.category}
        dailyPrice={price}
      />
    </>
  );
}

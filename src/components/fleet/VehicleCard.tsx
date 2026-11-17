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

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border-primary bg-white transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(21,22,26,0.25)]">
        <Link href={href} className="relative block aspect-[16/10] border-b border-border-primary bg-white" tabIndex={-1} aria-hidden="true">
          <Image
            src={vehicle.images.thumbnail}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-text-primary">
            {vehicle.category}
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-sm text-slate-500">{vehicle.brand}</p>
          <h3 className="text-xl leading-snug">
            <Link href={href} className="hover:text-accent-primary transition-colors">
              {vehicle.name}
            </Link>
          </h3>

          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-slate-600">
            <li className="flex items-center gap-1.5">
              <Users size={15} className="text-slate-400" aria-hidden="true" />
              {vehicle.seats} seats
            </li>
            <li className="flex items-center gap-1.5">
              <Settings2 size={15} className="text-slate-400" aria-hidden="true" />
              {vehicle.transmission}
            </li>
            <li className="flex items-center gap-1.5">
              <Fuel size={15} className="text-slate-400" aria-hidden="true" />
              {vehicle.fuel}
            </li>
          </ul>

          <div className="mt-auto pt-5">
            <p className="border-t border-border-primary pt-4 whitespace-nowrap">
              <span className="text-sm text-slate-500">From </span>
              <span className="text-2xl font-semibold text-text-primary">{convertAndFormatPrice(price, currency)}</span>
              <span className="text-sm text-slate-500"> / day</span>
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link
                href={href}
                className="flex items-center justify-center rounded-full border border-border-primary py-3 text-[15px] font-semibold text-text-primary hover:border-slate-400 transition-colors"
              >
                Details
              </Link>
              <button
                type="button"
                onClick={() => setIsPopupOpen(true)}
                className="flex items-center justify-center rounded-full bg-brand-orange py-3 text-[15px] font-semibold text-brand-ink hover:bg-brand-ink hover:text-white transition-colors"
              >
                Book now
              </button>
            </div>
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

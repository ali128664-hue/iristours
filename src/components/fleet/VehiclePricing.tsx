"use client";

/**
 * VehiclePricing.tsx — price card on the car detail page:
 * rate table plus Book (form → WhatsApp), WhatsApp chat and Call buttons.
 */

import { useState } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCurrency } from "@/context/CurrencyContext";
import { convertAndFormatPrice } from "@/utils/currency";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";
import { PHONE } from "@/lib/site";

interface VehiclePricingProps {
  rent: any;
  whatsappUrl: string;
  vehicleName?: string;
  category?: string;
}

export default function VehiclePricing({ rent, whatsappUrl, vehicleName = "this car", category = "" }: VehiclePricingProps) {
  const { currency } = useCurrency();
  const [open, setOpen] = useState(false);
  const local = rent?.withDriver?.local || rent?.local || rent?.daily || 0;

  const rows = [
    { label: "Outside the city, per day", value: rent?.withDriver?.interCity || rent?.interCity },
    { label: "Northern areas, per day", value: rent?.withDriver?.outstation || rent?.outstation },
    { label: "Weekly", value: rent?.weekly },
    { label: "Monthly", value: rent?.monthly },
  ].filter((r) => r.value);

  return (
    <div className="rounded-3xl border border-border-primary bg-bg-primary p-5 md:p-6">
      <p className="text-sm text-text-secondary">Within the city, with driver</p>
      <p className="mt-1">
        <span className="font-display text-4xl font-semibold text-text-primary">
          {convertAndFormatPrice(local, currency)}
        </span>
        <span className="text-text-secondary"> / day</span>
      </p>

      {rows.length > 0 && (
        <dl className="mt-4 divide-y divide-border-primary border-y border-border-primary">
          {rows.map((r) => (
            <div key={r.label} className="flex justify-between gap-4 py-2.5 text-[15px]">
              <dt className="text-text-secondary">{r.label}</dt>
              <dd className="font-semibold text-text-primary">{convertAndFormatPrice(r.value, currency)}</dd>
            </div>
          ))}
        </dl>
      )}
      <p className="mt-3 text-sm text-text-secondary">Discount on bookings of 3 days or more.</p>

      <div className="mt-5 grid gap-2.5">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-full bg-brand-orange py-3.5 text-base font-semibold text-brand-ink hover:bg-brand-ink hover:text-white transition-colors"
        >
          Check dates and book
        </button>
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-semibold text-white hover:bg-[#1fb85a] transition-colors"
          >
            <FaWhatsapp size={18} />
            WhatsApp
          </a>
          <a
            href={`tel:${PHONE.tel}`}
            className="flex items-center justify-center gap-2 rounded-full border border-border-primary bg-white py-3 font-semibold text-text-primary hover:border-slate-400 transition-colors"
          >
            <Phone size={16} className="text-accent-primary" />
            Call
          </a>
        </div>
      </div>

      <WhatsAppBookingPopup isOpen={open} onClose={() => setOpen(false)} productName={vehicleName} category={category} dailyPrice={local} />
    </div>
  );
}

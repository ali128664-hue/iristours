"use client";

/**
 * TourDetailClient.tsx — booking box on a tour page (form → WhatsApp).
 */

import { useState } from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";
import { PHONE, whatsappLink } from "@/lib/site";

export default function TourDetailClient({ tour }: { tour: { title: string } }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80 p-6 lg:sticky lg:top-24">
        <h2 className="text-2xl">Book this tour</h2>
        <p className="mt-3 leading-relaxed text-text-secondary">
          Prices depend on dates, group size and the car. Send your details and we will reply with a full quote. Days, stops and the car can all be changed.
        </p>
        <div className="mt-6 grid gap-2.5">
          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="rounded-full bg-brand-orange py-3.5 text-base font-semibold text-brand-ink hover:bg-brand-ink hover:text-white transition-colors"
          >
            Get a price for my dates
          </button>
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href={whatsappLink(`Hi Iris Tours! I am interested in the ${tour.title}. Please share the itinerary and price.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 font-semibold text-white hover:bg-[#1fb85a] transition-colors"
            >
              <FaWhatsapp size={18} />
              WhatsApp
            </a>
            <a href={`tel:${PHONE.tel}`} className="flex items-center justify-center gap-2 rounded-full border border-border-primary py-3 font-semibold text-text-primary hover:border-slate-400 transition-colors">
              <Phone size={16} className="text-accent-primary" />
              Call
            </a>
          </div>
        </div>
      </div>

      <WhatsAppBookingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} productName={tour.title} category="Tour package" />
    </>
  );
}

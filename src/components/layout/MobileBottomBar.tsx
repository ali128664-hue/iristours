"use client";

/**
 * MobileBottomBar.tsx — the Call / WhatsApp bar fixed to the bottom of the
 * screen on phones, so booking is always one tap away.
 * Phone and WhatsApp numbers come from src/lib/site.ts
 */

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE, whatsappLink } from "@/lib/site";

export default function MobileBottomBar() {
  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 border-t border-border-primary bg-white/95 backdrop-blur-md px-3 pt-2.5"
      style={{ paddingBottom: "max(0.625rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto grid max-w-lg grid-cols-[1fr_1.4fr] gap-2.5">
        <a
          href={`tel:${PHONE.tel}`}
          className="flex items-center justify-center gap-2 rounded-full border border-border-primary bg-white py-3 text-[15px] font-semibold text-text-primary active:bg-slate-100"
        >
          <Phone size={17} className="text-accent-primary" />
          Call
        </a>
        <a
          href={whatsappLink("Hi Iris Tours! I want to ask about car rental rates and availability.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-[15px] font-semibold text-white active:bg-[#1fb85a]"
        >
          <FaWhatsapp size={19} />
          Book on WhatsApp
        </a>
      </div>
    </div>
  );
}

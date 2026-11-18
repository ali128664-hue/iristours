/**
 * CtaBand.tsx — closing "book now" block used at the bottom of inner pages.
 */

import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE, whatsappLink } from "@/lib/site";

export default function CtaBand({
  title = "Ready to book?",
  text = "Send your dates and pickup point on WhatsApp. We confirm the car and the final price in writing.",
  message = "Hi Iris Tours! I want to book a car.",
}: {
  title?: string;
  text?: string;
  message?: string;
}) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] bg-brand-orange p-7 md:p-14">
      {/* The logo's iris rings, oversized and cropped */}
      <span aria-hidden="true" className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full border-[28px] border-white/20 md:h-[28rem] md:w-[28rem]" />
      <span aria-hidden="true" className="absolute -right-4 -top-4 -z-10 h-40 w-40 rounded-full border-2 border-brand-ink/10 md:h-60 md:w-60" />
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-[2.1rem] md:text-5xl text-brand-ink">{title}</h2>
          <p className="mt-3 text-base md:text-lg text-brand-ink/80">{text}</p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-ink px-7 py-4 font-semibold text-white hover:bg-white hover:text-brand-ink transition-colors shadow-lg"
          >
            <FaWhatsapp size={19} />
            Book on WhatsApp
          </a>
          <a
            href={`tel:${PHONE.tel}`}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-brand-ink/30 bg-white/30 px-7 py-4 font-semibold text-brand-ink hover:border-brand-ink transition-colors"
          >
            <Phone size={17} />
            Call {PHONE.display}
          </a>
        </div>
      </div>
    </div>
  );
}

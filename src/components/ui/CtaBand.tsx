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
    <div className="rounded-3xl bg-brand-orange p-7 md:p-12">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl text-brand-ink">{title}</h2>
          <p className="mt-3 text-base md:text-lg text-brand-ink/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-ink px-7 py-4 font-semibold text-white hover:bg-white hover:text-brand-ink transition-colors"
          >
            <FaWhatsapp size={19} />
            Book on WhatsApp
          </a>
          <a
            href={`tel:${PHONE.tel}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-ink/30 px-7 py-4 font-semibold text-brand-ink hover:border-brand-ink transition-colors"
          >
            <Phone size={17} />
            Call {PHONE.display}
          </a>
        </div>
      </div>
    </div>
  );
}

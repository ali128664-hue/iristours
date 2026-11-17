/**
 * FloatingWhatsApp.tsx — round WhatsApp button in the bottom-right corner
 * on tablets and desktops (phones use the bottom bar instead).
 * WhatsApp number comes from src/lib/site.ts
 */

import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink("Hi Iris Tours! I need some information.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-5 text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.6)] hover:bg-[#1fb85a] transition-colors"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
        <FaWhatsapp size={22} />
      </span>
      <span className="font-semibold">Chat on WhatsApp</span>
    </a>
  );
}

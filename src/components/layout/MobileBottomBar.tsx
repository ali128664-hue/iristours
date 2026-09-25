"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-border-primary/80 px-3 py-2.5 shadow-[0_-6px_20px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-2.5 max-w-lg mx-auto">
        {/* Direct Call Button */}
        <a
          href="tel:+923154973906"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-bg-secondary border border-border-primary text-text-primary font-bold text-xs uppercase tracking-wider hover:bg-gray-100 active:scale-[0.98] transition-all shadow-sm"
          aria-label="Direct Call"
        >
          <div className="w-7 h-7 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary flex-shrink-0">
            <Phone size={14} />
          </div>
          <div className="text-left leading-tight">
            <span className="block text-[11px] font-extrabold text-text-primary">Call Now</span>
            <span className="block text-[9px] text-text-secondary font-medium">0315-4973906</span>
          </div>
        </a>

        {/* Instant WhatsApp Booking Button */}
        <a
          href="https://wa.me/923154973906?text=Hi%20Iris%20Tours!%20I%20want%20to%20inquire%20about%20car%20rental%20rates%20and%20availability."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.3] relative overflow-hidden flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider shadow-[0_4px_14px_rgba(37,211,102,0.4)] active:scale-[0.98] transition-all"
          aria-label="Book on WhatsApp"
        >
          {/* Subtle shine effect */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />
          
          <div className="relative flex items-center gap-2">
            <div className="relative">
              <FaWhatsapp size={18} />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white animate-ping" />
            </div>
            <div className="text-left leading-tight">
              <div className="flex items-center gap-1">
                <span className="block text-[11px] font-extrabold text-white">Book WhatsApp</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse" />
              </div>
              <span className="block text-[9px] text-white/90 font-medium">Online 24/7 • Fast Reply</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

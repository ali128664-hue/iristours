/**
 * FloatingWhatsApp.tsx — Floating WhatsApp Button (نیچے دائیں طرف کا WhatsApp بٹن)
 *
 * This renders the fixed floating WhatsApp button visible on every page.
 * It includes:
 *  - A tooltip label ("Need Help? Chat on WhatsApp") — visible on desktop
 *  - A circular WhatsApp icon button with a pulse animation
 *
 * HOW TO CHANGE:
 *  - WhatsApp number → change the number in the `href` below (currently 923066305875)
 *  - Tooltip message → change the text inside the <span> below
 */

"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip label — visible on medium screens and above (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="hidden md:flex bg-bg-card border border-border-primary rounded-full px-4 py-2 shadow-lg items-center"
      >
        {/* Change the tooltip/label text here if needed */}
        <span className="text-sm font-medium text-text-primary tracking-wide">
          Need Help? <span className="text-accent-primary ml-1">Chat on WhatsApp</span>
        </span>
      </motion.div>

      {/* Floating WhatsApp icon button */}
      {/* Change WhatsApp number here for the floating button — replace 923066305875 */}
      <motion.a
        href="https://wa.me/923066305875"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center w-14 h-14 bg-accent-primary rounded-full shadow-[0_0_20px_rgba(22,199,158,0.5)] text-bg-primary hover:bg-white transition-colors"
        aria-label="Contact on WhatsApp"
      >
        <FaWhatsapp size={28} />
        
        {/* Pulse animation ring around the button */}
        <span className="absolute w-full h-full rounded-full bg-accent-primary opacity-50 animate-ping" style={{ animationDuration: '2s' }}></span>
      </motion.a>
    </div>
  );
}

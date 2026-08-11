/**
 * Navbar.tsx — Top Navigation Bar (اوپر والا مینو)
 *
 * This component renders the fixed top navigation bar with:
 *  - The Iris Tours logo (links to home page)
 *  - Desktop nav links (horizontal menu)
 *  - "Book via WhatsApp" CTA button
 *  - Mobile hamburger menu (slides in on small screens)
 *
 * HOW TO CHANGE THINGS:
 *  - Add/remove nav links → edit the `navLinks` array below
 *  - Change the logo → replace the file at public/logo.png
 *  - Change WhatsApp number → find the two `wa.me/923066305875` links in this file
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import clsx from "clsx";
// Logo component — the logo image is at public/logo.png, replace that file to update the logo
import Logo from "@/components/ui/Logo";

// ─── NAVIGATION LINKS ─────────────────────────────────────────────────────────
// Add or remove navigation items here.
// Each item needs a `name` (what users see) and `href` (the page URL).
// Example to add a Contact page: { name: "Contact", href: "/contact" }
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Fleet", href: "/fleet" },
  { name: "Tours", href: "/tours" },
  { name: "Airport", href: "/services/airport-transfer" },
  { name: "Wedding", href: "/services/wedding-cars" },
  { name: "Corporate", href: "/services/corporate-rentals" },
  { name: "Gallery", href: "/gallery" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Adds a blurred background to the navbar when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-bg-secondary/80 backdrop-blur-md border-border-primary py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo — clicking this goes to the homepage */}
        <Link href="/" className="z-50">
          <Logo width={150} height={50} />
        </Link>

        {/* Desktop Nav — visible on large screens only */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent-primary",
                pathname === link.href ? "text-accent-primary" : "text-text-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          {/* Change WhatsApp number here (desktop button): replace 923066305875 with your number */}
          <Link
            href="https://wa.me/923066305875"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-tr from-accent-secondary to-accent-primary text-white font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_8px_16px_-4px_rgba(245,158,11,0.5),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_24px_-6px_rgba(245,158,11,0.6),inset_0_2px_4px_rgba(255,255,255,0.6)] hover:-translate-y-1 inline-block border border-white/20"
          >
            Book via WhatsApp
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="lg:hidden text-text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu — slides in when hamburger is tapped */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border-primary lg:hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-1 max-h-[80vh] overflow-y-auto">
              {/* Render each nav link in the mobile menu */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={clsx(
                      "flex items-center justify-between py-4 border-b border-gray-100 last:border-0",
                      "text-lg font-bold tracking-wide uppercase transition-all duration-300",
                      pathname === link.href 
                        ? "text-accent-primary pl-2" 
                        : "text-gray-600 hover:text-accent-primary hover:pl-2"
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} className={pathname === link.href ? "text-accent-primary" : "text-gray-300"} />
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile WhatsApp CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
                className="mt-6"
              >
                {/* Change WhatsApp number here (mobile button): replace 923066305875 with your number */}
                <Link
                  href="https://wa.me/923066305875"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-bold text-sm uppercase tracking-wider hover:brightness-110 shadow-lg shadow-accent-primary/20 transition-all active:scale-[0.98]"
                >
                  Book via WhatsApp
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

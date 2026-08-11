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
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import clsx from "clsx";
// Logo component — the logo image is at public/logo.png, replace that file to update the logo
import Logo from "@/components/ui/Logo";
import serviceAreas from "@/data/serviceAreas.json";

// ─── NAVIGATION LINKS ─────────────────────────────────────────────────────────
// Add or remove navigation items here.
// Each item needs a `name` (what users see) and `href` (the page URL).
// Example to add a Contact page: { name: "Contact", href: "/contact" }
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Fleet", href: "/fleet" },
  { name: "Airport", href: "/services/airport-transfer" },
  { name: "Wedding", href: "/services/wedding-cars" },
  { name: "Areas", href: "/areas" },
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
        "bg-white/70 backdrop-blur-lg border-white/50",
        isScrolled ? "shadow-sm py-4" : "py-6"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo — clicking this goes to the homepage */}
        <Link href="/" className="z-50">
          <Logo width={150} height={50} />
        </Link>

        {/* Desktop Nav — visible on large screens only */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.name === "Fleet") {
              return (
                <div key="fleet-dropdown" className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer py-4">
                    <Link
                      href="/fleet"
                      className={clsx(
                        "text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent-primary",
                        pathname.startsWith("/fleet") ? "text-accent-primary" : "text-text-secondary"
                      )}
                    >
                      Fleet
                    </Link>
                    <ChevronDown size={14} className="text-text-secondary group-hover:text-accent-primary transition-colors" />
                  </div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-bg-primary border border-border-primary rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden">
                    <Link href="/fleet?category=Luxury" className="px-4 py-3 text-sm font-medium text-text-primary hover:bg-bg-secondary hover:text-accent-primary transition-colors border-b border-border-primary">Luxury Cars</Link>
                    <Link href="/fleet?category=SUV" className="px-4 py-3 text-sm font-medium text-text-primary hover:bg-bg-secondary hover:text-accent-primary transition-colors border-b border-border-primary">SUVs & 4x4</Link>
                    <Link href="/fleet?category=Sedan" className="px-4 py-3 text-sm font-medium text-text-primary hover:bg-bg-secondary hover:text-accent-primary transition-colors border-b border-border-primary">Sedans</Link>
                    <Link href="/fleet?category=Economy" className="px-4 py-3 text-sm font-medium text-text-primary hover:bg-bg-secondary hover:text-accent-primary transition-colors border-b border-border-primary">Economy</Link>
                    <Link href="/fleet?category=Van" className="px-4 py-3 text-sm font-medium text-text-primary hover:bg-bg-secondary hover:text-accent-primary transition-colors border-b border-border-primary">Vans</Link>
                    <Link href="/fleet?category=Bus" className="px-4 py-3 text-sm font-medium text-text-primary hover:bg-bg-secondary hover:text-accent-primary transition-colors">Buses & Coasters</Link>
                  </div>
                </div>
              );
            }
            if (link.name === "Areas") {
              // Get only popular areas for the dropdown to keep it clean
              const popularAreas = serviceAreas.filter(a => a.isPopular).slice(0, 10);
              return (
                <div key="areas-dropdown" className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer py-4">
                    <Link
                      href="/areas"
                      className={clsx(
                        "text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent-primary",
                        pathname.startsWith("/areas") ? "text-accent-primary" : "text-text-secondary"
                      )}
                    >
                      Service Areas
                    </Link>
                    <ChevronDown size={14} className="text-text-secondary group-hover:text-accent-primary transition-colors" />
                  </div>
                  
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-bg-primary border border-border-primary rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex flex-col overflow-hidden max-h-[80vh] overflow-y-auto">
                    {popularAreas.map(area => (
                      <Link key={area.slug} href={`/areas/${area.slug}`} className="px-4 py-3 text-sm font-medium text-text-primary hover:bg-bg-secondary hover:text-accent-primary transition-colors border-b border-border-primary last:border-0">
                        {area.name}
                      </Link>
                    ))}
                    <Link href="/areas" className="px-4 py-3 text-sm font-bold text-accent-primary bg-accent-primary/10 hover:bg-accent-primary/20 transition-colors text-center sticky bottom-0 border-t border-border-primary">
                      View All 100+ Areas
                    </Link>
                  </div>
                </div>
              );
            }
            return (
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
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          {/* Change WhatsApp number here (desktop button): replace 923066305875 with your number */}
          <Link
            href="https://wa.me/923066305875?text=Hi!%20I%20want%20to%20book%20a%20car."
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
                  href="https://wa.me/923066305875?text=Hi!%20I%20want%20to%20book%20a%20car."
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

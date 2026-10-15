"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, ChevronDown, Globe, Phone } from "lucide-react";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";
import serviceAreas from "@/data/serviceAreas.json";
import { useCurrency } from "@/context/CurrencyContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Fleet", href: "/fleet" },
  { name: "Fuel Prices", href: "/fuel-prices-pakistan" },
  { name: "Airport", href: "/services/airport-transfer" },
  { name: "Wedding", href: "/services/wedding-cars" },
  { name: "Areas", href: "/areas" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { currency, toggleCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        "bg-white/90 backdrop-blur-xl border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]",
        isScrolled ? "py-3.5 shadow-md" : "py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50">
          <Logo width={150} height={50} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            if (link.name === "Fleet") {
              return (
                <div key="fleet-dropdown" className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer py-4 group">
                    <Link
                      href="/fleet"
                      className={clsx(
                        "relative text-[15px] font-bold tracking-wide transition-colors pb-1",
                        pathname.startsWith("/fleet") ? "text-amber-600" : "text-slate-700 group-hover:text-amber-600"
                      )}
                    >
                      Fleet
                      <span className={clsx(
                        "absolute -bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full",
                        pathname.startsWith("/fleet") && "w-full"
                      )} />
                    </Link>
                    <ChevronDown size={14} className="text-slate-400 group-hover:text-amber-600 transition-colors mt-[-4px]" />
                  </div>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
                    <Link href="/fleet?category=Luxury" className="px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600 transition-colors border-b border-slate-100">Luxury Cars</Link>
                    <Link href="/fleet?category=SUV" className="px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600 transition-colors border-b border-slate-100">SUVs &amp; 4x4</Link>
                    <Link href="/fleet?category=Sedan" className="px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600 transition-colors border-b border-slate-100">Sedans</Link>
                    <Link href="/fleet?category=Economy" className="px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600 transition-colors border-b border-slate-100">Economy</Link>
                    <Link href="/fleet?category=Van" className="px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600 transition-colors border-b border-slate-100">Vans</Link>
                    <Link href="/fleet?category=Bus" className="px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600 transition-colors">Buses &amp; Coasters</Link>
                  </div>
                </div>
              );
            }
            if (link.name === "Areas") {
              const cities = Array.from(new Set(serviceAreas.map(a => a.city)));
              return (
                <div key="areas-dropdown" className="relative group">
                  <div className="flex items-center gap-1 cursor-pointer py-4 group">
                    <Link
                      href="/areas"
                      className={clsx(
                        "relative text-[15px] font-bold tracking-wide transition-colors pb-1",
                        pathname.startsWith("/areas") ? "text-amber-600" : "text-slate-700 group-hover:text-amber-600"
                      )}
                    >
                      Service Areas
                      <span className={clsx(
                        "absolute -bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full",
                        pathname.startsWith("/areas") && "w-full"
                      )} />
                    </Link>
                    <ChevronDown size={14} className="text-slate-400 group-hover:text-amber-600 transition-colors mt-[-4px]" />
                  </div>
                  
                  {/* Mega Menu Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden max-h-[80vh] overflow-y-auto">
                    {cities.map(city => (
                      <Link key={city} href={`/areas#${city}`} className="px-4 py-3 text-[14px] font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-600 transition-colors border-b border-slate-100 last:border-0">
                        {city}
                      </Link>
                    ))}
                    <Link href="/areas" className="px-4 py-3 text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 transition-colors text-center sticky bottom-0 border-t border-slate-200">
                      View All 200+ Areas
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
                  "relative text-[15px] font-bold tracking-wide transition-colors pb-1 group",
                  pathname === link.href ? "text-amber-600" : "text-slate-700 hover:text-amber-600"
                )}
              >
                {link.name}
                <span className={clsx(
                  "absolute -bottom-0 left-0 w-0 h-[2px] bg-amber-500 transition-all duration-300 group-hover:w-full",
                  pathname === link.href && "w-full"
                )} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a 
            href="tel:+923154973906"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 text-slate-800 hover:text-amber-600 font-bold text-xs tracking-wide transition-all shadow-sm"
            title="Call Us Directly"
          >
            <Phone size={13} className="text-amber-600" />
            <span>0315-4973906</span>
          </a>

          <button 
            onClick={toggleCurrency}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-200/90 bg-white hover:bg-slate-50 transition-colors text-xs font-bold text-slate-800 shadow-sm cursor-pointer"
            title="Toggle Currency"
          >
            <Globe size={14} className="text-slate-500" />
            {currency === 'PKR' ? 'PKR' : 'USD'}
          </button>

          <Link
            href="https://wa.me/923154973906?text=Hi!%20I%20want%20to%20book%20a%20car."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-white font-extrabold text-xs uppercase tracking-wider hover:brightness-105 transition-all shadow-md shadow-amber-500/25 active:scale-95 inline-block"
          >
            Book via WhatsApp
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="tel:+923154973906"
            className="p-2 rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors"
            aria-label="Call Directly"
          >
            <Phone size={18} />
          </a>
          <button
            className="text-slate-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="absolute top-full left-0 right-0 bg-white/98 backdrop-blur-xl border-b border-slate-200 lg:hidden shadow-[0_20px_40px_-15px_rgba(15,23,42,0.1)] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-1 max-h-[80vh] overflow-y-auto">
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
                      "flex items-center justify-between py-4 border-b border-slate-100 last:border-0",
                      "text-base font-bold tracking-wide uppercase transition-all duration-300",
                      pathname === link.href 
                        ? "text-amber-600 pl-2" 
                        : "text-slate-700 hover:text-amber-600 hover:pl-2"
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronRight size={18} className={pathname === link.href ? "text-amber-600" : "text-slate-300"} />
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1, duration: 0.3 }}
                className="mt-6 flex flex-col gap-4"
              >
                <button 
                  onClick={toggleCurrency}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold text-sm uppercase tracking-wider transition-all"
                >
                  <Globe size={18} className="text-slate-500" />
                  Switch to {currency === 'PKR' ? 'USD' : 'PKR'}
                </button>
                <Link
                  href="https://wa.me/923154973906?text=Hi!%20I%20want%20to%20book%20a%20car."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-md shadow-amber-500/25 transition-all active:scale-[0.98]"
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

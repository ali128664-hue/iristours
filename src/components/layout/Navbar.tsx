"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";

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
        <Link href="/" className="z-50">
          <Logo width={150} height={50} />
        </Link>

        {/* Desktop Nav */}
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

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="https://wa.me/923066305875"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-tr from-accent-secondary to-accent-primary text-white font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_8px_16px_-4px_rgba(245,158,11,0.5),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_24px_-6px_rgba(245,158,11,0.6),inset_0_2px_4px_rgba(255,255,255,0.6)] hover:-translate-y-1 inline-block border border-white/20"
          >
            Book via WhatsApp
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-text-primary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-secondary border-b border-border-primary p-6 lg:hidden flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-lg font-medium tracking-wide uppercase transition-colors",
                  pathname === link.href ? "text-accent-primary" : "text-text-secondary hover:text-text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/923066305875"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-3 text-center rounded-full bg-accent-primary text-bg-primary font-semibold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Book via WhatsApp
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

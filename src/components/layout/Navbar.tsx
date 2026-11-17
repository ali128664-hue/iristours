"use client";

/**
 * Navbar.tsx — top navigation on every page (اوپر والا مینو)
 *
 * Desktop: logo, menu with Fleet / Services dropdowns, phone, PKR/USD switch, WhatsApp.
 * Mobile:  logo, call button and a menu button that opens a full-screen menu.
 *
 * HOW TO CHANGE:
 *  - Menu items → edit FLEET_LINKS, SERVICE_LINKS and MAIN_LINKS below
 *  - Phone / WhatsApp → src/lib/site.ts
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import Logo from "@/components/ui/Logo";
import { useCurrency } from "@/context/CurrencyContext";
import { PHONE, whatsappLink } from "@/lib/site";

const FLEET_LINKS = [
  { name: "All cars", href: "/fleet" },
  { name: "Economy", href: "/fleet?category=Economy" },
  { name: "Sedans", href: "/fleet?category=Sedan" },
  { name: "SUVs and 4x4", href: "/fleet?category=SUV" },
  { name: "Luxury", href: "/fleet?category=Luxury" },
  { name: "Vans and coasters", href: "/fleet?category=Van" },
];

const SERVICE_LINKS = [
  { name: "All services", href: "/services" },
  { name: "Airport transfer", href: "/services/airport-transfer" },
  { name: "Wedding cars", href: "/services/wedding-cars" },
  { name: "Corporate rentals", href: "/services/corporate-rentals" },
  { name: "Northern tours", href: "/tours" },
];

const MAIN_LINKS = [
  { name: "Areas", href: "/areas" },
  { name: "Fuel prices", href: "/fuel-prices-pakistan" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const BOOK_URL = whatsappLink("Hi Iris Tours! I want to book a car.");

function Dropdown({ label, links, active }: { label: string; links: { name: string; href: string }[]; active: boolean }) {
  return (
    <div className="relative group">
      <button
        type="button"
        aria-haspopup="true"
        className={clsx(
          "flex items-center gap-1 py-2 text-[15px] font-medium transition-colors",
          active ? "text-text-primary" : "text-slate-600 hover:text-text-primary group-focus-within:text-text-primary"
        )}
      >
        {label}
        <ChevronDown size={15} className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
        {active && <span className="absolute -bottom-[3px] left-0 right-5 h-[2px] rounded-full bg-brand-orange" />}
      </button>
      <div className="absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-150">
        <div className="w-56 rounded-2xl border border-border-primary bg-white p-2 shadow-[0_18px_40px_-12px_rgba(21,22,26,0.25)]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="block rounded-xl px-3.5 py-2.5 text-[15px] text-slate-700 hover:bg-slate-100 hover:text-text-primary transition-colors">
              {l.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const { currency, toggleCurrency } = useCurrency();

  // Close the mobile menu after navigating
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock page scroll while the mobile menu is open; Esc closes it
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-border-primary bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-full items-center justify-between gap-6 px-5 md:px-12">
        <Link href="/" aria-label="Iris Tours home" className="flex-shrink-0">
          <Logo width={132} height={44} />
        </Link>

        {/* Desktop menu */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-5 xl:gap-7 whitespace-nowrap">
          <Dropdown label="Fleet" links={FLEET_LINKS} active={isActive("/fleet")} />
          <Dropdown label="Services" links={SERVICE_LINKS} active={isActive("/services") || isActive("/tours")} />
          {MAIN_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "relative py-2 text-[15px] font-medium transition-colors",
                isActive(l.href) ? "text-text-primary" : "text-slate-600 hover:text-text-primary"
              )}
            >
              {l.name}
              {isActive(l.href) && <span className="absolute -bottom-[3px] left-0 right-0 h-[2px] rounded-full bg-brand-orange" />}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-2">
          <button
            type="button"
            onClick={toggleCurrency}
            title="Show prices in PKR or USD"
            className="rounded-full px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-text-primary transition-colors"
          >
            {currency}
          </button>
          <a href={`tel:${PHONE.tel}`} className="hidden 2xl:inline-flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-text-primary hover:bg-slate-100 transition-colors">
            <Phone size={15} className="text-accent-primary" />
            {PHONE.display}
          </a>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-brand-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-orange hover:text-brand-ink transition-colors"
          >
            <FaWhatsapp size={17} />
            Book on WhatsApp
          </a>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-1.5">
          <a href={`tel:${PHONE.tel}`} aria-label={`Call ${PHONE.display}`} className="flex h-11 w-11 items-center justify-center rounded-full text-text-primary hover:bg-slate-100">
            <Phone size={20} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-text-primary"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu — kept outside <header>: the header's blur effect would
          otherwise trap this fixed panel inside the 72px header (height 0). */}
      {open && (
        <div id="mobile-menu" className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-[45] overflow-y-auto overscroll-contain bg-white" data-lenis-prevent>
          <nav aria-label="Mobile" className="container mx-auto px-5 pt-4 pb-32">
            <p className="px-1 pb-2 pt-2 text-sm font-semibold text-slate-500">Cars</p>
            <div className="grid grid-cols-2 gap-2">
              {FLEET_LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="rounded-xl border border-border-primary px-4 py-3 text-[15px] font-medium text-text-primary active:bg-slate-100">
                  {l.name}
                </Link>
              ))}
            </div>

            <p className="px-1 pb-2 pt-6 text-sm font-semibold text-slate-500">Services</p>
            <ul className="divide-y divide-border-primary rounded-xl border border-border-primary">
              {SERVICE_LINKS.slice(1).map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block px-4 py-3.5 text-base font-medium text-text-primary active:bg-slate-100">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="mt-6 divide-y divide-border-primary rounded-xl border border-border-primary">
              {[{ name: "Home", href: "/" }, ...MAIN_LINKS, { name: "Northern tours", href: "/tours" }, { name: "FAQ", href: "/faq" }].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={clsx("block px-4 py-3.5 text-base font-medium active:bg-slate-100", isActive(l.href) ? "text-accent-primary" : "text-text-primary")}
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={toggleCurrency}
              className="mt-6 w-full rounded-xl border border-border-primary px-4 py-3.5 text-left text-base font-medium text-text-primary"
            >
              Prices shown in {currency}. Switch to {currency === "PKR" ? "USD" : "PKR"}
            </button>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-base font-semibold text-white">
                <FaWhatsapp size={20} />
                Book on WhatsApp
              </a>
              <a href={`tel:${PHONE.tel}`} className="flex items-center justify-center gap-2 rounded-full border border-border-primary py-4 text-base font-semibold text-text-primary">
                <Phone size={18} className="text-accent-primary" />
                Call {PHONE.display}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

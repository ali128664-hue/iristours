/**
 * Footer.tsx — Website Footer (نیچے والا حصہ)
 *
 * Shown on every page: contact details, page links and popular service areas.
 *
 * HOW TO CHANGE:
 *  - Phone, WhatsApp, email, address → src/lib/site.ts
 *  - Link lists → LINK_GROUPS below
 *  - Popular areas → POPULAR_AREAS below (slugs from src/data/serviceAreas.json)
 */

import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import serviceAreas from "@/data/serviceAreas.json";
import { ADDRESS, EMAIL, PHONE, SOCIAL, whatsappLink } from "@/lib/site";

const LINK_GROUPS = [
  {
    title: "Rent a car",
    links: [
      { name: "All cars and rates", href: "/fleet" },
      { name: "SUVs and 4x4", href: "/fleet?category=SUV" },
      { name: "Luxury cars", href: "/fleet?category=Luxury" },
      { name: "Vans and coasters", href: "/fleet?category=Van" },
      { name: "Fuel cost calculator", href: "/fuel-prices-pakistan" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Airport transfer", href: "/services/airport-transfer" },
      { name: "Wedding cars", href: "/services/wedding-cars" },
      { name: "Corporate rentals", href: "/services/corporate-rentals" },
      { name: "Northern tours", href: "/tours" },
      { name: "All services", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Blog", href: "/blog" },
      { name: "Gallery", href: "/gallery" },
      { name: "Privacy policy", href: "/privacy-policy" },
    ],
  },
];

const POPULAR_AREAS = [
  "dha-phase-5-lahore",
  "dha-phase-6-lahore",
  "gulberg-iii-lahore",
  "johar-town-block-d-lahore",
  "bahria-town-sector-c-lahore",
  "model-town-block-c-lahore",
  "lahore-cantt-lahore",
  "blue-area-islamabad",
  "sector-f-7-islamabad",
  "saddar-rawalpindi",
];

export default function Footer() {
  const areas = POPULAR_AREAS.map((slug) => serviceAreas.find((a) => a.slug === slug)).filter(
    (a): a is (typeof serviceAreas)[number] => Boolean(a)
  );

  return (
    <footer className="bg-brand-ink text-white/70">
      {/* Booking strip */}
      <div className="relative isolate overflow-hidden border-b border-white/10">
        <span aria-hidden="true" className="absolute -left-20 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full border-[3px] border-brand-orange/70 md:h-96 md:w-96" />
        <span aria-hidden="true" className="absolute -left-6 top-1/2 -z-10 h-44 w-44 -translate-y-1/2 rounded-full border border-white/10 md:h-64 md:w-64" />
        <div className="container mx-auto px-5 md:px-12 py-14 md:py-20 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="md:pl-24 lg:pl-40">
            <p className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white">
              Need a car today?
            </p>
            <p className="mt-3 max-w-lg text-white/65 md:text-lg">Message us with your dates and pickup point. We are available 24 hours a day.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink("Hi Iris Tours! I need a car.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1fb85a] px-6 py-3.5 font-semibold text-white transition-colors"
            >
              <FaWhatsapp size={19} />
              WhatsApp us
            </a>
            <a
              href={`tel:${PHONE.tel}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:border-white px-6 py-3.5 font-semibold text-white transition-colors"
            >
              <FaPhoneAlt size={14} className="text-brand-orange" />
              Call {PHONE.display}
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-12 py-12 md:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="col-span-2 lg:col-span-4">
            <Link href="/" aria-label="Iris Tours home" className="inline-block rounded-xl bg-white px-3 py-1.5">
              <Logo width={128} height={42} />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed">
              Chauffeur-driven car rental in Lahore and Islamabad, with airport transfers, wedding cars and northern tours across Pakistan.
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-brand-orange" size={14} />
                <span>{ADDRESS.lahore}</span>
              </li>
              <li className="flex gap-3">
                <FaPhoneAlt className="mt-1 flex-shrink-0 text-brand-orange" size={13} />
                <a href={`tel:${PHONE.tel}`} className="hover:text-white transition-colors">
                  {PHONE.international}
                </a>
              </li>
              <li className="flex gap-3">
                <FaEnvelope className="mt-1 flex-shrink-0 text-brand-orange" size={14} />
                <a href={`mailto:${EMAIL}`} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </li>
              <li className="flex gap-3">
                <FaFacebook className="mt-1 flex-shrink-0 text-brand-orange" size={14} />
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Facebook page
                </a>
              </li>
            </ul>
          </div>

          {/* Link groups */}
          {LINK_GROUPS.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <p className="mb-4 font-semibold text-white">{group.title}</p>
              <ul className="space-y-2.5 text-[15px]">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-white transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Areas */}
          <div className="col-span-2 lg:col-span-2">
            <p className="mb-4 font-semibold text-white">Popular areas</p>
            <ul className="flex flex-wrap gap-2 text-sm lg:flex-col lg:gap-2.5 lg:text-[15px]">
              {areas.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/areas/${a.slug}`}
                    className="inline-block rounded-full border border-white/15 px-3 py-1.5 hover:border-white/40 hover:text-white transition-colors lg:rounded-none lg:border-0 lg:p-0"
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" className="inline-block rounded-full px-3 py-1.5 font-semibold text-brand-orange hover:text-white lg:p-0">
                  All {serviceAreas.length} areas
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row md:justify-between">
          <p>&copy; {new Date().getFullYear()} Iris Tours &amp; Rental Car Services. All rights reserved.</p>
          <p>
            Designed and developed by{" "}
            <a href="https://hussainxsolution.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
              Hussain X Solution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

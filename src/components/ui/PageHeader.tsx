/**
 * PageHeader.tsx — the same header band at the top of every inner page
 * (fleet, services, tours, areas, contact, about, blog...).
 *
 * Usage:
 *   <PageHeader
 *     title="Our fleet"
 *     intro="Short sentence about the page"
 *     crumbs={[{ label: "Fleet" }]}
 *     actions={<a href="...">Book</a>}
 *   />
 */

import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  title,
  intro,
  crumbs = [],
  actions,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-brand-ink text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(50% 90% at 90% 0%, rgba(247,147,30,0.18) 0%, rgba(247,147,30,0) 70%)" }}
      />
      <div className="container mx-auto px-5 md:px-12 relative py-10 md:py-16">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/60">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight size={14} aria-hidden="true" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-white transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-white/85" aria-current="page">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <h1 className="text-[2.2rem] leading-[1.08] sm:text-5xl lg:text-6xl text-white max-w-4xl">{title}</h1>
        {intro && <p className="mt-4 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">{intro}</p>}
        {actions && <div className="mt-7 flex flex-col sm:flex-row gap-3">{actions}</div>}
        {children}
      </div>
    </header>
  );
}

/** Standard pair of buttons used in page headers: WhatsApp + call */
export function HeaderButtons({ whatsappHref, phoneHref, phoneLabel }: { whatsappHref: string; phoneHref: string; phoneLabel: string }) {
  return (
    <>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1fb85a] px-7 py-3.5 font-semibold text-white transition-colors"
      >
        <FaWhatsapp size={19} aria-hidden="true" />
        Book on WhatsApp
      </a>
      <a
        href={phoneHref}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:border-white px-7 py-3.5 font-semibold text-white transition-colors"
      >
        <Phone size={17} aria-hidden="true" className="text-brand-orange" />
        Call {phoneLabel}
      </a>
    </>
  );
}

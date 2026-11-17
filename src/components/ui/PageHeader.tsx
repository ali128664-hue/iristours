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
import Image from "next/image";
import { SITE_URL } from "@/lib/site";
import { ChevronRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type Crumb = { label: string; href?: string };

const DEFAULT_IMAGE = "/categories/luxury.jpg";

export default function PageHeader({
  title,
  intro,
  crumbs = [],
  actions,
  children,
  image = DEFAULT_IMAGE,
  breadcrumbSchema = true,
}: {
  title: string;
  intro?: React.ReactNode;
  crumbs?: Crumb[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
  /** Background photo (path in /public). */
  image?: string;
  /** Set false on pages that already output their own BreadcrumbList schema. */
  breadcrumbSchema?: boolean;
}) {
  const schema =
    breadcrumbSchema && crumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [{ label: "Home", href: "/" }, ...crumbs].map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${SITE_URL}${c.href === "/" ? "" : c.href}` } : {}),
          })),
        }
      : null;

  return (
    <header className="relative isolate overflow-hidden bg-brand-ink text-white">
      {schema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}
      <div aria-hidden="true" className="absolute inset-0 -z-10 photo-grain">
        <Image src={image} alt="" fill priority sizes="100vw" className="iris-zoom object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/85 to-brand-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-transparent to-brand-ink/30" />
      </div>
      <div className="container mx-auto px-5 md:px-12 relative pt-10 pb-12 md:pt-16 md:pb-20">
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

        <h1 className="text-[2.5rem] sm:text-6xl lg:text-7xl text-white max-w-4xl">{title}</h1>
        {intro && <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed max-w-2xl">{intro}</p>}
        {actions && <div className="mt-8 flex flex-col sm:flex-row gap-3">{actions}</div>}
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

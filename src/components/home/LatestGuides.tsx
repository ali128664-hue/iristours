/**
 * LatestGuides.tsx — newest blog guides on the homepage.
 * Reads src/data/guides automatically, so new guides show up here on their own.
 */

import Link from "next/link";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { allPostCards } from "@/data/guides";

export default function LatestGuides() {
  const [first, ...rest] = allPostCards.slice(0, 7);
  if (!first) return null;

  return (
    <Section tone="white">
      <SectionHeading
        title="Car rental and travel guides"
        intro="Prices, routes and season updates, written by our team and drivers."
        action={{ href: "/blog", label: `All ${allPostCards.length} guides` }}
      />
      <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
        <Link
          href={`/blog/${first.slug}`}
          className="group relative block min-h-[320px] overflow-hidden rounded-[1.75rem] bg-slate-200 lg:col-span-6 lg:row-span-3"
        >
          <Image src={first.img} alt="" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/30 to-transparent" />
          <span className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <span className="text-sm text-white/75">{first.category} · {first.readingTime}</span>
            <span className="font-display mt-2 block text-2xl font-bold leading-tight text-white md:text-3xl">{first.title}</span>
            <span className="mt-2 line-clamp-2 block max-w-lg text-white/80">{first.desc}</span>
          </span>
        </Link>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1 lg:gap-3">
          {rest.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group flex items-center gap-4 rounded-2xl p-2 hover:bg-slate-50 transition-colors">
                <span className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-200">
                  <Image src={p.img} alt="" fill sizes="112px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="text-xs text-text-secondary">{p.category} · {p.readingTime}</span>
                  <span className="mt-0.5 line-clamp-2 block font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{p.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

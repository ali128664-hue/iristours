/**
 * /sitemap — a friendly sitemap page for people (search engines use /sitemap.xml).
 * Every link comes from src/lib/sitemaps.ts, so new cars, areas and blog
 * posts appear here automatically.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SITEMAP_GROUPS, SITE, type SitemapEntry } from "@/lib/sitemaps";

export const metadata: Metadata = {
  title: "Sitemap: Every Page on Iris Tours",
  description:
    "Find every page on Iris Tours in one place: cars and rates, services, tours, 200 pickup areas and all rent a car and travel guides.",
  alternates: { canonical: `${SITE}/sitemap` },
};

const path = (url: string) => url.replace(SITE, "") || "/";

function groupBy(entries: SitemapEntry[]) {
  const map = new Map<string, SitemapEntry[]>();
  for (const e of entries) {
    const k = e.group || "Other";
    map.set(k, [...(map.get(k) || []), e]);
  }
  return [...map.entries()].sort((a, b) => b[1].length - a[1].length);
}

export default function SitemapPage() {
  const data = Object.fromEntries(SITEMAP_GROUPS.map((g) => [g.key, g.entries()]));
  const total = Object.values(data).reduce((n, list) => n + list.length, 0);

  return (
    <>
      <PageHeader
        title="Sitemap"
        intro={`All ${total} pages on Iris Tours in one place: cars, services, tours, pickup areas and guides.`}
        crumbs={[{ label: "Sitemap" }]}
        image="/blog/rent-a-car-lahore-fleet-lineup.jpg"
      />

      <Section>
        {/* Overview tiles */}
        <nav aria-label="Sitemap sections" className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {SITEMAP_GROUPS.map((g) => (
            <a
              key={g.key}
              href={`#${g.key}`}
              className="group rounded-[1.3rem] bg-white p-5 ring-1 ring-slate-200 transition-all hover:-translate-y-0.5 hover:ring-slate-400"
            >
              <span className="font-display block text-3xl font-bold text-text-primary">{data[g.key].length}</span>
              <span className="mt-1 block font-semibold text-text-primary group-hover:text-accent-primary">{g.title}</span>
              <span className="mt-1 block text-sm leading-snug text-text-secondary">{g.description}</span>
            </a>
          ))}
        </nav>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Main pages */}
          <section id="pages" className="scroll-mt-28">
            <h2 className="text-3xl">Main pages</h2>
            <ul className="mt-5 divide-y divide-slate-200 rounded-[1.3rem] bg-white ring-1 ring-slate-200">
              {data.pages.map((p) => (
                <li key={p.url}>
                  <Link href={path(p.url)} className="group flex items-center justify-between gap-3 px-5 py-3.5">
                    <span className="font-semibold text-text-primary group-hover:text-accent-primary">{p.title}</span>
                    <span className="text-sm text-slate-400">{path(p.url)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Services + tours */}
          <div className="space-y-12">
            <section id="services" className="scroll-mt-28">
              <h2 className="text-3xl">Services</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {data.services.map((p) => (
                  <li key={p.url}>
                    <Link href={path(p.url)} className="group flex items-center justify-between rounded-2xl bg-white px-5 py-4 ring-1 ring-slate-200 hover:ring-slate-400">
                      <span className="font-semibold text-text-primary">{p.title}</span>
                      <ArrowUpRight size={17} className="text-slate-400 group-hover:text-brand-orange" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
            <section id="tours" className="scroll-mt-28">
              <h2 className="text-3xl">Tours</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {data.tours.map((p) => (
                  <li key={p.url}>
                    <Link href={path(p.url)} className="group flex items-center gap-3 rounded-2xl bg-white p-2 pr-4 ring-1 ring-slate-200 hover:ring-slate-400">
                      {p.image ? (
                        <span className="relative h-12 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-slate-200">
                          <Image src={path(p.image)} alt="" fill sizes="64px" className="object-cover" />
                        </span>
                      ) : (
                        <span className="h-12 w-16 flex-shrink-0 rounded-xl bg-brand-ink" />
                      )}
                      <span className="font-semibold leading-snug text-text-primary">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Cars */}
        <section id="fleet" className="mt-16 scroll-mt-28">
          <h2 className="text-3xl md:text-4xl">Cars for rent</h2>
          {groupBy(data.fleet).map(([cat, cars]) => (
            <div key={cat} className="mt-6">
              <h3 className="text-lg text-text-secondary">{cat}</h3>
              <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                {cars.map((c) => (
                  <li key={c.url}>
                    <Link href={path(c.url)} className="group block overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 hover:ring-slate-400">
                      <span className={`relative block aspect-[16/10] ${c.image?.endsWith(".png") ? "car-stage" : "bg-slate-100"}`}>
                        {c.image && (
                          <Image
                            src={path(c.image)}
                            alt=""
                            fill
                            sizes="200px"
                            className={c.image.endsWith(".png") ? "object-contain px-3 pt-3" : "object-cover"}
                          />
                        )}
                      </span>
                      <span className="block px-3 py-2.5 text-sm font-semibold text-text-primary group-hover:text-accent-primary">{c.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Blog */}
        <section id="blog" className="mt-16 scroll-mt-28">
          <h2 className="text-3xl md:text-4xl">Blog and guides</h2>
          <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {groupBy(data.blog).map(([cat, posts]) => (
              <div key={cat}>
                <h3 className="text-lg">
                  {cat} <span className="text-slate-400">{posts.length}</span>
                </h3>
                <ul className="mt-3 space-y-2 text-[15px]">
                  {posts.map((p) => (
                    <li key={p.url}>
                      <Link href={path(p.url)} className="text-text-secondary hover:text-text-primary hover:underline">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Areas */}
        <section id="areas" className="mt-16 scroll-mt-28">
          <h2 className="text-3xl md:text-4xl">Areas we cover</h2>
          <p className="mt-2 text-text-secondary">Doorstep pickup in every area below. Tap a city to see its areas.</p>
          <div className="mt-6 space-y-3">
            {groupBy(data.areas).map(([city, areas], i) => (
              <details key={city} open={i === 0} className="group rounded-[1.3rem] bg-white ring-1 ring-slate-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                  <span className="font-display text-xl font-bold text-text-primary">
                    {city} <span className="text-base font-normal text-slate-400">{areas.length} areas</span>
                  </span>
                  <span aria-hidden="true" className="text-2xl leading-none text-brand-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <ul className="grid gap-x-6 gap-y-2 px-5 pb-5 text-[15px] sm:grid-cols-2 lg:grid-cols-4">
                  {areas.map((a) => (
                    <li key={a.url}>
                      <Link href={path(a.url)} className="text-text-secondary hover:text-text-primary hover:underline">
                        Rent a car in {a.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>

        <p className="mt-14 text-center text-sm text-text-secondary">
          For search engines: <a href="/sitemap.xml" className="font-semibold text-text-primary underline">XML sitemap</a>
        </p>
      </Section>
    </>
  );
}

/**
 * /blog/[slug] — template for every guide in src/data/guides.
 * (Older posts with their own folder in src/app/blog/ take priority.)
 *
 * Each page gets: unique title/description, canonical URL, Open Graph,
 * BlogPosting + FAQPage schema, breadcrumb schema (from PageHeader),
 * a table of contents, a booking box, FAQs and related reading.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import CtaBand from "@/components/ui/CtaBand";
import GuideBody, { plainText } from "@/components/blog/GuideBody";
import { ReadingProgress, ShareButtons } from "@/components/blog/ArticleTools";
import Logo from "@/components/ui/Logo";
import { getGuides, getGuide, readingMinutes, relatedPosts } from "@/data/guides";
import fleetData from "@/data/fleet.json";
import { SITE_URL, PHONE, whatsappLink } from "@/lib/site";

// Published guides are built ahead of time; scheduled ones render (and are
// cached) on first visit after their date. Pages refresh hourly.
export const dynamicParams = true;
export const revalidate = 3600;

export function generateStaticParams() {
  return getGuides().map((g) => ({ slug: g.slug }));
}

type Props = { params: Promise<{ slug: string }> };

const anchor = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  const url = `${SITE_URL}/blog/${g.slug}`;
  const image = `${SITE_URL}${g.image}`;
  return {
    title: g.metaTitle,
    description: g.description,
    keywords: g.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${g.metaTitle} | Iris Tours`,
      description: g.description,
      url,
      siteName: "Iris Tours",
      type: "article",
      publishedTime: g.date,
      modifiedTime: g.updated || g.date,
      images: [{ url: image, width: 1200, height: 630, alt: g.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${g.metaTitle} | Iris Tours`,
      description: g.description,
      images: [image],
    },
  };
}

// Cars suggested in the side box (cut-out photos look best there)
const SIDE_CARS = ["toyota-corolla-altis-1-6", "toyota-fortuner", "toyota-land-cruiser-prado", "toyota-hiace-grand-cabin"];

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const url = `${SITE_URL}/blog/${g.slug}`;
  const minutes = readingMinutes(g);
  const related = relatedPosts(g, 3);
  const sideCars = SIDE_CARS.map((s) => fleetData.find((v) => v.slug === s)).filter(
    (v): v is (typeof fleetData)[number] => Boolean(v)
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: g.title,
    description: g.description,
    image: [`${SITE_URL}${g.image}`],
    datePublished: g.date,
    dateModified: g.updated || g.date,
    keywords: g.keywords.join(", "),
    articleSection: g.category,
    inLanguage: "en-PK",
    wordCount: minutes * 200,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: "Iris Tours", url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: "Iris Tours",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
  };

  const faqSchema = g.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: g.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: plainText(f.a) },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <ReadingProgress />

      <PageHeader
        image={g.image}
        title={g.title}
        crumbs={[{ label: "Blog", href: "/blog" }, { label: g.title }]}
        intro={
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:text-base">
            <span className="rounded-full bg-white/15 px-3 py-1 font-semibold text-white">{g.category}</span>
            <span>Updated {formatDate(g.updated || g.date)}</span>
            <span aria-hidden="true">·</span>
            <span>{minutes} min read</span>
          </span>
        }
      />

      <div className="container mx-auto px-5 md:px-12 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* ─── Article ─────────────────────────────────────────────────── */}
          <article id="article" className="min-w-0 lg:col-span-8">
            <figure className="relative mb-8 aspect-[16/9] overflow-hidden rounded-[1.6rem] bg-slate-200">
              <Image src={g.image} alt={g.imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            </figure>

            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-slate-200">
                  <Logo width={40} height={14} />
                </span>
                <span className="leading-tight">
                  <span className="block font-semibold text-text-primary">Iris Tours team</span>
                  <span className="block text-sm text-text-secondary">Reviewed {formatDate(g.updated || g.date)}</span>
                </span>
              </div>
              <ShareButtons url={url} title={g.title} />
            </div>

            <div className="article-body max-w-[70ch]">
              <div className="text-lg leading-relaxed text-text-primary/85">
                <GuideBody text={g.intro} />
              </div>

              {/* Table of contents (mobile + tablet) */}
              <nav aria-label="On this page" className="my-8 rounded-2xl bg-white p-5 ring-1 ring-slate-200 lg:hidden">
                <p className="font-semibold text-text-primary">On this page</p>
                <ol className="!my-2 text-[15px]">
                  {g.sections.map((s) => (
                    <li key={s.h}>
                      <a href={`#${anchor(s.h)}`}>{s.h}</a>
                    </li>
                  ))}
                  {g.faqs.length > 0 && (
                    <li>
                      <a href="#faq">Frequently asked questions</a>
                    </li>
                  )}
                </ol>
              </nav>

              {g.sections.map((s) => (
                <section key={s.h} aria-labelledby={anchor(s.h)}>
                  <h2 id={anchor(s.h)} className="scroll-mt-28">
                    {s.h}
                  </h2>
                  <GuideBody text={s.body} />
                </section>
              ))}

              {g.faqs.length > 0 && (
                <section aria-labelledby="faq">
                  <h2 id="faq" className="scroll-mt-28">
                    Frequently asked questions
                  </h2>
                  <div className="not-prose mt-4 divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
                    {g.faqs.map((f) => (
                      <details key={f.q} className="group px-5 py-1">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold text-text-primary">
                          {f.q}
                          <span aria-hidden="true" className="text-2xl leading-none text-brand-orange transition-transform group-open:rotate-45">
                            +
                          </span>
                        </summary>
                        <div className="pb-4 text-[16px]">
                          <GuideBody text={f.a} />
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="mt-12 flex flex-col gap-5 rounded-[1.6rem] bg-white p-6 ring-1 ring-slate-200 sm:flex-row sm:items-center">
              <span className="flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-200">
                <Logo width={56} height={20} />
              </span>
              <div className="flex-1">
                <p className="font-semibold text-text-primary">Written by the Iris Tours team</p>
                <p className="mt-1 text-[15px] leading-relaxed text-text-secondary">
                  We run chauffeur-driven car rental in Lahore and Islamabad, and our drivers cover these roads every week. Prices on this page
                  come straight from our live rate list. <Link href="/about" className="font-semibold text-accent-secondary hover:underline">About us</Link>
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <ShareButtons url={url} title={g.title} />
            </div>
          </article>

          {/* ─── Sidebar ─────────────────────────────────────────────────── */}
          <aside className="lg:col-span-4">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="rounded-[1.6rem] bg-brand-ink p-6 text-white">
                <p className="font-display text-2xl font-bold">Book a car with driver</p>
                <p className="mt-2 text-white/70">Send your dates and pickup point. We reply with the final price on WhatsApp.</p>
                <a
                  href={whatsappLink(`Hi Iris Tours, I read "${g.title}" and want to book a car.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 font-semibold text-white hover:bg-[#1eb85a]"
                >
                  <FaWhatsapp size={20} aria-hidden="true" /> WhatsApp us
                </a>
                <a
                  href={`tel:${PHONE.tel}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-full border border-white/25 py-3.5 font-semibold text-white hover:border-brand-orange"
                >
                  <Phone size={17} className="text-brand-orange" aria-hidden="true" /> {PHONE.display}
                </a>
              </div>

              <nav aria-label="On this page" className="hidden rounded-[1.6rem] bg-white p-6 ring-1 ring-slate-200 lg:block">
                <p className="font-semibold text-text-primary">On this page</p>
                <ol className="mt-3 space-y-2 text-[15px] text-text-secondary">
                  {g.sections.map((s) => (
                    <li key={s.h}>
                      <a href={`#${anchor(s.h)}`} className="hover:text-text-primary">
                        {s.h}
                      </a>
                    </li>
                  ))}
                  {g.faqs.length > 0 && (
                    <li>
                      <a href="#faq" className="hover:text-text-primary">
                        Frequently asked questions
                      </a>
                    </li>
                  )}
                </ol>
              </nav>

              <div className="rounded-[1.6rem] bg-white p-6 ring-1 ring-slate-200">
                <p className="font-semibold text-text-primary">Popular cars in Lahore</p>
                <ul className="mt-3 divide-y divide-slate-100">
                  {sideCars.map((v) => (
                    <li key={v.slug}>
                      <Link href={`/fleet/${v.slug}`} className="group flex items-center gap-3 py-3">
                        <span className="car-stage relative h-12 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                          <Image src={v.images.thumbnail} alt="" fill sizes="80px" className="object-contain p-1" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate font-semibold text-text-primary group-hover:text-accent-primary">{v.name}</span>
                          <span className="block text-sm text-text-secondary">
                            from Rs. {v.rent.local.toLocaleString("en-US")} / day
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/fleet" className="mt-2 inline-flex items-center gap-1 font-semibold text-accent-secondary hover:underline">
                  All cars and rates <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {/* ─── Related reading ─────────────────────────────────────────── */}
        {related.length > 0 && (
          <section aria-labelledby="related" className="mt-16 border-t border-slate-200 pt-12">
            <h2 id="related" className="text-3xl md:text-4xl">
              Keep reading
            </h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-white shadow-lift ring-1 ring-slate-200/80"
                  >
                    <span className="relative block aspect-[16/10] overflow-hidden bg-slate-200">
                      <Image src={p.img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </span>
                    <span className="flex flex-1 flex-col p-5">
                      <span className="text-sm text-text-secondary">{p.readingTime}</span>
                      <span className="font-display mt-1 text-lg font-semibold leading-snug text-text-primary group-hover:text-accent-primary">
                        {p.title}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-16">
          <CtaBand title="Planning a trip from Lahore?" text="Tell us where you are going. We will suggest the right car and send a written quote within minutes." />
        </div>
      </div>
    </>
  );
}

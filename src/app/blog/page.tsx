import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { getPostCards, type PostCard } from "@/data/guides";
import BlogExplorer from "@/components/blog/BlogExplorer";
import CtaBand from "@/components/ui/CtaBand";

// Refresh hourly so scheduled posts appear on their date
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Lahore Car Rental Blog: Rates, Routes & Travel Guides",
  description: "Guides to rent a car in Lahore: price lists, DHA, Gulberg and airport rentals, Prado and V8 hire, wedding cars, motorway fog updates and northern routes.",
  alternates: {
    canonical: "https://iristours.net/blog",
  },
  openGraph: {
    title: "Car Rental & Travel Blog Lahore | Iris Tours",
    description: "Guides on car rentals, travel tips, and luxury chauffeur services in Lahore and Pakistan.",
    url: "https://iristours.net/blog",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/blog/rent-a-car-in-lahore-featured.jpg",
        width: 1200,
        height: 630,
        alt: "Car Rental & Travel Blog Lahore - Iris Tours",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Rental & Travel Blog Lahore | Iris Tours",
    description: "Guides on car rentals, travel tips, and luxury chauffeur services in Lahore and Pakistan.",
    images: ["https://iristours.net/blog/rent-a-car-in-lahore-featured.jpg"],
  },
};

// Topics used by the filter chips, in this order
const TOPICS = [
  { key: "Rent a car", title: "Rent a car" },
  { key: "Cars", title: "Cars on rent" },
  { key: "Routes", title: "Road trips" },
  { key: "Travel news", title: "Season & news" },
  { key: "Lahore", title: "Lahore" },
  { key: "Guides", title: "More guides" },
];

// Hand-picked "start here" guides (the money pages)
const START_HERE = [
  "rent-a-car-lahore-price-list",
  "rent-a-car-lahore-airport",
  "rent-a-car-dha-lahore",
  "seven-seater-car-on-rent-lahore",
  "wedding-car-rental-lahore-shaadi-season",
  "lahore-to-murree-by-car-snowfall",
];

export default function BlogIndex() {
  const allPostCards = getPostCards();
  const [first, second, third] = allPostCards;
  const startHere = START_HERE.map((s) => allPostCards.find((p) => p.slug === s)).filter((p): p is PostCard => Boolean(p));

  return (
    <>
      <PageHeader
        image="/blog/lahore-islamabad-motorway-salt-range.jpg"
        title="Car rental and travel guides"
        intro={`${allPostCards.length} guides on rent a car prices, cars, routes and road conditions in Lahore, Islamabad and the north, written by our team and drivers.`}
        crumbs={[{ label: "Blog" }]}
      />

      <Section>
        {/* Featured: newest three */}
        {first && (
          <div className="grid gap-5 lg:grid-cols-12 lg:gap-6">
            <Link href={`/blog/${first.slug}`} className="group relative block min-h-[340px] overflow-hidden rounded-[1.75rem] bg-slate-200 lg:col-span-7 lg:min-h-[460px]">
              <Image src={first.img} alt="" fill priority sizes="(max-width: 1024px) 100vw, 58vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/30 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-6 md:p-9">
                <span className="rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-brand-ink">Latest</span>
                <span className="font-display mt-3 block text-2xl font-bold leading-tight text-white md:text-4xl">{first.title}</span>
                <span className="mt-2 line-clamp-2 block max-w-xl text-white/80">{first.desc}</span>
              </span>
            </Link>
            <div className="grid gap-5 lg:col-span-5 lg:gap-6">
              {[second, third].filter(Boolean).map((p) => (
                <Link key={p!.slug} href={`/blog/${p!.slug}`} className="group relative block min-h-[200px] overflow-hidden rounded-[1.75rem] bg-slate-200">
                  <Image src={p!.img} alt="" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/25 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                    <span className="text-sm text-white/70">{p!.category} · {p!.readingTime}</span>
                    <span className="font-display mt-1 block text-xl font-bold leading-snug text-white">{p!.title}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Start here */}
        <div className="mt-14 rounded-[1.75rem] bg-brand-ink p-6 text-white md:p-10">
          <h2 className="text-3xl text-white md:text-4xl">Start here</h2>
          <p className="mt-2 text-white/70">The guides our customers read most before booking.</p>
          <ol className="mt-6 grid gap-x-8 gap-y-1 md:grid-cols-2">
            {startHere.map((p, i) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group flex items-center gap-4 border-b border-white/10 py-4">
                  <span className="font-display w-8 flex-shrink-0 text-2xl font-bold text-brand-orange">{i + 1}</span>
                  <span className="font-semibold leading-snug text-white group-hover:text-brand-orange">{p.title}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        {/* Everything, searchable */}
        <div className="mt-14">
          <h2 className="mb-6 text-3xl md:text-4xl">All guides</h2>
          <BlogExplorer posts={allPostCards} topics={TOPICS} />
        </div>
      </Section>

      <Section tone="white">
        <CtaBand title="Can't find your answer?" text="Message us on WhatsApp with your dates and destination. We reply with the right car and a written price." />
      </Section>
    </>
  );
}

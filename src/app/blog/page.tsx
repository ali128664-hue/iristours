import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { allPostCards, type PostCard } from "@/data/guides";

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

// Topic groups shown on the blog page, in this order
const TOPICS: { key: string; title: string; text: string }[] = [
  { key: "Rent a car", title: "Rent a car in Lahore", text: "Prices, areas and how renting with a driver works." },
  { key: "Cars", title: "Cars on rent", text: "Prado, V8, Civic, Corolla, Coaster and luxury cars." },
  { key: "Travel news", title: "Season and travel updates", text: "Wedding season, smog and fog, festivals." },
  { key: "Routes", title: "Road trips from Lahore", text: "Murree, Naran, Hunza, Skardu, Kartarpur and intercity routes." },
  { key: "Lahore", title: "Things to do in Lahore", text: "City tours, Wagah and the old city." },
  { key: "Guides", title: "More guides", text: "Our earlier articles on rentals and travel." },
];

function PostTile({ post }: { post: PostCard }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80">
      <span className="relative block aspect-[16/10] overflow-hidden bg-slate-200">
        <Image src={post.img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
      </span>
      <span className="flex flex-1 flex-col p-5 md:p-6">
        <span className="text-sm text-text-secondary">{post.readingTime}</span>
        <span className="font-display mt-1.5 text-xl font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{post.title}</span>
        <span className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-text-secondary">{post.desc}</span>
      </span>
    </Link>
  );
}

export default function BlogIndex() {
  const first = allPostCards[0];
  const rest = allPostCards.slice(1);
  return (
    <>
      <PageHeader
        image="/blog/lahore-islamabad-motorway-salt-range.jpg"
        title="Car rental and travel guides"
        intro={`${allPostCards.length} guides on rates, routes and road conditions in Lahore, Islamabad and the north, written by our drivers and team.`}
        crumbs={[{ label: "Blog" }]}
      />
      <Section>
        {first && (
          <Link href={`/blog/${first.slug}`} className="group mb-10 grid overflow-hidden shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80 lg:grid-cols-2">
            <span className="relative block aspect-[16/9] lg:aspect-auto lg:min-h-[340px]">
              <Image src={first.img} alt="" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </span>
            <span className="flex flex-col justify-center p-6 md:p-10">
              <span className="text-sm text-text-secondary">Latest · {first.readingTime}</span>
              <span className="font-display mt-2 text-2xl font-semibold leading-tight text-text-primary group-hover:text-accent-primary md:text-3xl">
                {first.title}
              </span>
              <span className="mt-3 leading-relaxed text-text-secondary">{first.desc}</span>
              <span className="mt-5 font-semibold text-text-primary">Read the guide</span>
            </span>
          </Link>
        )}

        {/* Topic jump links */}
        <nav aria-label="Blog topics" className="-mx-5 mb-4 flex gap-2 overflow-x-auto px-5 pb-2 scrollbar-hide md:mx-0 md:flex-wrap md:px-0">
          {TOPICS.filter((t) => rest.some((p) => p.category === t.key)).map((t) => (
            <a
              key={t.key}
              href={`#${t.key.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex-shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-text-primary ring-1 ring-slate-200 hover:ring-slate-400"
            >
              {t.title}
            </a>
          ))}
        </nav>

        {TOPICS.map((t) => {
          const posts = rest.filter((p) => p.category === t.key);
          if (!posts.length) return null;
          return (
            <section key={t.key} id={t.key.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-28 pt-10">
              <h2 className="text-3xl md:text-4xl">{t.title}</h2>
              <p className="mt-2 text-text-secondary">{t.text}</p>
              <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <PostTile post={post} />
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </Section>
    </>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import blogs from "@/data/blogs.json";

export const metadata: Metadata = {
  title: "Lahore Car Rental Blog: Rates, Routes & Travel Guides",
  description: "Read expert guides on car rentals with driver in Lahore, Toyota Fortuner rentals, motorway travel tips, wedding car hiring, and northern tours.",
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

export default function BlogIndex() {
  const [first, ...rest] = blogs;
  return (
    <>
      <PageHeader
        image="/blog/lahore-islamabad-motorway-salt-range.jpg"
        title="Car rental and travel guides"
        intro="Rates, routes and road conditions in Lahore, Islamabad and the north, written by our drivers and team."
        crumbs={[{ label: "Blog" }]}
      />
      <Section>
        {first && (
          <Link href={`/blog/${first.slug}`} className="group mb-8 grid overflow-hidden shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80 md:mb-10 lg:grid-cols-2">
            <span className="relative block aspect-[16/9] lg:aspect-auto lg:min-h-[340px]">
              <Image src={first.img} alt="" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            </span>
            <span className="flex flex-col justify-center p-6 md:p-10">
              <span className="text-sm text-text-secondary">{first.readingTime || "5 min read"}</span>
              <span className="font-display mt-2 text-2xl font-semibold leading-tight text-text-primary group-hover:text-accent-primary md:text-3xl">
                {first.title}
              </span>
              <span className="mt-3 leading-relaxed text-text-secondary">{first.desc}</span>
              <span className="mt-5 font-semibold text-text-primary">Read the guide</span>
            </span>
          </Link>
        )}
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {rest.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/blog/${blog.slug}`} className="group flex h-full flex-col overflow-hidden shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80">
                <span className="relative block aspect-[16/10] overflow-hidden bg-slate-200">
                  <Image src={blog.img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </span>
                <span className="flex flex-1 flex-col p-5 md:p-6">
                  <span className="text-sm text-text-secondary">{blog.readingTime || "5 min read"}</span>
                  <span className="font-display mt-1.5 text-xl font-semibold leading-snug text-text-primary group-hover:text-accent-primary">
                    {blog.title}
                  </span>
                  <span className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-text-secondary">{blog.desc}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

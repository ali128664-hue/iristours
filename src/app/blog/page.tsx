import { Metadata } from "next";
import Link from "next/link";
import blogs from "@/data/blogs.json";

export const metadata: Metadata = {
  title: "Car Rental & Travel Blog Lahore | Tips, Rates & Guides - Iris Tours",
  description: "Read expert guides on car rentals with driver in Lahore, Toyota Fortuner rentals, motorway travel tips, wedding car hiring, and northern tours.",
  alternates: {
    canonical: "https://iristours.net/blog",
  },
  openGraph: {
    title: "Car Rental & Travel Blog Lahore | Iris Tours",
    description: "Guides on car rentals, travel tips, and luxury chauffeur services in Lahore and Pakistan.",
    url: "https://iristours.net/blog",
  },
};

export default function BlogIndex() {
  return (
    <div className="bg-bg-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-widest mb-4">
            Travel Guides & Insights
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            Car Rental & Travel Guides in Pakistan
          </h1>
          <p className="text-text-secondary text-lg">
            Practical advice, car rental price guides, and northern Pakistan travel itineraries curated by our local chauffeurs and road experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group block bg-bg-secondary rounded-2xl overflow-hidden border border-border-primary hover:border-accent-primary hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-56 overflow-hidden flex-shrink-0 relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-white">
                  {blog.readingTime || "5 min read"}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors leading-snug">
                  {blog.title}
                </h2>
                <p className="text-text-secondary text-sm flex-grow leading-relaxed">
                  {blog.desc}
                </p>
                <div className="mt-5 pt-4 border-t border-border-primary/60 flex items-center justify-between text-accent-primary font-semibold text-sm">
                  <span>Read Article</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

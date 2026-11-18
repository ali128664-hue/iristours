"use client";

/**
 * BlogExplorer.tsx — searchable, filterable list of every blog post.
 *
 * All posts are rendered in the HTML (good for Google); search and the
 * topic chips only hide or show them in the browser. The first 12 show by
 * default, with a "Show more" button for the rest.
 */

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X } from "lucide-react";
import type { PostCard } from "@/data/guides/index";

const PAGE = 12;

export default function BlogExplorer({ posts, topics }: { posts: PostCard[]; topics: { key: string; title: string }[] }) {
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState<string>("All");
  const [limit, setLimit] = useState(PAGE);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return new Set(
      posts
        .filter((p) => (topic === "All" || p.category === topic) && (!q || `${p.title} ${p.desc}`.toLowerCase().includes(q)))
        .map((p) => p.slug)
    );
  }, [posts, query, topic]);

  const filtering = query.trim() !== "" || topic !== "All";
  let shown = 0;

  return (
    <div>
      {/* Search + topics */}
      <div className="sticky top-[72px] z-20 -mx-5 border-b border-slate-200 bg-bg-primary/95 px-5 py-4 backdrop-blur md:mx-0 md:rounded-2xl md:border md:px-5">
        <label className="relative block">
          <span className="sr-only">Search guides</span>
          <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(PAGE);
            }}
            placeholder="Search guides, e.g. Prado, Murree, airport, DHA"
            className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-11 text-[15px] focus:border-brand-orange focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:text-text-primary"
            >
              <X size={18} />
            </button>
          )}
        </label>
        <div className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 scrollbar-hide md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Filter by topic">
          {[{ key: "All", title: "All guides" }, ...topics].map((t) => {
            const count = t.key === "All" ? posts.length : posts.filter((p) => p.category === t.key).length;
            if (!count) return null;
            const active = topic === t.key;
            return (
              <button
                key={t.key}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setTopic(t.key);
                  setLimit(PAGE);
                }}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active ? "bg-brand-ink text-white" : "bg-white text-text-primary ring-1 ring-slate-200 hover:ring-slate-400"
                }`}
              >
                {t.title} <span className={active ? "text-white/60" : "text-slate-400"}>{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-6 text-sm text-text-secondary" aria-live="polite">
        {filtering ? `${visible.size} ${visible.size === 1 ? "guide" : "guides"} found` : `${posts.length} guides`}
      </p>

      <ul className="mt-4 grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {posts.map((post) => {
          const match = visible.has(post.slug);
          const hidden = !match || (!filtering && shown >= limit);
          if (match) shown++;
          return (
            <li key={post.slug} className={hidden ? "hidden" : undefined}>
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-white shadow-lift ring-1 ring-slate-200/80">
                <span className="relative block aspect-[16/10] overflow-hidden bg-slate-200">
                  <Image src={post.img} alt="" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-text-primary backdrop-blur">
                    {post.category === "Guides" ? "Guide" : post.category}
                  </span>
                </span>
                <span className="flex flex-1 flex-col p-5 md:p-6">
                  <span className="text-sm text-text-secondary">{post.readingTime}</span>
                  <span className="font-display mt-1.5 text-xl font-semibold leading-snug text-text-primary group-hover:text-accent-primary">{post.title}</span>
                  <span className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-text-secondary">{post.desc}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {filtering && visible.size === 0 && (
        <div className="mt-8 rounded-2xl bg-white p-8 text-center ring-1 ring-slate-200">
          <p className="font-semibold text-text-primary">No guides match “{query}”.</p>
          <p className="mt-1 text-text-secondary">Try a car name, a city or a route, or ask us on WhatsApp.</p>
        </div>
      )}

      {!filtering && posts.length > limit && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setLimit((l) => l + PAGE)}
            className="rounded-full border border-slate-300 bg-white px-8 py-3.5 font-semibold text-text-primary hover:border-brand-ink"
          >
            Show more guides ({posts.length - limit} more)
          </button>
        </div>
      )}
    </div>
  );
}

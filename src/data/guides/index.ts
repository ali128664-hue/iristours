/**
 * index.ts — helpers used by the blog index, guide pages, sitemaps,
 * homepage and llms.txt. Only PUBLISHED guides are returned (see
 * registry.ts for scheduling). These are functions, not constants, so a
 * long-running server picks up newly published guides each day.
 *
 * Older hand-written posts live in src/app/blog/<slug>/page.tsx and are
 * listed in src/data/blogs.json; getPostCards() merges both.
 */

import blogs from "@/data/blogs.json";
import type { Guide } from "./types";
import { plainText } from "@/components/blog/GuideBody";
import { ALL_GUIDES, isPublished, publishedGuides } from "./registry";

export type { Guide } from "./types";
export { isPublished, publishedGuides, todayPK } from "./registry";

/** Published guides */
export function getGuides(): Guide[] {
  return publishedGuides();
}

/** A guide by slug, only if it is published */
export function getGuide(slug: string): Guide | undefined {
  const g = ALL_GUIDES.find((x) => x.slug === slug);
  return g && isPublished(g) ? g : undefined;
}

export function readingMinutes(g: Guide): number {
  const text = [g.intro, ...g.sections.map((s) => s.body), ...g.faqs.map((f) => f.a)].join(" ");
  return Math.max(3, Math.round(plainText(text).split(/\s+/).length / 200));
}

export type PostCard = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  date: string;
  readingTime: string;
  category: string;
};

/** Every published post (guides + older posts), newest first */
export function getPostCards(): PostCard[] {
  return [
    ...publishedGuides().map((g) => ({
      slug: g.slug,
      title: g.title,
      desc: g.description,
      img: g.image,
      date: g.date,
      readingTime: `${readingMinutes(g)} min read`,
      category: g.category,
    })),
    ...blogs.map((b) => ({
      slug: b.slug,
      title: b.title,
      desc: b.desc,
      img: b.img,
      date: b.publishDate,
      readingTime: b.readingTime || "5 min read",
      category: "Guides",
    })),
  ].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

/** Up to `n` related posts: the guide's own picks first, then same category. */
export function relatedPosts(g: Guide, n = 3): PostCard[] {
  const cards = getPostCards();
  const picked = (g.related || [])
    .map((s) => cards.find((p) => p.slug === s))
    .filter((p): p is PostCard => Boolean(p));
  const more = cards.filter((p) => p.slug !== g.slug && p.category === g.category && !picked.includes(p));
  return [...picked, ...more].slice(0, n);
}

/** Published guides that link to a given internal path, e.g. "/fleet/toyota-fortuner" */
export function guidesLinkingTo(path: string, n = 3): Guide[] {
  const needle = `](${path})`;
  const car = path.startsWith("/fleet/") ? path.slice(7) : null;
  const carRe = car ? new RegExp(`^::cars .*\\b${car}\\b`, "m") : null;
  return publishedGuides()
    .filter((g) => [g.intro, ...g.sections.map((s) => s.body)].some((t) => t.includes(needle) || (carRe ? carRe.test(t) : false)))
    .slice(0, n);
}

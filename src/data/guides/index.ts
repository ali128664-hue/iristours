/**
 * index.ts — all blog guides in one list, plus helpers used by the blog
 * index, the guide page, the sitemap and llms.txt.
 *
 * Older hand-written posts live in src/app/blog/<slug>/page.tsx and are
 * listed in src/data/blogs.json; `allPostCards` merges both.
 */

import blogs from "@/data/blogs.json";
import type { Guide } from "./types";
import { plainText } from "@/components/blog/GuideBody";
import part1 from "./part1";
import part2 from "./part2";
import part3 from "./part3";
import part4 from "./part4";
import part5 from "./part5";

export type { Guide } from "./types";

export const guides: Guide[] = [...part1, ...part2, ...part3, ...part4, ...part5];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
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

export const allPostCards: PostCard[] = [
  ...guides.map((g) => ({
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

/** Up to `n` related posts: the guide's own picks first, then same category. */
export function relatedPosts(g: Guide, n = 3): PostCard[] {
  const picked = (g.related || [])
    .map((s) => allPostCards.find((p) => p.slug === s))
    .filter((p): p is PostCard => Boolean(p));
  const more = allPostCards.filter((p) => p.slug !== g.slug && p.category === g.category && !picked.includes(p));
  return [...picked, ...more].slice(0, n);
}

/** Guides that link to a given internal path, e.g. "/fleet/toyota-fortuner" */
export function guidesLinkingTo(path: string, n = 3): Guide[] {
  const needle = `](${path})`;
  return guides
    .filter((g) => [g.intro, ...g.sections.map((s) => s.body)].some((t) => t.includes(needle)))
    .slice(0, n);
}

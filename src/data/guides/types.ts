/**
 * types.ts — shape of one blog guide (src/data/guides/*.ts).
 *
 * HOW TO ADD A NEW GUIDE
 *  1. Copy any guide object in part1.ts … part5.ts and change the text.
 *  2. Pick a unique `slug` (it becomes /blog/<slug>).
 *  3. Body text is light markdown:
 *       ### Small heading
 *       - bullet            1. numbered step
 *       **bold**            [link text](/fleet/toyota-yaris)  or  [text](https://…)
 *       > Tip line          | table | rows |   (first row = header)
 *     Live prices from fleet.json: {{rate:toyota-yaris}} (day in city),
 *     {{city:slug}} (intercity day), {{week:slug}}, {{month:slug}}, {{deposit:slug}}
 *  4. It appears automatically on /blog, in the sitemap and in related links.
 */

export type GuideSection = {
  /** H2 heading (also used in the table of contents) */
  h: string;
  /** Light-markdown body (see above) */
  body: string;
};

export type Guide = {
  slug: string;
  /** H1 shown on the page */
  title: string;
  /** <title> tag — keep under ~60 characters; " | Iris Tours" is added automatically */
  metaTitle: string;
  /** Meta description — 140–160 characters */
  description: string;
  /** Main keyword this page should rank for, then supporting keywords */
  keywords: string[];
  category: "Rent a car" | "Cars" | "Routes" | "Travel news" | "Lahore";
  /** ISO date, e.g. "2026-11-18" */
  date: string;
  /** Last reviewed (ISO date) — shown as "Updated" */
  updated?: string;
  image: string;
  imageAlt: string;
  /** Opening paragraph(s), shown before the first heading */
  intro: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  /** Slugs of other posts to recommend (guides or older /blog posts) */
  related?: string[];
};

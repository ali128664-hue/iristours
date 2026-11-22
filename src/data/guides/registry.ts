/**
 * registry.ts — every guide (published and scheduled) plus the publish rule.
 *
 * SCHEDULING: a guide goes live automatically on its `date` (Pakistan time,
 * from midnight). Until then it is hidden everywhere: blog list, homepage,
 * sitemap, related links, and its own URL returns 404. Pages that list
 * guides refresh every hour, so no new deploy is needed on the day.
 */

import type { Guide } from "./types";
import part1 from "./part1";
import part2 from "./part2";
import part3 from "./part3";
import part4 from "./part4";
import part5 from "./part5";
import part6 from "./part6";
import part7 from "./part7";
import part8 from "./part8";
import part9 from "./part9";
import part10 from "./part10";
import part11 from "./part11";
import part12 from "./part12";
import part13 from "./part13";
import part14 from "./part14";
import part15 from "./part15";
import part16 from "./part16";
import part17 from "./part17";
import part18 from "./part18";
import part19 from "./part19";

/** Every guide, including ones scheduled for future dates */
export const ALL_GUIDES: Guide[] = [
  ...part1, ...part2, ...part3, ...part4, ...part5, ...part6, ...part7, ...part8,
  ...part9, ...part10, ...part11, ...part12, ...part13, ...part14, ...part15, ...part16, ...part17, ...part18, ...part19,
];

/** Today's date in Pakistan (UTC+5) as YYYY-MM-DD */
export function todayPK(): string {
  return new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

export function isPublished(g: Pick<Guide, "date">): boolean {
  return g.date <= todayPK();
}

/** Published guides only (call it each time; the answer changes at midnight) */
export function publishedGuides(): Guide[] {
  const today = todayPK();
  return ALL_GUIDES.filter((g) => g.date <= today);
}

/** False for a /blog/<slug> link whose guide is still scheduled */
export function isBlogLinkLive(href: string): boolean {
  const m = href.match(/^\/blog\/([^/?#]+)/);
  if (!m) return true;
  const g = ALL_GUIDES.find((x) => x.slug === m[1]);
  return !g || isPublished(g);
}

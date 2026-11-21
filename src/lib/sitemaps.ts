/**
 * sitemaps.ts — one list of every public page, used by:
 *  - the XML sitemaps for search engines (/sitemap.xml and /<group>-sitemap/sitemap.xml)
 *  - the human sitemap page (/sitemap), the designed version for people
 *
 * HOW TO CHANGE: add a page to STATIC_PAGES, or add data to fleet.json,
 * tours.json, serviceAreas.json or src/data/guides; it appears everywhere.
 */

import fleetData from "@/data/fleet.json";
import toursData from "@/data/tours.json";
import serviceAreas from "@/data/serviceAreas.json";
import { allPostCards, guides } from "@/data/guides";

export const SITE = "https://iristours.net";

export type SitemapEntry = {
  url: string;
  title: string;
  lastModified: Date;
  changeFrequency: "daily";
  priority: number;
  image?: string;
  group?: string;
};

export type SitemapGroup = {
  key: "pages" | "services" | "fleet" | "tours" | "areas" | "blog";
  title: string;
  description: string;
  entries: () => SitemapEntry[];
};

const now = () => new Date();
const e = (path: string, title: string, priority: number, extra: Partial<SitemapEntry> = {}): SitemapEntry => ({
  url: `${SITE}${path}`,
  title,
  lastModified: now(),
  changeFrequency: "daily",
  priority,
  ...extra,
});

const STATIC_PAGES: [string, string, number][] = [
  ["", "Home", 1.0],
  ["/fleet", "Cars and rates", 0.95],
  ["/fuel-prices-pakistan", "Petrol price today", 0.9],
  ["/areas", "Areas we cover", 0.9],
  ["/services", "Services", 0.9],
  ["/tours", "Tours", 0.85],
  ["/blog", "Blog and guides", 0.85],
  ["/about", "About us", 0.7],
  ["/contact", "Contact", 0.75],
  ["/faq", "FAQ", 0.7],
  ["/gallery", "Gallery", 0.65],
  ["/sitemap", "Sitemap", 0.4],
  ["/privacy-policy", "Privacy policy", 0.5],
];

export const SITEMAP_GROUPS: SitemapGroup[] = [
  {
    key: "pages",
    title: "Main pages",
    description: "Home, rates, contact and company pages",
    entries: () => STATIC_PAGES.map(([p, t, pr]) => e(p, t, pr)),
  },
  {
    key: "services",
    title: "Services",
    description: "Airport, wedding and corporate car rental",
    entries: () => [
      e("/services", "All services", 0.9),
      e("/services/airport-transfer", "Airport transfer", 0.85),
      e("/services/wedding-cars", "Wedding cars", 0.85),
      e("/services/corporate-rentals", "Corporate rentals", 0.85),
    ],
  },
  {
    key: "fleet",
    title: "Cars for rent",
    description: "Every car in the fleet with daily rates",
    entries: () =>
      fleetData.map((v) =>
        e(`/fleet/${v.slug}`, v.name, 0.85, { image: `${SITE}${v.images.thumbnail}`, group: v.category })
      ),
  },
  {
    key: "tours",
    title: "Tours",
    description: "Northern Pakistan tour packages",
    entries: () => [
      e("/tours", "All tours", 0.85, { image: `${SITE}/tours/hunza.jpg` }),
      ...toursData.map((t) => e(`/tours/${t.slug}`, t.title, 0.8, { image: `${SITE}${t.images.thumbnail}` })),
    ],
  },
  {
    key: "blog",
    title: "Blog and guides",
    description: "Rent a car guides, routes and travel news",
    entries: () =>
      allPostCards.map((p) => {
        const g = guides.find((x) => x.slug === p.slug);
        return e(`/blog/${p.slug}`, p.title, g?.category === "Rent a car" ? 0.9 : 0.8, {
          lastModified: new Date(g?.updated || p.date || Date.now()),
          image: `${SITE}${p.img}`,
          group: p.category === "Guides" ? "More guides" : p.category,
        });
      }),
  },
  {
    key: "areas",
    title: "Areas we cover",
    description: "Doorstep pickup in Lahore, Islamabad, Rawalpindi and more",
    entries: () =>
      serviceAreas.map((a) => e(`/areas/${a.slug}`, a.name.replace(/,\s*[^,]+$/, ""), 0.75, { group: a.city })),
  },
];

export function getGroup(key: SitemapGroup["key"]): SitemapGroup {
  return SITEMAP_GROUPS.find((g) => g.key === key)!;
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** XML for one sitemap; /sitemap.css styles it in browsers (search engines ignore CSS) */
export function urlsetXml(entries: SitemapEntry[]): string {
  const rows = entries
    .map(
      (x) => `  <url>
    <loc>${esc(x.url)}</loc>
    <lastmod>${x.lastModified.toISOString().slice(0, 10)}</lastmod>
    <changefreq>${x.changeFrequency}</changefreq>
    <priority>${x.priority.toFixed(2)}</priority>${x.image ? `\n    <image:image><image:loc>${esc(x.image)}</image:loc></image:image>` : ""}
  </url>`
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="/sitemap.css"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${rows}
</urlset>
`;
}

/** Sitemap index XML listing every group sitemap */
export function indexXml(): string {
  const today = new Date().toISOString().slice(0, 10);
  const items = SITEMAP_GROUPS.map(
    (g) => `  <sitemap>
    <loc>${SITE}/${g.key}-sitemap/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/css" href="/sitemap.css"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>
`;
}

export const xmlResponse = (xml: string) =>
  new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });

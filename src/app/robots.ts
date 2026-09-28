/**
 * robots.ts — robots.txt Generator (سرچ انجن کرالرز کے لیے ہدایات)
 *
 * This generates /robots.txt — the file that tells search engine crawlers
 * (Googlebot, Bingbot, etc.) which pages they are allowed to index.
 *
 * Current rules:
 *  - All pages are allowed to be indexed ("allow /")
 *  - API routes (/api/) and Next.js internal files (/_next/) are blocked
 *  - The sitemap URL is provided so Google can find all pages
 *
 * HOW TO CHANGE:
 *  - Domain → update the `sitemap` and `host` URLs below when deploying
 *  - Block additional paths → add them to the `disallow` array
 */

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all search engine bots to crawl the site
        userAgent: "*",
        allow: "/",
        // Block these internal paths — they should not appear in Google results
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: [
      "https://iristours.net/sitemap.xml",
      "https://iristours.net/pages-sitemap/sitemap.xml",
      "https://iristours.net/fleet-sitemap/sitemap.xml",
      "https://iristours.net/services-sitemap/sitemap.xml",
      "https://iristours.net/blog-sitemap/sitemap.xml",
      "https://iristours.net/tours-sitemap/sitemap.xml",
      "https://iristours.net/areas-sitemap/sitemap.xml",
    ],
    host: "https://iristours.net",
  };
}

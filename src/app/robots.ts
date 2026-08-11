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
    // Update domain here when deploying to production
    // This must match your actual live domain (e.g., https://iristours.net/sitemap.xml)
    sitemap: "https://iristours.net/sitemap.xml",
    host: "https://iristours.net",
  };
}

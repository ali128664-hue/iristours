/**
 * robots.ts — generates /robots.txt (instructions for search engine crawlers)
 *
 * Rules:
 *  - Everything is open to crawl, including /_next/ (CSS, JS and optimised
 *    images). Google needs these to render pages and index images, so they
 *    must NOT be blocked.
 *  - Only /api/ (server endpoints, not pages) is blocked.
 *  - AI search crawlers (ChatGPT, Claude, Perplexity, Gemini, Copilot) are
 *    explicitly welcome, so the business can appear in AI answers.
 *  - One sitemap index lists every section sitemap (see src/lib/sitemaps.ts).
 *
 * HOW TO CHANGE: add a path to DISALLOW to hide it from all crawlers.
 */

import { MetadataRoute } from "next";
import { SITE } from "@/lib/sitemaps";

const DISALLOW = ["/api/"];

// AI assistants and AI search engines we want to be found by
const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: DISALLOW },
      { userAgent: AI_CRAWLERS, allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${SITE}/sitemap.xml`,
  };
}

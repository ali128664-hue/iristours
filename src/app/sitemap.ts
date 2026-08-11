/**
 * sitemap.ts — XML Sitemap Generator (سائٹ میپ)
 *
 * This auto-generates /sitemap.xml for Google Search Console.
 * Google uses this file to discover and index all pages on the website.
 *
 * - Static pages (Home, Fleet, About, etc.) are listed manually below.
 * - All fleet/car pages are included automatically from fleet.json.
 *   When you add a new car to fleet.json, its page is auto-added to the sitemap.
 *
 * HOW TO CHANGE:
 *  - Domain URL → change the `baseUrl` variable below
 *  - Add new static pages → add entries to the `staticPages` array
 *  - Remove pages → delete entries from `staticPages`
 */

import { MetadataRoute } from "next";
import fleetData from "@/data/fleet.json";
import serviceAreas from "@/data/serviceAreas.json";

export default function sitemap(): MetadataRoute.Sitemap {
  // Change this to your actual domain when deploying to production
  // e.g., "https://iristours.net"
  const baseUrl = "https://iristours.com";

  // ─── STATIC PAGES ─────────────────────────────────────────────────────────
  // Add any new pages here when you create them.
  // Each entry needs:
  //   url — full URL of the page
  //   changeFrequency — how often Google should re-crawl ("daily", "weekly", "monthly")
  //   priority — importance from 0.0 to 1.0 (homepage should be 1.0)
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/fleet`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/areas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tours`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  // ─── FLEET PAGES ──────────────────────────────────────────────────────────
  // All car pages are generated automatically from fleet.json.
  // No changes needed here — just add/remove cars in fleet.json.
  const fleetPages: MetadataRoute.Sitemap = (fleetData as any[]).map((vehicle) => ({
    url: `${baseUrl}/fleet/${vehicle.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // ─── SERVICE AREA PAGES ───────────────────────────────────────────────────
  // All 200+ service areas are generated automatically.
  const areaPages: MetadataRoute.Sitemap = serviceAreas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75, // slightly lower priority than fleet
  }));

  // Combine static, fleet, and area pages into the final sitemap
  return [...staticPages, ...fleetPages, ...areaPages];
}

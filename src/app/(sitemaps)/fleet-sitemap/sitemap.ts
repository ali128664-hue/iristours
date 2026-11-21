import { MetadataRoute } from "next";
import fleetData from "@/data/fleet.json";

// Rebuild this sitemap once a day so lastmod dates stay fresh for search engines.
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iristours.net";
  return (fleetData as any[]).map((vehicle) => ({
    url: `${baseUrl}/fleet/${vehicle.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.85,
  }));
}

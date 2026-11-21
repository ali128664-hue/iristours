import { MetadataRoute } from "next";
import serviceAreas from "@/data/serviceAreas.json";

// Rebuild this sitemap once a day so lastmod dates stay fresh for search engines.
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iristours.net";
  return serviceAreas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.75,
  }));
}

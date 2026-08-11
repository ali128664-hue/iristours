import { MetadataRoute } from "next";
import fleetData from "@/data/fleet.json";
import serviceAreas from "@/data/serviceAreas.json";

const baseUrl = "https://iristours.com";

// generateSitemaps splits the sitemap into multiple smaller sitemaps (Sitemap Index)
export async function generateSitemaps() {
  return [
    { id: 0 }, // Static Pages
    { id: 1 }, // Fleet Pages
    { id: 2 }  // Service Area Pages
  ];
}

export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  // 0 -> Static Pages Sitemap
  if (id === 0) {
    return [
      { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
      { url: `${baseUrl}/fleet`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
      { url: `${baseUrl}/areas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
      { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
      { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
      { url: `${baseUrl}/tours`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
      { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    ];
  }

  // 1 -> Fleet Pages Sitemap
  if (id === 1) {
    return (fleetData as any[]).map((vehicle) => ({
      url: `${baseUrl}/fleet/${vehicle.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }));
  }

  // 2 -> Service Area Pages Sitemap (200+ pages)
  if (id === 2) {
    return serviceAreas.map((area) => ({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }));
  }

  return [];
}

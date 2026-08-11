import { MetadataRoute } from "next";
import fleetData from "@/data/fleet.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iristours.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/fleet`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/tours`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const fleetPages: MetadataRoute.Sitemap = (fleetData as any[]).map((vehicle) => ({
    url: `${baseUrl}/fleet/${vehicle.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...fleetPages];
}

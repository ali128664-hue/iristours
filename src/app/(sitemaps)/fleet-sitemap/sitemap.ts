import { MetadataRoute } from "next";
import fleetData from "@/data/fleet.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iristours.net";
  return (fleetData as any[]).map((vehicle) => ({
    url: `${baseUrl}/fleet/${vehicle.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));
}

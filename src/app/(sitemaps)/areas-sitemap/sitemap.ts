import { MetadataRoute } from "next";
import serviceAreas from "@/data/serviceAreas.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iristours.net";
  return serviceAreas.map((area) => ({
    url: `${baseUrl}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));
}

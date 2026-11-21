import { MetadataRoute } from "next";
import toursData from "@/data/tours.json";

// Rebuild this sitemap once a day so lastmod dates stay fresh for search engines.
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iristours.net";
  const tourPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/tours`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    ...toursData.map((tour) => ({
      url: `${baseUrl}/tours/${tour.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
  return tourPages;
}

import { MetadataRoute } from "next";

// Rebuild this sitemap once a day so lastmod dates stay fresh for search engines.
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iristours.net";
  return [
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/airport-transfer`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/wedding-cars`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services/corporate-rentals`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
  ];
}

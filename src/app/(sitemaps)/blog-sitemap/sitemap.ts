import { MetadataRoute } from "next";
import { allPostCards, guides } from "@/data/guides";

/** Every blog post: older hand-written posts plus the guides in src/data/guides */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iristours.net";
  return allPostCards.map((post) => {
      const guide = guides.find((g) => g.slug === post.slug);
      return {
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(guide?.updated || post.date || Date.now()),
        changeFrequency: "weekly" as const,
        priority: guide?.category === "Rent a car" ? 0.9 : 0.8,
        images: [`${baseUrl}${post.img}`],
      };
    });
}

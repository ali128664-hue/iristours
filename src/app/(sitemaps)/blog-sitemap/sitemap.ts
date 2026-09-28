import { MetadataRoute } from "next";
import blogsData from "@/data/blogs.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://iristours.net";
  return blogsData.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.publishDate || Date.now()),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
}

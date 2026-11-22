import { getGroup, urlsetXml, xmlResponse } from "@/lib/sitemaps";

// Regenerated hourly so scheduled blog posts appear on their date.
export const revalidate = 3600;

/** /blog-sitemap/sitemap.xml */
export function GET() {
  return xmlResponse(urlsetXml(getGroup("blog").entries()));
}

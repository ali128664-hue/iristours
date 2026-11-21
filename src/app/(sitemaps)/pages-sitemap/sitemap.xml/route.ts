import { getGroup, urlsetXml, xmlResponse } from "@/lib/sitemaps";

// Regenerated once a day so lastmod dates stay fresh for search engines.
export const revalidate = 86400;

/** /pages-sitemap/sitemap.xml */
export function GET() {
  return xmlResponse(urlsetXml(getGroup("pages").entries()));
}

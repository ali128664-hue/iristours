/**
 * /sitemap.xml — sitemap index listing every group sitemap.
 * Data lives in src/lib/sitemaps.ts. People use the designed /sitemap page.
 */

import { indexXml, xmlResponse } from "@/lib/sitemaps";

// Regenerated once a day so lastmod dates stay fresh for search engines.
export const revalidate = 86400;

export function GET() {
  return xmlResponse(indexXml());
}

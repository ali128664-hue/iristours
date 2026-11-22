/**
 * /sitemap.xml — sitemap index listing every group sitemap.
 * Data lives in src/lib/sitemaps.ts. People use the designed /sitemap page.
 */

import { indexXml, xmlResponse } from "@/lib/sitemaps";

// Regenerated hourly so scheduled blog posts appear on their date.
export const revalidate = 3600;

export function GET() {
  return xmlResponse(indexXml());
}

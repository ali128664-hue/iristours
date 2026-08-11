export async function GET() {
  const baseUrl = "https://iristours.net";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/pages-sitemap/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/fleet-sitemap/sitemap.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/areas-sitemap/sitemap.xml</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}

/**
 * indexnow.mjs — tell search engines about every page on iristours.net.
 *
 * Reads all sitemaps from the live site and submits the URLs through
 * IndexNow (used by Bing, Yandex, Seznam, Naver and others; Bing's index
 * also powers ChatGPT and Copilot search). Google does not use IndexNow;
 * for Google, the sitemap in Search Console does this job.
 *
 * Runs daily from .github/workflows/daily-indexing.yml.
 * The key file must be served at https://iristours.net/<KEY>.txt (in /public).
 */

const SITE = process.env.SITE_URL || "https://iristours.net";
const KEY = process.env.INDEXNOW_KEY || "5eb20160536f023a49756489a6fb9bdb";
const HOST = new URL(SITE).host;

async function getText(url) {
  const res = await fetch(url, { headers: { "User-Agent": "IrisTours-IndexNow/1.0" } });
  if (!res.ok) throw new Error(`${url} → ${res.status}`);
  return res.text();
}

const locs = (xml) => [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);

async function main() {
  const index = await getText(`${SITE}/sitemap.xml`);
  const sitemaps = locs(index);
  const urls = new Set([SITE + "/"]);
  for (const sm of sitemaps) {
    try {
      locs(await getText(sm)).forEach((u) => urls.add(u));
    } catch (e) {
      console.warn("Skipped sitemap:", e.message);
    }
  }
  const list = [...urls].filter((u) => u.startsWith(SITE));
  console.log(`Found ${list.length} URLs in ${sitemaps.length} sitemaps`);

  // IndexNow accepts up to 10,000 URLs per request
  for (let i = 0; i < list.length; i += 10000) {
    const batch = list.slice(i, i + 10000);
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList: batch }),
    });
    console.log(`IndexNow: submitted ${batch.length} URLs → HTTP ${res.status}`);
    if (res.status >= 400) {
      console.log(await res.text());
      process.exitCode = 1;
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

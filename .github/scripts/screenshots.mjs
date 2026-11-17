// Takes full-page phone and desktop screenshots of the main pages (used by preview-check.yml)
import { chromium } from "playwright";
import fs from "fs";

const BASE = "http://localhost:3000";
const pages = [
  ["home", "/"],
  ["fleet", "/fleet"],
  ["fleet-detail", "/fleet/toyota-fortuner"],
  ["tours", "/tours"],
  ["tour-detail", "/tours/hunza-valley"],
  ["services", "/services"],
  ["airport", "/services/airport-transfer"],
  ["wedding", "/services/wedding-cars"],
  ["corporate", "/services/corporate-rentals"],
  ["areas", "/areas"],
  ["area-detail", "/areas/dha-phase-1-lahore"],
  ["contact", "/contact"],
  ["about", "/about"],
  ["faq", "/faq"],
  ["blog", "/blog"],
  ["blog-post", "/blog/rent-a-car-in-lahore"],
  ["gallery", "/gallery"],
  ["fuel", "/fuel-prices-pakistan"],
  ["not-found", "/this-page-does-not-exist"],
];
const viewports = [
  ["mobile", { width: 390, height: 844 }, true],
  ["desktop", { width: 1440, height: 900 }, false],
];

fs.mkdirSync("shots", { recursive: true });
const report = [];
const browser = await chromium.launch();

for (const [vpName, viewport, isMobile] of viewports) {
  const context = await browser.newContext({ viewport, isMobile, hasTouch: isMobile, deviceScaleFactor: 1 });
  for (const [name, path] of pages) {
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(String(e.message).slice(0, 300)));
    page.on("console", (m) => m.type() === "error" && errors.push(m.text().slice(0, 300)));
    try {
      const res = await page.goto(BASE + path, { waitUntil: "networkidle", timeout: 45000 });
      // Scroll through the page so scroll-triggered sections render
      const height = await page.evaluate(() => document.body.scrollHeight);
      for (let y = 0; y < height; y += 500) {
        await page.evaluate((yy) => window.scrollTo(0, yy), y);
        await page.waitForTimeout(120);
      }
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(1200);
      const overflow = await page.evaluate(() => {
        const w = document.documentElement.clientWidth;
        const wide = [];
        document.querySelectorAll("body *").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.width > 0 && (r.right > w + 1 || r.left < -1) && getComputedStyle(el).position !== "fixed") {
            wide.push(`${el.tagName.toLowerCase()}.${String(el.className).split(" ").slice(0, 3).join(".")} right=${Math.round(r.right)}`);
          }
        });
        return { scrollWidth: document.documentElement.scrollWidth, clientWidth: w, wide: wide.slice(0, 8) };
      });
      await page.screenshot({ path: `shots/${vpName}-${name}.jpg`, fullPage: true, type: "jpeg", quality: 60 });
      report.push({ vp: vpName, name, status: res?.status(), errors: errors.slice(0, 5), overflow });
    } catch (e) {
      report.push({ vp: vpName, name, failed: String(e.message).slice(0, 300), errors });
    }
    await page.close();
  }
  await context.close();
}
await browser.close();
fs.writeFileSync("shots/report.json", JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

/**
 * route.ts — Global llms.txt Generator
 * Route: /llms.txt
 *
 * This generates the global /llms.txt file for the entire website.
 * AI crawlers (ChatGPT, Google AI Overviews, Perplexity, Claude, etc.)
 * read this file to understand your business, services, and fleet.
 *
 * It automatically lists all vehicles from fleet.json with their prices.
 * No manual updates needed when you add/remove cars.
 *
 * HOW TO CHANGE:
 *  - Company phone/WhatsApp → find the "Company Information" section below
 *  - Domain URL → change the `baseUrl` variable
 *  - Services list → edit the "## Services" section in the content string
 *  - Why Choose Us → edit the "## Why Choose Iris Tours?" section
 */

import { NextResponse } from "next/server";
import fleetData from "@/data/fleet.json";

export async function GET() {
  // Change this to your actual domain when deploying to production
  // e.g., "https://iristours.net"
  const baseUrl = "https://iristours.com";

  // Automatically generate a list of all vehicles with prices from fleet.json
  const fleetList = (fleetData as any[])
    .map(
      (v: any) =>
        `- [${v.name}](${baseUrl}/fleet/${v.slug}) — ${v.brand} ${v.category}, ${v.seats} seats, PKR ${(v.rent?.daily || 0).toLocaleString()}/day`
    )
    .join("\n");

  // The full llms.txt content — AI crawlers read this to understand your business
  const content = `# Iris Tours — Rent a Car Lahore | llms.txt

> Iris Tours is Lahore's premier car rental service. We provide professional chauffeur-driven and self-drive vehicle hire for airport transfers, corporate travel, weddings, outstation trips, and luxury tourism across Pakistan.

## Company Information
- **Name:** Iris Tours
- **Service:** Rent a Car, Chauffeur Service, Airport Transfers
- **Location:** DHA Phase 5, Lahore, Pakistan
- **Phone / WhatsApp:** +92-300-123-4567
- **Website:** ${baseUrl}
- **Google Maps:** https://maps.app.goo.gl/3M34CsuyqWTeb7oc8

## Services
- Airport Pick & Drop (Allama Iqbal International Airport, Lahore)
- Corporate Car Rental (daily, weekly, monthly)
- Wedding Car Rental (decorated vehicles available)
- Outstation Trips (Murree, Islamabad, Karachi, Gilgit-Baltistan)
- Luxury & VIP Vehicle Hire
- Group & Van Rentals
- Limousine Hire

## Fleet Overview (${fleetData.length} Vehicles)
${fleetList}

## Fleet Detail Pages
Each vehicle has its own dedicated page at ${baseUrl}/fleet/[slug] with:
- Full description and specifications
- High-resolution image gallery
- Detailed pricing (daily, weekly, monthly, with/without driver)
- Rental policies
- WhatsApp booking button
- Schema.org Product markup

## Key Cities Served
Lahore, DHA, Gulberg, Model Town, Johar Town, Bahria Town, Islamabad, Rawalpindi, Murree, Gujranwala, Faisalabad, Multan, Sialkot

## Why Choose Iris Tours?
- Professional, uniformed, verified drivers
- 24/7 WhatsApp support
- Flexible packages (hourly, daily, weekly, monthly)
- Free cancellation up to 24 hours before booking
- Corporate invoicing and accounts available
- 5-star rated on Google Maps

## Legal
- All vehicles fully insured
- Registered car rental operator in Lahore

## Sitemap
- Home: ${baseUrl}/
- Fleet: ${baseUrl}/fleet
- About: ${baseUrl}/about
- Services: ${baseUrl}/services
- Tours: ${baseUrl}/tours
- llms.txt (this file): ${baseUrl}/llms.txt
`;
  // Update contact details here — replace +92-300-123-4567 in "Company Information"
  // with your actual WhatsApp/phone number.

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      // Cache for 24 hours — reduce max-age if you update content frequently
      "Cache-Control": "public, max-age=86400",
    },
  });
}

import { NextRequest, NextResponse } from "next/server";
import fleetData from "@/data/fleet.json";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const vehicle = fleetData.find((v) => v.slug === slug) as any;

  if (!vehicle) {
    return new NextResponse("Vehicle not found", { status: 404 });
  }

  const baseUrl = "https://iristours.com";
  const pageUrl = `${baseUrl}/fleet/${vehicle.slug}`;

  const content = `# ${vehicle.name} — Iris Tours Rent a Car Lahore

## Vehicle Information
- **Name:** ${vehicle.name}
- **Brand:** ${vehicle.brand}
- **Category:** ${vehicle.category}
- **Transmission:** ${vehicle.transmission}
- **Fuel Type:** ${vehicle.fuel || vehicle.fuelType}
- **Passenger Capacity:** ${vehicle.seats} passengers
- **Luggage Capacity:** ${vehicle.specifications?.luggage || vehicle.luggage || 2} bags

## Description
${vehicle.description}

## Features
${(vehicle.features || []).map((f: string) => `- ${f}`).join("\n")}

## Rental Pricing (PKR)
- Daily Rate: PKR ${(vehicle.rent?.daily || 0).toLocaleString()}
- Weekly Rate: PKR ${(vehicle.rent?.weekly || 0).toLocaleString()}
- Monthly Rate: PKR ${(vehicle.rent?.monthly || 0).toLocaleString()}
- With Driver (Local): PKR ${(vehicle.rent?.withDriver?.local || 0).toLocaleString()}
- With Driver (Inter-City): PKR ${(vehicle.rent?.withDriver?.interCity || 0).toLocaleString()}
- With Driver (Outstation): PKR ${(vehicle.rent?.withDriver?.outstation || 0).toLocaleString()}

## Rental Policies
- **Fuel Policy:** ${vehicle.policies?.fuelPolicy || "Fuel included."}
- **Mileage Policy:** ${vehicle.policies?.mileagePolicy || "100 km/day local. Unlimited outstation."}
- **Outstation Policy:** ${vehicle.policies?.outstationPolicy || "Driver allowance and tolls extra."}

## SEO
- **Page URL:** ${pageUrl}
- **Title:** ${vehicle.seo?.title}
- **Meta Description:** ${vehicle.seo?.description}
- **Keywords:** ${vehicle.name} rent a car Lahore, ${vehicle.brand} rental Pakistan, ${vehicle.category} car rental DHA Lahore, Iris Tours car rental

## About Iris Tours
Iris Tours is a premier car rental and chauffeur service based in Lahore, Pakistan. We specialize in airport transfers, corporate travel, wedding rentals, outstation trips, and luxury vehicle hire across Pakistan.

- **Location:** DHA Phase 5, Lahore, Pakistan
- **WhatsApp:** +92-300-123-4567
- **Website:** https://iristours.com
- **Fleet Page:** ${baseUrl}/fleet

## Contact & Booking
To book the ${vehicle.name}, contact Iris Tours via:
- WhatsApp: https://wa.me/923001234567
- Phone: +92-300-123-4567
- Online: ${pageUrl}
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

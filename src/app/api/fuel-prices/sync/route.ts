import { NextRequest, NextResponse } from "next/server";
import { syncFuelPrices, clearFuelCache } from "@/utils/fuelSync";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

const SYNC_SECRET = process.env.IRIS_CRON_SECRET || "iris_fuel_sync_secret_2026";

function isAuthorized(req: NextRequest): boolean {
  // Allow local development without secret
  if (process.env.NODE_ENV === "development") return true;

  const urlSecret = req.nextUrl.searchParams.get("secret");
  const authHeader = req.headers.get("authorization");
  const xSecret = req.headers.get("x-cron-secret");

  if (urlSecret && urlSecret === SYNC_SECRET) return true;
  if (xSecret && xSecret === SYNC_SECRET) return true;
  if (authHeader && authHeader.replace("Bearer ", "").trim() === SYNC_SECRET) return true;

  return false;
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json(
      {
        error: "Unauthorized. Provide a valid ?secret= query parameter or x-cron-secret header.",
      },
      { status: 401 }
    );
  }

  try {
    clearFuelCache();
    const result = await syncFuelPrices();

    try {
      revalidatePath("/fuel-prices-pakistan");
      revalidatePath("/");
      revalidatePath("/fleet/[slug]", "page");
    } catch (revalErr) {
      console.warn("Cache revalidation note:", (revalErr as Error).message);
    }

    return NextResponse.json(result, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message || "Internal sync failure",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  return GET(req);
}

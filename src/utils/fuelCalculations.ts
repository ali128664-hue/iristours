import fuelData from "@/data/fuelPrices.json";
import fleetData from "@/data/fleet.json";

export type DrivingCondition = "city" | "highway" | "combined";

export interface VehicleEfficiency {
  city: number;
  highway: number;
  combined: number;
  fuelType: string;
}

export interface FuelRatesInput {
  petrol?: number;
  diesel?: number;
  hiOctane?: number;
  lpg?: number;
}

export interface TripCalculationInput {
  distance: number; // km
  vehicleSlug: string; // vehicle slug or "custom"
  drivingCondition: DrivingCondition;
  isRoundTrip: boolean;
  customFuelPrice?: number;
  customKmpl?: number;
  includeRental?: boolean;
  rentalDays?: number;
  fuelPrices?: FuelRatesInput;
}

export interface TripCalculationResult {
  distance: number;
  effectiveDistance: number;
  vehicleName: string;
  vehicleSlug: string;
  fuelType: string;
  kmpl: number;
  fuelPricePerUnit: number;
  fuelNeededLitres: number;
  fuelCostPkr: number;
  fuelCostPerKm: number;
  rentalDailyRate: number;
  rentalCostPkr: number;
  totalTripCostPkr: number;
}

export interface VehicleComparisonResult {
  vehicleA: TripCalculationResult;
  vehicleB: TripCalculationResult;
  fuelDifferenceLitres: number;
  costDifferencePkr: number;
  cheaperVehicle: "A" | "B" | "equal";
  percentageSavings: number;
}

export const POPULAR_ROUTES = [
  { label: "Lahore → Islamabad", distance: 380, description: "Via M-2 Motorway (One way)" },
  { label: "Islamabad → Murree", distance: 65, description: "Via Murree Expressway (One way)" },
  { label: "Lahore → Karachi", distance: 1220, description: "Via M-3 / M-5 Motorway (One way)" },
  { label: "Islamabad → Skardu", distance: 640, description: "Via KKH & Jaglot-Skardu Road" },
  { label: "Islamabad → Hunza", distance: 580, description: "Via Hazara Motorway & KKH" },
  { label: "Lahore → Faisalabad", distance: 180, description: "Via M-3 Motorway (One way)" },
  { label: "Lahore City Day Commute", distance: 60, description: "Average daily intra-city drive" },
];

/**
 * Get real-world fuel economy specs for a vehicle
 */
export function getVehicleEfficiency(slug: string): VehicleEfficiency {
  const mileageMap = fuelData.vehicleMileage as Record<string, VehicleEfficiency>;
  if (mileageMap[slug]) {
    return mileageMap[slug];
  }

  // Fallback check against fleet.json
  const vehicle = fleetData.find((v) => v.slug === slug);
  const fuelType = (vehicle?.fuel || vehicle?.fuelType || "Petrol") as string;

  if (fuelType.toLowerCase().includes("hybrid")) {
    return { city: 18.0, highway: 22.0, combined: 20.0, fuelType: "Hybrid" };
  } else if (fuelType.toLowerCase().includes("diesel")) {
    return { city: 8.5, highway: 11.5, combined: 10.0, fuelType: "Diesel" };
  } else {
    return { city: 11.0, highway: 15.0, combined: 13.0, fuelType: "Petrol" };
  }
}

/**
 * Get current Pakistan price for a fuel type
 */
export function getCurrentFuelPrice(fuelType: string, customRates?: FuelRatesInput): number {
  const norm = fuelType.toLowerCase();
  if (norm.includes("diesel")) {
    return customRates?.diesel ?? fuelData.pakistan.diesel.price;
  } else if (norm.includes("hi-octane") || norm.includes("hobc")) {
    return customRates?.hiOctane ?? fuelData.pakistan.hiOctane.price;
  } else if (norm.includes("lpg")) {
    return customRates?.lpg ?? fuelData.pakistan.lpg.price;
  }
  // Petrol / Hybrid default to petrol rate
  return customRates?.petrol ?? fuelData.pakistan.petrol.price;
}

/**
 * Calculate comprehensive trip fuel requirements and total cost
 */
export function calculateTripFuelCost(input: TripCalculationInput): TripCalculationResult {
  const rawDistance = Math.max(1, input.distance || 0);
  const effectiveDistance = input.isRoundTrip ? rawDistance * 2 : rawDistance;

  let vehicleName = "Custom Vehicle";
  let fuelType = "Petrol";
  let kmpl = input.customKmpl && input.customKmpl > 0 ? input.customKmpl : 12.0;
  let rentalDailyRate = 0;

  if (input.vehicleSlug !== "custom") {
    const vehicle = fleetData.find((v) => v.slug === input.vehicleSlug);
    if (vehicle) {
      vehicleName = vehicle.name;
      rentalDailyRate = vehicle.rent?.daily || 0;
    }
    const eff = getVehicleEfficiency(input.vehicleSlug);
    fuelType = eff.fuelType;
    kmpl = eff[input.drivingCondition] || eff.combined;
  }

  const fuelPricePerUnit =
    input.customFuelPrice && input.customFuelPrice > 0
      ? input.customFuelPrice
      : getCurrentFuelPrice(fuelType, input.fuelPrices);

  const fuelNeededLitres = effectiveDistance / Math.max(1, kmpl);
  const fuelCostPkr = Math.round(fuelNeededLitres * fuelPricePerUnit);
  const fuelCostPerKm = Math.round((fuelCostPkr / effectiveDistance) * 10) / 10;

  const days = input.rentalDays && input.rentalDays > 0 ? input.rentalDays : 1;
  const rentalCostPkr = input.includeRental ? rentalDailyRate * days : 0;
  const totalTripCostPkr = fuelCostPkr + rentalCostPkr;

  return {
    distance: rawDistance,
    effectiveDistance,
    vehicleName,
    vehicleSlug: input.vehicleSlug,
    fuelType,
    kmpl: Math.round(kmpl * 10) / 10,
    fuelPricePerUnit,
    fuelNeededLitres: Math.round(fuelNeededLitres * 10) / 10,
    fuelCostPkr,
    fuelCostPerKm,
    rentalDailyRate,
    rentalCostPkr,
    totalTripCostPkr,
  };
}

/**
 * Side-by-side comparison between two vehicles
 */
export function compareTwoVehicles(
  slugA: string,
  slugB: string,
  distance: number,
  drivingCondition: DrivingCondition = "combined",
  isRoundTrip: boolean = false,
  fuelPrices?: FuelRatesInput
): VehicleComparisonResult {
  const vehicleA = calculateTripFuelCost({
    distance,
    vehicleSlug: slugA,
    drivingCondition,
    isRoundTrip,
    fuelPrices,
  });

  const vehicleB = calculateTripFuelCost({
    distance,
    vehicleSlug: slugB,
    drivingCondition,
    isRoundTrip,
    fuelPrices,
  });

  const fuelDifferenceLitres =
    Math.round(Math.abs(vehicleA.fuelNeededLitres - vehicleB.fuelNeededLitres) * 10) / 10;
  const costDifferencePkr = Math.abs(vehicleA.fuelCostPkr - vehicleB.fuelCostPkr);

  let cheaperVehicle: "A" | "B" | "equal" = "equal";
  let percentageSavings = 0;

  if (vehicleA.fuelCostPkr < vehicleB.fuelCostPkr) {
    cheaperVehicle = "A";
    percentageSavings =
      vehicleB.fuelCostPkr > 0
        ? Math.round(((vehicleB.fuelCostPkr - vehicleA.fuelCostPkr) / vehicleB.fuelCostPkr) * 100)
        : 0;
  } else if (vehicleB.fuelCostPkr < vehicleA.fuelCostPkr) {
    cheaperVehicle = "B";
    percentageSavings =
      vehicleA.fuelCostPkr > 0
        ? Math.round(((vehicleA.fuelCostPkr - vehicleB.fuelCostPkr) / vehicleA.fuelCostPkr) * 100)
        : 0;
  }

  return {
    vehicleA,
    vehicleB,
    fuelDifferenceLitres,
    costDifferencePkr,
    cheaperVehicle,
    percentageSavings,
  };
}

"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  Car,
  Navigation,
  Compass,
  Repeat,
  DollarSign,
  Fuel,
  Info,
  Calendar,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import fleetData from "@/data/fleet.json";
import {
  DrivingCondition,
  calculateTripFuelCost,
  POPULAR_ROUTES,
  getVehicleEfficiency,
  getCurrentFuelPrice,
} from "@/utils/fuelCalculations";

interface Props {
  initialVehicleSlug?: string;
}

export default function FuelCalculator({ initialVehicleSlug = "toyota-corolla-altis-1-6" }: Props) {
  const [selectedVehicle, setSelectedVehicle] = useState<string>(initialVehicleSlug);
  const [distance, setDistance] = useState<number>(380);
  const [drivingCondition, setDrivingCondition] = useState<DrivingCondition>("highway");
  const [isRoundTrip, setIsRoundTrip] = useState<boolean>(false);
  const [customKmpl, setCustomKmpl] = useState<number>(13.5);
  const [customFuelPrice, setCustomFuelPrice] = useState<number>(389.14);
  const [includeRental, setIncludeRental] = useState<boolean>(false);
  const [rentalDays, setRentalDays] = useState<number>(1);

  // Group vehicles by category for dropdown
  const vehiclesByCategory = useMemo(() => {
    const groups: Record<string, typeof fleetData> = {};
    fleetData.forEach((v) => {
      const cat = v.category || "Other";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(v);
    });
    return groups;
  }, []);

  const selectedVehicleObj = useMemo(() => {
    return fleetData.find((v) => v.slug === selectedVehicle);
  }, [selectedVehicle]);

  const efficiency = useMemo(() => {
    if (selectedVehicle === "custom") {
      return { city: customKmpl * 0.8, highway: customKmpl * 1.2, combined: customKmpl, fuelType: "Petrol" };
    }
    return getVehicleEfficiency(selectedVehicle);
  }, [selectedVehicle, customKmpl]);

  // Execute calculation
  const calculation = useMemo(() => {
    return calculateTripFuelCost({
      distance,
      vehicleSlug: selectedVehicle,
      drivingCondition,
      isRoundTrip,
      customKmpl: selectedVehicle === "custom" ? customKmpl : undefined,
      customFuelPrice: selectedVehicle === "custom" ? customFuelPrice : undefined,
      includeRental,
      rentalDays,
    });
  }, [
    distance,
    selectedVehicle,
    drivingCondition,
    isRoundTrip,
    customKmpl,
    customFuelPrice,
    includeRental,
    rentalDays,
  ]);

  // WhatsApp CTA Link with dynamic trip details
  const whatsappBookingUrl = useMemo(() => {
    const carTitle = calculation.vehicleName;
    const tripDist = calculation.effectiveDistance;
    const conditionText =
      drivingCondition === "highway"
        ? "Highway / Motorway"
        : drivingCondition === "city"
        ? "City Traffic"
        : "Combined / Mixed";
    const roundTripText = isRoundTrip ? "Round Trip" : "One Way";
    const rentalText = includeRental
      ? `\n• Rental Duration: ${rentalDays} Day(s) (Rs. ${calculation.rentalCostPkr.toLocaleString()})`
      : "";

    const msg = `Hi Iris Tours! I calculated a trip fuel estimate on your website:
• Vehicle: ${carTitle} (${calculation.fuelType})
• Trip Distance: ${tripDist} km (${roundTripText})
• Driving Condition: ${conditionText}
• Estimated Fuel Needed: ~${calculation.fuelNeededLitres} Litres
• Estimated Fuel Cost: Rs. ${calculation.fuelCostPkr.toLocaleString()} (Rs. ${calculation.fuelCostPerKm}/km)${rentalText}
• Total Trip Budget: Rs. ${calculation.totalTripCostPkr.toLocaleString()}

Please let me know car availability and confirm booking rates.`;

    return `https://wa.me/923154973906?text=${encodeURIComponent(msg)}`;
  }, [calculation, drivingCondition, isRoundTrip, includeRental, rentalDays]);

  return (
    <div className="w-full bg-white rounded-3xl border border-border-primary p-6 md:p-10 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Form Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-7">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full inline-block mb-3">
              Interactive Trip Estimator
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary">
              Calculate Vehicle Fuel Cost
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              Select any Iris Tours vehicle or custom specs to calculate exact fuel requirements and cost.
            </p>
          </div>

          {/* Vehicle Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2 flex items-center gap-2">
              <Car size={16} className="text-accent-primary" />
              Choose Iris Tours Vehicle
            </label>
            <select
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
              className="w-full px-4 py-3.5 rounded-2xl border border-border-primary bg-bg-secondary text-text-primary font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all cursor-pointer"
            >
              <option value="custom">-- Custom Vehicle (Manual Mileage &amp; Fuel Price) --</option>
              {Object.entries(vehiclesByCategory).map(([category, vehicles]) => (
                <optgroup key={category} label={`── ${category.toUpperCase()} ──`}>
                  {vehicles.map((v) => (
                    <option key={v.slug} value={v.slug}>
                      {v.name} ({v.fuel || v.fuelType} • Rs. {v.rent?.daily?.toLocaleString() || 0}/day)
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* Custom vehicle fields if selected */}
          {selectedVehicle === "custom" && (
            <div className="p-4 bg-bg-secondary rounded-2xl border border-border-primary grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">
                  Average Fuel Mileage (km / L)
                </label>
                <input
                  type="number"
                  min="3"
                  max="40"
                  step="0.5"
                  value={customKmpl}
                  onChange={(e) => setCustomKmpl(parseFloat(e.target.value) || 12)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-border-primary text-text-primary font-semibold text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-secondary mb-1">
                  Fuel Price (Rs. / Litre)
                </label>
                <input
                  type="number"
                  min="100"
                  max="700"
                  step="0.5"
                  value={customFuelPrice}
                  onChange={(e) => setCustomFuelPrice(parseFloat(e.target.value) || 389.14)}
                  className="w-full px-3 py-2 bg-white rounded-xl border border-border-primary text-text-primary font-semibold text-sm"
                />
              </div>
            </div>
          )}

          {/* Trip Distance Input & Route Presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                <Navigation size={16} className="text-accent-primary" />
                Trip Distance (km)
              </label>
              <span className="text-xs font-semibold text-accent-primary">
                {distance} km {isRoundTrip && `(x2 = ${distance * 2} km)`}
              </span>
            </div>

            <div className="relative">
              <input
                type="number"
                min="5"
                max="5000"
                step="5"
                value={distance}
                onChange={(e) => setDistance(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-3.5 rounded-2xl border border-border-primary bg-bg-secondary text-text-primary font-bold text-lg focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all"
                placeholder="Enter distance in km..."
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-text-secondary uppercase">
                Kilometers
              </span>
            </div>

            {/* Popular Route Presets */}
            <div className="mt-3">
              <span className="text-[11px] font-semibold text-text-secondary block mb-2">
                Quick Popular Routes:
              </span>
              <div className="flex flex-wrap gap-2">
                {POPULAR_ROUTES.map((route) => (
                  <button
                    key={route.label}
                    type="button"
                    onClick={() => setDistance(route.distance)}
                    className={clsx(
                      "text-xs px-3 py-1.5 rounded-full border transition-all font-medium",
                      distance === route.distance
                        ? "bg-accent-primary text-white border-accent-primary shadow-sm"
                        : "bg-bg-secondary text-text-secondary border-border-primary hover:border-accent-primary hover:text-text-primary"
                    )}
                  >
                    {route.label} ({route.distance} km)
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Driving Conditions & Trip Type Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Driving Condition */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2 flex items-center gap-2">
                <Compass size={16} className="text-accent-primary" />
                Driving Environment
              </label>
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-bg-secondary rounded-2xl border border-border-primary">
                {(["city", "combined", "highway"] as DrivingCondition[]).map((cond) => (
                  <button
                    key={cond}
                    type="button"
                    onClick={() => setDrivingCondition(cond)}
                    className={clsx(
                      "py-2 px-2 text-xs font-bold rounded-xl transition-all capitalize text-center",
                      drivingCondition === cond
                        ? "bg-white text-accent-primary shadow-sm"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                  >
                    {cond === "combined" ? "Mixed" : cond}
                  </button>
                ))}
              </div>
            </div>

            {/* Trip Type (One way vs Round trip) */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-text-primary mb-2 flex items-center gap-2">
                <Repeat size={16} className="text-accent-primary" />
                Trip Type
              </label>
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-bg-secondary rounded-2xl border border-border-primary">
                <button
                  type="button"
                  onClick={() => setIsRoundTrip(false)}
                  className={clsx(
                    "py-2 px-2 text-xs font-bold rounded-xl transition-all text-center",
                    !isRoundTrip
                      ? "bg-white text-accent-primary shadow-sm"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  One Way
                </button>
                <button
                  type="button"
                  onClick={() => setIsRoundTrip(true)}
                  className={clsx(
                    "py-2 px-2 text-xs font-bold rounded-xl transition-all text-center",
                    isRoundTrip
                      ? "bg-white text-accent-primary shadow-sm"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  Round Trip (2x)
                </button>
              </div>
            </div>
          </div>

          {/* Rental Add-on Checkbox */}
          {selectedVehicle !== "custom" && (
            <div className="p-4 bg-bg-secondary/60 rounded-2xl border border-border-primary space-y-3">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeRental}
                  onChange={(e) => setIncludeRental(e.target.checked)}
                  className="w-4 h-4 rounded text-accent-primary focus:ring-accent-primary border-border-primary"
                />
                <span className="text-xs font-bold text-text-primary">
                  Include Daily Car Rental Rate (Rs.{" "}
                  {selectedVehicleObj?.rent?.daily?.toLocaleString() || 0}/day)
                </span>
              </label>

              {includeRental && (
                <div className="flex items-center gap-3 pl-7">
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <Calendar size={14} /> Duration:
                  </span>
                  <select
                    value={rentalDays}
                    onChange={(e) => setRentalDays(parseInt(e.target.value) || 1)}
                    className="px-3 py-1.5 bg-white border border-border-primary rounded-xl text-xs font-semibold text-text-primary"
                  >
                    {[1, 2, 3, 4, 5, 7, 10, 14, 30].map((d) => (
                      <option key={d} value={d}>
                        {d} {d === 1 ? "Day" : "Days"} (Rs.{" "}
                        {((selectedVehicleObj?.rent?.daily || 0) * d).toLocaleString()})
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Column: Calculated Results Box (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-bg-secondary via-white to-amber-50/40 rounded-3xl p-6 md:p-8 border-2 border-accent-primary/30 shadow-lg">
          <div>
            <div className="flex items-center justify-between border-b border-border-primary pb-4 mb-6">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-accent-primary block">
                  Trip Summary
                </span>
                <h4 className="text-xl font-extrabold text-text-primary leading-tight">
                  {calculation.vehicleName}
                </h4>
              </div>
              <span className="text-xs font-bold bg-accent-primary/10 text-accent-primary px-3 py-1 rounded-full">
                {calculation.fuelType}
              </span>
            </div>

            {/* Total Estimated Cost */}
            <div className="mb-6 p-5 bg-white rounded-2xl border border-border-primary shadow-sm text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-text-secondary block mb-1">
                Total Estimated Fuel Cost
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-lg font-bold text-accent-primary">Rs.</span>
                <span className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
                  {calculation.fuelCostPkr.toLocaleString()}
                </span>
              </div>
              <span className="text-xs font-medium text-text-secondary mt-1 block">
                Rs. {calculation.fuelCostPerKm} per km • @ Rs. {calculation.fuelPricePerUnit}/L
              </span>
            </div>

            {/* Metric breakdown badges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-3.5 rounded-xl border border-border-primary">
                <span className="text-[11px] text-text-secondary block font-medium">Effective Distance</span>
                <span className="text-lg font-bold text-text-primary">
                  {calculation.effectiveDistance} km
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-border-primary">
                <span className="text-[11px] text-text-secondary block font-medium">Fuel Required</span>
                <span className="text-lg font-bold text-text-primary">
                  ~{calculation.fuelNeededLitres} Litres
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-border-primary">
                <span className="text-[11px] text-text-secondary block font-medium">Tested Mileage</span>
                <span className="text-lg font-bold text-emerald-600">
                  {calculation.kmpl} km / L
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-border-primary">
                <span className="text-[11px] text-text-secondary block font-medium">Driving Condition</span>
                <span className="text-lg font-bold text-text-primary capitalize">
                  {drivingCondition}
                </span>
              </div>
            </div>

            {/* If rental included, show combined grand total */}
            {includeRental && calculation.rentalCostPkr > 0 && (
              <div className="mb-6 p-4 bg-accent-primary/10 rounded-2xl border border-accent-primary/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-text-primary block">
                    Combined Trip Budget
                  </span>
                  <span className="text-[11px] text-text-secondary">
                    Fuel (Rs. {calculation.fuelCostPkr.toLocaleString()}) + Rental ({rentalDays}d: Rs. {calculation.rentalCostPkr.toLocaleString()})
                  </span>
                </div>
                <div className="text-right font-extrabold text-xl text-accent-primary">
                  Rs. {calculation.totalTripCostPkr.toLocaleString()}
                </div>
              </div>
            )}
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-4 border-t border-border-primary">
            {/* WhatsApp CTA */}
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm tracking-wide shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              <FaWhatsapp size={20} />
              <span>Book {calculation.vehicleName} via WhatsApp</span>
            </a>

            {/* Car detail link */}
            {selectedVehicle !== "custom" && (
              <Link
                href={`/fleet/${selectedVehicle}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-border-primary text-text-primary hover:text-accent-primary hover:border-accent-primary text-xs font-bold transition-colors"
              >
                <span>View Full Specifications &amp; Gallery</span>
                <ExternalLink size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Check, TrendingDown, Fuel, Zap, HelpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import fleetData from "@/data/fleet.json";
import { compareTwoVehicles, DrivingCondition } from "@/utils/fuelCalculations";

export default function VehicleComparison() {
  const [vehicleASlug, setVehicleASlug] = useState<string>("toyota-prius");
  const [vehicleBSlug, setVehicleBSlug] = useState<string>("toyota-fortuner");
  const [distance, setDistance] = useState<number>(380);
  const [drivingCondition, setDrivingCondition] = useState<DrivingCondition>("highway");

  const comparison = useMemo(() => {
    return compareTwoVehicles(vehicleASlug, vehicleBSlug, distance, drivingCondition, false);
  }, [vehicleASlug, vehicleBSlug, distance, drivingCondition]);

  const vehicleA = fleetData.find((v) => v.slug === vehicleASlug);
  const vehicleB = fleetData.find((v) => v.slug === vehicleBSlug);

  return (
    <div className="w-full bg-white rounded-3xl border border-border-primary p-6 md:p-10 shadow-xl">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full inline-block mb-3">
          Side-by-Side Analysis
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary">
          Compare Vehicle Fuel Consumption
        </h3>
        <p className="text-sm text-text-secondary mt-1">
          Pick two vehicles from our fleet to see real-world fuel consumption and trip cost differences.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-bg-secondary p-4 rounded-2xl border border-border-primary">
        <div>
          <label className="block text-xs font-bold uppercase text-text-secondary mb-1">
            Vehicle 1
          </label>
          <select
            value={vehicleASlug}
            onChange={(e) => setVehicleASlug(e.target.value)}
            className="w-full px-3 py-2.5 bg-white rounded-xl border border-border-primary text-xs font-bold text-text-primary"
          >
            {fleetData.map((v) => (
              <option key={v.slug} value={v.slug}>
                {v.name} ({v.fuel || v.fuelType})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-text-secondary mb-1">
            Vehicle 2
          </label>
          <select
            value={vehicleBSlug}
            onChange={(e) => setVehicleBSlug(e.target.value)}
            className="w-full px-3 py-2.5 bg-white rounded-xl border border-border-primary text-xs font-bold text-text-primary"
          >
            {fleetData.map((v) => (
              <option key={v.slug} value={v.slug}>
                {v.name} ({v.fuel || v.fuelType})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-text-secondary mb-1">
            Trip Distance (km)
          </label>
          <input
            type="number"
            min="10"
            max="3000"
            value={distance}
            onChange={(e) => setDistance(Math.max(1, parseInt(e.target.value) || 10))}
            className="w-full px-3 py-2 bg-white rounded-xl border border-border-primary text-xs font-bold text-text-primary"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-text-secondary mb-1">
            Driving Environment
          </label>
          <select
            value={drivingCondition}
            onChange={(e) => setDrivingCondition(e.target.value as DrivingCondition)}
            className="w-full px-3 py-2.5 bg-white rounded-xl border border-border-primary text-xs font-bold text-text-primary"
          >
            <option value="highway">Highway / Motorway</option>
            <option value="combined">Mixed / Combined</option>
            <option value="city">City Driving</option>
          </select>
        </div>
      </div>

      {/* Savings Highlight Banner */}
      {comparison.cheaperVehicle !== "equal" && (
        <div className="mb-8 p-4 md:p-5 bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
              <TrendingDown size={22} />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
                Fuel Economy Winner
              </span>
              <p className="text-sm font-extrabold text-text-primary">
                {comparison.cheaperVehicle === "A"
                  ? comparison.vehicleA.vehicleName
                  : comparison.vehicleB.vehicleName}{" "}
                saves Rs. {comparison.costDifferencePkr.toLocaleString()} ({comparison.percentageSavings}%) on this {distance} km trip!
              </p>
            </div>
          </div>

          <div className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-3 py-1.5 rounded-full whitespace-nowrap">
            {comparison.fuelDifferenceLitres} Litres Saved
          </div>
        </div>
      )}

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vehicle A Card */}
        <div
          className={clsx(
            "p-6 rounded-3xl border-2 transition-all relative",
            comparison.cheaperVehicle === "A"
              ? "border-emerald-500 bg-emerald-50/20 shadow-md"
              : "border-border-primary bg-white"
          )}
        >
          {comparison.cheaperVehicle === "A" && (
            <span className="absolute -top-3 right-6 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
              More Economical
            </span>
          )}

          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-20 h-14 rounded-xl overflow-hidden bg-bg-secondary border border-border-primary flex-shrink-0">
              {vehicleA?.images?.thumbnail && (
                <Image
                  src={vehicleA.images.thumbnail}
                  alt={comparison.vehicleA.vehicleName}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-accent-primary block">
                {vehicleA?.category}
              </span>
              <h4 className="text-lg font-extrabold text-text-primary leading-tight">
                {comparison.vehicleA.vehicleName}
              </h4>
              <span className="text-xs text-text-secondary">
                {comparison.vehicleA.fuelType} • Rs. {vehicleA?.rent?.daily?.toLocaleString() || 0}/day rent
              </span>
            </div>
          </div>

          <div className="space-y-2.5 border-t border-border-primary/60 pt-4 text-xs">
            <div className="flex justify-between py-1 border-b border-border-primary/40">
              <span className="text-text-secondary">Tested Mileage:</span>
              <span className="font-bold text-text-primary">{comparison.vehicleA.kmpl} km / L</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-primary/40">
              <span className="text-text-secondary">Fuel Needed:</span>
              <span className="font-bold text-text-primary">~{comparison.vehicleA.fuelNeededLitres} Litres</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-primary/40">
              <span className="text-text-secondary">Cost per km:</span>
              <span className="font-bold text-text-primary">Rs. {comparison.vehicleA.fuelCostPerKm} / km</span>
            </div>
            <div className="flex justify-between py-2 items-baseline">
              <span className="text-xs font-bold text-text-primary">Estimated Trip Fuel:</span>
              <span className="text-2xl font-black text-accent-primary">
                Rs. {comparison.vehicleA.fuelCostPkr.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Vehicle B Card */}
        <div
          className={clsx(
            "p-6 rounded-3xl border-2 transition-all relative",
            comparison.cheaperVehicle === "B"
              ? "border-emerald-500 bg-emerald-50/20 shadow-md"
              : "border-border-primary bg-white"
          )}
        >
          {comparison.cheaperVehicle === "B" && (
            <span className="absolute -top-3 right-6 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-3 py-1 rounded-full shadow">
              More Economical
            </span>
          )}

          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-20 h-14 rounded-xl overflow-hidden bg-bg-secondary border border-border-primary flex-shrink-0">
              {vehicleB?.images?.thumbnail && (
                <Image
                  src={vehicleB.images.thumbnail}
                  alt={comparison.vehicleB.vehicleName}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase text-accent-primary block">
                {vehicleB?.category}
              </span>
              <h4 className="text-lg font-extrabold text-text-primary leading-tight">
                {comparison.vehicleB.vehicleName}
              </h4>
              <span className="text-xs text-text-secondary">
                {comparison.vehicleB.fuelType} • Rs. {vehicleB?.rent?.daily?.toLocaleString() || 0}/day rent
              </span>
            </div>
          </div>

          <div className="space-y-2.5 border-t border-border-primary/60 pt-4 text-xs">
            <div className="flex justify-between py-1 border-b border-border-primary/40">
              <span className="text-text-secondary">Tested Mileage:</span>
              <span className="font-bold text-text-primary">{comparison.vehicleB.kmpl} km / L</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-primary/40">
              <span className="text-text-secondary">Fuel Needed:</span>
              <span className="font-bold text-text-primary">~{comparison.vehicleB.fuelNeededLitres} Litres</span>
            </div>
            <div className="flex justify-between py-1 border-b border-border-primary/40">
              <span className="text-text-secondary">Cost per km:</span>
              <span className="font-bold text-text-primary">Rs. {comparison.vehicleB.fuelCostPerKm} / km</span>
            </div>
            <div className="flex justify-between py-2 items-baseline">
              <span className="text-xs font-bold text-text-primary">Estimated Trip Fuel:</span>
              <span className="text-2xl font-black text-accent-primary">
                Rs. {comparison.vehicleB.fuelCostPkr.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

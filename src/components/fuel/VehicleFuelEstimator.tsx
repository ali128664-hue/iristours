"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Fuel, Gauge, Compass, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import fuelData from "@/data/fuelPrices.json";
import { getVehicleEfficiency, getCurrentFuelPrice, DrivingCondition } from "@/utils/fuelCalculations";

interface Props {
  vehicleSlug: string;
  vehicleName: string;
  fuelType: string;
}

export default function VehicleFuelEstimator({ vehicleSlug, vehicleName, fuelType }: Props) {
  const [distance, setDistance] = useState<number>(380);
  const [drivingCondition, setDrivingCondition] = useState<DrivingCondition>("highway");

  const eff = useMemo(() => getVehicleEfficiency(vehicleSlug), [vehicleSlug]);
  const fuelPrice = useMemo(() => getCurrentFuelPrice(eff.fuelType || fuelType), [eff, fuelType]);

  const kmpl = eff[drivingCondition] || eff.combined;
  const litres = Math.round((distance / kmpl) * 10) / 10;
  const cost = Math.round(litres * fuelPrice);
  const costPerKm = Math.round((cost / distance) * 10) / 10;

  return (
    <div className="w-full bg-gradient-to-br from-bg-secondary via-white to-amber-50/30 rounded-3xl border border-border-primary p-6 md:p-8 shadow-sm">
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-accent-primary">
              Real-World Fuel Efficiency
            </span>
          </div>
          <h3 className="text-xl font-extrabold text-text-primary">
            Fuel Consumption &amp; Trip Estimator
          </h3>
        </div>

        <span className="text-xs font-bold px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full border border-accent-primary/20">
          {eff.fuelType}
        </span>
      </div>

      {/* Mileage stats grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-white p-3.5 rounded-2xl border border-border-primary text-center">
          <span className="text-[10px] font-bold uppercase text-text-secondary block">
            City Driving
          </span>
          <span className="text-lg font-black text-text-primary">{eff.city}</span>
          <span className="text-[10px] text-text-secondary block">km / L</span>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-border-primary text-center">
          <span className="text-[10px] font-bold uppercase text-text-secondary block">
            Highway / Motorway
          </span>
          <span className="text-lg font-black text-emerald-600">{eff.highway}</span>
          <span className="text-[10px] text-text-secondary block">km / L</span>
        </div>

        <div className="bg-white p-3.5 rounded-2xl border border-border-primary text-center">
          <span className="text-[10px] font-bold uppercase text-text-secondary block">
            Current Rate
          </span>
          <span className="text-lg font-black text-text-primary">Rs. {fuelPrice}</span>
          <span className="text-[10px] text-text-secondary block">/ Litre</span>
        </div>
      </div>

      {/* Interactive Quick Calculator */}
      <div className="p-4 bg-white rounded-2xl border border-border-primary mb-6 space-y-4">
        <div>
          <div className="flex justify-between items-center text-xs font-bold mb-2">
            <span className="text-text-primary">Estimate a Trip:</span>
            <span className="text-accent-primary font-black">{distance} Kilometers</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { label: "100 km", dist: 100 },
              { label: "Lahore-ISB (380 km)", dist: 380 },
              { label: "ISB-Murree (65 km)", dist: 65 },
              { label: "ISB-Skardu (640 km)", dist: 640 },
            ].map((btn) => (
              <button
                key={btn.dist}
                type="button"
                onClick={() => setDistance(btn.dist)}
                className={clsx(
                  "px-3 py-1 rounded-full text-xs font-bold transition-all border",
                  distance === btn.dist
                    ? "bg-accent-primary text-white border-accent-primary"
                    : "bg-bg-secondary text-text-secondary border-border-primary hover:border-accent-primary hover:text-text-primary"
                )}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Condition selector */}
        <div className="flex items-center gap-2 pt-2 border-t border-border-primary/50 text-xs">
          <span className="text-text-secondary font-medium">Route:</span>
          {(["highway", "combined", "city"] as DrivingCondition[]).map((cond) => (
            <button
              key={cond}
              type="button"
              onClick={() => setDrivingCondition(cond)}
              className={clsx(
                "px-2.5 py-1 rounded-lg font-bold capitalize transition-all",
                drivingCondition === cond
                  ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/30"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {cond}
            </button>
          ))}
        </div>

        {/* Result summary */}
        <div className="pt-3 border-t border-border-primary/50 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-text-secondary block">
              Estimated Fuel: ~{litres} L (@ Rs. {costPerKm}/km)
            </span>
            <span className="text-xs font-bold text-text-primary">Trip Fuel Cost</span>
          </div>
          <div className="text-right">
            <span className="text-2xl font-black text-accent-primary">
              Rs. {cost.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      {/* Link to full calculator */}
      <Link
        href={`/fuel-prices-pakistan?vehicle=${vehicleSlug}`}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-bg-secondary hover:bg-bg-secondary/80 border border-border-primary text-text-primary hover:text-accent-primary text-xs font-bold transition-colors"
      >
        <span>Compare with other vehicles on Full Fuel Calculator</span>
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

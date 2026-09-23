"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Trophy, TrendingDown, Fuel, Compass, Zap, CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import fleetData from "@/data/fleet.json";
import { compareTwoVehicles, DrivingCondition } from "@/utils/fuelCalculations";

interface Props {
  liveFuelPrices?: {
    petrol?: { price: number };
    diesel?: { price: number };
    hiOctane?: { price: number };
    lpg?: { price: number };
  };
}

export default function VehicleComparison({ liveFuelPrices }: Props = {}) {
  const [vehicleASlug, setVehicleASlug] = useState<string>("toyota-prius");
  const [vehicleBSlug, setVehicleBSlug] = useState<string>("toyota-fortuner");
  const [distance, setDistance] = useState<number>(380);
  const [drivingCondition, setDrivingCondition] = useState<DrivingCondition>("highway");

  const comparison = useMemo(() => {
    return compareTwoVehicles(
      vehicleASlug,
      vehicleBSlug,
      distance,
      drivingCondition,
      false,
      liveFuelPrices
        ? {
            petrol: liveFuelPrices.petrol?.price,
            diesel: liveFuelPrices.diesel?.price,
            hiOctane: liveFuelPrices.hiOctane?.price,
            lpg: liveFuelPrices.lpg?.price,
          }
        : undefined
    );
  }, [vehicleASlug, vehicleBSlug, distance, drivingCondition, liveFuelPrices]);

  const vehicleA = fleetData.find((v) => v.slug === vehicleASlug);
  const vehicleB = fleetData.find((v) => v.slug === vehicleBSlug);

  const getWhatsAppLink = (vName: string, fuelCost: number) => {
    const msg = `Hi Iris Tours! I compared vehicles on your Fuel Calculator and would like to book the ${vName} for a ${distance} km trip (Est. Fuel: Rs. ${fuelCost.toLocaleString()}). Please share availability.`;
    return `https://wa.me/923154973906?text=${encodeURIComponent(msg)}`;
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-border-primary p-6 md:p-10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)]">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/30 px-3 py-1 rounded-full mb-3">
          <Zap size={13} className="text-accent-primary" />
          <span className="text-[11px] font-black uppercase tracking-widest text-accent-primary">
            Head-to-Head Efficiency
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
          Compare Vehicle Fuel Consumption &amp; Cost
        </h3>
        <p className="text-xs md:text-sm text-text-secondary mt-1">
          Pick any two vehicles from our fleet to analyze real-world fuel economy and trip expense differences.
        </p>
      </div>

      {/* Control Selector Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-gradient-to-r from-bg-secondary via-white to-bg-secondary p-4 md:p-5 rounded-2xl border border-border-primary shadow-xs">
        <div>
          <label className="block text-xs font-black uppercase text-text-secondary mb-1.5">
            Vehicle 1
          </label>
          <select
            value={vehicleASlug}
            onChange={(e) => setVehicleASlug(e.target.value)}
            aria-label="Select first vehicle to compare"
            className="w-full px-3 py-2.5 bg-white rounded-xl border border-border-primary text-xs font-bold text-text-primary focus:ring-2 focus:ring-accent-primary/50"
          >
            {fleetData.map((v) => (
              <option key={v.slug} value={v.slug}>
                {v.name} ({v.fuel || v.fuelType})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-black uppercase text-text-secondary mb-1.5">
            Vehicle 2
          </label>
          <select
            value={vehicleBSlug}
            onChange={(e) => setVehicleBSlug(e.target.value)}
            aria-label="Select second vehicle to compare"
            className="w-full px-3 py-2.5 bg-white rounded-xl border border-border-primary text-xs font-bold text-text-primary focus:ring-2 focus:ring-accent-primary/50"
          >
            {fleetData.map((v) => (
              <option key={v.slug} value={v.slug}>
                {v.name} ({v.fuel || v.fuelType})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-black uppercase text-text-secondary mb-1.5">
            Trip Distance
          </label>
          <div className="relative">
            <input
              type="number"
              min="10"
              max="3000"
              value={distance}
              onChange={(e) => setDistance(Math.max(1, parseInt(e.target.value) || 10))}
              aria-label="Trip distance for vehicle comparison"
              className="w-full px-3 py-2 bg-white rounded-xl border border-border-primary text-xs font-bold text-text-primary pr-8"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-text-secondary">
              km
            </span>
          </div>
        </div>

        <div>
          <label className="block text-xs font-black uppercase text-text-secondary mb-1.5">
            Driving Environment
          </label>
          <select
            value={drivingCondition}
            onChange={(e) => setDrivingCondition(e.target.value as DrivingCondition)}
            aria-label="Driving environment for vehicle comparison"
            className="w-full px-3 py-2.5 bg-white rounded-xl border border-border-primary text-xs font-bold text-text-primary focus:ring-2 focus:ring-accent-primary/50"
          >
            <option value="highway">Motorway / Highway</option>
            <option value="combined">Mixed / Inter-City</option>
            <option value="city">Urban City Driving</option>
          </select>
        </div>
      </div>

      {/* Savings Trophy Banner */}
      {comparison.cheaperVehicle !== "equal" && (
        <div className="mb-8 p-5 bg-gradient-to-r from-emerald-500/15 via-emerald-500/5 to-transparent border border-emerald-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-600/30">
              <Trophy size={24} />
            </div>
            <div>
              <span className="text-xs font-black text-emerald-800 uppercase tracking-wider block">
                Fuel Economy Winner
              </span>
              <p className="text-sm md:text-base font-black text-text-primary">
                {comparison.cheaperVehicle === "A"
                  ? comparison.vehicleA.vehicleName
                  : comparison.vehicleB.vehicleName}{" "}
                saves you <strong className="text-emerald-700">Rs. {comparison.costDifferencePkr.toLocaleString()} ({comparison.percentageSavings}%)</strong> in fuel on this {distance} km trip!
              </p>
            </div>
          </div>

          <div className="text-xs font-extrabold text-emerald-800 bg-emerald-100/90 px-4 py-2 rounded-full whitespace-nowrap shadow-xs">
            ~{comparison.fuelDifferenceLitres} Litres Saved
          </div>
        </div>
      )}

      {/* Battle Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vehicle A Card */}
        <div
          className={clsx(
            "p-6 md:p-8 rounded-3xl border-2 transition-all flex flex-col justify-between relative",
            comparison.cheaperVehicle === "A"
              ? "border-emerald-500 bg-gradient-to-b from-emerald-50/25 via-white to-white shadow-xl"
              : "border-border-primary bg-white shadow-sm"
          )}
        >
          {comparison.cheaperVehicle === "A" && (
            <span className="absolute -top-3.5 right-6 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              ★ More Economical Choice
            </span>
          )}

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-28 h-20 rounded-2xl overflow-hidden bg-bg-secondary border border-border-primary flex-shrink-0 shadow-sm">
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
                <span className="text-[10px] font-black uppercase text-accent-primary block">
                  {vehicleA?.category} • {comparison.vehicleA.fuelType}
                </span>
                <h4 className="text-xl font-black text-text-primary leading-tight">
                  {comparison.vehicleA.vehicleName}
                </h4>
                <span className="text-xs font-bold text-text-secondary">
                  Rent: Rs. {vehicleA?.rent?.daily?.toLocaleString() || 0} / day
                </span>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-3 border-t border-border-primary/60 pt-4 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-border-primary/30">
                <span className="text-text-secondary font-medium">Tested Mileage ({drivingCondition}):</span>
                <span className="font-extrabold text-text-primary text-sm">
                  {comparison.vehicleA.kmpl} km / L
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-border-primary/30">
                <span className="text-text-secondary font-medium">Fuel Consumed:</span>
                <span className="font-extrabold text-text-primary text-sm">
                  ~{comparison.vehicleA.fuelNeededLitres} Litres
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-border-primary/30">
                <span className="text-text-secondary font-medium">Fuel Cost / km:</span>
                <span className="font-extrabold text-text-primary text-sm">
                  Rs. {comparison.vehicleA.fuelCostPerKm} / km
                </span>
              </div>

              <div className="flex justify-between items-baseline pt-2">
                <span className="text-xs font-black text-text-primary">Total Fuel Cost:</span>
                <span className="text-3xl font-black text-accent-primary font-heading">
                  Rs. {comparison.vehicleA.fuelCostPkr.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border-primary">
            <a
              href={getWhatsAppLink(comparison.vehicleA.vehicleName, comparison.vehicleA.fuelCostPkr)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-bg-secondary hover:bg-emerald-600 hover:text-white text-text-primary font-black text-xs uppercase tracking-wider transition-all"
            >
              <FaWhatsapp size={16} />
              <span>Book {comparison.vehicleA.vehicleName}</span>
            </a>
          </div>
        </div>

        {/* Vehicle B Card */}
        <div
          className={clsx(
            "p-6 md:p-8 rounded-3xl border-2 transition-all flex flex-col justify-between relative",
            comparison.cheaperVehicle === "B"
              ? "border-emerald-500 bg-gradient-to-b from-emerald-50/25 via-white to-white shadow-xl"
              : "border-border-primary bg-white shadow-sm"
          )}
        >
          {comparison.cheaperVehicle === "B" && (
            <span className="absolute -top-3.5 right-6 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
              ★ More Economical Choice
            </span>
          )}

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-28 h-20 rounded-2xl overflow-hidden bg-bg-secondary border border-border-primary flex-shrink-0 shadow-sm">
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
                <span className="text-[10px] font-black uppercase text-accent-primary block">
                  {vehicleB?.category} • {comparison.vehicleB.fuelType}
                </span>
                <h4 className="text-xl font-black text-text-primary leading-tight">
                  {comparison.vehicleB.vehicleName}
                </h4>
                <span className="text-xs font-bold text-text-secondary">
                  Rent: Rs. {vehicleB?.rent?.daily?.toLocaleString() || 0} / day
                </span>
              </div>
            </div>

            {/* Metrics Breakdown */}
            <div className="space-y-3 border-t border-border-primary/60 pt-4 text-xs">
              <div className="flex justify-between items-center py-1 border-b border-border-primary/30">
                <span className="text-text-secondary font-medium">Tested Mileage ({drivingCondition}):</span>
                <span className="font-extrabold text-text-primary text-sm">
                  {comparison.vehicleB.kmpl} km / L
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-border-primary/30">
                <span className="text-text-secondary font-medium">Fuel Consumed:</span>
                <span className="font-extrabold text-text-primary text-sm">
                  ~{comparison.vehicleB.fuelNeededLitres} Litres
                </span>
              </div>

              <div className="flex justify-between items-center py-1 border-b border-border-primary/30">
                <span className="text-text-secondary font-medium">Fuel Cost / km:</span>
                <span className="font-extrabold text-text-primary text-sm">
                  Rs. {comparison.vehicleB.fuelCostPerKm} / km
                </span>
              </div>

              <div className="flex justify-between items-baseline pt-2">
                <span className="text-xs font-black text-text-primary">Total Fuel Cost:</span>
                <span className="text-3xl font-black text-accent-primary font-heading">
                  Rs. {comparison.vehicleB.fuelCostPkr.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border-primary">
            <a
              href={getWhatsAppLink(comparison.vehicleB.vehicleName, comparison.vehicleB.fuelCostPkr)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-bg-secondary hover:bg-emerald-600 hover:text-white text-text-primary font-black text-xs uppercase tracking-wider transition-all"
            >
              <FaWhatsapp size={16} />
              <span>Book {comparison.vehicleB.vehicleName}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

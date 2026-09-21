"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Navigation,
  Compass,
  Repeat,
  Fuel,
  ExternalLink,
  Users,
  Settings,
  Briefcase,
  Sparkles,
  Sliders,
  DollarSign,
  Check,
  Shield,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import fleetData from "@/data/fleet.json";
import {
  DrivingCondition,
  calculateTripFuelCost,
  POPULAR_ROUTES,
  getVehicleEfficiency,
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

  // Group vehicles by category
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

  // Execute trip calculation
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

  // Cost per passenger
  const passengerCount = selectedVehicleObj?.seats || 4;
  const costPerPassenger = Math.round(calculation.fuelCostPkr / Math.max(1, passengerCount));

  // WhatsApp Booking URL
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
• Route / Condition: ${conditionText}
• Estimated Fuel Needed: ~${calculation.fuelNeededLitres} Litres
• Estimated Fuel Cost: Rs. ${calculation.fuelCostPkr.toLocaleString()} (Rs. ${calculation.fuelCostPerKm}/km)${rentalText}
• Estimated Per Passenger Cost: Rs. ${costPerPassenger.toLocaleString()} (${passengerCount} seats)
• Total Estimated Trip Budget: Rs. ${calculation.totalTripCostPkr.toLocaleString()}

Please confirm vehicle availability and booking rates.`;

    return `https://wa.me/923154973906?text=${encodeURIComponent(msg)}`;
  }, [calculation, drivingCondition, isRoundTrip, includeRental, rentalDays, costPerPassenger, passengerCount]);

  return (
    <div className="w-full bg-white rounded-3xl border border-border-primary shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] overflow-hidden">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-bg-secondary via-white to-amber-50/40 p-6 md:p-8 border-b border-border-primary">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/30 px-3 py-1 rounded-full mb-2">
              <Sparkles size={13} className="text-accent-primary" />
              <span className="text-[11px] font-black uppercase tracking-widest text-accent-primary">
                Precision Automotive Estimator
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">
              Vehicle Fuel Cost &amp; Trip Calculator
            </h3>
            <p className="text-xs md:text-sm text-text-secondary mt-1">
              Real-world consumption benchmarks calibrated for 36 Iris Tours vehicles across Pakistan’s motorways and mountain highways.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-4 py-2 rounded-2xl border border-emerald-200">
            <Shield size={16} />
            <span>Tested km/L Economy Models</span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Interactive Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* 1. Vehicle Selector with Visual Card */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-text-primary mb-3 flex items-center gap-2">
              <Car size={16} className="text-accent-primary" />
              Step 1: Select Fleet Vehicle
            </label>

            <select
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
              aria-label="Select vehicle"
              className="w-full px-4 py-3.5 rounded-2xl border border-border-primary bg-bg-secondary text-text-primary font-bold text-sm focus:outline-none focus:ring-2 focus:ring-accent-primary/50 transition-all cursor-pointer mb-4"
            >
              <option value="custom">-- Custom Vehicle (Manual km/L &amp; Price) --</option>
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

            {/* Selected Vehicle Visual Card */}
            {selectedVehicleObj && (
              <div className="p-4 bg-gradient-to-r from-bg-secondary via-white to-bg-secondary rounded-2xl border border-border-primary flex flex-col sm:flex-row items-center gap-4">
                <div className="relative w-28 h-20 rounded-xl overflow-hidden bg-bg-secondary border border-border-primary flex-shrink-0">
                  <Image
                    src={selectedVehicleObj.images.thumbnail}
                    alt={selectedVehicleObj.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 w-full">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-extrabold text-base text-text-primary">
                      {selectedVehicleObj.name}
                    </h4>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-primary text-white">
                      {selectedVehicleObj.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-[11px] text-text-secondary mt-2">
                    <div className="flex items-center gap-1">
                      <Users size={12} className="text-accent-primary" />
                      <span>{selectedVehicleObj.seats} Seats</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Fuel size={12} className="text-accent-primary" />
                      <span>{selectedVehicleObj.fuel || selectedVehicleObj.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Settings size={12} className="text-accent-primary" />
                      <span>{selectedVehicleObj.transmission}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Custom vehicle inputs */}
            {selectedVehicle === "custom" && (
              <div className="p-4 bg-bg-secondary rounded-2xl border border-border-primary grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">
                    Tested Mileage (km / Litre)
                  </label>
                  <input
                    type="number"
                    min="3"
                    max="40"
                    step="0.5"
                    value={customKmpl}
                    onChange={(e) => setCustomKmpl(parseFloat(e.target.value) || 12)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-border-primary text-text-primary font-bold text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1">
                    Fuel Rate (Rs. / Litre)
                  </label>
                  <input
                    type="number"
                    min="100"
                    max="700"
                    step="0.5"
                    value={customFuelPrice}
                    onChange={(e) => setCustomFuelPrice(parseFloat(e.target.value) || 389.14)}
                    className="w-full px-3 py-2 bg-white rounded-xl border border-border-primary text-text-primary font-bold text-sm"
                  />
                </div>
              </div>
            )}
          </div>

          {/* 2. Distance & Popular Route Presets */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-black uppercase tracking-wider text-text-primary flex items-center gap-2">
                <Navigation size={16} className="text-accent-primary" />
                Step 2: Trip Distance &amp; Route
              </label>
              <span className="text-xs font-black text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
                {distance} km {isRoundTrip && `(Round Trip: ${distance * 2} km)`}
              </span>
            </div>

            {/* Route Presets */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
              {POPULAR_ROUTES.slice(0, 6).map((route) => (
                <button
                  key={route.label}
                  type="button"
                  onClick={() => setDistance(route.distance)}
                  className={clsx(
                    "p-2.5 rounded-xl border text-left transition-all duration-200",
                    distance === route.distance
                      ? "bg-accent-primary text-white border-accent-primary shadow-md scale-[1.02]"
                      : "bg-bg-secondary text-text-primary border-border-primary hover:border-accent-primary"
                  )}
                >
                  <span className="text-xs font-extrabold block truncate">{route.label}</span>
                  <span
                    className={clsx(
                      "text-[10px] font-semibold block",
                      distance === route.distance ? "text-white/80" : "text-text-secondary"
                    )}
                  >
                    {route.distance} km (one-way)
                  </span>
                </button>
              ))}
            </div>

            {/* Distance Slider + Numeric Input */}
            <div className="p-4 bg-bg-secondary rounded-2xl border border-border-primary space-y-3">
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="10"
                  max="2000"
                  step="10"
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value) || 10)}
                  aria-label="Trip distance in kilometers"
                  className="w-full accent-accent-primary cursor-pointer"
                />
                <div className="flex items-center gap-1 min-w-[120px]">
                  <input
                    type="number"
                    min="1"
                    max="5000"
                    value={distance}
                    onChange={(e) => setDistance(Math.max(1, parseInt(e.target.value) || 0))}
                    aria-label="Trip distance numeric input"
                    className="w-24 px-2 py-1 bg-white rounded-lg border border-border-primary text-right font-black text-sm text-text-primary"
                  />
                  <span className="text-xs font-bold text-text-secondary">km</span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Driving Condition Cards */}
          <div>
            <label className="block text-xs font-black uppercase tracking-wider text-text-primary mb-2 flex items-center gap-2">
              <Compass size={16} className="text-accent-primary" />
              Step 3: Driving Environment
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                {
                  id: "highway" as DrivingCondition,
                  title: "Motorway / Highway",
                  desc: "Cruising 100-120 km/h",
                  badge: `${efficiency.highway} km/L`,
                },
                {
                  id: "combined" as DrivingCondition,
                  title: "Mixed Route",
                  desc: "Highway + Inter-city",
                  badge: `${efficiency.combined} km/L`,
                },
                {
                  id: "city" as DrivingCondition,
                  title: "City Driving",
                  desc: "Traffic & Urban Commute",
                  badge: `${efficiency.city} km/L`,
                },
              ].map(({ id, title, desc, badge }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setDrivingCondition(id)}
                  className={clsx(
                    "p-3 rounded-2xl border text-center transition-all duration-200 flex flex-col justify-between",
                    drivingCondition === id
                      ? "bg-accent-primary/10 border-accent-primary text-accent-primary shadow-sm"
                      : "bg-bg-secondary border-border-primary text-text-secondary hover:border-accent-primary hover:text-text-primary"
                  )}
                >
                  <div>
                    <span className="text-xs font-black block leading-tight">{title}</span>
                    <span className="text-[10px] opacity-75 block mt-0.5">{desc}</span>
                  </div>
                  <span className="text-[11px] font-black mt-2 text-text-primary bg-white py-0.5 rounded-lg border border-border-primary shadow-xs">
                    {badge}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 4. Round Trip & Rental Add-on Toggles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Round trip toggle */}
            <div
              onClick={() => setIsRoundTrip(!isRoundTrip)}
              className={clsx(
                "p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between",
                isRoundTrip
                  ? "bg-accent-primary/10 border-accent-primary"
                  : "bg-bg-secondary border-border-primary hover:border-accent-primary"
              )}
            >
              <div className="flex items-center gap-3">
                <Repeat
                  size={18}
                  className={isRoundTrip ? "text-accent-primary" : "text-text-secondary"}
                />
                <div>
                  <span className="text-xs font-black text-text-primary block">Round Trip</span>
                  <span className="text-[10px] text-text-secondary">Return journey (2x distance)</span>
                </div>
              </div>
              <div
                className={clsx(
                  "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                  isRoundTrip ? "bg-accent-primary border-accent-primary text-white" : "border-border-primary bg-white"
                )}
              >
                {isRoundTrip && <Check size={12} strokeWidth={3} />}
              </div>
            </div>

            {/* Daily rental checkbox */}
            {selectedVehicle !== "custom" && (
              <div
                onClick={() => setIncludeRental(!includeRental)}
                className={clsx(
                  "p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between",
                  includeRental
                    ? "bg-accent-primary/10 border-accent-primary"
                    : "bg-bg-secondary border-border-primary hover:border-accent-primary"
                )}
              >
                <div>
                  <span className="text-xs font-black text-text-primary block">Include Car Rental</span>
                  <span className="text-[10px] text-text-secondary">
                    Rs. {selectedVehicleObj?.rent?.daily?.toLocaleString() || 0} / day
                  </span>
                </div>
                <div
                  className={clsx(
                    "w-5 h-5 rounded-full border flex items-center justify-center transition-colors",
                    includeRental ? "bg-accent-primary border-accent-primary text-white" : "border-border-primary bg-white"
                  )}
                >
                  {includeRental && <Check size={12} strokeWidth={3} />}
                </div>
              </div>
            )}
          </div>

          {/* Rental days counter if checked */}
          {includeRental && selectedVehicle !== "custom" && (
            <div className="p-4 bg-accent-primary/5 rounded-2xl border border-accent-primary/20 flex items-center justify-between">
              <span className="text-xs font-bold text-text-primary">Rental Duration (Days):</span>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 5, 7, 10].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setRentalDays(d)}
                    className={clsx(
                      "w-8 h-8 rounded-xl text-xs font-black transition-all",
                      rentalDays === d
                        ? "bg-accent-primary text-white shadow-sm"
                        : "bg-white text-text-secondary border border-border-primary hover:border-accent-primary"
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Executive Results Cockpit (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-bg-secondary via-white to-amber-50/50 rounded-3xl p-6 md:p-8 border-2 border-accent-primary/40 shadow-xl">
          <div>
            {/* Header */}
            <div className="border-b border-border-primary pb-4 mb-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-accent-primary block">
                  Trip Fuel Quotation
                </span>
                <h4 className="text-xl font-black text-text-primary leading-tight">
                  {calculation.vehicleName}
                </h4>
              </div>
              <span className="text-xs font-black bg-accent-primary text-white px-3 py-1 rounded-full shadow-sm">
                {calculation.fuelType}
              </span>
            </div>

            {/* Total Cost Display Box */}
            <div className="p-6 bg-gradient-to-br from-white to-bg-secondary rounded-2xl border border-border-primary shadow-sm text-center mb-6">
              <span className="text-xs font-black uppercase tracking-wider text-text-secondary block mb-1">
                Estimated Trip Fuel Cost
              </span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-xl font-black text-accent-primary">Rs.</span>
                <span className="text-4xl md:text-5xl font-black text-text-primary tracking-tight font-heading">
                  {calculation.fuelCostPkr.toLocaleString()}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-center gap-2 text-xs font-bold text-text-secondary">
                <span>Rs. {calculation.fuelCostPerKm}/km</span>
                <span>•</span>
                <span>@ Rs. {calculation.fuelPricePerUnit}/L</span>
              </div>
            </div>

            {/* Key Metric Gauges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-white p-3.5 rounded-2xl border border-border-primary shadow-2xs">
                <span className="text-[10px] font-bold text-text-secondary uppercase block">
                  Fuel Required
                </span>
                <span className="text-lg font-black text-text-primary">
                  ~{calculation.fuelNeededLitres} Litres
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-border-primary shadow-2xs">
                <span className="text-[10px] font-bold text-text-secondary uppercase block">
                  Tested Mileage
                </span>
                <span className="text-lg font-black text-emerald-600">
                  {calculation.kmpl} km / L
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-border-primary shadow-2xs">
                <span className="text-[10px] font-bold text-text-secondary uppercase block">
                  Effective Distance
                </span>
                <span className="text-lg font-black text-text-primary">
                  {calculation.effectiveDistance} km
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-border-primary shadow-2xs">
                <span className="text-[10px] font-bold text-text-secondary uppercase block">
                  Per Passenger
                </span>
                <span className="text-lg font-black text-accent-primary">
                  Rs. {costPerPassenger.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Combined Budget (Fuel + Rental) */}
            {includeRental && calculation.rentalCostPkr > 0 && (
              <div className="p-4 bg-accent-primary/10 rounded-2xl border border-accent-primary/30 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-xs font-black text-text-primary block">
                    Combined Trip Budget
                  </span>
                  <span className="text-[10px] text-text-secondary">
                    Fuel (Rs. {calculation.fuelCostPkr.toLocaleString()}) + Rental ({rentalDays}d: Rs.{" "}
                    {calculation.rentalCostPkr.toLocaleString()})
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-accent-primary">
                    Rs. {calculation.totalTripCostPkr.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="space-y-3 pt-4 border-t border-border-primary">
            <a
              href={whatsappBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-[#25D366] text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              <FaWhatsapp size={20} />
              <span>Book {calculation.vehicleName} via WhatsApp</span>
            </a>

            {selectedVehicle !== "custom" && (
              <Link
                href={`/fleet/${selectedVehicle}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-border-primary text-text-primary hover:text-accent-primary hover:border-accent-primary text-xs font-extrabold transition-all"
              >
                <span>View Full Specifications &amp; Photo Gallery</span>
                <ExternalLink size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import {
  Fuel,
  TrendingDown,
  TrendingUp,
  Minus,
  CheckCircle2,
  Flame,
  Droplets,
  Zap,
  Info,
  MapPin,
  Sparkles,
} from "lucide-react";
import clsx from "clsx";

interface FuelProduct {
  name: string;
  price: number;
  previousPrice: number;
  change: number;
  changePercent: number;
  unit: string;
  status: string;
}

interface Props {
  pakistanData: {
    petrol: FuelProduct;
    diesel: FuelProduct;
    hiOctane: FuelProduct;
    lightDiesel: FuelProduct;
    kerosene: FuelProduct;
    lpg: FuelProduct;
  };
  effectiveFrom: string;
  lastChecked: string;
}

const CITIES = ["Lahore", "Islamabad", "Karachi", "Rawalpindi", "Faisalabad", "Peshawar", "Multan", "Quetta"];

export default function FuelPriceCards({ pakistanData, effectiveFrom, lastChecked }: Props) {
  const [selectedCity, setSelectedCity] = useState("Lahore");

  const products = [
    {
      key: "petrol",
      item: pakistanData.petrol,
      code: "MS 92 RON",
      icon: Fuel,
      tag: "Most Popular",
      accentBorder: "border-t-amber-500",
      accentBg: "bg-amber-500/10 text-amber-600",
      recommended: "Civic, Corolla, Yaris, Alto, Cultus, Prius & all sedans",
    },
    {
      key: "diesel",
      item: pakistanData.diesel,
      code: "HSD Euro 5",
      icon: Droplets,
      tag: "Heavy Fleet & 4x4",
      accentBorder: "border-t-blue-600",
      accentBg: "bg-blue-500/10 text-blue-600",
      recommended: "Land Cruiser V8, Prado, Fortuner, Revo, Hiace & Coasters",
    },
    {
      key: "hiOctane",
      item: pakistanData.hiOctane,
      code: "HOBC 97 RON",
      icon: Zap,
      tag: "Executive & Turbo",
      accentBorder: "border-t-purple-600",
      accentBg: "bg-purple-500/10 text-purple-600",
      recommended: "Mercedes Benz S/C-Class, Audi A6/A4, Range Rover & G-Wagon",
    },
    {
      key: "lpg",
      item: pakistanData.lpg,
      code: "Auto & Cylinder",
      icon: Flame,
      tag: "Commercial Auto",
      accentBorder: "border-t-emerald-600",
      accentBg: "bg-emerald-500/10 text-emerald-600",
      recommended: "Commercial auto-gas & domestic cylinder transport",
    },
    {
      key: "lightDiesel",
      item: pakistanData.lightDiesel,
      code: "LDO Industrial",
      icon: Droplets,
      tag: "Agricultural & Heavy",
      accentBorder: "border-t-slate-500",
      accentBg: "bg-slate-500/10 text-slate-600",
      recommended: "Heavy industrial generators, marine & agricultural machinery",
    },
    {
      key: "kerosene",
      item: pakistanData.kerosene,
      code: "SKO Superior",
      icon: Droplets,
      tag: "Domestic Heating",
      accentBorder: "border-t-cyan-600",
      accentBg: "bg-cyan-500/10 text-cyan-600",
      recommended: "Domestic winter heating, illumination & mountain camping stoves",
    },
  ];

  return (
    <div className="w-full">
      {/* Top Real-time Status Header */}
      <div className="bg-gradient-to-r from-bg-secondary via-white to-bg-secondary p-5 md:p-6 rounded-3xl border border-border-primary shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
            </span>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2.5 py-1 rounded-full border border-emerald-300">
                  Real-Time Verified Feed
                </span>
                <span className="text-xs font-bold text-text-primary">
                  Effective: {effectiveFrom}
                </span>
                <span className="text-xs text-text-secondary">
                  (Notified by OGRA &amp; Ministry of Energy)
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-1">
                Directly linked with <strong className="text-text-primary">OilPrices.pk</strong> real-time notification engine &amp; PSO official feeds.
              </p>
            </div>
          </div>

          {/* City selector pill strip */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-xs font-bold text-text-secondary flex items-center gap-1 whitespace-nowrap">
              <MapPin size={13} className="text-accent-primary" /> City:
            </span>
            <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-border-primary shadow-sm">
              {CITIES.map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedCity(city)}
                  className={clsx(
                    "px-3 py-1 text-xs font-bold rounded-xl transition-all whitespace-nowrap",
                    selectedCity === city
                      ? "bg-accent-primary text-white shadow-sm"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                  )}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Fuel Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(({ key, item, code, icon: Icon, tag, accentBorder, accentBg, recommended }) => {
          const isNegative = item.change < 0;
          const isPositive = item.change > 0;

          return (
            <div
              key={key}
              className={clsx(
                "group relative bg-white rounded-3xl p-7 border transition-all duration-500 flex flex-col justify-between",
                "border-border-primary border-t-4",
                accentBorder,
                "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06),inset_0_2px_4px_rgba(255,255,255,0.8)]",
                "hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.18),inset_0_2px_4px_rgba(255,255,255,1)] hover:-translate-y-1.5 hover:border-accent-primary/50"
              )}
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={clsx("w-12 h-12 rounded-2xl flex items-center justify-center font-bold", accentBg)}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-text-secondary block">
                        {tag} • {code}
                      </span>
                      <h3 className="text-xl font-black text-text-primary leading-tight tracking-tight">
                        {item.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-[10px] font-extrabold uppercase text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shadow-sm">
                    <CheckCircle2 size={12} />
                    Live
                  </div>
                </div>

                {/* Main Price Tag */}
                <div className="my-5 p-4 rounded-2xl bg-gradient-to-br from-bg-secondary/70 via-white to-bg-secondary/40 border border-border-primary/80">
                  <div className="flex items-baseline gap-1.5 justify-between">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-text-secondary block mb-0.5">
                        {selectedCity} Retail Price
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-black text-accent-primary">Rs.</span>
                        <span className="text-4xl md:text-5xl font-black text-text-primary tracking-tight font-heading">
                          {item.price.toFixed(2)}
                        </span>
                        <span className="text-xs font-bold text-text-secondary">/ {item.unit}</span>
                      </div>
                    </div>

                    {/* Change indicator badge */}
                    <div
                      className={clsx(
                        "flex flex-col items-end px-3 py-1.5 rounded-xl border text-right",
                        isNegative && "bg-emerald-50 border-emerald-200 text-emerald-700",
                        isPositive && "bg-rose-50 border-rose-200 text-rose-700",
                        !isNegative && !isPositive && "bg-gray-50 border-gray-200 text-gray-700"
                      )}
                    >
                      <div className="flex items-center gap-1 text-xs font-black">
                        {isNegative && <TrendingDown size={14} />}
                        {isPositive && <TrendingUp size={14} />}
                        {!isNegative && !isPositive && <Minus size={14} />}
                        <span>
                          {item.change > 0 ? `+${item.change.toFixed(2)}` : item.change.toFixed(2)}
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold opacity-80">
                        {item.changePercent ? `${item.changePercent > 0 ? `+${item.changePercent}%` : `${item.changePercent}%`}` : "0%"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-border-primary/50 flex items-center justify-between text-[11px] text-text-secondary">
                    <span>Previous Notification:</span>
                    <span className="font-bold text-text-primary">Rs. {item.previousPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Recommended Fleet Vehicles */}
              <div className="pt-3 border-t border-border-primary/60">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent-primary block mb-1 flex items-center gap-1">
                  <Sparkles size={11} /> Recommended Iris Tours Fleet:
                </span>
                <p className="text-xs text-text-secondary leading-snug line-clamp-2">
                  {recommended}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

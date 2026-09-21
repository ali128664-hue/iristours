"use client";

import React from "react";
import { Fuel, TrendingDown, TrendingUp, Minus, CheckCircle, Flame, Droplets, Zap } from "lucide-react";
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

export default function FuelPriceCards({ pakistanData, effectiveFrom, lastChecked }: Props) {
  const products = [
    {
      key: "petrol",
      item: pakistanData.petrol,
      icon: Fuel,
      tag: "Most Popular",
      color: "amber",
      desc: "For general passenger sedans, hatchbacks, and hybrid vehicles.",
    },
    {
      key: "diesel",
      item: pakistanData.diesel,
      icon: Droplets,
      tag: "Commercial & 4x4",
      color: "blue",
      desc: "For SUVs, Land Cruisers, Fortuners, Hiace, and coasters.",
    },
    {
      key: "hiOctane",
      item: pakistanData.hiOctane,
      icon: Zap,
      tag: "High Performance",
      color: "purple",
      desc: "Premium 97 RON for luxury Mercedes, Audi, BMW, and turbo engines.",
    },
    {
      key: "lpg",
      item: pakistanData.lpg,
      icon: Flame,
      tag: "Commercial Gas",
      color: "emerald",
      desc: "Liquefied Petroleum Gas for auto cylinders and domestic use.",
    },
    {
      key: "lightDiesel",
      item: pakistanData.lightDiesel,
      icon: Droplets,
      tag: "Industrial",
      color: "gray",
      desc: "Light Diesel Oil (LDO) for agricultural and heavy machinery.",
    },
    {
      key: "kerosene",
      item: pakistanData.kerosene,
      icon: Droplets,
      tag: "Domestic / SKO",
      color: "cyan",
      desc: "Superior Kerosene Oil for domestic heating and illumination.",
    },
  ];

  const formattedCheckDate = React.useMemo(() => {
    try {
      return new Date(lastChecked).toLocaleDateString("en-PK", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return effectiveFrom;
    }
  }, [lastChecked, effectiveFrom]);

  return (
    <div className="w-full">
      {/* Header bar with verification status */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-bg-secondary p-4 rounded-2xl border border-border-primary">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Official Retail Rates
              </span>
              <span className="text-xs text-text-secondary">w.e.f. {effectiveFrom}</span>
            </div>
            <p className="text-xs text-text-secondary mt-0.5">
              Verified with Pakistan State Oil (PSO) &amp; Shell / OGRA publication feeds
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-xs text-text-secondary block">Automated Sync Active</span>
          <span className="text-xs font-semibold text-text-primary">Last Verified: {formattedCheckDate}</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(({ key, item, icon: Icon, tag, desc }) => {
          const isNegative = item.change < 0;
          const isPositive = item.change > 0;

          return (
            <div
              key={key}
              className={clsx(
                "relative group bg-white rounded-3xl p-6 border transition-all duration-300",
                "border-border-primary hover:border-accent-primary/60 hover:shadow-xl hover:-translate-y-1"
              )}
            >
              {/* Card top badge & icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-bg-secondary border border-border-primary flex items-center justify-center text-accent-primary group-hover:scale-110 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary block">
                      {tag}
                    </span>
                    <h3 className="text-lg font-bold text-text-primary leading-tight">{item.name}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  <CheckCircle size={12} />
                  Verified
                </div>
              </div>

              {/* Price display */}
              <div className="my-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-text-secondary">Rs.</span>
                  <span className="text-4xl font-extrabold text-text-primary tracking-tight">
                    {item.price.toFixed(2)}
                  </span>
                  <span className="text-sm font-medium text-text-secondary">/ {item.unit}</span>
                </div>

                {/* Change pill */}
                <div className="flex items-center gap-3 mt-3">
                  <div
                    className={clsx(
                      "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold",
                      isNegative && "bg-emerald-50 text-emerald-700 border border-emerald-200",
                      isPositive && "bg-rose-50 text-rose-700 border border-rose-200",
                      !isNegative && !isPositive && "bg-gray-100 text-gray-700"
                    )}
                  >
                    {isNegative && <TrendingDown size={14} />}
                    {isPositive && <TrendingUp size={14} />}
                    {!isNegative && !isPositive && <Minus size={14} />}
                    <span>
                      {item.change > 0 ? `+Rs. ${item.change.toFixed(2)}` : `Rs. ${item.change.toFixed(2)}`}
                      {item.changePercent ? ` (${item.changePercent > 0 ? `+${item.changePercent}%` : `${item.changePercent}%`})` : ""}
                    </span>
                  </div>

                  <span className="text-xs text-text-secondary">
                    Prev: Rs. {item.previousPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-text-secondary border-t border-border-primary/60 pt-4 leading-relaxed">
                {desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

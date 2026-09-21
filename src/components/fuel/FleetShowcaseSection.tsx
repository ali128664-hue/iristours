"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Sparkles } from "lucide-react";
import clsx from "clsx";
import fleetData from "@/data/fleet.json";
import VehicleCard from "@/components/fleet/VehicleCard";

export default function FleetShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: "All Vehicles (36)" },
    { id: "SUV", label: "SUVs & 4x4" },
    { id: "Luxury", label: "Luxury & Executive" },
    { id: "Sedan", label: "Premium Sedans" },
    { id: "Economy", label: "Economy" },
    { id: "Van", label: "Vans & Coasters" },
  ];

  const filteredFleet = useMemo(() => {
    if (activeCategory === "All") {
      return fleetData.slice(0, 8); // Showcase top 8 on the fuel page
    }
    return fleetData.filter((v) => v.category === activeCategory).slice(0, 8);
  }, [activeCategory]);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white via-bg-secondary/40 to-bg-secondary border-t border-border-primary relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/30 px-4 py-1.5 rounded-full mb-4 shadow-xs">
            <Sparkles size={14} className="text-accent-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-accent-primary">
              Pakistan's Premier Car Rental Service
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight leading-tight mb-4">
            EXPLORE OUR LUXURY FLEET
          </h2>

          <p className="text-base text-text-secondary leading-relaxed">
            From Land Cruiser V8s, Prados, and Fortuners to executive Mercedes-Benz, Audi sedans, and high-capacity tourist coasters. Choose with or without driver for city rentals, weddings, and Northern Pakistan tours.
          </p>

          {/* Luxury Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={clsx(
                  "px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-accent-secondary to-accent-primary text-white shadow-lg shadow-accent-primary/30 scale-105"
                    : "bg-white text-text-secondary border border-border-primary hover:border-accent-primary hover:text-text-primary"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Grid using Official Iris Tours VehicleCard Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {filteredFleet.map((vehicle, index) => (
            <VehicleCard key={vehicle.slug} vehicle={vehicle} index={index} />
          ))}
        </div>

        {/* View All Fleet CTA Button */}
        <div className="text-center">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-accent-primary/30 hover:scale-105 hover:brightness-110 transition-all duration-300 border border-white/20"
          >
            <span>Browse All 36 Vehicles in Iris Tours Fleet</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

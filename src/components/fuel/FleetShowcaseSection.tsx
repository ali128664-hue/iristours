"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Fuel, Settings, Briefcase, ArrowRight, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import clsx from "clsx";
import fleetData from "@/data/fleet.json";

export default function FleetShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "SUV", "Sedan", "Luxury", "Economy", "Van"];

  const filteredFleet = useMemo(() => {
    if (activeCategory === "All") {
      return fleetData.slice(0, 8); // Showcase top 8 on the fuel page
    }
    return fleetData.filter((v) => v.category === activeCategory).slice(0, 8);
  }, [activeCategory]);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-bg-secondary/50 to-bg-secondary border-t border-border-primary">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-accent-primary/10 border border-accent-primary/30 px-4 py-1.5 rounded-full mb-4">
            <Star size={14} className="text-accent-primary fill-accent-primary" />
            <span className="text-xs font-black uppercase tracking-widest text-accent-primary">
              Pakistan's Premier Car Rental Fleet
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-text-primary tracking-tight mb-4">
            EXPLORE OUR LUXURY FLEET
          </h2>

          <p className="text-base text-text-secondary leading-relaxed">
            Choose from over 36 meticulously maintained luxury SUVs, executive sedans, hybrid cruisers, and high-capacity tour coasters. Available with professional chauffeurs or self-drive across Lahore, Islamabad, and nationwide.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300",
                  activeCategory === cat
                    ? "bg-accent-primary text-white shadow-lg shadow-accent-primary/25 scale-105"
                    : "bg-white text-text-secondary border border-border-primary hover:border-accent-primary hover:text-text-primary"
                )}
              >
                {cat === "All" ? "All Fleet (36)" : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredFleet.map((vehicle) => {
            const dailyRent = vehicle.rent?.daily || 0;
            const whatsappMsg = encodeURIComponent(
              `Hi Iris Tours! I am interested in renting the ${vehicle.name} (${vehicle.category}). Please share availability and rates.`
            );
            const whatsappUrl = `https://wa.me/923154973906?text=${whatsappMsg}`;

            return (
              <div
                key={vehicle.slug}
                className="group bg-white rounded-3xl border border-border-primary overflow-hidden hover:border-accent-primary/50 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Image Frame */}
                  <div className="relative h-52 w-full overflow-hidden bg-bg-secondary">
                    <Image
                      src={vehicle.images.thumbnail}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                        {vehicle.category}
                      </span>
                      <span className="bg-accent-primary text-white text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                        {vehicle.brand}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-extrabold text-text-primary mb-2 line-clamp-1 group-hover:text-accent-primary transition-colors">
                      {vehicle.name}
                    </h3>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-text-secondary mb-4">
                      <div className="flex items-center gap-1.5 bg-bg-secondary px-2.5 py-1.5 rounded-lg border border-border-primary">
                        <Users size={13} className="text-accent-primary" />
                        <span>{vehicle.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-bg-secondary px-2.5 py-1.5 rounded-lg border border-border-primary">
                        <Fuel size={13} className="text-accent-primary" />
                        <span>{vehicle.fuel || vehicle.fuelType}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-bg-secondary px-2.5 py-1.5 rounded-lg border border-border-primary">
                        <Settings size={13} className="text-accent-primary" />
                        <span>{vehicle.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-bg-secondary px-2.5 py-1.5 rounded-lg border border-border-primary">
                        <Briefcase size={13} className="text-accent-primary" />
                        <span>{vehicle.luggage || 2} Luggage</span>
                      </div>
                    </div>

                    {/* Price Tag */}
                    <div className="flex items-baseline justify-between border-t border-border-primary/60 pt-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase text-text-secondary block">
                          Daily Rental
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xs font-bold text-accent-primary">Rs.</span>
                          <span className="text-xl font-black text-text-primary">
                            {dailyRent.toLocaleString()}
                          </span>
                          <span className="text-xs text-text-secondary">/ day</span>
                        </div>
                      </div>

                      <Link
                        href={`/fleet/${vehicle.slug}`}
                        className="text-xs font-bold text-accent-primary hover:underline flex items-center gap-1"
                      >
                        Details
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="p-5 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all"
                  >
                    <FaWhatsapp size={16} />
                    Book via WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Fleet CTA Banner */}
        <div className="text-center">
          <Link
            href="/fleet"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent-secondary via-accent-primary to-accent-secondary text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-accent-primary/30 hover:scale-105 hover:brightness-110 transition-all duration-300"
          >
            <span>Explore All 36 Vehicles in Our Fleet</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

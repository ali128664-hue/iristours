"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import VehicleCard from "./VehicleCard";

interface FleetClientProps {
  initialData: any[];
}

export default function FleetClient({ initialData }: FleetClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");
  const [activeSort, setActiveSort] = useState("Recommended");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ["All", "Luxury", "SUV", "Sedan", "Economy", "Van", "Bus"];
  
  // Extract unique brands from data dynamically
  const brands = useMemo(() => {
    const uniqueBrands = Array.from(new Set(initialData.map(v => v.brand)));
    return ["All", ...uniqueBrands].sort();
  }, [initialData]);

  const sortOptions = ["Recommended", "Lowest Price", "Highest Price", "Newest"];

  const filteredAndSortedData = useMemo(() => {
    let result = [...initialData];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(v => 
        v.name.toLowerCase().includes(query) || 
        v.brand.toLowerCase().includes(query) ||
        v.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (activeCategory !== "All") {
      result = result.filter(v => v.category === activeCategory);
    }

    // Brand filter
    if (activeBrand !== "All") {
      result = result.filter(v => v.brand === activeBrand);
    }

    // Sorting
    switch (activeSort) {
      case "Lowest Price":
        result.sort((a, b) => a.rent.daily - b.rent.daily);
        break;
      case "Highest Price":
        result.sort((a, b) => b.rent.daily - a.rent.daily);
        break;
      case "Newest":
        result.sort((a, b) => b.year - a.year);
        break;
      case "Recommended":
      default:
        // Keep original order
        break;
    }

    return result;
  }, [initialData, searchQuery, activeCategory, activeSort]);

  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      {/* Search and Filters Bar */}
      <div className="bg-bg-secondary border border-border-primary rounded-2xl p-4 md:p-6 mb-12 shadow-lg sticky top-24 z-30">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full lg:w-1/3">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            <input 
              type="text" 
              placeholder="Search by name, brand, or category..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bg-primary border border-border-primary rounded-full py-3 pl-12 pr-6 text-text-primary focus:border-accent-primary focus:outline-none transition-colors"
            />
          </div>

          {/* Quick Category Filters (Desktop) */}
          <div className="hidden lg:flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 lg:pb-0 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap border ${
                  activeCategory === cat 
                    ? "bg-accent-primary text-bg-primary border-accent-primary shadow-[0_0_15px_rgba(22,199,158,0.3)]" 
                    : "bg-bg-primary text-text-secondary border-border-primary hover:border-text-secondary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort Dropdown, Brand Dropdown & Mobile Filter Toggle */}
          <div className="flex w-full lg:w-auto gap-4 items-center justify-between lg:justify-end">
            <button 
              className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-full bg-bg-primary border border-border-primary text-text-primary"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} /> Filters
            </button>
            
            {/* Brand Filter */}
            <div className="relative w-full lg:w-48 hidden lg:block">
              <select 
                value={activeBrand}
                onChange={(e) => setActiveBrand(e.target.value)}
                className="w-full bg-bg-primary border border-border-primary rounded-full py-3 px-6 text-sm text-text-primary focus:border-accent-primary focus:outline-none appearance-none cursor-pointer"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand === "All" ? "All Brands" : brand}</option>
                ))}
              </select>
            </div>

            <div className="relative w-full lg:w-48">
              <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
              <select 
                value={activeSort}
                onChange={(e) => setActiveSort(e.target.value)}
                className="w-full bg-bg-primary border border-border-primary rounded-full py-3 pl-10 pr-10 text-sm text-text-primary focus:border-accent-primary focus:outline-none appearance-none cursor-pointer"
              >
                {sortOptions.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Mobile Filters (Collapsible) */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden mt-4 pt-4 border-t border-border-primary flex flex-col gap-4"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                      activeCategory === cat 
                        ? "bg-accent-primary text-bg-primary border-accent-primary" 
                        : "bg-bg-primary text-text-secondary border-border-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="w-full">
                <select 
                  value={activeBrand}
                  onChange={(e) => setActiveBrand(e.target.value)}
                  className="w-full bg-bg-primary border border-border-primary rounded-full py-3 px-6 text-sm text-text-primary focus:border-accent-primary focus:outline-none appearance-none cursor-pointer"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand === "All" ? "All Brands" : brand}</option>
                  ))}
                </select>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Results Grid */}
      {filteredAndSortedData.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredAndSortedData.map((vehicle, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={vehicle.id}
              >
                <VehicleCard vehicle={vehicle} index={index % 6} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        /* Empty State */
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <div className="w-24 h-24 mb-6 rounded-full bg-bg-secondary border border-border-primary flex items-center justify-center">
            <Search size={40} className="text-text-secondary" />
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-2">No Vehicles Found</h3>
          <p className="text-text-secondary max-w-md">
            We couldn't find any vehicles matching your search criteria. Try adjusting your filters or search term.
          </p>
          <button 
            onClick={() => {
              setSearchQuery("");
              setActiveCategory("All");
              setActiveBrand("All");
            }}
            className="mt-6 px-6 py-2 rounded-full bg-bg-secondary border border-border-primary text-text-primary hover:border-accent-primary transition-colors"
          >
            Clear All Filters
          </button>
        </motion.div>
      )}
    </div>
  );
}

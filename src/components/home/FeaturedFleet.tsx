"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import VehicleCard from "@/components/fleet/VehicleCard";
import fleetData from "@/data/fleet.json"; // We will create this path alias or relative import
// The actual path will be handled by TS. Let's use relative for safety.

export default function FeaturedFleet() {
  // Take top 3-4 vehicles for featured
  const featuredVehicles = fleetData.slice(0, 3);

  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
            >
              Our Featured Fleet
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-text-secondary text-lg"
            >
              Experience the pinnacle of automotive engineering. Our premium vehicles are meticulously maintained for your comfort and safety.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/fleet">
              <Button variant="secondary">View Full Fleet</Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

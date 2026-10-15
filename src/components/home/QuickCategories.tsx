"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CarFront, Plane, Mountain, Users, Building, ShieldCheck } from "lucide-react";
import Card3DTilt from "@/components/3d/Card3DTilt";

const categories = [
  {
    title: "Luxury Cars",
    icon: <CarFront size={32} className="text-accent-primary" />,
    image: "/categories/luxury.jpg",
    link: "/fleet?category=luxury",
    description: "Premium sedans and executive vehicles"
  },
  {
    title: "SUV & 4x4",
    icon: <Mountain size={32} className="text-accent-primary" />,
    image: "/categories/suv.jpg",
    link: "/fleet?category=suv",
    description: "Command the road with power and space"
  },
  {
    title: "Airport Transfer",
    icon: <Plane size={32} className="text-accent-primary" />,
    image: "/categories/airport.jpg",
    link: "/services/airport-transfer",
    description: "VIP meet & greet and seamless drops"
  },
  {
    title: "Wedding Cars",
    icon: <ShieldCheck size={32} className="text-accent-primary" />,
    image: "/categories/wedding.jpg",
    link: "/services/wedding-cars",
    description: "Make your special day unforgettable"
  },
  {
    title: "Northern Tours",
    icon: <Users size={32} className="text-accent-primary" />,
    image: "/tours/hunza.jpg",
    link: "/tours",
    description: "Explore Pakistan's majestic landscapes"
  },
  {
    title: "Corporate Fleet",
    icon: <Building size={32} className="text-accent-primary" />,
    image: "/categories/corporate.jpg",
    link: "/services/corporate-rentals",
    description: "Monthly contracts & executive travel"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function QuickCategories() {
  return (
    <section className="py-24 bg-bg-secondary/40 backdrop-blur-md relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            Premium Mobility Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg"
          >
            Select a category to explore our world-class vehicles and specialized services.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card3DTilt max={8} speed={400} glare={true} maxGlare={0.2} scale={1.03}>
                <Link href={category.link} className="block group">
                  <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 group-hover:border-accent-primary/40 group-hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.25)] [transform-style:preserve-3d]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                    
                    <div className="absolute inset-0 p-8 flex flex-col justify-end [transform-style:preserve-3d]">
                      <div className="bg-slate-900/80 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-white/10 group-hover:scale-110 transition-transform duration-300 [transform:translateZ(30px)]">
                        {category.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors [transform:translateZ(25px)]">{category.title}</h3>
                      <p className="text-slate-300 text-sm [transform:translateZ(15px)]">{category.description}</p>
                    </div>
                  </div>
                </Link>
              </Card3DTilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

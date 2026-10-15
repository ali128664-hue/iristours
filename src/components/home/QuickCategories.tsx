"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CarFront, Plane, Mountain, Users, Building, ShieldCheck } from "lucide-react";
import Card3DTilt from "@/components/3d/Card3DTilt";

const categories = [
  {
    title: "Luxury Cars",
    icon: <CarFront size={30} className="text-amber-500" />,
    image: "/categories/luxury.jpg",
    link: "/fleet?category=luxury",
    description: "Premium sedans and executive vehicles"
  },
  {
    title: "SUV & 4x4",
    icon: <Mountain size={30} className="text-amber-500" />,
    image: "/categories/suv.jpg",
    link: "/fleet?category=suv",
    description: "Command the road with power and space"
  },
  {
    title: "Airport Transfer",
    icon: <Plane size={30} className="text-amber-500" />,
    image: "/categories/airport.jpg",
    link: "/services/airport-transfer",
    description: "VIP meet & greet and seamless drops"
  },
  {
    title: "Wedding Cars",
    icon: <ShieldCheck size={30} className="text-amber-500" />,
    image: "/categories/wedding.jpg",
    link: "/services/wedding-cars",
    description: "Make your special day unforgettable"
  },
  {
    title: "Northern Tours",
    icon: <Users size={30} className="text-amber-500" />,
    image: "/tours/hunza.jpg",
    link: "/tours",
    description: "Explore Pakistan's majestic landscapes"
  },
  {
    title: "Corporate Fleet",
    icon: <Building size={30} className="text-amber-500" />,
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
    <section className="py-24 bg-white/40 backdrop-blur-md relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            Premium Mobility Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg font-medium"
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
              <Card3DTilt max={8} speed={350} glare={true} maxGlare={0.18} scale={1.02} className="h-full w-full">
                <Link href={category.link} className="block group h-full">
                  <div className="relative h-64 rounded-[26px] p-2 bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.07)] transition-all duration-500 group-hover:border-amber-400/60 group-hover:shadow-[0_24px_50px_-10px_rgba(217,119,6,0.22)] w-full max-w-full overflow-hidden md:[transform-style:preserve-3d]">
                    <div className="relative h-full w-full rounded-[20px] overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-85 transition-opacity duration-300 group-hover:opacity-75" />
                      
                      <div className="absolute inset-0 p-6 flex flex-col justify-end md:[transform-style:preserve-3d]">
                        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 border border-white/30 group-hover:scale-110 transition-transform duration-300 md:[transform:translateZ(30px)] shadow-md">
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-black text-white mb-1 group-hover:text-amber-400 transition-colors md:[transform:translateZ(25px)] tracking-tight">{category.title}</h3>
                        <p className="text-slate-200 text-xs font-medium md:[transform:translateZ(15px)]">{category.description}</p>
                      </div>
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

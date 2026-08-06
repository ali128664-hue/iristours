"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CarFront, Plane, Mountain, Users, Building, ShieldCheck } from "lucide-react";

const categories = [
  {
    title: "Luxury Cars",
    icon: <CarFront size={32} className="text-accent-primary" />,
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop",
    link: "/fleet?category=luxury",
    description: "Premium sedans and executive vehicles"
  },
  {
    title: "SUV & 4x4",
    icon: <Mountain size={32} className="text-accent-primary" />,
    image: "https://images.unsplash.com/photo-1596568359550-93a9d3e8e2d4?q=80&w=600&auto=format&fit=crop",
    link: "/fleet?category=suv",
    description: "Command the road with power and space"
  },
  {
    title: "Airport Transfer",
    icon: <Plane size={32} className="text-accent-primary" />,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=600&auto=format&fit=crop",
    link: "/services/airport-transfer",
    description: "VIP meet & greet and seamless drops"
  },
  {
    title: "Wedding Cars",
    icon: <ShieldCheck size={32} className="text-accent-primary" />,
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=600&auto=format&fit=crop",
    link: "/services/wedding-cars",
    description: "Make your special day unforgettable"
  },
  {
    title: "Northern Tours",
    icon: <Users size={32} className="text-accent-primary" />,
    image: "https://images.unsplash.com/photo-1596700676997-f56f4d80a133?q=80&w=600&auto=format&fit=crop",
    link: "/tours",
    description: "Explore Pakistan's majestic landscapes"
  },
  {
    title: "Corporate Fleet",
    icon: <Building size={32} className="text-accent-primary" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
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
    <section className="py-24 bg-bg-secondary relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
          >
            Premium Mobility Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
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
              <Link href={category.link} className="block group">
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08),inset_0_2px_4px_rgba(255,255,255,0.8)] transition-all duration-500 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15),0_0_0_1px_rgba(245,158,11,0.2),inset_0_2px_4px_rgba(255,255,255,1)] group-hover:-translate-y-2">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="bg-bg-card/30 backdrop-blur-md w-14 h-14 rounded-full flex items-center justify-center mb-4 border border-border-primary group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">{category.title}</h3>
                    <p className="text-text-secondary text-sm">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

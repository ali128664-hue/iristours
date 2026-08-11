"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/tours/hunza.jpg", alt: "Hunza Valley Tour", category: "Tours" },
  { src: "/categories/luxury.jpg", alt: "Luxury Sedans", category: "Fleet" },
  { src: "/tours/skardu.jpg", alt: "Skardu Deosai Tour", category: "Tours" },
  { src: "/categories/suv.jpg", alt: "Premium SUVs", category: "Fleet" },
  { src: "/tours/swat.jpg", alt: "Swat Kalam Tour", category: "Tours" },
  { src: "/categories/wedding.jpg", alt: "Wedding Cars", category: "Services" },
  { src: "/categories/airport.jpg", alt: "Airport Transfers", category: "Services" },
  { src: "/categories/corporate.jpg", alt: "Corporate Rentals", category: "Services" },
  { src: "/categories/about_fleet.jpg", alt: "Our Fleet Collection", category: "Fleet" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Our Gallery</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Glimpses of our premium fleet and breathtaking northern tours. Experience luxury in motion.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-bg-card"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent-primary text-sm font-bold uppercase tracking-wider mb-2 block">
                    {img.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {img.alt}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

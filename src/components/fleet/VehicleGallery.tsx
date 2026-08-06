"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function VehicleGallery({ images, alt }: { images: string[], alt: string }) {
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div 
          className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden cursor-pointer group"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={images[activeImage]}
            alt={alt}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-bg-card/50 backdrop-blur-md px-4 py-2 rounded-full text-text-primary text-sm tracking-wide">
              Click to enlarge
            </span>
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`relative w-24 h-24 md:w-32 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                  activeImage === idx ? "border-accent-primary opacity-100" : "border-border-primary opacity-60 hover:opacity-100"
                }`}
              >
                <Image src={img} alt={`${alt} thumbnail ${idx}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-bg-primary/95 backdrop-blur-xl flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 p-2 bg-bg-card/50 hover:bg-bg-card rounded-full text-text-primary transition-colors z-50"
              onClick={() => setLightboxOpen(false)}
            >
              <X size={24} />
            </button>
            
            <div className="relative w-full max-w-7xl h-[80vh] mx-4" onClick={e => e.stopPropagation()}>
              <Image
                src={images[activeImage]}
                alt={alt}
                fill
                className="object-contain"
              />
              
              {images.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-bg-card/50 hover:bg-bg-card rounded-full text-text-primary transition-colors backdrop-blur-md"
                    onClick={prevImage}
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-bg-card/50 hover:bg-bg-card rounded-full text-text-primary transition-colors backdrop-blur-md"
                    onClick={nextImage}
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </div>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-text-secondary text-sm tracking-widest">
              {activeImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

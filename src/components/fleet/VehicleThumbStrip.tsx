"use client";

/**
 * VehicleThumbStrip.tsx — clickable photo strip on the car detail page.
 * Tapping a thumbnail opens a full-screen viewer (arrows, Esc to close).
 */

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function VehicleThumbStrip({ images, alt }: { images: string[]; alt: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i === null ? i : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, images.length]);

  return (
    <>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide" data-lenis-prevent>
        {images.map((img, idx) => (
          <button
            type="button"
            key={idx}
            onClick={() => setOpenIndex(idx)}
            aria-label={`Open ${alt} photo ${idx + 1}`}
            className="relative flex-shrink-0 w-36 h-24 rounded-xl overflow-hidden border-2 border-border-primary hover:border-accent-primary focus-visible:border-accent-primary focus:outline-none transition-all cursor-pointer"
          >
            <Image src={img} alt={`${alt} view ${idx + 1}`} fill className="object-cover" sizes="144px" />
          </button>
        ))}
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} photos`}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setOpenIndex(null)}
        >
          <button
            type="button"
            aria-label="Close photos"
            className="absolute top-5 right-5 p-2.5 bg-white/15 hover:bg-white/30 rounded-full text-white transition-colors z-10"
            onClick={() => setOpenIndex(null)}
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-6xl h-[78vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <Image src={images[openIndex as number]} alt={alt} fill className="object-contain" sizes="100vw" />
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-white/15 hover:bg-white/30 rounded-full text-white transition-colors"
                  onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))}
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white/15 hover:bg-white/30 rounded-full text-white transition-colors"
                  onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % images.length))}
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-sm tracking-widest">
            {(openIndex as number) + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    if (!textRef.current) return;
    
    // GSAP initial text reveal animation
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 80,
        opacity: 0,
        duration: 1.4,
        stagger: 0.18,
        ease: "power4.out",
        delay: 0.4
      });
      
      gsap.from(".hero-btn", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.18,
        ease: "power3.out",
        delay: 1.0
      });
    }, textRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] md:min-h-[800px] w-full overflow-hidden flex items-center justify-center bg-transparent">
      
      {/* ─── HERO BACKGROUND (Subtle Daylight Atmosphere Blend) ─────────────── */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply">
        <Image
          src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Car Rental Pakistan"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 via-transparent to-slate-50" />
      </motion.div>

      {/* Subtle warm sunlight radial glow */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-soft-light pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle at 50% 40%, rgba(245, 158, 11, 0.20) 0%, transparent 65%)' }} 
      />

      {/* ─── HERO TEXT CONTENT ──────────────────────────────────────────────── */}
      <div ref={textRef} className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-12">
        
        {/* Crystal Glassmorphism Card for Text Contrast */}
        <div className="max-w-4xl mx-auto bg-white/85 backdrop-blur-2xl p-6 md:p-8 rounded-[2.5rem] border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.10),0_0_0_1px_rgba(255,255,255,0.8)]">
          {/* Small subtitle line */}
          <div className="hero-text overflow-hidden mb-4">
            <span className="inline-block text-amber-600 font-extrabold tracking-[0.2em] uppercase text-sm md:text-base">
              Pakistan's Premier 3D Luxury Car Rental &amp; Chauffeur Service
            </span>
          </div>
          
          {/* ─── MAIN HEADLINE ─────────────── */}
          <div className="hero-text overflow-hidden mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Rent a Car in <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700">Lahore</span>
            </h1>
          </div>
          
          {/* Description paragraph */}
          <div className="hero-text overflow-hidden mb-8 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
              Best luxury car rental service in Lahore with verified professional chauffeurs. Explore our interactive 3D fleet of executive sedans, 4x4 SUVs (Prado, Fortuner, Land Cruiser V8), airport transfers, and northern tours at 100% transparent daily rates.
            </p>
          </div>
          
          {/* ─── CTA BUTTONS ────────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="hero-btn w-full sm:w-auto">
              <Button variant="primary" magnetic className="w-full sm:w-auto px-10 py-4 text-sm shadow-xl shadow-amber-500/25 font-bold" onClick={() => window.location.href='/fleet'}>
                Explore Fleet
              </Button>
            </div>
            <div className="hero-btn w-full sm:w-auto">
              <Button variant="glass" magnetic className="w-full sm:w-auto px-10 py-4 text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-lg border-transparent font-bold" onClick={() => window.open('https://wa.me/923154973906?text=Hi!%20I%20want%20to%20book%20a%20car.', '_blank')}>
                Book on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator animation */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs text-slate-500 font-semibold uppercase tracking-[0.2em]">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-slate-300 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-amber-500 absolute top-0"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

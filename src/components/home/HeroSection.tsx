/**
 * HeroSection.tsx — Homepage Hero Section (ہوم پیج کا اوپری حصہ)
 *
 * This is the large full-screen banner section on the homepage.
 * It shows:
 *  - A background image with a parallax scroll effect
 *  - The main headline and subtitle text
 *  - Two CTA (call-to-action) buttons: "Explore Fleet" and "Book on WhatsApp"
 *  - A scroll indicator animation at the bottom
 *
 * HOW TO CHANGE:
 *  - Main headline → change the <h1> text below ("Drive Luxury. Experience Perfection.")
 *  - Subtitle text → change the <h2> small text above the headline
 *  - Description paragraph → change the <p> text below the headline
 *  - CTA button text and links → find the Button components below
 *  - Background image → change the Unsplash URL in the <Image src="..."> tag
 *  - WhatsApp number (Book button) → update the wa.me URL in the second button
 */

"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect: background image moves at a slower rate than page scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    if (!textRef.current) return;
    
    // GSAP initial text reveal animation — text slides up on page load
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });
      
      gsap.from(".hero-btn", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        delay: 1.2
      });
    }, textRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] md:min-h-[800px] w-full overflow-hidden flex items-center justify-center bg-bg-primary">
      
      {/* ─── HERO BACKGROUND ──────────────────────────────────────────────────
          Change hero background image here.
          Replace the Unsplash URL below with your own image URL or a local path
          from the /public folder (e.g., "/images/hero.jpg").
          
          Current image: luxury car on a road (from Unsplash)
      ──────────────────────────────────────────────────────────────────────── */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Car Rental Pakistan"
          fill
          priority
          className="object-cover"
        />
        {/* Dark gradient overlay on top of the image for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/40 to-bg-primary" />
      </motion.div>

      {/* Subtle green light glow effect (decorative) */}
      <div className="absolute inset-0 z-0 opacity-30 mix-blend-screen pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(22, 199, 158, 0.1) 0%, transparent 50%)' }} />

      {/* ─── HERO TEXT CONTENT ────────────────────────────────────────────────
          All headline and subtitle text is here.
          Each div with class "hero-text" animates in on page load.
      ──────────────────────────────────────────────────────────────────────── */}
      <div ref={textRef} className="container mx-auto px-6 md:px-12 relative z-10 text-center mt-20">
        
        {/* Small subtitle line above the main heading — change text here */}
        <div className="hero-text overflow-hidden mb-4">
          <h2 className="text-accent-secondary font-semibold tracking-[0.2em] uppercase text-sm md:text-base">
            Premium Rent a Car in Lahore & Pakpattan
          </h2>
        </div>
        
        {/* ─── MAIN HEADLINE — change main headline text here ─────────────── */}
        <div className="hero-text overflow-hidden mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-primary tracking-tight leading-tight">
            Drive <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-blue-400">Luxury.</span><br />
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary to-yellow-200">Perfection.</span>
          </h1>
        </div>
        
        {/* Description paragraph below the headline — change text here */}
        <div className="hero-text overflow-hidden mb-12 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            Elevate your journey with our world-class fleet of luxury cars, SUVs, and professional chauffeurs across Pakistan.
          </p>
        </div>
        
        {/* ─── CTA BUTTONS — change button text and links here ─────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary button — navigates to the fleet listing page */}
          <div className="hero-btn w-full sm:w-auto">
            <Button variant="primary" magnetic className="w-full sm:w-auto px-10 py-4 text-sm" onClick={() => window.location.href='/fleet'}>
              Explore Fleet
            </Button>
          </div>
          {/* Secondary button — opens WhatsApp. Change the wa.me number to update it. */}
          <div className="hero-btn w-full sm:w-auto">
            <Button variant="glass" magnetic className="w-full sm:w-auto px-10 py-4 text-sm" onClick={() => window.open('https://wa.me/923066305875', '_blank')}>
              Book on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator animation at the bottom of the hero */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs text-text-secondary uppercase tracking-[0.2em]">Scroll to Explore</span>
        <div className="w-[1px] h-12 bg-border-primary relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-accent-primary absolute top-0"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

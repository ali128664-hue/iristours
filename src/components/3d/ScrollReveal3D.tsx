"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ScrollReveal3D.tsx — a quiet fade-up for section headings as they scroll in.
 *
 * Runs again on every page change (so all pages behave the same), never hides
 * headings that are already on screen, and is skipped entirely when the
 * visitor prefers reduced motion.
 */
export default function ScrollReveal3D() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const headings = document.querySelectorAll<HTMLElement>("main h2, main .gsap-reveal-3d");
      headings.forEach((elem) => {
        // Headings already visible on load stay put — no flash of hidden text
        if (elem.getBoundingClientRect().top < window.innerHeight * 0.9) return;

        gsap.fromTo(
          elem,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: elem,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}

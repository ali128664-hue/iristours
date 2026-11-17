"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll.tsx — smooth wheel scrolling on desktop.
 *
 * Phones and tablets keep their native scrolling (it is already smooth and
 * feels more natural), and visitors with "reduce motion" enabled are skipped.
 * Add `data-lenis-prevent` to any inner scrollable box (popups, dropdowns)
 * so the mouse wheel scrolls that box instead of the page.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

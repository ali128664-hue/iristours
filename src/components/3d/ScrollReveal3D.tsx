"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollReveal3D() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // Animate section headings with 3D rotation reveal
    const headings = document.querySelectorAll("h2, .gsap-reveal-3d");
    headings.forEach((elem) => {
      gsap.fromTo(
        elem,
        {
          opacity: 0,
          y: 50,
          rotationX: 15,
          transformPerspective: 1000,
          transformOrigin: "50% 100%",
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 88%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}

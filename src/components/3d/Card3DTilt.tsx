"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

interface Card3DTiltProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
  speed?: number;
  glare?: boolean;
  maxGlare?: number;
  scale?: number;
  disabled?: boolean;
}

export default function Card3DTilt({
  children,
  className = "",
  max = 10,
  speed = 400,
  glare = true,
  maxGlare = 0.22,
  scale = 1.03,
  disabled = false,
}: Card3DTiltProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState("");
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({});
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device to disable heavy tilt and preserve smooth native scrolling
    const checkTouch = () => {
      setIsTouchDevice(
        window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth < 768 ||
        "ontouchstart" in window
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || isTouchDevice || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const percentX = (x - centerX) / centerX;
    const percentY = (y - centerY) / centerY;

    const rotateX = -percentY * max;
    const rotateY = percentX * max;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI) - 90;
      const distanceFromCenter = Math.hypot(percentX, percentY);
      const currentGlare = Math.min(distanceFromCenter * maxGlare, maxGlare);

      setGlareStyle({
        opacity: currentGlare,
        transform: `rotate(${angle.toFixed(1)}deg) translate(-50%, -50%)`,
        background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,${maxGlare}) 100%)`,
      });
    }
  }, [disabled, isTouchDevice, max, scale, glare, maxGlare]);

  const handleMouseEnter = () => {
    if (disabled || isTouchDevice) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (disabled || isTouchDevice) return;
    setIsHovered(false);
    setTransformStyle(`perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`);
    if (glare) {
      setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative [transform-style:preserve-3d] ${className}`}
      style={{
        transform: transformStyle,
        transition: isHovered
          ? `transform 100ms ease-out`
          : `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
        willChange: isHovered ? "transform" : "auto",
      }}
    >
      {children}

      {/* Dynamic 3D Glare Reflection Layer */}
      {glare && !isTouchDevice && (
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] z-30"
          style={{ mixBlendMode: "overlay" }}
        >
          <div
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] origin-top-left transition-opacity duration-300"
            style={glareStyle}
          />
        </div>
      )}
    </div>
  );
}

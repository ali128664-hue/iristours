"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "glass";
  magnetic?: boolean;
  children: React.ReactNode;
}

export function Button({ variant = "primary", magnetic = false, className, children, ...props }: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold uppercase tracking-wider transition-all overflow-hidden";
  
  const variants = {
    primary: "bg-gradient-to-tr from-accent-secondary to-accent-primary text-white shadow-[0_8px_16px_-4px_rgba(245,158,11,0.5),inset_0_2px_4px_rgba(255,255,255,0.4)] hover:shadow-[0_12px_24px_-6px_rgba(245,158,11,0.6),inset_0_2px_4px_rgba(255,255,255,0.6)] hover:-translate-y-1 hover:brightness-110 border border-white/20",
    secondary: "bg-white/80 backdrop-blur-md shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1),inset_0_2px_4px_rgba(255,255,255,0.8)] hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.9)] hover:-translate-y-1 text-text-primary border border-border-primary/50",
    glass: "bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.8)] border border-white/60 text-text-primary hover:bg-white/60 hover:-translate-y-1 hover:shadow-[0_12px_36px_0_rgba(0,0,0,0.1)]"
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}

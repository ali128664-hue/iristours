"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  magnetic?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  magnetic = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!magnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.15, y: middleY * 0.15 });
  };

  const reset = () => {
    if (!magnetic) return;
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center px-7 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-200 overflow-hidden text-center cursor-pointer active:scale-[0.98]";

  const variants = {
    primary:
      "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white shadow-md shadow-amber-500/25 hover:shadow-lg hover:shadow-amber-500/35 hover:brightness-105 border border-amber-400/40",
    secondary:
      "bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-slate-900/20 border border-slate-800 hover:-translate-y-0.5",
    glass:
      "bg-white/95 backdrop-blur-xl border border-slate-300 text-slate-900 hover:bg-white hover:border-amber-500 hover:text-amber-600 shadow-sm",
    outline:
      "border-2 border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:border-amber-500 hover:text-amber-600 shadow-sm",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={twMerge(clsx(baseStyles, variants[variant], className))}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </motion.button>
  );
}

export default Button;

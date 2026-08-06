"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { label: "Happy Customers", value: 10000, suffix: "+" },
  { label: "Corporate Clients", value: 500, suffix: "+" },
  { label: "Premium Vehicles", value: 150, suffix: "+" },
  { label: "Customer Satisfaction", value: 100, suffix: "%" },
];

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(from);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const updateCounter = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth deceleration
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(from + (to - from) * easeOutExpo));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    animationFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function CompanyStatistics() {
  return (
    <section className="py-24 bg-bg-secondary border-t border-b border-border-primary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center flex flex-col items-center justify-center space-y-4"
            >
              <div className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <h4 className="text-sm md:text-base font-semibold text-text-secondary uppercase tracking-wider">
                {stat.label}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

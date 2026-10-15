"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Map, Star, Award, Headset } from "lucide-react";
import clsx from "clsx";

const features = [
  {
    title: "Professional Drivers",
    description: "Highly trained, vetted, and courteous chauffeurs.",
    icon: <ShieldCheck size={28} className="text-white" />,
    className: "md:col-span-2 md:row-span-2 bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-xl shadow-amber-500/20"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your travel needs.",
    icon: <Headset size={28} className="text-amber-600" />,
    className: "bg-white/92 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] text-slate-900"
  },
  {
    title: "Luxury Fleet",
    description: "Immaculately maintained premium vehicles.",
    icon: <Star size={28} className="text-amber-600" />,
    className: "bg-white/92 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] text-slate-900"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs. What you see is what you pay.",
    icon: <Award size={28} className="text-amber-600" />,
    className: "bg-white/92 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] text-slate-900"
  },
  {
    title: "Nationwide Coverage",
    description: "Available across all major cities and northern areas.",
    icon: <Map size={28} className="text-amber-600" />,
    className: "md:col-span-2 bg-white/92 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.06)] text-slate-900"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50/50 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4"
          >
            The Iris Advantage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-lg font-medium"
          >
            Why thousands of travelers choose us for their luxury transportation needs across Pakistan.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[600px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={clsx(
                "rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative transition-all hover:scale-[1.02]",
                feature.className
              )}
            >
              <div className={clsx(
                "w-14 h-14 rounded-full flex items-center justify-center mb-6",
                index === 0 ? "bg-white/20 backdrop-blur-md" : "bg-slate-50 border border-slate-200"
              )}>
                {feature.icon}
              </div>
              <div className="relative z-10">
                <h3 className={clsx(
                  "text-2xl font-bold mb-2",
                  index === 0 ? "text-white" : "text-slate-900"
                )}>
                  {feature.title}
                </h3>
                <p className={clsx(
                  "text-sm leading-relaxed",
                  index === 0 ? "text-white/90" : "text-slate-600"
                )}>
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative Background Elements */}
              <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-125 transition-transform duration-700 pointer-events-none">
                {feature.icon}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

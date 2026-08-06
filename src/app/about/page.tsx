"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Star, Users, MapPin } from "lucide-react";

const stats = [
  { label: "Happy Clients", value: "10,000+" },
  { label: "Premium Vehicles", value: "150+" },
  { label: "Cities Covered", value: "20+" },
  { label: "Years Experience", value: "15+" },
];

const features = [
  {
    icon: <Shield className="w-8 h-8 text-accent-primary" />,
    title: "Unmatched Safety",
    description: "Every vehicle undergoes rigorous safety checks. Your peace of mind is our highest priority."
  },
  {
    icon: <Star className="w-8 h-8 text-accent-primary" />,
    title: "Premium Fleet",
    description: "From luxury sedans to spacious SUVs, our fleet represents the pinnacle of automotive engineering."
  },
  {
    icon: <Users className="w-8 h-8 text-accent-primary" />,
    title: "Professional Chauffeurs",
    description: "Highly trained, deeply courteous, and intimately familiar with every route across Pakistan."
  },
  {
    icon: <MapPin className="w-8 h-8 text-accent-primary" />,
    title: "Nationwide Presence",
    description: "Whether you are in Lahore or exploring the Northern valleys, we are always within reach."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-primary">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-8 tracking-tight">
            Redefining Luxury Travel in Pakistan
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Iris Tours was founded on a simple principle: travel should be an experience, not just a journey. 
            For over a decade, we have been the preferred choice for executives, families, and luxury seekers across Pakistan.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="text-center p-8 bg-bg-card rounded-2xl border border-border-primary hover:border-accent-primary transition-colors"
            >
              <div className="text-4xl md:text-5xl font-bold text-text-primary mb-2">{stat.value}</div>
              <div className="text-text-secondary font-medium tracking-wide uppercase text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1200&auto=format&fit=crop" 
              alt="Luxury Car Fleet" 
              className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-text-primary">Our Philosophy</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We believe that true luxury lies in the details. From the immaculate condition of our vehicles to the 
              impeccable manners of our chauffeurs, every aspect of Iris Tours is designed to exceed expectations.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Whether you require an elegant sedan for a corporate event, a spacious SUV for a northern adventure, 
              or a grand limousine for your wedding day, we deliver excellence without compromise.
            </p>
          </motion.div>
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-16">Why Choose Iris Tours</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-bg-card p-8 rounded-2xl border border-border-primary"
              >
                <div className="w-16 h-16 rounded-2xl bg-bg-primary flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

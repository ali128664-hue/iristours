"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plane, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AirportTransferSection() {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border-primary"
          >
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Airport Transfer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/20 to-transparent opacity-80" />
            
            <div className="absolute bottom-10 left-10 right-10 bg-bg-card/40 backdrop-blur-md border border-border-primary rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent-primary/20 p-3 rounded-full">
                  <Plane size={24} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-text-primary">Flight Tracking</h4>
                  <p className="text-sm text-text-secondary">We monitor your flight for delays.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border-primary w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-xs font-semibold tracking-wide text-text-primary uppercase">VIP Service</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Premium Airport <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-blue-400">Transfers</span>
            </h2>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Experience seamless airport transportation with our Meet & Greet service. Our professional chauffeurs ensure you reach your destination comfortably and on time.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-bg-card p-2 rounded-lg border border-border-primary"><Clock size={20} className="text-accent-primary" /></div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-1">60 Mins Free Waiting</h4>
                  <p className="text-text-secondary text-sm">Complimentary waiting time for all airport pickups.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-bg-card p-2 rounded-lg border border-border-primary"><ShieldCheck size={20} className="text-accent-primary" /></div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-1">Professional Chauffeurs</h4>
                  <p className="text-text-secondary text-sm">Vetted, trained, and courteous drivers holding your name board.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services/airport-transfer">
                <Button variant="primary" className="w-full sm:w-auto">Explore Service</Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

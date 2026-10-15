"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Plane, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AirportTransferSection() {
  return (
    <section className="py-24 bg-slate-50/50 backdrop-blur-md relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[700px] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/90"
          >
            <Image
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Airport Transfer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80" />
            
            <div className="absolute bottom-10 left-10 right-10 bg-white/92 backdrop-blur-xl border border-slate-200/90 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-amber-50 p-3 rounded-full text-amber-600">
                  <Plane size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Flight Tracking</h4>
                  <p className="text-sm text-slate-600 font-medium">We monitor your flight for delays.</p>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-xs font-bold tracking-wide text-slate-800 uppercase">VIP Service</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Premium Airport <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">Transfers</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Experience seamless airport transportation with our Meet &amp; Greet service. Our professional chauffeurs ensure you reach your destination comfortably and on time.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><Clock size={20} className="text-amber-600" /></div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">60 Mins Free Waiting</h4>
                  <p className="text-slate-600 text-sm font-medium">Complimentary waiting time for all airport pickups.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-white p-2 rounded-lg border border-slate-200 shadow-sm"><ShieldCheck size={20} className="text-amber-600" /></div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Professional Chauffeurs</h4>
                  <p className="text-slate-600 text-sm font-medium">Vetted, trained, and courteous drivers holding your name board.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services/airport-transfer">
                <Button variant="primary" className="w-full sm:w-auto shadow-xl shadow-amber-500/25 font-bold">Explore Service</Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

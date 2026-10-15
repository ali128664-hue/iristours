"use client";

import { useState } from "react";
import { Landmark, Copy, Check, ShieldCheck, MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BankDetailsSection() {
  const [copiedAcc, setCopiedAcc] = useState(false);
  const [copiedIban, setCopiedIban] = useState(false);

  const handleCopyAcc = () => {
    navigator.clipboard.writeText("0419007791557002");
    setCopiedAcc(true);
    setTimeout(() => setCopiedAcc(false), 2500);
  };

  const handleCopyIban = () => {
    navigator.clipboard.writeText("PK75FAYS0419007791557002");
    setCopiedIban(true);
    setTimeout(() => setCopiedIban(false), 2500);
  };

  return (
    <section className="py-20 bg-bg-secondary/40 border-t border-border-primary relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/20 text-accent-primary text-xs font-bold uppercase tracking-wider mb-4"
            >
              <ShieldCheck size={16} />
              Secure Payment &amp; Advance Booking
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight"
            >
              Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Bank Account</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-slate-600 text-base md:text-lg mt-3"
            >
              For online bank transfers (IBFT), advance bookings, and corporate account payments.
            </motion.p>
          </div>

          {/* Account Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl bg-white/92 backdrop-blur-xl border border-slate-200/90 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.15)] flex-shrink-0">
                  <Landmark size={28} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">Verified Business Account</span>
                  <h3 className="text-2xl font-extrabold text-slate-900">Faysal Bank Limited</h3>
                </div>
              </div>

              <Link
                href="https://wa.me/923066305875?text=Hi%20Iris%20Tours,%20I%20have%20made%20the%20payment.%20Here%20is%20the%20receipt%20screenshot."
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold text-sm transition-all shadow-lg shadow-green-500/20 active:scale-95"
              >
                <MessageCircle size={18} />
                Send Receipt on WhatsApp
              </Link>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 text-sm">
              <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 flex flex-col justify-between gap-1">
                <span className="text-slate-500 text-xs uppercase font-medium">Bank Name</span>
                <span className="text-base font-bold text-slate-900">Faysal Bank</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 flex flex-col justify-between gap-1">
                <span className="text-slate-500 text-xs uppercase font-medium">Account Title</span>
                <span className="text-base font-bold text-slate-900">MUNIR HUSSAIN</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 flex flex-col justify-between gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs uppercase font-medium">Account Number</span>
                  <button
                    type="button"
                    onClick={handleCopyAcc}
                    className="p-1 px-2.5 rounded-lg bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-600 border border-slate-200 transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer shadow-sm"
                  >
                    {copiedAcc ? (
                      <>
                        <Check size={14} className="text-green-600" />
                        <span className="text-green-600 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <span className="font-mono text-base font-bold text-amber-600 select-all">
                  0419007791557002
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 flex flex-col justify-between gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs uppercase font-medium">IBAN Number</span>
                  <button
                    type="button"
                    onClick={handleCopyIban}
                    className="p-1 px-2.5 rounded-lg bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-600 border border-slate-200 transition-colors flex items-center gap-1 text-xs font-semibold cursor-pointer shadow-sm"
                  >
                    {copiedIban ? (
                      <>
                        <Check size={14} className="text-green-600" />
                        <span className="text-green-600 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <span className="font-mono text-sm md:text-base font-bold text-amber-600 select-all break-all">
                  PK75FAYS0419007791557002
                </span>
              </div>

              <div className="md:col-span-2 p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span className="text-slate-500 text-xs uppercase font-medium">Branch Name</span>
                <span className="text-sm md:text-base font-semibold text-slate-900">IBB MAULANA SHAUKAT ALI ROAD</span>
              </div>
            </div>

            {/* Note & WhatsApp confirmation */}
            <div className="pt-4 border-t border-slate-200/80 flex items-start gap-3 text-xs md:text-sm text-slate-600">
              <span className="text-amber-600 font-bold">Important:</span>
              <span>
                Please share the transaction screenshot / receipt via WhatsApp to{" "}
                <Link href="https://wa.me/923066305875" target="_blank" className="text-amber-600 font-semibold hover:underline">
                  +92 306 6305875
                </Link>{" "}
                along with your booking details for immediate vehicle reservation confirmation.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

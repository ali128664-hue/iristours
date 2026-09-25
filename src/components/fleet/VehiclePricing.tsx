"use client";

import React from 'react';
import { Phone, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useCurrency } from '@/context/CurrencyContext';
import { convertAndFormatPrice } from '@/utils/currency';

interface VehiclePricingProps {
  rent: any;
  whatsappUrl: string;
}

export default function VehiclePricing({ rent, whatsappUrl }: VehiclePricingProps) {
  const { currency } = useCurrency();
  const startingPrice = rent?.local || rent?.daily || rent?.withDriver?.local || 0;

  return (
    <div className="bg-bg-card border border-border-primary rounded-3xl p-6 shadow-xl">
      {/* Promotional Discount Badge */}
      <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-accent-primary/20 to-amber-500/10 border border-accent-primary/30 text-accent-secondary font-bold text-xs uppercase tracking-wider">
        <Sparkles size={13} className="text-accent-primary" />
        <span>Discount on 3+ Days Rental</span>
      </div>

      <p className="text-text-secondary text-sm font-medium mb-1">Starting from</p>
      <div className="flex items-end gap-2 mb-6">
        <span className="text-4xl font-extrabold text-accent-primary">
          {convertAndFormatPrice(startingPrice, currency)}
        </span>
        <span className="text-text-secondary mb-1">/day</span>
      </div>

      {/* Detailed price breakdown */}
      {rent && (
        <div className="space-y-3 mb-6 bg-white/70 rounded-2xl p-4 border border-border-primary/80">
          {(rent.withDriver?.local || rent.local) && (
            <div className="flex justify-between items-center py-2 border-b border-border-primary">
              <span className="text-text-secondary text-sm">Within City (Local)</span>
              <span className="font-semibold text-text-primary">{convertAndFormatPrice(rent.withDriver?.local || rent.local, currency)}</span>
            </div>
          )}
          {(rent.withDriver?.interCity || rent.interCity) && (
            <div className="flex justify-between items-center py-2 border-b border-border-primary">
              <span className="text-text-secondary text-sm">Inter-City</span>
              <span className="font-semibold text-text-primary">{convertAndFormatPrice(rent.withDriver?.interCity || rent.interCity, currency)}</span>
            </div>
          )}
          {(rent.withDriver?.outstation || rent.outstation) && (
            <div className="flex justify-between items-center py-2 border-b border-border-primary">
              <span className="text-text-secondary text-sm">Outstation</span>
              <span className="font-semibold text-text-primary">{convertAndFormatPrice(rent.withDriver?.outstation || rent.outstation, currency)}</span>
            </div>
          )}
          {rent.weekly && (
            <div className="flex justify-between items-center py-2 border-b border-border-primary">
              <span className="text-text-secondary text-sm">Weekly</span>
              <span className="font-semibold text-text-primary">{convertAndFormatPrice(rent.weekly, currency)}</span>
            </div>
          )}
          {rent.monthly && (
            <div className="flex justify-between items-center py-2">
              <span className="text-text-secondary text-sm">Monthly</span>
              <span className="font-semibold text-text-primary">{convertAndFormatPrice(rent.monthly, currency)}</span>
            </div>
          )}
        </div>
      )}

      {/* Instant Highlights */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
          <Zap size={14} className="text-amber-500" />
          <span>Doorstep Delivery available in Lahore</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-text-secondary">
          <ShieldCheck size={14} className="text-green-600" />
          <span>Professional driver & zero hidden fees</span>
        </div>
      </div>

      {/* WhatsApp Booking Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold py-4 rounded-2xl transition-all shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5 active:scale-[0.99] uppercase tracking-wider text-sm"
      >
        <FaWhatsapp size={20} />
        <span>Book on WhatsApp</span>
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:+923154973906"
        className="flex items-center justify-center gap-2.5 w-full mt-3 border border-border-primary bg-bg-secondary hover:border-accent-primary text-text-primary font-bold py-3.5 rounded-2xl transition-all shadow-sm active:scale-[0.99] text-sm"
      >
        <Phone size={17} className="text-accent-primary" />
        <span>Direct Call: 0315-4973906</span>
      </a>
    </div>
  );
}

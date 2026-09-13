"use client";

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
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
      <p className="text-text-secondary text-sm font-medium mb-2">Starting from</p>
      <div className="flex items-end gap-2 mb-6">
        <span className="text-4xl font-extrabold text-accent-primary">
          {convertAndFormatPrice(startingPrice, currency)}
        </span>
        <span className="text-text-secondary mb-1">/day</span>
      </div>

      {/* Detailed price breakdown */}
      {rent && (
        <div className="space-y-3 mb-6">
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

      {/* WhatsApp Booking Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-0.5"
      >
        <MessageCircle size={20} />
        Book on WhatsApp
      </a>
      {/* Call Now button */}
      <a
        href="tel:+923154973906"
        className="flex items-center justify-center gap-3 w-full mt-3 border border-border-primary bg-bg-secondary hover:border-accent-primary text-text-primary font-semibold py-3 rounded-2xl transition-all"
      >
        <Phone size={18} />
        Call Now
      </a>
    </div>
  );
}

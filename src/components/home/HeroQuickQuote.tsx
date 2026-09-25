"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Star, ShieldCheck, Clock, Award, Car, MapPin, Calendar } from "lucide-react";

export default function HeroQuickQuote() {
  const [selectedVehicle, setSelectedVehicle] = useState("Toyota Fortuner");
  const [selectedCity, setSelectedCity] = useState("Lahore (DHA / All Areas)");
  const [selectedDuration, setSelectedDuration] = useState("1-2 Days");

  const handleWhatsAppQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = "923154973906";
    const message = `Hello Iris Tours! 🚗
I would like an instant rate quote and availability for:
• Vehicle: ${selectedVehicle}
• Pickup Location: ${selectedCity}
• Duration: ${selectedDuration}
• Service: With Driver

Please send me the best discounted quotation. Thank you!`;

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="w-full mt-6">
      {/* Quick Booking Bar */}
      <form
        onSubmit={handleWhatsAppQuote}
        className="bg-white/95 backdrop-blur-md rounded-2xl p-3 md:p-4 border border-border-primary/80 shadow-lg text-left"
      >
        <div className="text-xs font-bold uppercase tracking-wider text-accent-secondary mb-2.5 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>Instant WhatsApp Rate & Availability Calculator</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
          {/* Vehicle Select */}
          <div className="relative">
            <label className="block text-[11px] font-semibold text-text-secondary mb-1 flex items-center gap-1">
              <Car size={12} className="text-accent-primary" /> Vehicle Category
            </label>
            <select
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
              className="w-full text-xs font-semibold bg-bg-card border border-border-primary rounded-xl px-3 py-2.5 text-text-primary focus:outline-none focus:border-accent-primary cursor-pointer"
            >
              <option value="Toyota Fortuner">Toyota Fortuner (SUV)</option>
              <option value="Toyota Prado TX/TZ">Toyota Prado TX / TZ</option>
              <option value="Land Cruiser V8">Land Cruiser V8 (ZX)</option>
              <option value="Honda Civic / Grande">Honda Civic / Corolla Altis</option>
              <option value="Toyota Yaris / Honda City">Toyota Yaris / City (Economy)</option>
              <option value="Toyota Hiace Grand Cabin">Hiace Grand Cabin (Vans)</option>
              <option value="Mercedes / Audi / Luxury">Mercedes / Audi (VIP Luxury)</option>
              <option value="Coaster / Saloon Bus">Toyota Coaster (Tours & Groups)</option>
            </select>
          </div>

          {/* City / Area Select */}
          <div className="relative">
            <label className="block text-[11px] font-semibold text-text-secondary mb-1 flex items-center gap-1">
              <MapPin size={12} className="text-accent-primary" /> City / Location
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full text-xs font-semibold bg-bg-card border border-border-primary rounded-xl px-3 py-2.5 text-text-primary focus:outline-none focus:border-accent-primary cursor-pointer"
            >
              <option value="Lahore (DHA / All Areas)">Lahore (DHA, Gulberg & All Areas)</option>
              <option value="Lahore Airport (Meet & Greet)">Allama Iqbal Airport Transfer</option>
              <option value="Islamabad / Rawalpindi">Islamabad / Rawalpindi</option>
              <option value="Lahore to Islamabad Inter-City">Lahore ➔ Islamabad Inter-City</option>
              <option value="Northern Tour (Hunza/Skardu/Murree)">Northern Areas Tour Package</option>
            </select>
          </div>

          {/* Duration */}
          <div className="relative">
            <label className="block text-[11px] font-semibold text-text-secondary mb-1 flex items-center gap-1">
              <Calendar size={12} className="text-accent-primary" /> Rental Duration
            </label>
            <select
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full text-xs font-semibold bg-bg-card border border-border-primary rounded-xl px-3 py-2.5 text-text-primary focus:outline-none focus:border-accent-primary cursor-pointer"
            >
              <option value="1 Day (City Travel)">1 Day (City Rental)</option>
              <option value="2-3 Days">2 - 3 Days</option>
              <option value="Weekly (Special Discount)">Weekly (Discounted)</option>
              <option value="Monthly Package">Monthly Long-Term</option>
              <option value="Wedding Event Special">Wedding Event (12 Hours)</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-extrabold text-xs uppercase tracking-wider hover:brightness-105 active:scale-[0.99] transition-all shadow-md shadow-green-500/20"
        >
          <FaWhatsapp size={16} />
          <span>Get Instant WhatsApp Quote & Availability</span>
        </button>
      </form>

      {/* Trust Proof Badges */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-5">
        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/60 border border-white/80 backdrop-blur-sm text-left">
          <Star className="text-amber-500 fill-amber-500 flex-shrink-0" size={16} />
          <div>
            <span className="block text-[11px] font-extrabold text-text-primary leading-tight">4.9 / 5 Rating</span>
            <span className="block text-[9px] text-text-secondary">350+ Google Reviews</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/60 border border-white/80 backdrop-blur-sm text-left">
          <Clock className="text-accent-primary flex-shrink-0" size={16} />
          <div>
            <span className="block text-[11px] font-extrabold text-text-primary leading-tight">Fast Response</span>
            <span className="block text-[9px] text-text-secondary">Reply in 5-10 Mins</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/60 border border-white/80 backdrop-blur-sm text-left">
          <ShieldCheck className="text-green-600 flex-shrink-0" size={16} />
          <div>
            <span className="block text-[11px] font-extrabold text-text-primary leading-tight">Zero Hidden Fees</span>
            <span className="block text-[9px] text-text-secondary">Transparent Rates</span>
          </div>
        </div>

        <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white/60 border border-white/80 backdrop-blur-sm text-left">
          <Award className="text-accent-primary flex-shrink-0" size={16} />
          <div>
            <span className="block text-[11px] font-extrabold text-text-primary leading-tight">50+ Clean Cars</span>
            <span className="block text-[9px] text-text-secondary">Chauffeurs Included</span>
          </div>
        </div>
      </div>
    </div>
  );
}

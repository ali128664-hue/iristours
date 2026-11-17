"use client";

/**
 * HeroSection.tsx — Homepage hero (پہلا حصہ جو وزیٹر کو نظر آتا ہے)
 *
 * Full-width photo of the fleet on a Lahore boulevard at dusk, the main
 * headline on the left and a quick booking card on the right that sends the
 * request straight to WhatsApp. Real starting rates sit along the bottom.
 *
 * HOW TO CHANGE:
 *  - Background photo → HERO_PHOTO (any wide photo in /public)
 *  - Headline / paragraph → edit the text below
 *  - Cars in the rate strip → RATE_STRIP_SLUGS (slugs from fleet.json)
 *  - Options in the booking card → CAR_TYPES / PICKUPS
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Star, ShieldCheck, Clock, Award } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import fleetData from "@/data/fleet.json";
import { useCurrency } from "@/context/CurrencyContext";
import { convertAndFormatPrice } from "@/utils/currency";
import { PHONE, whatsappLink } from "@/lib/site";

const HERO_PHOTO = "/blog/rent-a-car-in-lahore-featured.jpg";
const RATE_STRIP_SLUGS = ["toyota-yaris", "toyota-corolla-altis-1-6", "toyota-fortuner", "toyota-land-cruiser-v8"];

const CAR_TYPES = [
  "Economy car (Yaris, City)",
  "Sedan (Corolla, Civic)",
  "SUV (Fortuner, Prado)",
  "Land Cruiser V8",
  "Luxury (Mercedes, Audi, Range Rover)",
  "Van (Hiace, Coaster)",
];
const PICKUPS = ["Lahore city", "Allama Iqbal Airport, Lahore", "Islamabad", "Islamabad Airport", "Other city"];

export default function HeroSection() {
  const { currency } = useCurrency();
  const [car, setCar] = useState(CAR_TYPES[2]);
  const [pickup, setPickup] = useState(PICKUPS[0]);
  const [date, setDate] = useState("");
  const [days, setDays] = useState("1");

  const rateStrip = RATE_STRIP_SLUGS.map((slug) => fleetData.find((v) => v.slug === slug)).filter(
    (v): v is (typeof fleetData)[number] => Boolean(v)
  );

  const message = [
    "Hi Iris Tours! I want to book a car with driver.",
    `Car: ${car}`,
    `Pickup: ${pickup}`,
    `Date: ${date || "please suggest"}`,
    `Days: ${days}`,
  ].join("\n");

  const field =
    "w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-[15px] font-medium text-text-primary focus:border-brand-orange focus:bg-white focus:outline-none";

  return (
    <section className="relative isolate overflow-hidden bg-brand-ink text-white">
      {/* Photo + overlays */}
      <div className="absolute inset-0 -z-10 photo-grain">
        <Image
          src={HERO_PHOTO}
          alt="Toyota Prado and Mercedes from the Iris Tours fleet on a Lahore boulevard at sunset"
          fill
          priority
          sizes="100vw"
          className="iris-zoom object-cover object-[70%_50%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/85 to-brand-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-transparent to-brand-ink/40" />
      </div>

      <div className="container mx-auto px-5 md:px-12">
        <div className="grid items-center gap-10 pb-10 pt-12 md:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-16 lg:pt-24 xl:min-h-[min(760px,calc(100dvh-72px-110px))]">
          {/* ─── Text ─────────────────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <a
              href="https://www.google.com/search?q=Iris+Tours+Rental+Car+Lahore+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="iris-rise inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.07] py-1.5 pl-2 pr-4 text-sm text-white/85 backdrop-blur-md hover:bg-white/[0.12] transition-colors"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="flex items-center gap-0.5 rounded-full bg-white px-2 py-0.5 text-xs font-bold text-brand-ink">
                4.8 <Star size={12} className="fill-brand-orange text-brand-orange" aria-hidden="true" />
              </span>
              Rated by 200+ customers on Google
            </a>

            <h1
              className="iris-rise mt-6 text-[2.9rem] sm:text-[4rem] lg:text-[4.6rem] xl:text-[5.6rem] text-white"
              style={{ animationDelay: "0.15s" }}
            >
              Rent a car in Lahore
              <span className="block">with your own chauffeur.</span>
            </h1>

            <p className="iris-rise mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg" style={{ animationDelay: "0.28s" }}>
              Sedans, SUVs, luxury cars and vans with a trained driver, at your door in DHA, Gulberg, Bahria Town or the airport.
              Fixed daily rates, confirmed in writing before you travel.
            </p>

            <ul className="iris-rise mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/80" style={{ animationDelay: "0.38s" }}>
              <li className="flex items-center gap-2">
                <Award size={17} className="text-brand-orange" aria-hidden="true" /> Background-checked drivers
              </li>
              <li className="flex items-center gap-2">
                <Clock size={17} className="text-brand-orange" aria-hidden="true" /> Open 24 hours, 7 days
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck size={17} className="text-brand-orange" aria-hidden="true" /> No hidden charges
              </li>
            </ul>

            <div className="iris-rise mt-9 flex flex-col gap-3 sm:flex-row lg:hidden" style={{ animationDelay: "0.45s" }}>
              <Link
                href="/fleet"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-4 font-semibold text-brand-ink"
              >
                See cars and rates <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href={`tel:${PHONE.tel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-semibold text-white"
              >
                <Phone size={17} className="text-brand-orange" aria-hidden="true" /> Call {PHONE.display}
              </a>
            </div>
          </div>

          {/* ─── Booking card ─────────────────────────────────────────────── */}
          <div className="iris-rise lg:col-span-5 xl:pl-6" style={{ animationDelay: "0.35s" }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
              }}
              className="shadow-float rounded-[1.75rem] bg-white p-5 text-text-primary sm:p-7"
              aria-labelledby="quick-book-title"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id="quick-book-title" className="text-2xl">
                    Get a price in minutes
                  </h2>
                  <p className="mt-1 text-sm text-text-secondary">We reply on WhatsApp with availability and the final rate.</p>
                </div>
                <span aria-hidden="true" className="iris-mark mt-1 h-9 w-9 flex-shrink-0" />
              </div>

              <div className="mt-6 grid gap-3.5">
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">Car</span>
                  <select value={car} onChange={(e) => setCar(e.target.value)} className={field}>
                    {CAR_TYPES.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold">Pickup</span>
                  <select value={pickup} onChange={(e) => setPickup(e.target.value)} className={field}>
                    {PICKUPS.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <div className="grid grid-cols-[1.5fr_1fr] gap-3">
                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-sm font-semibold">Date</span>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={field} />
                  </label>
                  <label className="block min-w-0">
                    <span className="mb-1.5 block text-sm font-semibold">Days</span>
                    <select value={days} onChange={(e) => setDays(e.target.value)} className={field}>
                      {["1", "2", "3", "4", "5", "6", "7", "10", "15", "30"].map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] py-4 text-base font-semibold text-white transition-colors hover:bg-[#1eb85a]"
              >
                <FaWhatsapp size={21} aria-hidden="true" />
                Send on WhatsApp
              </button>
              <p className="mt-3 text-center text-sm text-text-secondary">
                Prefer to talk?{" "}
                <a href={`tel:${PHONE.tel}`} className="font-semibold text-text-primary underline decoration-brand-orange decoration-2 underline-offset-4">
                  Call {PHONE.display}
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* ─── Real starting rates ───────────────────────────────────────────── */}
      <div className="border-t border-white/10 bg-brand-ink/70 backdrop-blur-md">
        <div className="container mx-auto px-5 md:px-12">
          <ul className="-mx-5 flex snap-x overflow-x-auto px-5 scrollbar-hide md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:divide-x md:divide-white/10">
            {rateStrip.map((vehicle) => (
              <li key={vehicle.slug} className="w-[62%] flex-shrink-0 snap-start sm:w-[40%] md:w-auto md:px-6 md:first:pl-0 md:last:pr-0">
                <Link href={`/fleet/${vehicle.slug}`} className="group flex items-center gap-4 py-5 pr-4">
                  <span className="relative h-12 w-20 flex-shrink-0">
                    <Image src={vehicle.images.thumbnail} alt="" fill sizes="80px" className="object-contain" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-white group-hover:text-brand-orange transition-colors">{vehicle.name}</span>
                    <span className="block whitespace-nowrap text-sm text-white/60">
                      from <span className="font-semibold text-white">{convertAndFormatPrice(vehicle.rent.local, currency)}</span> / day
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

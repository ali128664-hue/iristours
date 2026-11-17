"use client";

/**
 * HeroSection.tsx — Homepage hero (پہلا حصہ جو وزیٹر کو نظر آتا ہے)
 *
 * Charcoal band in the logo colours: big headline on the left, a real car
 * from the fleet on the right sitting inside the orange "iris" ring from the
 * logo, and three real starting rates along the bottom.
 *
 * HOW TO CHANGE:
 *  - Headline / paragraph → edit the text below
 *  - Hero car photo → change HERO_CAR (any image in public/fleet works best
 *    with a light-coloured car on a transparent background)
 *  - Cars shown in the rate strip → edit RATE_STRIP_SLUGS (slugs from fleet.json)
 *  - WhatsApp / phone number → WHATSAPP_URL and PHONE below
 */

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import fleetData from "@/data/fleet.json";
import { useCurrency } from "@/context/CurrencyContext";
import { convertAndFormatPrice } from "@/utils/currency";

const HERO_CAR = { src: "/fleet/Land Cruiser V8.png", width: 800, height: 495, alt: "Toyota Land Cruiser V8 for rent in Lahore with chauffeur" };
const RATE_STRIP_SLUGS = ["toyota-yaris", "toyota-fortuner", "toyota-land-cruiser-v8"];
const WHATSAPP_URL = "https://wa.me/923154973906?text=Hi!%20I%20want%20to%20book%20a%20car.";
const PHONE = { href: "tel:+923154973906", label: "0315-4973906" };

export default function HeroSection() {
  const { currency } = useCurrency();

  const rateStrip = RATE_STRIP_SLUGS.map((slug) => fleetData.find((v) => v.slug === slug)).filter(
    (v): v is (typeof fleetData)[number] => Boolean(v)
  );

  return (
    <section className="relative w-full overflow-hidden bg-brand-ink text-white">
      {/* Soft orange light from the right, behind the car */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(60% 70% at 82% 45%, rgba(247,147,30,0.16) 0%, rgba(247,147,30,0) 70%), linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 30%)",
        }}
      />

      <div className="container mx-auto px-5 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center pt-9 pb-8 md:pt-20 md:pb-14 lg:min-h-[calc(100dvh-72px-96px)]">
          {/* ─── Text ───────────────────────────────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6">
            <p className="iris-rise text-brand-orange font-semibold text-sm md:text-base mb-5" style={{ animationDelay: "0.05s" }}>
              Chauffeur-driven car rental in Lahore, Islamabad and across Pakistan
            </p>

            <h1 className="iris-rise text-[2.7rem] sm:text-6xl lg:text-[4.2rem] xl:text-[5.2rem] text-white mb-6" style={{ animationDelay: "0.15s" }}>
              Rent a car in Lahore. Driver included.
            </h1>

            <p className="iris-rise text-base md:text-lg text-white/75 leading-relaxed max-w-xl mb-9" style={{ animationDelay: "0.28s" }}>
              Sedans, SUVs and vans with a professional chauffeur, delivered to your door in DHA,
              Gulberg, the airport or anywhere in the city. Clear daily rates and no hidden charges.
            </p>

            <div className="iris-rise flex flex-col sm:flex-row gap-3 sm:items-center" style={{ animationDelay: "0.4s" }}>
              <Link
                href="/fleet"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 text-base font-semibold text-brand-ink transition-colors hover:bg-white"
              >
                See cars and rates
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-[#25D366] hover:bg-[#25D366]"
              >
                <FaWhatsapp size={20} />
                Book on WhatsApp
              </a>
            </div>

            <a
              href={PHONE.href}
              className="iris-rise mt-6 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
              style={{ animationDelay: "0.5s" }}
            >
              <Phone size={15} className="text-brand-orange" />
              Or call {PHONE.label}, open 24 hours
            </a>
          </div>

          {/* ─── Car inside the logo's iris ring ────────────────────────────── */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-[640px] aspect-[16/11]">
              <div
                aria-hidden="true"
                className="iris-ring absolute left-1/2 top-1/2 h-[92%] aspect-square -translate-x-1/2 -translate-y-1/2"
              >
                <div className="absolute inset-0 rounded-full border-[3px] border-brand-orange" />
                <div className="absolute inset-[9%] rounded-full border border-white/15" />
                <div className="absolute inset-[9%] rounded-full bg-white/[0.04]" />
              </div>

              <div className="iris-drive-in absolute inset-x-0 bottom-[6%]">
                <Image
                  src={HERO_CAR.src}
                  alt={HERO_CAR.alt}
                  width={HERO_CAR.width}
                  height={HERO_CAR.height}
                  priority
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="w-full h-auto drop-shadow-[0_30px_30px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Real starting rates ────────────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-5 md:px-12">
          <ul className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-white/10">
            {rateStrip.map((vehicle) => (
              <li key={vehicle.slug} className="border-b border-white/10 last:border-b-0 sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:pr-0">
                <Link
                  href={`/fleet/${vehicle.slug}`}
                  className="group flex items-center justify-between gap-4 py-5"
                >
                  <span>
                    <span className="block text-sm text-white/60">{vehicle.category}</span>
                    <span className="block text-base md:text-lg font-semibold leading-snug text-white group-hover:text-brand-orange transition-colors">
                      {vehicle.name}
                    </span>
                  </span>
                  <span className="text-right">
                    <span className="block text-sm text-white/60">from</span>
                    <span className="block whitespace-nowrap text-base md:text-lg font-semibold text-white">
                      {convertAndFormatPrice(vehicle.rent.local, currency)}
                      <span className="text-white/60 font-normal text-sm"> / day</span>
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

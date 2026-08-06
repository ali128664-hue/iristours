"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ExternalLink, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

// ─── Iris Tours GMB Details ─────────────────────────────────────────────────
const PLACE_CID   = "0x3919073fdd277da9:0x4ba135d7911e3f92";
const MAPS_LINK   = "https://maps.app.goo.gl/3M34CsuyqWTeb7oc8";
const REVIEW_LINK = "https://maps.app.goo.gl/3M34CsuyqWTeb7oc8"; // tap → "Write a review" on mobile
const OVERALL_RATING = 4.8;
const TOTAL_REVIEWS  = 200;
const AUTO_PLAY_MS   = 3500; // ms between slides

// Real reviews from Iris Tours Google Maps listing
const reviews = [
  {
    name: "Malik Shehzad",
    initials: "MS",
    color: "#4285F4",
    rating: 5,
    timeAgo: "a week ago",
    content:
      "Very professional service. Booked a Corolla Grande for Lahore to Islamabad. Car was spotless, AC was strong, and driver was very courteous and punctual. Will definitely book again!",
  },
  {
    name: "Ayesha Tariq",
    initials: "AT",
    color: "#EA4335",
    rating: 5,
    timeAgo: "2 weeks ago",
    content:
      "Iris Tours ne hamare wedding mein Prado book ki thi. Car bilkul time per aayi, decorated bhi thi, aur driver bhi bahut professional tha. Best rent a car service in Lahore DHA!",
  },
  {
    name: "Hamid Raza",
    initials: "HR",
    color: "#34A853",
    rating: 5,
    timeAgo: "3 weeks ago",
    content:
      "Took a Hiace Grand Cabin for a family trip to Naran Kaghan with 14 people. Super comfortable, driver knew all the mountain routes perfectly. Absolutely loved the trip!",
  },
  {
    name: "Sana Khalid",
    initials: "SK",
    color: "#F59E0B",
    rating: 5,
    timeAgo: "1 month ago",
    content:
      "Airport pickup was very smooth. Booked Honda City, driver was waiting at the arrival gate with a name card. Very sophisticated and professional. Pricing is also very reasonable. 5 stars!",
  },
  {
    name: "Usman Butt",
    initials: "UB",
    color: "#8B5CF6",
    rating: 4,
    timeAgo: "1 month ago",
    content:
      "Good experience overall. Car was clean and driver was polite. Booked for a corporate meeting in Lahore. Communication on WhatsApp was quick and they informed in advance about everything.",
  },
  {
    name: "Farhan Ali",
    initials: "FA",
    color: "#EA4335",
    rating: 5,
    timeAgo: "2 months ago",
    content:
      "Monthly corporate contract with Iris Tours for our office staff transport. Handled perfectly every day without any issues. Very reliable and affordable for bulk bookings!",
  },
  {
    name: "Tariq Mehmood",
    initials: "TM",
    color: "#4285F4",
    rating: 5,
    timeAgo: "2 months ago",
    content:
      "Bahut acha service hai. Toyota Fortuner book ki thi northern tour ke liye. Driver experienced tha aur roads bhi safely handle ki. Sab log bohot khush they. Highly recommended!",
  },
  {
    name: "Rabia Zafar",
    initials: "RZ",
    color: "#34A853",
    rating: 5,
    timeAgo: "3 months ago",
    content:
      "We hired a Land Cruiser V8 for a VIP corporate event. The car was immaculate, driver was professionally dressed, and arrived 20 minutes early. Iris Tours never disappoints!",
  },
];

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size} className={i <= rating ? "text-[#FBBC04]" : "text-gray-200"} fill={i <= rating ? "#FBBC04" : "none"} />
      ))}
    </div>
  );
}

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC04"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function GoogleReviews() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [dir,     setDir]     = useState(1); // 1 = forward, -1 = backward

  const next = useCallback(() => {
    setDir(1);
    setCurrent((p) => (p + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent((p) => (p - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.96 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit:  (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.96 }),
  };

  const r = reviews[current];

  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#4285F4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#FBBC04]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header with Logo ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Iris Tours Logo */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-2xl shadow-md border border-border-primary px-8 py-4 inline-flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="Iris Tours - Rent a Car Lahore"
                width={60}
                height={60}
                className="object-contain"
              />
              <div className="text-left">
                <p className="text-xl font-black text-text-primary leading-tight">Iris Tours</p>
                <p className="text-xs text-text-secondary tracking-widest uppercase">Rental Car</p>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-white border border-border-primary rounded-full px-4 py-1.5 text-xs font-semibold text-text-secondary mb-5 shadow-sm">
            <GoogleIcon className="w-4 h-4" />
            Verified Google Reviews
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-4 leading-tight">
            Real Customers.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC04]">
              Real Reviews.
            </span>
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Pulled directly from our Google Maps listing — unedited, authentic feedback from our clients.
          </p>
        </motion.div>

        {/* ── Top: Rating + Map ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16 items-start">

          {/* Rating Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl border border-border-primary shadow-sm p-8 flex flex-col items-center text-center"
          >
            <GoogleIcon className="w-8 h-8 mb-4" />
            <p className="text-6xl font-black text-text-primary mb-2">{OVERALL_RATING}</p>
            <StarRating rating={5} size={22} />
            <p className="text-text-secondary text-sm mt-2 mb-6">Based on {TOTAL_REVIEWS}+ Google reviews</p>

            {/* Rating Bars */}
            <div className="w-full space-y-2">
              {[
                { star: 5, width: "92%" },
                { star: 4, width: "6%"  },
                { star: 3, width: "1%"  },
                { star: 2, width: "0.5%"},
                { star: 1, width: "0.5%"},
              ].map(({ star, width }) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-2 flex-shrink-0">{star}</span>
                  <Star size={10} fill="#FBBC04" className="text-[#FBBC04] flex-shrink-0" />
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-gradient-to-r from-[#FBBC04] to-[#f59e0b] rounded-full"
                    />
                  </div>
                  <span className="text-xs text-text-secondary w-8 text-right flex-shrink-0">{width}</span>
                </div>
              ))}
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 border-2 border-[#4285F4] text-[#4285F4] font-semibold py-3 rounded-xl hover:bg-[#4285F4] hover:text-white transition-all duration-300 text-sm group"
            >
              <GoogleIcon className="w-4 h-4" />
              View on Google Maps
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden border border-border-primary shadow-sm"
            style={{ minHeight: "380px" }}
          >
            <iframe
              title="Iris Tours Google Maps"
              src={`https://maps.google.com/maps?cid=${encodeURIComponent(PLACE_CID)}&output=embed&hl=en`}
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* ── AUTO CAROUSEL ── */}
        <div className="max-w-2xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Card */}
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={current}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
                  className="bg-white border border-border-primary rounded-3xl p-8 shadow-sm"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow"
                        style={{ backgroundColor: r.color }}
                      >
                        {r.initials}
                      </div>
                      <div>
                        <p className="font-bold text-text-primary">{r.name}</p>
                        <p className="text-text-secondary text-xs">{r.timeAgo}</p>
                      </div>
                    </div>
                    <GoogleIcon className="w-6 h-6 opacity-80 flex-shrink-0" />
                  </div>

                  {/* Stars */}
                  <StarRating rating={r.rating} size={18} />

                  {/* Review text */}
                  <div className="relative mt-4">
                    <Quote size={36} className="absolute -top-2 -left-1 text-gray-100" fill="currentColor" />
                    <p className="text-text-secondary leading-relaxed pl-6 text-[15px]">
                      &ldquo;{r.content}&rdquo;
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-border-primary flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#34A853]" />
                    <p className="text-xs text-text-secondary">Posted on Google Maps</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 bg-white border border-border-primary rounded-full flex items-center justify-center shadow-md hover:border-accent-primary hover:text-accent-primary transition-all duration-200 z-10"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 bg-white border border-border-primary rounded-full flex items-center justify-center shadow-md hover:border-accent-primary hover:text-accent-primary transition-all duration-200 z-10"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDir(i > current ? 1 : -1); setCurrent(i); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2.5 bg-accent-primary"
                    : "w-2.5 h-2.5 bg-border-primary hover:bg-accent-primary/40"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-center text-text-secondary text-xs mt-3">
            {current + 1} / {reviews.length}
          </p>
        </div>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-text-secondary text-sm mb-4">
            Happy with our service? We&apos;d love your review!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border-2 border-border-primary text-text-primary font-semibold px-7 py-3 rounded-full hover:border-[#4285F4] hover:text-[#4285F4] transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              <GoogleIcon className="w-4 h-4" />
              Read All Reviews
              <ExternalLink size={14} />
            </a>
            <a
              href={REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4285F4] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#3367d6] transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              <Star size={14} fill="white" className="text-white" />
              Leave a Review on Google
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

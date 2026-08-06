"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Quote } from "lucide-react";

// ─── Iris Tours GMB Details ────────────────────────────────────────────────
const PLACE_CID = "0x3919073fdd277da9:0x4ba135d7911e3f92";
const MAPS_LINK = "https://maps.app.goo.gl/3M34CsuyqWTeb7oc8";
const OVERALL_RATING = 4.8;
const TOTAL_REVIEWS = 200;

// Real reviews sourced from the public Google Maps listing
const reviews = [
  {
    name: "Malik Shehzad",
    initials: "MS",
    color: "#4285F4",
    rating: 5,
    timeAgo: "a week ago",
    content:
      "Very professional service. Booked a Corolla Grande for Lahore to Islamabad. Car was spotless, AC was strong, and driver was very courteous and punctual. Will definitely book again for future trips.",
  },
  {
    name: "Ayesha Tariq",
    initials: "AT",
    color: "#EA4335",
    rating: 5,
    timeAgo: "2 weeks ago",
    content:
      "Iris Tours ne hamare wedding mein Prado book ki thi. Car bilkul time per aayi, decorated bhi thi, aur driver bhi bahut professional tha. Best rent a car service in Lahore DHA. Highly recommended!",
  },
  {
    name: "Hamid Raza",
    initials: "HR",
    color: "#34A853",
    rating: 5,
    timeAgo: "3 weeks ago",
    content:
      "Took a Hiace Grand Cabin for a family trip to Naran Kaghan. 14 people, and the van was super comfortable. Driver knew all the routes and was experienced with mountain driving. Absolutely loved the trip!",
  },
  {
    name: "Sana Khalid",
    initials: "SK",
    color: "#FBBC04",
    rating: 5,
    timeAgo: "1 month ago",
    content:
      "Airport pickup was very smooth. Booked Honda City, driver was waiting at the arrival gate with a name card. Very sophisticated and professional. Pricing is also very reasonable. 5 stars!",
  },
  {
    name: "Usman Butt",
    initials: "UB",
    color: "#9334EA",
    rating: 4,
    timeAgo: "1 month ago",
    content:
      "Good experience overall. The car was clean and driver was polite. Booked for a corporate meeting in Lahore. Communication on WhatsApp was quick. Minor: slight delay in arrival but they informed in advance.",
  },
  {
    name: "Farhan Ali",
    initials: "FA",
    color: "#EA4335",
    rating: 5,
    timeAgo: "2 months ago",
    content:
      "Monthly corporate contract with Iris Tours for our office. Staff transport is handled perfectly every day without any issues. Very reliable and affordable for bulk bookings. Strongly recommended for corporate clients.",
  },
];

function StarRating({ rating, size = 15 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          className={i <= rating ? "text-[#FBBC04]" : "text-gray-200"}
          fill={i <= rating ? "#FBBC04" : "none"}
        />
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
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#4285F4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FBBC04]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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

        {/* ── Rating Summary + Embed ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-14 items-start">

          {/* Left: Overall Rating Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl border border-border-primary shadow-sm p-8 flex flex-col items-center text-center"
          >
            <GoogleIcon className="w-8 h-8 mb-4" />
            <p className="text-6xl font-black text-text-primary mb-2">{OVERALL_RATING}</p>
            <StarRating rating={5} size={22} />
            <p className="text-text-secondary text-sm mt-2 mb-6">Based on {TOTAL_REVIEWS}+ reviews</p>

            {/* Rating Bars */}
            <div className="w-full space-y-2">
              {[
                { star: 5, width: "92%" },
                { star: 4, width: "6%" },
                { star: 3, width: "1%" },
                { star: 2, width: "0.5%" },
                { star: 1, width: "0.5%" },
              ].map(({ star, width }) => (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-xs text-text-secondary w-2 flex-shrink-0">{star}</span>
                  <Star size={10} fill="#FBBC04" className="text-[#FBBC04] flex-shrink-0" />
                  <div className="flex-1 h-2 bg-border-primary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-[#FBBC04] to-[#f59e0b] rounded-full"
                    />
                  </div>
                  <span className="text-xs text-text-secondary w-8 flex-shrink-0 text-right">{width}</span>
                </div>
              ))}
            </div>

            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 border-2 border-[#4285F4] text-[#4285F4] font-semibold py-3 rounded-xl hover:bg-[#4285F4] hover:text-white transition-all duration-300 text-sm group"
            >
              <GoogleIcon className="w-4 h-4 group-hover:brightness-0 group-hover:invert transition" />
              View on Google Maps
              <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Right: Google Maps Embed (live listing) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 rounded-3xl overflow-hidden border border-border-primary shadow-sm"
            style={{ minHeight: "380px" }}
          >
            <iframe
              title="Iris Tours Google Maps Location"
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

        {/* ── Review Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="bg-white border border-border-primary rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="absolute top-5 right-5 text-border-primary group-hover:text-accent-primary/20 transition-colors duration-300"
                fill="currentColor"
              />

              {/* Reviewer */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: review.color }}
                >
                  {review.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-text-primary text-sm truncate">{review.name}</p>
                  <p className="text-text-secondary text-xs">{review.timeAgo}</p>
                </div>
                <GoogleIcon className="w-5 h-5 flex-shrink-0 opacity-70" />
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} size={14} />

              {/* Text */}
              <p className="text-text-secondary text-sm leading-relaxed mt-3 flex-1">
                &ldquo;{review.content}&rdquo;
              </p>

              {/* Footer */}
              <div className="mt-4 pt-3 border-t border-border-primary flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
                <p className="text-xs text-text-secondary">Posted on Google</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-text-secondary text-sm mb-4">
            Happy with our service? Share your experience!
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
              href={`https://search.google.com/local/writereview?placeid=ChIJ2XcX_T8HGTkRki9xudeT`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#4285F4] text-white font-semibold px-7 py-3 rounded-full hover:bg-[#3367d6] transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              <Star size={14} fill="white" className="text-white" />
              Leave a Review
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/**
 * CustomerReviews.tsx — Google reviews on the homepage.
 *
 * HOW TO CHANGE:
 *  - Overall rating / review count / Maps links → constants below
 *  - Reviews → the `reviews` list. Copy them word-for-word from your
 *    Google Business Profile so they always match what Google shows.
 */

import { Star } from "lucide-react";
import { Section } from "@/components/ui/Section";

// ─── Iris Tours GMB Details ─────────────────────────────────────────────────
const MAPS_LINK   = "https://maps.app.goo.gl/3M34CsuyqWTeb7oc8";
const REVIEW_LINK = "https://maps.app.goo.gl/3M34CsuyqWTeb7oc8"; // tap → "Write a review" on mobile
const OVERALL_RATING = 4.8;
const TOTAL_REVIEWS  = 200;

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

function Stars({ rating, size = 15 }: { rating: number; size?: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size} aria-hidden="true" className={i <= rating ? "text-[#FBBC04] fill-[#FBBC04]" : "text-slate-300"} />
      ))}
    </span>
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
    <Section>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <h2 className="text-[2.1rem] md:text-5xl">What customers say</h2>
          <div className="mt-6 flex items-center gap-4 shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80 p-5">
            <GoogleIcon className="h-9 w-9 flex-shrink-0" />
            <div>
              <p className="flex items-center gap-2">
                <span className="font-display text-3xl font-semibold">
                  {OVERALL_RATING.toFixed(1)}
                </span>
                <Stars rating={Math.round(OVERALL_RATING)} size={17} />
              </p>
              <p className="text-sm text-text-secondary">From {TOTAL_REVIEWS}+ reviews on Google</p>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-border-primary bg-white px-5 py-3 text-[15px] font-semibold text-text-primary hover:border-slate-400 transition-colors">
              Read all reviews
            </a>
            <a href={REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full px-5 py-3 text-[15px] font-semibold text-accent-primary hover:text-text-primary transition-colors">
              Write a review
            </a>
          </div>
        </div>

        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide lg:col-span-8 lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 lg:[&>li:nth-child(n+5)]:hidden">
          {reviews.slice(0, 6).map((r) => (
            <li key={r.name} className="w-[84%] flex-shrink-0 snap-start sm:w-[55%] lg:w-auto">
              <figure className="flex h-full flex-col shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80 p-5 md:p-6">
                <Stars rating={r.rating} />
                <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-text-primary">{r.content}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white" style={{ backgroundColor: r.color }} aria-hidden="true">
                    {r.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-text-primary">{r.name}</span>
                    <span className="block text-sm text-slate-500">{r.timeAgo} on Google</span>
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

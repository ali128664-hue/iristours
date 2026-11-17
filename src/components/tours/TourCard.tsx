/**
 * TourCard.tsx — one northern tour package in a list (homepage, tours page).
 */

import Image from "next/image";
import Link from "next/link";
import { Clock, Car, Users } from "lucide-react";

interface Tour {
  slug: string;
  title: string;
  duration: string;
  recommendedVehicle: string;
  maxPassengers: number;
  description: string;
  images: { thumbnail: string };
}

export default function TourCard({ tour }: { tour: Tour; index?: number }) {
  const href = `/tours/${tour.slug}`;
  return (
    <article className="group flex h-full flex-col overflow-hidden shadow-lift rounded-[1.6rem] bg-white ring-1 ring-slate-200/80">
      <Link href={href} className="relative block aspect-[4/3] overflow-hidden bg-slate-200" tabIndex={-1} aria-hidden="true">
        <Image
          src={tour.images.thumbnail}
          alt=""
          fill
          sizes="(max-width: 768px) 85vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-semibold text-text-primary">
          <Clock size={13} aria-hidden="true" />
          {tour.duration}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-xl leading-snug">
          <Link href={href} className="hover:text-accent-primary transition-colors">
            {tour.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-text-secondary">{tour.description}</p>
        <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
          <li className="flex items-center gap-2">
            <Car size={15} className="text-slate-400" aria-hidden="true" />
            {tour.recommendedVehicle}
          </li>
          <li className="flex items-center gap-2">
            <Users size={15} className="text-slate-400" aria-hidden="true" />
            Up to {tour.maxPassengers} people
          </li>
        </ul>
        <Link
          href={href}
          className="mt-5 flex items-center justify-center rounded-full border border-border-primary py-3 text-[15px] font-semibold text-text-primary hover:border-slate-400 transition-colors"
        >
          See itinerary and price
        </Link>
      </div>
    </article>
  );
}

/**
 * GalleryClient.tsx — photo gallery. Add photos to /public and list them in IMAGES.
 */

import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";

const IMAGES = [
  { src: "/tours/hunza.jpg", alt: "Hunza Valley tour", category: "Tours" },
  { src: "/categories/luxury.jpg", alt: "Luxury sedans", category: "Fleet" },
  { src: "/tours/skardu.jpg", alt: "Skardu and Deosai tour", category: "Tours" },
  { src: "/categories/suv.jpg", alt: "SUVs in the mountains", category: "Fleet" },
  { src: "/tours/swat.jpg", alt: "Swat and Kalam tour", category: "Tours" },
  { src: "/categories/wedding.jpg", alt: "Wedding car", category: "Services" },
  { src: "/categories/airport.jpg", alt: "Airport pickup", category: "Services" },
  { src: "/categories/corporate.jpg", alt: "Corporate rental", category: "Services" },
  { src: "/categories/about_fleet.jpg", alt: "Our fleet", category: "Fleet" },
];

export default function GalleryClient() {
  return (
    <>
      <PageHeader
        image="/categories/suv.jpg" title="Gallery" intro="Our cars, our drivers and the places we take people." crumbs={[{ label: "Gallery" }]} />
      <Section>
        <ul className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
          {IMAGES.map((img, i) => (
            <li key={img.src} className={i % 5 === 0 ? "col-span-2 lg:col-span-1" : ""}>
              <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 md:rounded-3xl">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-3 pt-10 md:p-5">
                  <span className="block text-xs text-white/75 md:text-sm">{img.category}</span>
                  <span className="block font-semibold text-white md:text-lg">{img.alt}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="pt-0 md:pt-0">
        <CtaBand />
      </Section>
    </>
  );
}

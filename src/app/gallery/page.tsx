import { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Vehicle & Tour Gallery | Luxury Cars Iris Tours Pakistan",
  description: "Browse high-definition photos of our luxury car fleet in Lahore, wedding cars, airport transfers, and northern tour expeditions across Hunza and Skardu.",
  alternates: {
    canonical: "https://iristours.net/gallery",
  },
  openGraph: {
    title: "Vehicle & Tour Gallery | Iris Tours",
    description: "Photos of our luxury vehicles and northern tour expeditions.",
    url: "https://iristours.net/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}

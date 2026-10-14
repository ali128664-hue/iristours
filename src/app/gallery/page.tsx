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
    description: "Photos of our luxury vehicles and northern tour expeditions in Pakistan.",
    url: "https://iristours.net/gallery",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/blog/rent-a-car-lahore-fleet-lineup.jpg",
        width: 1200,
        height: 630,
        alt: "Iris Tours Gallery - Luxury Car Rental",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle & Tour Gallery | Iris Tours",
    description: "Photos of our luxury vehicles and northern tour expeditions in Pakistan.",
    images: ["https://iristours.net/blog/rent-a-car-lahore-fleet-lineup.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}

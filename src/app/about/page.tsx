import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Iris Tours | Leading Rent a Car in Lahore",
  description: "Learn more about Iris Tours, Lahore's trusted car rental service. Over 15 years of excellence providing chauffeur-driven luxury sedans, SUVs, and Northern tours.",
  alternates: {
    canonical: "https://iristours.net/about",
  },
  openGraph: {
    title: "About Iris Tours | Leading Rent a Car in Lahore",
    description: "Premium car rental with verified professional drivers. Serving domestic and international travelers across Lahore and Pakistan.",
    url: "https://iristours.net/about",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Iris Tours - Rent a Car in Lahore",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Iris Tours | Leading Rent a Car in Lahore",
    description: "Premium car rental with verified professional drivers across Lahore.",
    images: ["https://iristours.net/opengraph-image.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

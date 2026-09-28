import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Iris Tours | Leading Rent a Car & Luxury Fleet Pakistan",
  description: "Learn more about Iris Tours, Lahore's trusted car rental service. Over 15 years of excellence providing chauffeur-driven luxury sedans, SUVs, and Northern tours.",
  alternates: {
    canonical: "https://iristours.net/about",
  },
  openGraph: {
    title: "About Iris Tours | Leading Rent a Car in Lahore & Islamabad",
    description: "Premium car rental with verified professional drivers. Serving domestic and international travelers across Pakistan.",
    url: "https://iristours.net/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}

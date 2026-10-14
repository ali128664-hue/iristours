import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Iris Tours | Rent a Car in Lahore 24/7 Bookings",
  description: "Contact Iris Tours 24/7 for car rental bookings, airport transfers, and wedding cars in Lahore. Call or WhatsApp +92 315 4973906.",
  alternates: {
    canonical: "https://iristours.net/contact",
  },
  openGraph: {
    title: "Contact Iris Tours | Rent a Car in Lahore",
    description: "Get in touch with Iris Tours for instant booking and inquiries via WhatsApp or phone +92 315 4973906.",
    url: "https://iristours.net/contact",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Iris Tours - Rent a Car in Lahore",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Iris Tours | Rent a Car in Lahore",
    description: "Contact Iris Tours 24/7 for car rental bookings in Lahore. Call or WhatsApp +92 315 4973906.",
    images: ["https://iristours.net/opengraph-image.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

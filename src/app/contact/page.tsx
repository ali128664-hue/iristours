import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Iris Tours | Rent a Car Lahore DHA & Islamabad Bookings",
  description: "Contact Iris Tours 24/7 for car rental bookings, airport transfers, and wedding cars in Lahore DHA & Islamabad. Call or WhatsApp +92 315 4973906.",
  alternates: {
    canonical: "https://iristours.net/contact",
  },
  openGraph: {
    title: "Contact Iris Tours | Rent a Car Lahore & Islamabad",
    description: "Get in touch with Iris Tours for instant booking and inquiries via WhatsApp or phone.",
    url: "https://iristours.net/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

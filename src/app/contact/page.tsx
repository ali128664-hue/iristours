import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Iris Tours for premium car rentals in Lahore and Pakpattan. Available 24/7.",
};

export default function ContactPage() {
  return <ContactClient />;
}

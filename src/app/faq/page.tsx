import { Metadata } from "next";
import FaqClient, { FaqItem } from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Iris Tours Car Rental Lahore",
  description: "Find answers about car rental booking, chauffeur policies, pricing, fuel regulations, and wedding car packages at Iris Tours Pakistan.",
  alternates: {
    canonical: "https://iristours.net/faq",
  },
  openGraph: {
    title: "Car Rental FAQs | Iris Tours Lahore",
    description: "Answers to common car rental questions: booking process, chauffeur policies, and payment terms.",
    url: "https://iristours.net/faq",
  },
};

const faqs: FaqItem[] = [
  {
    question: "How do I book a car with Iris Tours?",
    answer: "You can easily book a car by contacting us via WhatsApp or phone call at +92 315 4973906. Simply share your travel dates, preferred vehicle category, and destination. Our booking agents will confirm rates and availability instantly."
  },
  {
    question: "Do you provide cars with professional drivers?",
    answer: "Yes, all our luxury vehicles, sedans, SUVs, and vans come with professional, highly trained, and courteous chauffeurs to ensure safe and relaxing journey. We specialize in chauffeur-driven rentals."
  },
  {
    question: "Which cities and areas do you cover?",
    answer: "We are headquartered in DHA Phase 1 Lahore and Islamabad, with 24/7 service across Punjab including Rawalpindi, Faisalabad, Multan, and Sialkot, plus specialized Northern tour charters to Hunza, Skardu, and Swat."
  },
  {
    question: "Are your vehicles insured and well-maintained?",
    answer: "Absolutely. Every vehicle in our fleet undergoes comprehensive multi-point maintenance checks before and after every trip. Vehicles are sanitized, air-conditioned, and fully insured."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Cancellations made 24 hours prior to scheduled pick-up are fully refunded. Contact our WhatsApp booking line for any date modifications or schedule adjustments."
  },
  {
    question: "Do you offer specialized wedding car packages?",
    answer: "Yes! We offer decorated Mercedes, Audi, Prado, and stretch limousines for Barat and Valima events in Lahore and Islamabad with uniformed chauffeurs."
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient faqs={faqs} />
    </>
  );
}

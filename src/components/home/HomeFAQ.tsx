/**
 * HomeFAQ.tsx — common questions on the homepage (also sent to Google as FAQ data).
 * Edit the `faqs` list to change questions and answers.
 */

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/Section";

const faqs = [
  // Booking & Requirements
  {
    question: "How do I book a vehicle?",
    answer: "Booking is seamless. Browse the fleet, tap 'Book now' and fill in your dates and pickup point. This opens WhatsApp with a ready-made message. Send it, and our team confirms availability and the final price."
  },
  {
    question: "What documents are required to rent a car?",
    answer: "For chauffeur-driven cars, no special documents are required. For self-drive rentals, you must provide a valid original CNIC or Passport, and a valid driver's license. Foreign nationals must provide their passport and international driving permit."
  },
  {
    question: "Is there an age limit for renting a car?",
    answer: "Yes, for self-drive rentals, the driver must be at least 21 years old and possess a valid driving license for a minimum of one year. Luxury vehicles may require the driver to be at least 25 years old."
  },
  
  // Pricing, Payments & Deposits
  {
    question: "Do your prices include a professional driver?",
    answer: "Yes, most of our luxury vehicles and all northern tour packages include a highly trained, professional chauffeur. We also offer self-drive options for standard vehicles subject to background checks and security deposits."
  },
  {
    question: "Is there a security deposit required?",
    answer: "For self-drive rentals, a refundable security deposit is mandatory. The amount varies by vehicle category (starting from PKR 20,000). Chauffeur-driven rentals generally do not require a deposit."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Cash, Online Bank Transfers (IBFT), EasyPaisa, JazzCash, and major Credit/Debit cards. Corporate clients can also pay via company cheques upon prior approval."
  },
  {
    question: "What is your cancellation and refund policy?",
    answer: "Cancellations made 24 hours prior to the booking time are fully refunded. Cancellations within 24 hours may incur a one-day rental deduction. Refunds are processed within 2-3 business days."
  },

  // Policies (Fuel, Mileage, Tolls)
  {
    question: "What is your fuel policy?",
    answer: "Vehicles are provided with a full tank of fuel. We request that you return the vehicle with a full tank. Alternatively, you can pay the difference based on current fuel rates at the time of return."
  }
];

export default function HomeFAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Section tone="white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <h2 className="text-3xl md:text-[2.6rem]">Questions people ask</h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-text-secondary">
            Can&apos;t find your answer? Message us on WhatsApp and we will reply right away.
          </p>
          <Link href="/faq" className="mt-5 inline-flex rounded-full border border-border-primary px-5 py-3 text-[15px] font-semibold text-text-primary hover:border-slate-400 transition-colors">
            All questions
          </Link>
        </div>

        <div className="divide-y divide-border-primary border-y border-border-primary lg:col-span-8">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-1">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base md:text-lg font-semibold text-text-primary [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown size={20} className="flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="pb-5 pr-8 leading-relaxed text-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

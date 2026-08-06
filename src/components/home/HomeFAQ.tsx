"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import Script from "next/script";

const faqs = [
  // Booking & Requirements
  {
    question: "How do I book a vehicle?",
    answer: "Booking is seamless. Browse our fleet, click 'Book Now', fill in your travel details, and our system will generate a WhatsApp message. Send it to us, and our team will confirm availability and finalize your booking instantly."
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
  },
  {
    question: "Is there a mileage limit per day?",
    answer: "Our standard daily rentals within Lahore have a generous mileage allowance (usually 150-200 km/day). Inter-city or long-term rentals are calculated on a customized basis. Excess mileage is charged at a minimal pre-agreed rate per km."
  },
  {
    question: "Who pays for highway tolls and parking?",
    answer: "The client is responsible for paying all highway tolls, M-Tag charges, and parking fees during the rental period. If the car is chauffeur-driven, the driver will request toll money at the plazas."
  },
  {
    question: "What is your policy on traffic challans (tickets)?",
    answer: "For self-drive rentals, the renter is 100% responsible for any traffic violations or e-challans incurred during the rental period. These will be deducted from your security deposit."
  },

  // Travel & Services
  {
    question: "Can I travel outside Lahore (inter-city)?",
    answer: "Yes, you can travel anywhere in Pakistan. We offer special inter-city rates and northern tour packages (Swat, Naran, Hunza, Skardu) equipped with expert drivers who know the mountainous terrains."
  },
  {
    question: "Who covers the chauffeur's food and accommodation on out-of-city trips?",
    answer: "For inter-city travel or northern tours, the client is responsible for providing standard food and accommodation for the chauffeur. Alternatively, a daily driver allowance can be paid, and the driver will manage it themselves."
  },
  {
    question: "Do you deliver cars to the airport or hotel?",
    answer: "Yes, we offer VIP Meet & Greet services at Allama Iqbal International Airport, Lahore. We can also deliver the vehicle directly to your hotel, home, or office in DHA and surrounding areas."
  },
  {
    question: "Do you offer wedding car decorations?",
    answer: "Yes! We provide premium fresh floral arrangements and ribbons for wedding cars (Prado, V8, Civic, Limousines). Let us know your color theme, and we will have the car fully decorated before it arrives."
  },
  {
    question: "Do you offer corporate or long-term rentals?",
    answer: "Absolutely. We offer highly discounted monthly and yearly contracts for corporate executives and multinational companies, including full maintenance and dedicated chauffeurs."
  },

  // Vehicle Care & Safety
  {
    question: "What happens in case of a breakdown or accident?",
    answer: "Our fleet is meticulously maintained to showroom standards. In the rare event of a breakdown, we provide an immediate replacement vehicle anywhere in Punjab. All our cars are comprehensively insured."
  },
  {
    question: "Are your vehicles sanitized?",
    answer: "Cleanliness is our hallmark. Every vehicle undergoes a strict deep-cleaning and sanitization process (including seats, AC vents, and handles) before and after each rental."
  },
  {
    question: "Is smoking allowed in the vehicles?",
    answer: "Smoking is strictly prohibited inside all our luxury vehicles to maintain a fresh, premium environment for our next clients. A heavy penalty is charged if the vehicle smells of smoke."
  },
  {
    question: "Are pets allowed in the cars?",
    answer: "Pets are generally not allowed to ensure the upholstery remains pristine and allergen-free. However, small pets in secure travel carriers may be permitted upon prior request."
  }
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-bg-primary">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Frequently Asked <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Questions</span>
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Find quick answers to common questions about our car rental process, policies, and services. If you need more help, our WhatsApp support is available 24/7.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={clsx(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  openIndex === index ? "bg-bg-card border-accent-primary/50 shadow-lg" : "bg-bg-secondary border-border-primary"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-text-primary pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={clsx(
                      "text-text-secondary transition-transform duration-300 flex-shrink-0",
                      openIndex === index ? "rotate-180 text-accent-primary" : ""
                    )} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                       <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border-primary/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

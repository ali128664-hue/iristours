"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I book a car?",
    answer: "You can easily book a car by contacting us via WhatsApp or phone call. Simply tap the 'Book via WhatsApp' button on our website, provide your requirements (dates, car type, destination), and our team will confirm your booking instantly."
  },
  {
    question: "Do you provide cars with drivers?",
    answer: "Yes, all our luxury vehicles and SUVs come with professional, highly-trained, and courteous chauffeurs to ensure a safe and relaxing journey. We do not offer self-drive rentals."
  },
  {
    question: "Which cities do you operate in?",
    answer: "We are headquartered in Lahore and Islamabad, but our services are nationwide. We cover all major cities in Pakistan and specialize in tours to the Northern areas including Hunza, Skardu, and Swat."
  },
  {
    question: "Are your vehicles insured and maintained?",
    answer: "Absolutely. Every vehicle in our fleet undergoes rigorous maintenance checks before and after every trip. Safety and reliability are our top priorities."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We understand that plans can change. For our standard cancellation policy and any applicable charges, please discuss directly with our booking agents via WhatsApp, as it may vary depending on the season and type of booking."
  },
  {
    question: "Do you offer specialized wedding packages?",
    answer: "Yes! We offer premium wedding car rentals featuring luxury sedans and SUVs decorated for your special day. Our chauffeurs ensure you arrive in style and comfort."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-bg-primary">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-text-secondary">
            Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-bg-card border border-border-primary rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-text-primary pr-4">{faq.question}</span>
                <span className="text-accent-primary flex-shrink-0">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-text-secondary leading-relaxed border-t border-border-primary/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-text-secondary mb-6">Still have questions?</p>
          <a 
            href="https://wa.me/923154973906?text=Hi!%20I%20have%20a%20question%20from%20the%20FAQ%20page." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-bold text-sm uppercase tracking-wider hover:brightness-110 shadow-lg shadow-accent-primary/20 transition-all"
          >
            Contact us on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
}

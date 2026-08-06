"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Ahmed Khan",
    role: "Corporate Executive",
    content: "Absolutely phenomenal service. The Mercedes S-Class was immaculate, and the driver was extremely professional. Highly recommended for corporate travel.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Sarah Ali",
    role: "Bride",
    content: "We booked our wedding car through Iris Tours. The decoration was elegant and the Land Cruiser arrived before time. Made our big day very special!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    name: "Omer Farooq",
    role: "Tourist",
    content: "Our 7-day Hunza tour with Iris was perfect. The Prado TX was very comfortable, and our driver knew all the best spots and handled the mountain roads perfectly.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-24 bg-bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text-primary mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            Don't just take our word for it. Read the experiences of our valued customers.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-bg-card border border-border-primary rounded-3xl p-8 relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex gap-1 mb-6 text-accent-secondary">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-text-secondary mb-8 leading-relaxed italic">
                "{review.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-border-primary">
                  <Image src={review.image} alt={review.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-text-primary font-bold">{review.name}</h4>
                  <p className="text-text-secondary text-xs uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

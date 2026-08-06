"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  category: string;
  dailyPrice?: number;
}

export default function WhatsAppBookingPopup({ isOpen, onClose, productName, category, dailyPrice }: BookingPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pickupCity: "",
    dropCity: "",
    pickupDate: "",
    returnDate: "",
    days: "",
    passengers: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerateWhatsApp = () => {
    const phoneNumber = "923066305875"; // Placeholder, replace with actual
    
    const message = `Hello Iris Tours,

I would like to book the following vehicle/tour.

*Vehicle/Tour:* ${productName}
*Category:* ${category}
${dailyPrice ? `*Daily Rent:* Rs. ${dailyPrice.toLocaleString()}` : ''}

*Pickup City:* ${formData.pickupCity}
*Drop City:* ${formData.dropCity}
*Pickup Date:* ${formData.pickupDate}
*Return Date:* ${formData.returnDate}
*Rental Days:* ${formData.days}
*Passengers:* ${formData.passengers}
*Driver:* Included

*Customer Name:* ${formData.name}
*Phone:* ${formData.phone}
*Special Request:* ${formData.notes}

Kindly confirm the availability and send me the final quotation.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-b from-white to-bg-card w-full max-w-2xl rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,1)] border border-white/80 relative z-10 my-8"
          >
              <div className="p-6 border-b border-border-primary flex justify-between items-center bg-bg-card">
                <div>
                  <h3 className="text-xl font-bold text-text-primary uppercase tracking-wider">Book Now</h3>
                  <p className="text-sm text-text-secondary mt-1">{productName}</p>
                </div>
                <button onClick={onClose} className="p-2 text-text-secondary hover:text-accent-primary transition-colors bg-bg-primary rounded-full">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-medium">Full Name</label>
                    <input type="text" name="name" onChange={handleChange} className="w-full bg-bg-primary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-medium">Phone Number</label>
                    <input type="tel" name="phone" onChange={handleChange} className="w-full bg-bg-primary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors" placeholder="+92 300 0000000" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-medium flex items-center gap-2"><MapPin size={14}/> Pickup City</label>
                    <input type="text" name="pickupCity" onChange={handleChange} className="w-full bg-bg-primary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors" placeholder="Lahore" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-medium flex items-center gap-2"><MapPin size={14}/> Drop City</label>
                    <input type="text" name="dropCity" onChange={handleChange} className="w-full bg-bg-primary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors" placeholder="Islamabad" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-medium flex items-center gap-2"><Calendar size={14}/> Pickup Date</label>
                    <input type="date" name="pickupDate" onChange={handleChange} className="w-full bg-bg-primary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-medium flex items-center gap-2"><Calendar size={14}/> Return Date</label>
                    <input type="date" name="returnDate" onChange={handleChange} className="w-full bg-bg-primary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-medium">Total Days</label>
                    <input type="number" name="days" onChange={handleChange} className="w-full bg-bg-primary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors" placeholder="3" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-text-secondary font-medium flex items-center gap-2"><Users size={14}/> Passengers</label>
                    <input type="number" name="passengers" onChange={handleChange} className="w-full bg-bg-primary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors" placeholder="4" />
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <label className="text-sm text-text-secondary font-medium flex items-center gap-2"><MessageSquare size={14}/> Special Requests (Optional)</label>
                  <textarea name="notes" onChange={handleChange} rows={3} className="w-full bg-bg-primary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:border-accent-primary focus:outline-none transition-colors" placeholder="Any specific requirements..."></textarea>
                </div>
              </div>
              
              <div className="p-6 border-t border-border-primary bg-bg-card flex justify-end gap-4">
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="primary" onClick={handleGenerateWhatsApp}>Continue to WhatsApp</Button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

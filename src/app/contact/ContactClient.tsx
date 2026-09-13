"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Landmark, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactClient() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Luxury Car Rental",
    message: ""
  });

  const handleCopyIban = () => {
    navigator.clipboard.writeText("PK75FAYS0419007791557002");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi, my name is ${formData.name}. I am interested in ${formData.service}.%0A%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/923066305875?text=${text}`, "_blank");
  };

  return (
    <div className="bg-bg-primary min-h-screen">
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden border-b border-border-primary">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1920&auto=format&fit=crop"
            alt="Contact Iris Tours"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/90 via-bg-primary/70 to-bg-primary" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-text-primary mb-4 tracking-tight"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto"
          >
            Have a question or want to book a ride? Our team is available 24/7 to assist you with premium transportation across Pakistan.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border-primary flex items-center justify-center flex-shrink-0 text-accent-primary shadow-[0_0_15px_rgba(22,199,158,0.1)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Lahore Head Office</h3>
                    <p className="text-text-secondary leading-relaxed">
                      143 Street, 153, Sector-H<br />
                      DHA Phase-1<br />
                      Lahore, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border-primary flex items-center justify-center flex-shrink-0 text-accent-primary shadow-[0_0_15px_rgba(22,199,158,0.1)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Pakpattan Office</h3>
                    <p className="text-text-secondary leading-relaxed">
                      Malka Hans<br />
                      Pakpattan, Punjab<br />
                      Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border-primary flex items-center justify-center flex-shrink-0 text-accent-primary shadow-[0_0_15px_rgba(22,199,158,0.1)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Phone / WhatsApp</h3>
                    <p className="text-text-secondary mb-1">24/7 Booking & Support:</p>
                    <Link href="https://wa.me/923066305875" target="_blank" className="text-lg font-semibold text-accent-primary hover:text-accent-secondary transition-colors inline-flex items-center gap-2">
                      +92 306 6305875
                      <MessageCircle size={18} />
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border-primary flex items-center justify-center flex-shrink-0 text-accent-primary shadow-[0_0_15px_rgba(22,199,158,0.1)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Email Address</h3>
                    <p className="text-text-secondary mb-1">For corporate inquiries:</p>
                    <Link href="mailto:info@iristours.net" className="text-lg font-semibold text-accent-primary hover:text-accent-secondary transition-colors">
                      info@iristours.net
                    </Link>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-bg-secondary border border-border-primary flex items-center justify-center flex-shrink-0 text-accent-primary shadow-[0_0_15px_rgba(22,199,158,0.1)]">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">Working Hours</h3>
                    <p className="text-text-secondary leading-relaxed">
                      Monday - Sunday: 24/7<br />
                      Always open for bookings
                    </p>
                  </div>
                </div>

                {/* Bank Account Details Card */}
                <div className="pt-4 border-t border-border-primary">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-bg-secondary via-bg-card to-bg-secondary border border-accent-primary/20 shadow-xl relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center text-accent-primary shadow-[0_0_15px_rgba(22,199,158,0.15)] flex-shrink-0">
                        <Landmark size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-text-primary">Official Bank Account</h3>
                        <p className="text-xs text-text-secondary">For Advance Bookings &amp; Direct Bank Transfer</p>
                      </div>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center py-2 border-b border-border-primary/50">
                        <span className="text-text-secondary font-medium">Bank</span>
                        <span className="font-bold text-text-primary">Faysal Bank</span>
                      </div>

                      <div className="flex justify-between items-center py-2 border-b border-border-primary/50">
                        <span className="text-text-secondary font-medium">Account Title</span>
                        <span className="font-bold text-text-primary">MUNIR HUSSAIN</span>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b border-border-primary/50 gap-2">
                        <span className="text-text-secondary font-medium">IBAN Number</span>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs sm:text-sm font-bold text-accent-primary bg-bg-primary px-3 py-1.5 rounded-lg border border-border-primary select-all">
                            PK75FAYS0419007791557002
                          </span>
                          <button
                            type="button"
                            onClick={handleCopyIban}
                            title="Copy IBAN"
                            className="p-1.5 rounded-lg bg-bg-primary hover:bg-accent-primary/20 text-text-secondary hover:text-accent-primary border border-border-primary transition-colors flex items-center gap-1 text-xs font-medium cursor-pointer"
                          >
                            {copied ? (
                              <>
                                <Check size={14} className="text-green-400" />
                                <span className="text-green-400 font-bold">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy size={14} />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:justify-between py-2 gap-1">
                        <span className="text-text-secondary font-medium">Branch Name</span>
                        <span className="font-semibold text-text-primary sm:text-right">IBB MAULANA SHAUKAT ALI ROAD</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border-primary/40 text-xs text-text-secondary flex items-start gap-2">
                      <span className="text-accent-primary font-bold">Note:</span>
                      <span>After making payment, please send screenshot on WhatsApp (+92 306 6305875) for immediate vehicle reservation confirmation.</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-bg-secondary border border-border-primary rounded-3xl p-8 lg:p-10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h2 className="text-2xl font-bold text-text-primary mb-2 relative z-10">Send us a Message</h2>
            <p className="text-text-secondary mb-8 relative z-10">Fill out the form below and we will get back to you immediately via WhatsApp.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-bg-primary border border-border-primary rounded-xl py-3 px-4 text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-all"
                  placeholder="Ali Khan"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-bg-primary border border-border-primary rounded-xl py-3 px-4 text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-all"
                  placeholder="+92 3XX XXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">Interested Service</label>
                <select 
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full bg-bg-primary border border-border-primary rounded-xl py-3 px-4 text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-all appearance-none cursor-pointer"
                >
                  <option>Luxury Car Rental</option>
                  <option>Wedding Cars</option>
                  <option>Airport Transfer</option>
                  <option>SUV & 4x4 Booking</option>
                  <option>Northern Areas Tour</option>
                  <option>Corporate Rental</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-bg-primary border border-border-primary rounded-xl py-3 px-4 text-text-primary focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-accent-secondary to-accent-primary text-white font-bold uppercase tracking-wider hover:brightness-110 shadow-lg shadow-accent-primary/20 transition-all active:scale-[0.98]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

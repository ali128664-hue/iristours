/**
 * Footer.tsx — Website Footer (نیچے والا حصہ)
 *
 * This component renders the site footer shown on every page.
 * It contains:
 *  - Brand logo and tagline
 *  - Social media icon links (Instagram, Facebook, LinkedIn)
 *  - Quick Links column (main site pages)
 *  - Company column (about, gallery, FAQ, contact, privacy)
 *  - Contact info for Lahore and Islamabad offices
 *  - WhatsApp and email links
 *
 * HOW TO CHANGE THINGS:
 *  - Phone numbers → find the `tel:+92...` links below and update them
 *  - WhatsApp number → find `wa.me/923154973906` and update it
 *  - Social media links → find the social icon <a> tags and change the href values
 *  - Footer nav links → edit the <li> items in the Quick Links and Company sections
 */

import Link from "next/link";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-primary pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* ─── Brand & About Column ─────────────────────────────────────────── */}
          <div>
            <Link href="/" className="mb-6 block w-max">
              <Logo width={150} height={50} />
            </Link>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Pakistan's premium luxury car rental & tours platform. Experience world-class mobility, professional drivers, and a breathtaking fleet of vehicles.
            </p>

            {/* ─── SOCIAL MEDIA LINKS ───────────────────────────────────────────
                Update social media links here.
                Replace the href values with your actual social profile URLs.
                Example Instagram: https://instagram.com/iristours
            ──────────────────────────────────────────────────────────────────── */}
            <div className="flex items-center gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-card border border-border-primary flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="https://web.facebook.com/people/Iris-tours-Rental-Car/100083145616731/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-card border border-border-primary flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-bg-card border border-border-primary flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* ─── QUICK LINKS COLUMN ───────────────────────────────────────────────
              Add/remove footer navigation links here.
              Each <li> is one link in the "Quick Links" column.
              Format: <li><Link href="/page-url">Link Text</Link></li>
          ──────────────────────────────────────────────────────────────────────── */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/fleet" className="text-text-secondary hover:text-accent-primary transition-colors">Our Fleet</Link></li>
              <li><Link href="/tours" className="text-text-secondary hover:text-accent-primary transition-colors">Northern Tours</Link></li>
              <li><Link href="/services/airport-transfer" className="text-text-secondary hover:text-accent-primary transition-colors">Airport Transfers</Link></li>
              <li><Link href="/services/wedding-cars" className="text-text-secondary hover:text-accent-primary transition-colors">Wedding Cars</Link></li>
              <li><Link href="/services/corporate-rentals" className="text-text-secondary hover:text-accent-primary transition-colors">Corporate Rentals</Link></li>
            </ul>
          </div>

          {/* ─── COMPANY LINKS COLUMN ─────────────────────────────────────────────
              Add/remove company footer links here.
              Same format as Quick Links above.
          ──────────────────────────────────────────────────────────────────────── */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-6 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-text-secondary hover:text-accent-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-text-secondary hover:text-accent-primary transition-colors">Gallery</Link></li>
              <li><Link href="/faq" className="text-text-secondary hover:text-accent-primary transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-accent-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-text-secondary hover:text-accent-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* ─── CONTACT INFO COLUMN ──────────────────────────────────────────────
              Change contact info here.
              Update phone numbers, WhatsApp, and email addresses below.
          ──────────────────────────────────────────────────────────────────────── */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-6">
              
              {/* Lahore Office — Update address and phone number here */}
              <div>
                <h5 className="text-accent-primary font-medium mb-3 text-sm tracking-wide uppercase">Lahore Office</h5>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-text-primary mt-1 flex-shrink-0" size={14} />
                    <span className="text-text-secondary text-sm leading-relaxed">DHA Phase-1, Sector-H, 143 Street, 153, Lahore</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-text-primary flex-shrink-0" size={14} />
                    {/* Change Lahore phone number here */}
                    <a href="tel:+923154973906" className="text-text-secondary text-sm hover:text-accent-primary transition-colors">+92 315 497 3906</a>
                  </li>
                </ul>
              </div>

              {/* Islamabad Office — Update address and phone number here */}
              <div>
                <h5 className="text-accent-primary font-medium mb-3 text-sm tracking-wide uppercase">Islamabad Office</h5>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-text-primary mt-1 flex-shrink-0" size={14} />
                    <span className="text-text-secondary text-sm leading-relaxed">Malka Hans, Islamabad, Punjab</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-text-primary flex-shrink-0" size={14} />
                    {/* Change Islamabad phone number here */}
                    <a href="tel:+923066305875" className="text-text-secondary text-sm hover:text-accent-primary transition-colors">+92 306 630 5875</a>
                  </li>
                </ul>
              </div>
              
              {/* WhatsApp and Email — Update social/digital contact info here */}
              <ul className="flex flex-col gap-3 pt-3 border-t border-border-primary/50">
                <li className="flex items-center gap-3">
                  <FaWhatsapp className="text-text-primary flex-shrink-0" size={16} />
                  {/* Change WhatsApp number here — replace 923154973906 with your number */}
                  <a href="https://wa.me/923154973906?text=Hi!%20I%20need%20more%20information." target="_blank" rel="noreferrer" className="text-text-secondary text-sm hover:text-accent-primary transition-colors">WhatsApp Chat</a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-text-primary flex-shrink-0" size={14} />
                  {/* Change email address here */}
                  <a href="mailto:info@iristours.net" className="text-text-secondary text-sm hover:text-accent-primary transition-colors">info@iristours.net</a>
                </li>
              </ul>

            </div>
          </div>
        </div>

        {/* Footer Bottom Bar — copyright text */}
        <div className="pt-8 border-t border-border-primary flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Iris Tours. All rights reserved. <span className="hidden md:inline mx-2">|</span> Designed & Developed by <a href="https://www.linkedin.com/in/chansarhussain/" target="_blank" rel="noreferrer" className="text-text-primary hover:text-accent-primary transition-colors hover:underline font-medium">Ansar Hussain</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

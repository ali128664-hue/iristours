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

          {/* ─── QUICK LINKS COLUMN ─────────────────────────────────────────────── */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/fleet" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Our Fleet</Link></li>
              <li><Link href="/services" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">All Rental Services</Link></li>
              <li><Link href="/services/airport-transfer" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Airport Transfers</Link></li>
              <li><Link href="/services/wedding-cars" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Wedding Cars</Link></li>
              <li><Link href="/services/corporate-rentals" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Corporate Rentals</Link></li>
              <li><Link href="/tours" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Northern Pakistan Tours</Link></li>
              <li><Link href="/fuel-prices-pakistan" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Fuel Prices Calculator</Link></li>
            </ul>
          </div>

          {/* ─── COMPANY LINKS COLUMN ───────────────────────────────────────────── */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-6 uppercase tracking-wider">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/blog" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Rental Guides &amp; Blog</Link></li>
              <li><Link href="/areas" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Service Areas &amp; Cities</Link></li>
              <li><Link href="/gallery" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Fleet Gallery</Link></li>
              <li><Link href="/faq" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">FAQs</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="text-text-secondary hover:text-accent-primary transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* ─── CONTACT INFO COLUMN ────────────────────────────────────────────── */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-6 uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-6">
              
              {/* Lahore Office */}
              <div>
                <h5 className="text-accent-primary font-medium mb-3 text-sm tracking-wide uppercase">Lahore Office</h5>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-text-primary mt-1 flex-shrink-0" size={14} />
                    <span className="text-text-secondary text-sm leading-relaxed">DHA Phase-1, Sector-H, 143 Street, 153, Lahore</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-text-primary flex-shrink-0" size={14} />
                    <a href="tel:+923154973906" className="text-text-secondary text-sm hover:text-accent-primary transition-colors">+92 315 497 3906</a>
                  </li>
                </ul>
              </div>

              {/* Islamabad Office */}
              <div>
                <h5 className="text-accent-primary font-medium mb-3 text-sm tracking-wide uppercase">Islamabad Office</h5>
                <ul className="flex flex-col gap-2">
                  <li className="flex items-start gap-3">
                    <FaMapMarkerAlt className="text-text-primary mt-1 flex-shrink-0" size={14} />
                    <span className="text-text-secondary text-sm leading-relaxed">Islamabad, Pakistan</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <FaPhone className="text-text-primary flex-shrink-0" size={14} />
                    <a href="tel:+923066305875" className="text-text-secondary text-sm hover:text-accent-primary transition-colors">+92 306 630 5875</a>
                  </li>
                </ul>
              </div>
              
              {/* WhatsApp and Email */}
              <ul className="flex flex-col gap-2 pt-3 border-t border-border-primary/50">
                <li className="flex items-center gap-3">
                  <FaWhatsapp className="text-text-primary flex-shrink-0" size={16} />
                  <a href="https://wa.me/923154973906?text=Hi!%20I%20need%20more%20information." target="_blank" rel="noreferrer" className="text-text-secondary text-sm hover:text-accent-primary transition-colors">WhatsApp Chat: +92 315 497 3906</a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-text-primary flex-shrink-0" size={14} />
                  <a href="mailto:info@iristours.net" className="text-text-secondary text-sm hover:text-accent-primary transition-colors">info@iristours.net</a>
                </li>
              </ul>

            </div>
          </div>
        </div>

        {/* ─── POPULAR SERVICE AREAS & KEYWORDS STRIP ──────────────────────────── */}
        <div className="pt-8 mb-12 border-t border-border-primary/60">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <h5 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Popular Rental Locations
            </h5>
            <Link href="/areas" className="text-xs text-accent-primary hover:underline mt-1 md:mt-0 font-medium">
              View All 180+ Service Areas &rarr;
            </Link>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link href="/areas/dha-phase-5-lahore" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car DHA Phase 5 Lahore</Link>
            <Link href="/areas/dha-phase-6-lahore" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car DHA Phase 6 Lahore</Link>
            <Link href="/areas/gulberg-iii-lahore" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Gulberg Lahore</Link>
            <Link href="/areas/johar-town-block-d-lahore" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Johar Town</Link>
            <Link href="/areas/bahria-town-sector-c-lahore" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Car Rental Bahria Town Lahore</Link>
            <Link href="/areas/model-town-block-c-lahore" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Model Town</Link>
            <Link href="/areas/lahore-cantt-lahore" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Lahore Cantt</Link>
            <Link href="/areas/lake-city-lahore" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Lake City</Link>
            <Link href="/areas/askari-11-lahore" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Askari 11</Link>
            <Link href="/areas/blue-area-islamabad" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Blue Area Islamabad</Link>
            <Link href="/areas/sector-f-6-islamabad" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Sector F-6 Islamabad</Link>
            <Link href="/areas/sector-f-7-islamabad" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Sector F-7 Islamabad</Link>
            <Link href="/areas/dha-phase-2-islamabad" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car DHA Islamabad</Link>
            <Link href="/areas/bahria-town-phase-4-islamabad" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Car Rental Bahria Town Islamabad</Link>
            <Link href="/areas/saddar-rawalpindi" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Saddar Rawalpindi</Link>
            <Link href="/areas/d-ground-faisalabad" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Faisalabad D-Ground</Link>
            <Link href="/areas/multan-cantt-multan" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Multan Cantt</Link>
            <Link href="/areas/sialkot-cantt-sialkot" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Sialkot Cantt</Link>
            <Link href="/areas/citi-housing-gujranwala" className="px-2.5 py-1 rounded bg-bg-card/70 border border-border-primary text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors">Rent a Car Gujranwala</Link>
          </div>
        </div>

        {/* Footer Bottom Bar — copyright text */}
        <div className="pt-8 border-t border-border-primary flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-text-secondary text-sm">
            &copy; {new Date().getFullYear()} Iris Tours. All rights reserved. <span className="hidden md:inline mx-2">|</span> Designed & Developed by <a href="https://hussainxsolution.com/" target="_blank" rel="noreferrer" className="text-text-primary hover:text-accent-primary transition-colors hover:underline font-medium">Hussain X Solution</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

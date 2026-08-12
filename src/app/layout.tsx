/**
 * layout.tsx — Root Layout (شروع سے آخر تک ہر صفحے پر لاگو ہوتی ہے)
 *
 * This file wraps every page on the website with:
 *  - Global metadata (SEO title, description, keywords)
 *  - Google Analytics tracking
 *  - Google Search Console verification
 *  - Schema.org structured data (for Google rich results)
 *  - The shared Navbar, Footer, and Floating WhatsApp button
 *
 * HOW TO USE:
 *  - To change the site-wide SEO title/description → edit the `metadata` object below
 *  - To change phone/business info for Google → edit the Schema.org `Script` block
 *  - To switch Google Analytics → replace both instances of G-F5EG9TRQPR
 *  - To re-verify Google Search Console → replace the `google` verification value
 */

import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import Script from "next/script";

// ─── SITE-WIDE SEO METADATA ───────────────────────────────────────────────────
// These values appear in Google search results and social media link previews.
// Update title, description, and keywords to match your current offerings.
export const metadata: Metadata = {
  metadataBase: new URL("https://iristours.net"),
  title: {
    default: "Premium Rent a Car in Lahore DHA & Islamabad | Iris Tours",
    template: "%s | Iris Tours Pakistan",
  },
  description: "Best Rent a Car in Lahore DHA and Islamabad. Premium luxury car rental, SUVs, wedding cars, airport transfers, and northern tours in Pakistan. Book instantly via WhatsApp.",
  keywords: "Rent a car in Lahore, Best Rent a Car DHA Lahore, Cheap car rental Lahore, Luxury car rental Lahore, Wedding cars Lahore, Airport transfer Lahore, Prado for rent Lahore, Corolla for rent Lahore, V8 for rent Pakistan, Rent a car near me Lahore, Rent a car Islamabad, Rent a car Lahore to Islamabad, DHA Phase 1 Rent a Car, Chauffeur driven cars Lahore, SUV rental Lahore, Iris Tours Lahore",
  alternates: {
    canonical: "https://iristours.net",
  },
  openGraph: {
    title: "Iris Tours | Rent a Car in Lahore & Islamabad",
    description: "Best Rent a Car in Lahore DHA and Islamabad. Premium luxury car rental, SUVs, and wedding cars.",
    type: "website",
    locale: "en_PK",
    url: "https://iristours.net",
    siteName: "Iris Tours",
    images: [
      {
        url: "https://iristours.net/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iris Tours - Premium Car Rental",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Iris Tours | Rent a Car in Lahore & Islamabad",
    description: "Best Rent a Car in Lahore DHA and Islamabad. Premium luxury car rental, SUVs, and wedding cars.",
    images: ["https://iristours.net/twitter-image.jpg"],
  },
  other: {
    // Geographic metadata — helps local SEO. Update if office location changes.
    "geo.region": "PK-PB",
    "geo.placename": "Lahore",
    "geo.position": "31.4820;74.4079",
    "ICBM": "31.4820, 74.4079"
  },
  verification: {
    // Change this if you re-verify Google Search Console with a new account/token.
    // Get the new value from: Google Search Console → Settings → Ownership verification
    google: "gsCo28S1rrtbINhhxk28uBe6F6LReKN3LzkDCOfiq14",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ─── SCHEMA.ORG STRUCTURED DATA ───────────────────────────────────────
            This JSON-LD block tells Google about your business details.
            It powers Google's rich result features (business panel, maps, etc.)
            
            TO UPDATE:
            - Company phone → change "telephone" value (currently "+923154973906")
            - Business address → change the "address" array entries below
            - WhatsApp number → change the "sameAs" URL at the bottom
        ──────────────────────────────────────────────────────────────────────── */}
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRental",
            "name": "Iris Tours & Rental Car Services",
            "image": "https://iristours.net/logo.png",
            "@id": "https://iristours.net",
            "url": "https://iristours.net",
            // Update phone number here for Schema.org business info
            "telephone": "+923154973906",
            "priceRange": "PKR",
            "address": [
              {
                // Update business address here (Lahore office)
                "@type": "PostalAddress",
                "streetAddress": "143 Street, 153, Sector-H, DHA Phase-1",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "postalCode": "54000",
                "addressCountry": "PK"
              },
              {
                // Update business address here (Islamabad office)
                "@type": "PostalAddress",
                "streetAddress": "Malka Hans",
                "addressLocality": "Islamabad",
                "addressRegion": "Punjab",
                "addressCountry": "PK"
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 31.4820,
              "longitude": 74.4079
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": [
              "https://wa.me/923154973906",
              "https://web.facebook.com/people/Iris-tours-Rental-Car/100083145616731/"
            ]
          })
        }} />

        {/* ─── GOOGLE ANALYTICS ─────────────────────────────────────────────────
            Change the ID "G-F5EG9TRQPR" in BOTH lines below if you switch
            Google Analytics accounts. Get your ID from:
            analytics.google.com → Admin → Property → Data Streams
        ──────────────────────────────────────────────────────────────────────── */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-F5EG9TRQPR"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F5EG9TRQPR');
          `}
        </Script>
      </head>

      {/* ─── PAGE BODY ──────────────────────────────────────────────────────────
          The Navbar, Footer, and FloatingWhatsApp button are included on
          every page automatically through this layout wrapper.
      ──────────────────────────────────────────────────────────────────────── */}
      <body className="antialiased bg-bg-primary text-text-primary min-h-screen flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-[88px]">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}

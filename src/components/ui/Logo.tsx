/**
 * Logo.tsx — Logo Component (لوگو کمپوننٹ)
 *
 * This component renders the Iris Tours logo image across the site.
 * It is used in the Navbar, Footer, and anywhere else the logo appears.
 *
 * HOW TO CHANGE THE LOGO:
 *  - Replace the file at public/logo.png with your new logo image.
 *  - Keep the same filename (logo.png) so no code changes are needed.
 *  - Recommended format: PNG with transparent background.
 *
 * HOW TO CHANGE THE DEFAULT SIZE:
 *  - Default width is 180px, height is 60px.
 *  - Change the defaults in the function signature below if needed.
 *  - You can also pass `width` and `height` as props when using <Logo />.
 *    Example: <Logo width={120} height={40} />
 */

import React from 'react';
import Image from 'next/image';
// Logo image source — the actual file is at public/logo.png
// Replace that file to update the logo across the entire site
import logoImg from '../../../public/logo.png';

interface LogoProps {
  className?: string;
  // Default width is 180px — change this default if your logo needs a different base size
  width?: number | string;
  // Default height is 60px — change this default if your logo needs a different base size
  height?: number | string;
}

export default function Logo({ className = "", width = 180, height = 60 }: LogoProps) {
  return (
    <Image
      src={logoImg}
      alt="Iris Tours Logo"
      width={typeof width === 'string' ? parseInt(width) : width}
      height={typeof height === 'string' ? parseInt(height) : height}
      className={`object-contain ${className}`}
      // priority=true means the logo loads immediately (no lazy load) — good for above-the-fold
      priority
    />
  );
}

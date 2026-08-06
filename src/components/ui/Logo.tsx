import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Logo({ className = "", width = 180, height = 60 }: LogoProps) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <Image
        src="/logo.png"
        alt="Iris Tours Logo"
        fill
        sizes="(max-width: 768px) 150px, 200px"
        className="object-contain"
        priority
      />
    </div>
  );
}

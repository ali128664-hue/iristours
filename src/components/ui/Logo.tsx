import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 180, height = 60 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Iris Tours Logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      priority
    />
  );
}

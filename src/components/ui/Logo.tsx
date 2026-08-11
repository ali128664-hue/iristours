import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number | string;
  height?: number | string;
}

export default function Logo({ className = "", width = 180, height = 60 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Iris Tours Logo"
      width={typeof width === 'string' ? parseInt(width) : width}
      height={typeof height === 'string' ? parseInt(height) : height}
      className={`object-contain ${className}`}
      priority
    />
  );
}

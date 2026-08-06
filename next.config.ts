import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: 'www.toyota-indus.com' },
      { protocol: 'https', hostname: 'www.paksuzuki.com.pk' },
      { protocol: 'https', hostname: 'www.hyundai-nishat.com' },
      { protocol: 'https', hostname: 'hyundai-nishat.com' },
      { protocol: 'https', hostname: 'www.honda.com.pk' },
      { protocol: 'https', hostname: 'www.kia.com.pk' },
      { protocol: 'https', hostname: 'mgmotors.com.pk' },
      { protocol: 'https', hostname: 'www.mgmotor.com.pk' },
      { protocol: 'https', hostname: 'www.globalsuzuki.com' },
      { protocol: 'https', hostname: 'www.honda.co.th' },
    ],
  },
};

export default nextConfig;

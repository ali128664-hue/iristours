import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/honda-brv",
        destination: "/fleet/honda-br-v",
        permanent: true,
      },
      {
        source: "/toyota-fortuner",
        destination: "/fleet/toyota-fortuner",
        permanent: true,
      },
      {
        source: "/mercedes-c200",
        destination: "/fleet/mercedes-benz-c-class-c180",
        permanent: true,
      },
      {
        source: "/honda-civic",
        destination: "/fleet/honda-civic",
        permanent: true,
      },
      {
        source: "/toyota-land-cruiser",
        destination: "/fleet/toyota-land-cruiser-v8",
        permanent: true,
      },
      {
        source: "/cars-for-rent/honda-brv",
        destination: "/fleet/honda-br-v",
        permanent: true,
      },
      { source: "/services", destination: "/", permanent: true },
      {
        source: "/6-reasons-iris-tours-is-your-go-to-rent-a-car-in-lahore",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/toyota-revo-rent-a-car-in-lahore-pakistan-2",
        destination: "/fleet/toyota-revo-hilux",
        permanent: true,
      },
      {
        source: "/toyota-corolla-x-altis-rent-a-car-in-lahore-pakistan",
        destination: "/fleet/toyota-corolla-altis-1-6",
        permanent: true,
      },
      {
        source: "/toyota-revo-rent-a-car-in-lahore-pakistan",
        destination: "/fleet/toyota-revo-hilux",
        permanent: true,
      },
      { source: "/blogs", destination: "/blog", permanent: true },
      {
        source: "/rent-a-car-in-wapda-town-lahore-with-driver",
        destination: "/areas/wapda-town-lahore",
        permanent: true,
      },
      {
        source: "/rent-a-car-in-dha-lahore",
        destination: "/areas",
        permanent: true,
      },
      {
        source: "/rent-a-car-in-gulberg-lahore-with-driver",
        destination: "/areas",
        permanent: true,
      },
      {
        source: "/rent-a-car-in-dha-phase-4-lahore-with-driver",
        destination: "/areas/dha-phase-4-lahore",
        permanent: true,
      },
      {
        source: "/toyota-yaris-rent-a-car-in-lahore-pakistan",
        destination: "/fleet/toyota-yaris",
        permanent: true,
      },
      {
        source: "/rent-a-car-in-dha-phase-7-8-lahore-with-driver-iris-tours",
        destination: "/areas/dha-phase-8-lahore",
        permanent: true,
      },
      {
        source: "/toyota-yaris-rent-a-car-in-lahore-pakistan/feed",
        destination: "/fleet/toyota-yaris",
        permanent: true,
      },
      {
        source: "/toyota-coaster-rent-a-car-in-lahore-pakistan",
        destination: "/fleet/toyota-coaster-saloon",
        permanent: true,
      },
      { source: "/car-rentals-in-lahore", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/audi-a6", destination: "/fleet/audi-a6", permanent: true },
      {
        source: "/rent-a-car-in-dha-phase-6-lahore-with-driver",
        destination: "/areas/dha-phase-6-lahore",
        permanent: true,
      },
      { source: "/author/iris", destination: "/", permanent: true },
      {
        source: "/audi-a6-rent-a-car-in-lahore-pakistan",
        destination: "/fleet/audi-a6",
        permanent: true,
      },
      {
        source: "/rent-a-car-in-dha-raya-lahore-with-driver",
        destination: "/areas/dha-raya-lahore",
        permanent: true,
      },
      {
        source: "/rent-a-car-in-johar-town-faisal-town-lahore-with-driver",
        destination: "/areas",
        permanent: true,
      },
      {
        source: "/rent-a-car-in-dha-phase-5-lahore-with-driver",
        destination: "/areas/dha-phase-5-lahore",
        permanent: true,
      },
      {
        source: "/toyota-corolla-gli-rent-a-car-in-lahore-pakistan",
        destination: "/fleet/toyota-corolla-altis-1-6",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "query", key: "page_id", value: "172" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/",
        has: [{ type: "query", key: "page_id", value: "207" }],
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/themes/astra/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "www.toyota-indus.com" },
      { protocol: "https", hostname: "www.paksuzuki.com.pk" },
      { protocol: "https", hostname: "www.hyundai-nishat.com" },
      { protocol: "https", hostname: "hyundai-nishat.com" },
      { protocol: "https", hostname: "www.honda.com.pk" },
      { protocol: "https", hostname: "www.kia.com.pk" },
      { protocol: "https", hostname: "mgmotors.com.pk" },
      { protocol: "https", hostname: "www.mgmotor.com.pk" },
      { protocol: "https", hostname: "www.globalsuzuki.com" },
      { protocol: "https", hostname: "www.honda.co.th" },
    ],
  },
};

export default nextConfig;

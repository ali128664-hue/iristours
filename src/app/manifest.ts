import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Iris Tours - Rent a Car Lahore & Islamabad",
    short_name: "Iris Tours",
    description: "Best Rent a Car in Lahore DHA and Islamabad. Luxury sedans, SUVs, wedding cars, airport transfers, and northern tours.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F19",
    theme_color: "#FF6B00",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192 512x512",
        type: "image/png",
      },
    ],
  };
}

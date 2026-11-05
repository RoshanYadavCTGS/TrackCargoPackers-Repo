import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "trackcargopackers.in",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/service",
        permanent: true,
      },
      {
        source: "/packing-and-moving.html",
        destination: "/packing-moving",
        permanent: true,
      },
      {
        source: "/packing-and-moving",
        destination: "/packing-moving",
        permanent: true,
      },
      {
        source: "/packing-moving.html",
        destination: "/packing-moving",
        permanent: true,
      },
      {
        source: "/services/packing-and-moving",
        destination: "/packing-moving",
        permanent: true,
      },
      {
        source: "/services/packing-moving",
        destination: "/packing-moving",
        permanent: true,
      },
      {
        source: "/loading-and-unloading.html",
        destination: "/loading-unloading",
        permanent: true,
      },
      {
        source: "/loading-and-unloading",
        destination: "/loading-unloading",
        permanent: true,
      },
      {
        source: "/loading-unloading.html",
        destination: "/loading-unloading",
        permanent: true,
      },
      {
        source: "/services/loading-and-unloading",
        destination: "/loading-unloading",
        permanent: true,
      },
      {
        source: "/services/loading-unloading",
        destination: "/loading-unloading",
        permanent: true,
      },
      {
        source: "/household-shifting.html",
        destination: "/household-shifting",
        permanent: true,
      },
      {
        source: "/services/household-shifting",
        destination: "/household-shifting",
        permanent: true,
      },
      {
        source: "/office-shifting.html",
        destination: "/office-shifting",
        permanent: true,
      },
      {
        source: "/services/office-shifting",
        destination: "/office-shifting",
        permanent: true,
      },
      {
        source: "/car-transportation.html",
        destination: "/car-transport",
        permanent: true,
      },
      {
        source: "/car-transport.html",
        destination: "/car-transport",
        permanent: true,
      },
      {
        source: "/services/car-transport",
        destination: "/car-transport",
        permanent: true,
      },
      {
        source: "/bike-transportation.html",
        destination: "/bike-transport",
        permanent: true,
      },
      {
        source: "/bike-transport.html",
        destination: "/bike-transport",
        permanent: true,
      },
      {
        source: "/services/bike-transport",
        destination: "/bike-transport",
        permanent: true,
      },
      {
        source: "/international-shifting.html",
        destination: "/international-shifting",
        permanent: true,
      },
      {
        source: "/services/international-shifting",
        destination: "/international-shifting",
        permanent: true,
      },
      {
        source: "/warehousing-services.html",
        destination: "/warehousing-services",
        permanent: true,
      },
      {
        source: "/warehousing.html",
        destination: "/warehousing-services",
        permanent: true,
      },
      {
        source: "/warehousing",
        destination: "/warehousing-services",
        permanent: true,
      },
      {
        source: "/services/warehousing",
        destination: "/warehousing-services",
        permanent: true,
      },
      {
        source: "/services/warehousing-services",
        destination: "/warehousing-services",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/enquiry.html",
        destination: "/enquiry",
        permanent: true,
      },
      {
        source: "/mission-vision.html",
        destination: "/mission-vision",
        permanent: true,
      },
      {
        source: "/about/mission-and-vision",
        destination: "/mission-vision",
        permanent: true,
      },
      {
        source: "/packers-and-movers-:slug\\.html",
        destination: "/packers-and-movers-:slug",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/packers-and-movers-:slug",
        destination: "/cities/:slug",
      },
    ];
  },
};

export default nextConfig;

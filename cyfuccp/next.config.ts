import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/photo-*", search: "?auto=format&fit=crop&w=900&q=85" },
    ],
  },
};

export default nextConfig;

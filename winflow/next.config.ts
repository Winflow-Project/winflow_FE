import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ⚠️ WARNING: this allows production builds even if you have ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

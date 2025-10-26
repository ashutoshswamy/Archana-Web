import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO and Performance Optimization */

  // Enable trailing slashes for consistent URLs
  trailingSlash: true,

  // Image optimization settings
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Enable compression
  compress: true,

  // PoweredByHeader removal for security
  poweredByHeader: false,

  // Generate ETags for better caching
  generateEtags: true,

  // Production source maps
  productionBrowserSourceMaps: false,

  // Strict mode for better React practices
  reactStrictMode: true,
};

export default nextConfig;

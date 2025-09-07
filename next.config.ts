import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  trailingSlash: true,
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  compress: true,
  optimizeFonts: true,
};

export default nextConfig;

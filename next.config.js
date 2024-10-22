/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  experimental: {
    swcLoader: true, // Enable SWC loader (optional)
    swcMinify: true, // Enable SWC minifier
    forceSwcTransforms: true, // Fallback to WASM
  },
};

module.exports = nextConfig;

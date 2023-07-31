const BASE_URL = "https://snappfood.ir/mobile/v3";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: { domains: ["cdn.snappfood.ir", "www.zoodfood.com"] },
  env: { BASE_URL }
};

module.exports = nextConfig;

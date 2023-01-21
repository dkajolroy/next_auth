/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [],
  },
  env: {
    MONGODB_URI: "mongodb://127.0.0.1:27017/next-auth",
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'images.unsplash.com'],
  },
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;

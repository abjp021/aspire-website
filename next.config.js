/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'aspire-website'; // Replace with your actual repo name if different

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  output: 'export',
  assetPrefix: isProd ? `/${repoName}/` : '',
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;

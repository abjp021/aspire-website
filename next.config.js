/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'aspire-website'; // Replace with your actual repo name if different
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    optimizeCss: true,
  },
  output: 'export',
  assetPrefix: isVercel ? '' : (isProd ? `/${repoName}/` : ''),
  basePath: isVercel ? '' : (isProd ? `/${repoName}` : ''),
  images: {
    domains: ['localhost', 'images.unsplash.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;

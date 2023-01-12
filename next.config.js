/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['customwebsite.cdn.prismic.io'],
  },
};

module.exports = nextConfig;

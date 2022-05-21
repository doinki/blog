/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: { dirs: ['src'], ignoreDuringBuilds: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

module.exports = nextConfig;

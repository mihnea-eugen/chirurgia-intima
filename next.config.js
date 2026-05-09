/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'drdiana.ro' },
      { protocol: 'https', hostname: 'chirurgia-intima.com' }
    ]
  }
}
module.exports = nextConfig

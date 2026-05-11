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
  },
  async redirects() {
    return [
      {
        source: '/proceduri/circumcizie-adulti',
        destination: '/proceduri/circumcizie',
        permanent: true
      },
      {
        source: '/proceduri/vaginoplastie',
        destination: '/proceduri',
        permanent: true
      }
    ]
  }
}
module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'drdiana.ro' },
      { protocol: 'https', hostname: 'chirurgia-intima.com' },
      { protocol: 'https', hostname: 'genitoplastie.ro' }
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
      },
      {
        source: '/proceduri/alungire-penis',
        destination: '/proceduri/faloplastie',
        permanent: true
      },
      {
        source: '/proceduri/ingrosare-lipofilling',
        destination: '/proceduri/ingrosare-penis-lipofilling',
        permanent: true
      },
      {
        source: '/proceduri/ingrosare-acid-hialuronic',
        destination: '/proceduri/marire-penis-acid-hialuronic',
        permanent: true
      },
      {
        source: '/chirurgie-intima',
        destination: '/genitoplastie',
        permanent: true
      }
    ]
  }
}
module.exports = nextConfig

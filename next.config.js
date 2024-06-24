/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.thegrid.id',
        pathname: '/upload/**',
        port: '',
      }
    ]
  }
}

module.exports = nextConfig

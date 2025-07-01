/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'gzeasylink.com',
          },
        ],
        destination: 'https://www.gzeasylink.com/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig 
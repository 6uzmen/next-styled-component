/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  pageExtensions: ["tsx", "js"],
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/team',
        destination: '/our-team',
        permanent: true
      },
      {
        source: '/onepage',
        destination: '/',
        permanent: true
      },
      {
        source: '/nearshore-agile-development',
        destination: '/',
        permanent: true
      },
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
    ]
  }, 
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg.webp)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
};
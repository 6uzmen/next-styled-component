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
  async rewrites() {
    return [
      {
        source: '/team',
        destination: '/our-team',
      },
      {
        source: '/onepage',
        destination: '/',
      },
      {
        source: '/nearshore-agile-development',
        destination: '/',
      },
      {
        source: '/home',
        destination: '/',
      },
    ]
  }, 
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
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
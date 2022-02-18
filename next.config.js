/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  pageExtensions: ["tsx", "js"],
  images: {
    loader: "imgix",
    path: "",
    domains: ['xylo-assets.s3.amazonaws.com', '/']
  },
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
        destination: '/#about-us',
      },
      {
        source: '/home',
        destination: '/',
      },
    ]
  }, 
};
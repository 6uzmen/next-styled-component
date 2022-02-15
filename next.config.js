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
};

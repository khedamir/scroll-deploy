/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["127.0.0.1"],
    unoptimized: true,
  },
  reactStrictMode: false,
  publicRuntimeConfig: {
    API_HOST: process.env.API_HOST,
  },
};

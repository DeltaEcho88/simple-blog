/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['media.graphcms.com','media.graphassets.com'],
  },
  env: {
    HYGRAPH_ENDPOINT: process.env.HYGRAPH_ENDPOINT,
  },
  swcMinify: true,
  ignoreDuringBuilds: true
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'static-cdn.jtvnw.net',
      'twitch.tv',
      'www.twitch.tv',
    ],
  },
}

module.exports = nextConfig

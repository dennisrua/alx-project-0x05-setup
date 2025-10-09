/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'prlabsapi.com',
      'via.placeholder.com',
      'chatgpt-42.p.rapidapi.com',
    ],
  },
};

module.exports = nextConfig;

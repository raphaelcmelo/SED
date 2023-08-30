/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cdn.anapolis.go.gov.br',
      port: '',
      pathname: '/img/**',
    },
  ],
},}

module.exports = nextConfig
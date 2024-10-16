/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true,
    },
  }
  
// next.config.js
module.exports = {
    output: 'export',
    basePath: '/nperezcasas.github.io',
    images: {
      unoptimized: true,
    },
  };
=======
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/beyond-nuria-v2/',
  basePath: '/beyond-nuria-v2',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
>>>>>>> 2411647 (Initial commit)

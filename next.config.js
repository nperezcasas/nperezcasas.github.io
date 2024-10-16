/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    basePath: '/beyond-nuria-v2',
    assetPrefix: '/beyond-nuria-v2/',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig

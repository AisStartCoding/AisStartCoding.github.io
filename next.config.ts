/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? './' : '',
  // Disable Turbopack for build (it's for dev only)
  experimental: {
    turbo: {
      // Optional: Configure Turbopack if needed
    }
  }
}

module.exports = nextConfig
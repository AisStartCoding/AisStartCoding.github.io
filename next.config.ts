/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export with custom images
  },
  trailingSlash: true, // Optional: for better GitHub Pages compatibility
}

module.exports = nextConfig
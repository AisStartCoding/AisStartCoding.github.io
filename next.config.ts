/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // enables static export
  trailingSlash: true,     // needed for GH-Pages
  basePath: '',            // keep empty unless repo is in subpath
  assetPrefix: './',       // relative paths for GH-Pages
  images: { unoptimized: true },
};

module.exports = nextConfig;

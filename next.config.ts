/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,

  // Replace `portfolio-website` with your repo name
  basePath: "/portfolio-website",
  assetPrefix: "/portfolio-website/",

  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

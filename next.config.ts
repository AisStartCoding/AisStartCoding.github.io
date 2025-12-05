/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",      // enables full static export
  trailingSlash: true,
  basePath: "",           // leave blank for user-page root
  assetPrefix: "",        // blank for root URL
  images: { unoptimized: true },
};

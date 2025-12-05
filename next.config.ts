/** @type {import('next').NextConfig} */
module.exports = {
  output: "export",    // enables static export
  trailingSlash: true,
  basePath: "",        // root for user-page deployment
  assetPrefix: "",     // root for user-page deployment
  images: { unoptimized: true },
};

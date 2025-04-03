/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Next.js-E-Commerce",
  assetPrefix: "/Next.js-E-Commerce/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapiserver.reactbd.com",
      },
    ],
  },
};

export default nextConfig;

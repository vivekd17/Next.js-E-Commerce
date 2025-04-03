/** @type {import('next').NextConfig} */
const nextConfig = {
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
  
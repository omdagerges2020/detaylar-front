/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://192.168.1.117/detaylar/api/:path*",
      },
    ];
  },
  images: {
    domains: ["thahab.com"], 
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/VERT',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

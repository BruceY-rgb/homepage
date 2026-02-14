import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 部署配置
  basePath: '/homepage',
  assetPrefix: '/homepage/',
};

export default nextConfig;

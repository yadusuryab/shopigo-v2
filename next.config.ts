import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
      ]
  }
};

export default nextConfig;

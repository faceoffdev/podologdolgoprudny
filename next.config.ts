import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/podologdolgoprudny',
  assetPrefix: '/podologdolgoprudny',
  images: {
    unoptimized: true,
  },
}

export default nextConfig

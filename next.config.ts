import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_ENDPOINT: process.env.NEXT_PUBLIC_ENDPOINT,
  },
  typescript: {
    ignoreBuildErrors: true, // 타입스크립트 에러 무시
  },
  eslint: {
    ignoreDuringBuilds: true, // eslint 에러 무시
  },
}

export default nextConfig

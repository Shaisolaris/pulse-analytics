/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/pulse-analytics',
  assetPrefix: '/pulse-analytics/',
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
}
export default nextConfig

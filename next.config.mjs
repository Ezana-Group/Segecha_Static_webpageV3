/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  // Disable static HTML export when building on Vercel to support full framework features
  output: isVercel ? undefined : 'export',
  trailingSlash: true,     // Generates /about/index.html instead of /about.html (cPanel friendly)
  images: {
    // Enable Vercel's high-performance native image optimization engine. Keep unoptimized for local static/cPanel export.
    unoptimized: !isVercel,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
}

export default nextConfig


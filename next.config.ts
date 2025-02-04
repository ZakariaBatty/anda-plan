/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'export',
   images: {
      unoptimized: true,
   },
   // base
   basePath: '/plan',
   assetPrefix: '/plan/',
};

export default nextConfig;

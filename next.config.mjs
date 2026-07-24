/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/my-story',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

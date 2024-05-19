/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/search/hero',
            permanent: true,
          },
          {
            source: '/search',
            destination: '/search/hero',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;

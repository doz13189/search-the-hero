/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/search/character',
            permanent: true,
          },
          {
            source: '/search',
            destination: '/search/character',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;

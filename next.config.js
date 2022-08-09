/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: false,
      },
      {
        source: '/old-blog/:id',
        destination: '/new-blod/:id',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

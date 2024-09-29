/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['retrometroid.store'],
  },
  env: {
    API_URL: process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_URL_API_PROD
      : process.env.NEXT_PUBLIC_URL_API_DEV,
  },
};

export default nextConfig;

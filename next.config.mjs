/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
      },
};

export default nextConfig;


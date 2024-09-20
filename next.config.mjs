/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["fakestoreapi.com"],
  },
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;

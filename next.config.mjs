
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.thedogapi.com",
      },
      {
        protocol: "https",
        hostname: "cdn2.thedogapi.com",
      },
      {
        protocol: "https",
        hostname: "cdn3.thedogapi.com",
      },
      {
        protocol: "https",
        hostname: "cdn4.thedogapi.com",
      },
      {
        protocol: "https",
        hostname: "images.thedogapi.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/dog-api-uploads-prod/**",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/pur-adhesive-india",
        destination: "/polyurethane-adhesive-manufacturer",
        permanent: true,
      },
      {
        source: "/hotmelt-adhesive-india",
        destination: "/hot-melt-adhesive-manufacturer",
        permanent: true,
      },
      {
        source: "/waterproof-wood-adhesive",
        destination: "/d3-adhesive-manufacturer",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

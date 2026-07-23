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
        source: "/:path*",
        has: [{ type: "host", value: "stickonn.in" }],
        destination: "https://www.stickonn.in/:path*",
        permanent: true,
      },
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
      {
        source: "/products/aerofix",
        destination: "/products/wood-to-laminate-spray-adhesive",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return ["/pay", "/pay/:path*"].map(source => ({
      source,
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" }],
    }));
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;

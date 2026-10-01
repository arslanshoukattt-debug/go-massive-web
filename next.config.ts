import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "go-massive-web.vercel.app" }],
      destination: "https://www.go-massive.com/:path*",
      permanent: true,
    }];
  },
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

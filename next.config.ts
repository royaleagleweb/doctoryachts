import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Host canonicalization. Next.js permanent redirects are 308 (method-preserving).
  // Trailing-slash 308 to the non-slash apex path is left to Next.js defaults.
  // www may 522 if DNS is not proxied to this Worker — rule applies when www reaches the app.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.doctoryachts.com" }],
        destination: "https://doctoryachts.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          { type: "host", value: "doctoryachts.com" },
          { type: "header", key: "x-forwarded-proto", value: "http" },
        ],
        destination: "https://doctoryachts.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// Enables Cloudflare bindings during local `next dev` when using OpenNext
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

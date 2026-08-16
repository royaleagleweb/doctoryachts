import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Do not put www/http host redirects here.
  // OpenNext applies next.config redirects at the Worker layer; catch-all /:path*
  // + host/proto rules are unsafe on this runtime (www never hits a Custom Domain
  // Worker, and x-forwarded-proto can loop). Trailing-slash 308 stays Next.js default.
  // www → apex and http → https belong on the Cloudflare zone (Redirect Rule +
  // Always Use HTTPS), not in this app.
};

export default nextConfig;

// Enables Cloudflare bindings during local `next dev` when using OpenNext
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

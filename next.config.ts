import { execFileSync } from "node:child_process";
import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants";
import variants from "./src/lib/image-variants.json";

const imageWidths = [...variants.widths].sort((a, b) => a - b);

function nextConfig(phase: string): NextConfig {
  // Generate /public/images/opt before Next copies public/ into the build.
  // opennextjs-cloudflare build and `npx wrangler deploy` both reach this
  // phase, so Workers Builds pick the variants up with no extra command.
  if (phase === PHASE_PRODUCTION_BUILD || phase === PHASE_DEVELOPMENT_SERVER) {
    execFileSync(process.execPath, ["scripts/optimize-images.mjs"], {
      stdio: "inherit",
    });
  }

  return {
    // Do not put www/http host redirects here.
    // OpenNext applies next.config redirects at the Worker layer; catch-all /:path*
    // + host/proto rules are unsafe on this runtime (www never hits a Custom Domain
    // Worker, and x-forwarded-proto can loop). Trailing-slash 308 stays Next.js default.
    // www → apex and http → https belong on the Cloudflare zone (Redirect Rule +
    // Always Use HTTPS), not in this app.

    // The default /_next/image optimizer is a passthrough on OpenNext unless
    // wrangler has an IMAGES binding (Cloudflare Images). That binding is not
    // configured here. A custom loader points srcset at pre-generated WebP
    // files under /images/opt, which the asset binding serves directly.
    images: {
      loader: "custom",
      loaderFile: "./src/lib/image-loader.ts",
      // Sources top out at 1280px. The default list ends at 3840, and next/image
      // uses the largest entry as the img src fallback.
      deviceSizes: imageWidths.filter((width) => width >= 640),
      imageSizes: imageWidths.filter((width) => width < 640),
      qualities: [variants.quality],
    },
  };
}

export default nextConfig;

// Enables Cloudflare bindings during local `next dev` when using OpenNext
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

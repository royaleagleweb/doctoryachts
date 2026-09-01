import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Do not put www/http host redirects here.
  // OpenNext applies next.config redirects at the Worker layer; catch-all /:path*
  // + host/proto rules are unsafe on this runtime (www never hits a Custom Domain
  // Worker, and x-forwarded-proto can loop). Trailing-slash 308 stays Next.js default.
  // www → apex and http → https belong on the Cloudflare zone (Redirect Rule +
  // Always Use HTTPS), not in this app.
  //
  // Path 301s for retired service hubs (Local SEO Team consolidation).
  // statusCode 301 (not permanent:true / 308) so old links still resolve.
  async redirects() {
    return [
      { source: "/services/mobile-boat-repair", destination: "/", statusCode: 301 },
      { source: "/services/mobile-boat-repair/:city", destination: "/", statusCode: 301 },
      { source: "/services/boat-diagnostics", destination: "/", statusCode: 301 },
      { source: "/services/boat-diagnostics/:city", destination: "/", statusCode: 301 },
      {
        source: "/services/100-hour-service",
        destination: "/services/boat-maintenance",
        statusCode: 301,
      },
      {
        source: "/services/100-hour-service/:city",
        destination: "/services/boat-maintenance",
        statusCode: 301,
      },
      {
        source: "/services/300-hour-service",
        destination: "/services/boat-maintenance",
        statusCode: 301,
      },
      {
        source: "/services/300-hour-service/:city",
        destination: "/services/boat-maintenance",
        statusCode: 301,
      },
      { source: "/es/servicios/reparacion-movil-de-barcos", destination: "/es", statusCode: 301 },
      { source: "/es/servicios/diagnostico-de-yates", destination: "/es", statusCode: 301 },
      {
        source: "/es/servicios/servicio-100-horas",
        destination: "/es/servicios/mantenimiento-de-yates",
        statusCode: 301,
      },
      {
        source: "/es/servicios/servicio-300-horas",
        destination: "/es/servicios/mantenimiento-de-yates",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;

// Enables Cloudflare bindings during local `next dev` when using OpenNext
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();

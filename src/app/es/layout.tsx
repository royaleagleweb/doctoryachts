import type { ReactNode } from "react";

/**
 * Spanish segment layout. Inline lang script runs before paint so crawlers
 * that execute JS see lang=es even when the shared root shell was prerendered.
 *
 * LocalBusiness and WebSite JSON-LD stay in the root layout only. That layout
 * already reads the request locale, so emitting them again here duplicated
 * both blocks on every /es page.
 */
export default function SpanishLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="es";`,
        }}
      />
      {children}
    </>
  );
}

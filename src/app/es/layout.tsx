import { JsonLd } from "@/components/JsonLd";
import { localBusinessJsonLd, webSiteJsonLd } from "@/lib/seo";

/**
 * Spanish segment layout. Inline lang script runs before paint so crawlers
 * that execute JS see lang=es even when the shared root shell was prerendered.
 */
export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="es";`,
        }}
      />
      <JsonLd data={[localBusinessJsonLd("es"), webSiteJsonLd()]} />
      {children}
    </>
  );
}

import { Button } from "@/components/Button";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <PageHero
      eyebrow="Page not found"
      title="That page isn't here"
      description="The link may be old or mistyped. Head home, browse services, or call the shop for help."
      actions={
        <>
          <Button href="/">Home</Button>
          <Button href="/services" variant="ghost">
            Services
          </Button>
          <Button href="/book" variant="ghost">
            Book a visit
          </Button>
          <Button href={site.phoneHref} variant="ghost">
            Call {site.phone}
          </Button>
        </>
      }
    />
  );
}

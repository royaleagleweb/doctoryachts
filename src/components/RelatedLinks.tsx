import Link from "next/link";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

type LinkItem = { href: string; label: string; note?: string };

export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: LinkItem[];
}) {
  if (!links.length) return null;
  return (
    <Section>
      <SectionHeading title={title} />
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="block h-full no-underline">
              <Card as="div" className="card-interactive h-full p-5">
                <span className="font-semibold text-navy">{l.label}</span>
                {l.note && <span className="mt-1 block text-sm text-steel">{l.note}</span>}
                <span className="mt-4 block text-sm font-semibold text-gold">View service →</span>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

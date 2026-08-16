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
            <Card as="div" className="h-full">
              <Link href={l.href} className="block p-5 no-underline">
                <span className="font-semibold text-navy">{l.label}</span>
                {l.note && <span className="mt-1 block text-sm text-steel">{l.note}</span>}
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

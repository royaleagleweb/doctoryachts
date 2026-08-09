import Link from "next/link";

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
    <section className="border-t border-line">
      <div className="wrap py-10">
        <h2 className="font-display text-xl font-semibold text-pearl">{title}</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="panel block p-4 no-underline transition hover:border-gold/40"
              >
                <span className="font-semibold text-pearl">{l.label}</span>
                {l.note && (
                  <span className="mt-1 block text-xs text-muted">{l.note}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

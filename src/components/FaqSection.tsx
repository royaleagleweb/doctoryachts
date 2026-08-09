type Faq = { question: string; answer: string };

export function FaqSection({
  title = "Frequently asked questions",
  faqs,
}: {
  title?: string;
  faqs: readonly Faq[] | Faq[];
}) {
  return (
    <section className="border-t border-line section-soft">
      <div className="wrap section-pad">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-pearl">{title}</h2>
        <div className="mt-8 divide-y divide-[rgba(196,163,90,0.14)] border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-pearl marker:content-none">
                <span>{faq.question}</span>
                <span className="text-gold transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-steel">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

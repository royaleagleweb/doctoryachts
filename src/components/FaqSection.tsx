type Faq = { question: string; answer: string };

export function FaqSection({
  title = "Frequently asked questions",
  faqs,
}: {
  title?: string;
  faqs: readonly Faq[] | Faq[];
}) {
  return (
    <section className="section-soft">
      <div className="wrap section-pad">
        <h2 className="font-display text-3xl font-semibold text-navy">{title}</h2>
        <div className="mt-10 space-y-1">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-navy marker:content-none">
                <span>{faq.question}</span>
                <span className="text-gold-deep transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

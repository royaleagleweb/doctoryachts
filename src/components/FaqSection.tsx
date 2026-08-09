import { CaseTag } from "@/components/ChartDecor";

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
        <CaseTag>FAQ</CaseTag>
        <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-pearl">
          {title}
        </h2>
        <div className="mt-8 divide-y divide-[rgba(196,163,90,0.14)] border-y border-line">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-pearl marker:content-none">
                <span className="flex gap-3">
                  <span className="pt-1 font-mono text-xs text-gold">Q</span>
                  {faq.question}
                </span>
                <span className="font-mono text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 pl-7 text-sm leading-relaxed text-steel">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

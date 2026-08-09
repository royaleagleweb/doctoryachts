import { CaseTag } from "@/components/ChartDecor";

type Faq = { question: string; answer: string };

type FaqSectionProps = {
  title?: string;
  eyebrow?: string;
  faqs: readonly Faq[] | Faq[];
  light?: boolean;
};

export function FaqSection({
  title = "Frequently asked questions",
  eyebrow = "FAQ",
  faqs,
}: FaqSectionProps) {
  return (
    <section className="border-t border-line bg-white">
      <div className="wrap max-w-[720px] section-pad">
        <CaseTag>{eyebrow}</CaseTag>
        <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-navy">
          {title}
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {faqs.map((faq, i) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-navy marker:content-none">
                <span className="flex gap-3">
                  <span className="font-mono text-xs text-gold pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </span>
                <span className="font-mono text-navy transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 pl-9 text-sm leading-relaxed text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";

type Faq = { question: string; answer: string };

export function FaqSection({
  title = "Frequently asked questions",
  faqs,
}: {
  title?: string;
  faqs: readonly Faq[] | Faq[];
}) {
  return (
    <Section tone="soft">
      <SectionHeading title={title} />
      <div className="faq-list mt-10">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq-item group">
            <summary className="faq-item__q">
              <span>{faq.question}</span>
              <span className="faq-item__icon" aria-hidden>
                +
              </span>
            </summary>
            <p className="faq-item__a">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

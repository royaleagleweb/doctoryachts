import { Card } from "@/components/Card";

export function AnswerBox({
  question,
  answer,
  label = "Quick answer",
}: {
  question?: string;
  answer: string;
  label?: string;
}) {
  return (
    <Card as="aside" className="answer-box max-w-3xl p-5 sm:p-6">
      <p className="eyebrow">{label}</p>
      {question && <h2 className="font-display mt-2 text-navy">{question}</h2>}
      <p className="mt-3 text-base leading-relaxed text-steel">{answer}</p>
    </Card>
  );
}

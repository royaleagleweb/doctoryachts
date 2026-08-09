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
    <aside className="max-w-3xl rounded-2xl bg-paper p-5 sm:p-6">
      <p className="text-sm font-medium text-gold-deep">{label}</p>
      {question && (
        <h2 className="font-display mt-2 text-xl font-bold tracking-tight text-navy sm:text-2xl">
          {question}
        </h2>
      )}
      <p className="mt-3 text-base leading-relaxed text-steel">{answer}</p>
    </aside>
  );
}

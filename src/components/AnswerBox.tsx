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
    <aside className="max-w-3xl">
      <p className="text-sm font-medium text-gold">{label}</p>
      {question && (
        <h2 className="font-display mt-2 text-xl font-bold tracking-tight text-pearl sm:text-2xl">
          {question}
        </h2>
      )}
      <p className="mt-3 text-base leading-relaxed text-steel">{answer}</p>
    </aside>
  );
}

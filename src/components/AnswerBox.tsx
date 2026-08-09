/** AEO / featured-snippet style direct answer block (visible + schema-friendly). */
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
    <aside className="panel border-l-4 border-l-coral p-5 sm:p-6">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-coral">{label}</p>
      {question && (
        <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {question}
        </h2>
      )}
      <p className="mt-3 text-base leading-relaxed text-ink/90">{answer}</p>
    </aside>
  );
}

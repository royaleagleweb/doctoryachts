/** Direct answer block for AEO — plain styling, no AI chrome */
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
    <aside className="panel border-l-4 border-l-gold p-5 sm:p-6">
      <p className="text-sm font-semibold text-gold">{label}</p>
      {question && (
        <h2 className="font-display mt-2 text-xl font-semibold tracking-tight text-pearl sm:text-2xl">
          {question}
        </h2>
      )}
      <p className="mt-3 text-base leading-relaxed text-steel">{answer}</p>
    </aside>
  );
}

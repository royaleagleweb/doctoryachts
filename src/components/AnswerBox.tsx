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
    <aside className="rounded-[10px] border border-line border-l-4 border-l-gold bg-navy p-5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] sm:p-6">
      <p className="text-sm font-bold text-gold">{label}</p>
      {question && (
        <h2 className="font-display mt-2 text-xl font-semibold text-pearl sm:text-2xl">
          {question}
        </h2>
      )}
      <p className="mt-3 text-base leading-relaxed text-steel">{answer}</p>
    </aside>
  );
}

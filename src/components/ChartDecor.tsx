/** Simple section eyebrow — plain text, no decorative AI chrome */
export function CaseTag({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

/** @deprecated kept for imports — no decorative stamp */
export function CoordStamp({ label }: { label?: string }) {
  if (!label) return null;
  return <p className="text-sm text-steel">{label}</p>;
}

/** @deprecated no-op — depth ticks removed */
export function DepthTicks({ className = "" }: { className?: string }) {
  return <div className={className} aria-hidden />;
}

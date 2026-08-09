export function CaseTag({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function CoordStamp({ label }: { label?: string }) {
  if (!label) return null;
  return <p className="text-sm text-steel">{label}</p>;
}

export function DepthTicks({ className = "" }: { className?: string }) {
  return <div className={className} aria-hidden />;
}

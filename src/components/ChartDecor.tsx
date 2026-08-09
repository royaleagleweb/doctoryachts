/** Decorative chart / depth marks — unique visual language */
export function DepthTicks({ className = "" }: { className?: string }) {
  return (
    <div className={`depth-ticks ${className}`} aria-hidden>
      {Array.from({ length: 12 }).map((_, i) => (
        <span key={i} style={{ height: i % 3 === 0 ? 14 : 8 }} />
      ))}
    </div>
  );
}

export function CoordStamp({ label = "26.12°N · 80.14°W" }: { label?: string }) {
  return (
    <span className="coord-stamp" aria-hidden>
      {label}
    </span>
  );
}

export function CaseTag({ children }: { children: React.ReactNode }) {
  return <span className="case-tag">{children}</span>;
}

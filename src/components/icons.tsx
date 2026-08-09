type IconProps = { className?: string };

export function IconEngine({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 10h2l1-2h4l1 2h2v2h2v2h-1l-.5 3H7.5L7 14H4v-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M16 12h2.5a1.5 1.5 0 0 1 0 3H16" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8V6m3 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconElectrical({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconDiagnostics({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 11h4M11 9v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMaintenance({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14.5 4.5a4 4 0 0 0-5.7 5.7L4 15v3h3l4.8-4.8a4 4 0 0 0 5.7-5.7l-2.2 2.2-1.8-1.8 2-2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconSystems({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 6.5 9 9M15 15l2.5 2.5M17.5 6.5 15 9M9 15l-2.5 2.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconEmergency({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3 3 19h18L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M12 9v5M12 16.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMenu({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconAnchor({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 8v12M8 14H5a7 7 0 0 0 14 0h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconCheck({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12.5 10 17l9-10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrow({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function serviceIcon(icon: string, className?: string) {
  switch (icon) {
    case "engine":
      return <IconEngine className={className} />;
    case "electrical":
      return <IconElectrical className={className} />;
    case "diagnostics":
      return <IconDiagnostics className={className} />;
    case "maintenance":
      return <IconMaintenance className={className} />;
    case "systems":
      return <IconSystems className={className} />;
    case "emergency":
      return <IconEmergency className={className} />;
    default:
      return <IconAnchor className={className} />;
  }
}

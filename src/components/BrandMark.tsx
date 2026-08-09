type BrandMarkProps = {
  className?: string;
  size?: number;
};

/** Custom DY “boat doctor” mark — wrench + medical cross hybrid */
export function BrandMark({ className = "", size = 40 }: BrandMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <rect x="1" y="1" width="46" height="46" rx="3" stroke="currentColor" strokeWidth="1.5" />
      {/* medical cross */}
      <path
        d="M22 12h4v8h8v4h-8v8h-4v-8h-8v-4h8v-8Z"
        fill="currentColor"
        opacity="0.92"
      />
      {/* wrench arc */}
      <path
        d="M34.5 31.5c1.8 1.8 1.7 4.6-.2 6.4-1.8 1.8-4.6 1.9-6.4.2l-7.1-7.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="36.2" cy="36.2" r="2.2" fill="currentColor" />
      {/* small anchor hint */}
      <path
        d="M10 36.5h6M13 33.5v6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

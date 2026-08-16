import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "gold" | "ghost" | "navy";

type ButtonProps = {
  href?: string;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function buttonClass(variant: Variant, className: string) {
  return [
    "btn",
    variant === "ghost" ? "btn-ghost" : variant === "navy" ? "btn-navy" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

function isExternalHref(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("#")
  );
}

/** Shared gold / ghost / navy control. Prefer this over one-off button markup. */
export function Button({
  href,
  variant = "gold",
  children,
  className = "",
  type = "button",
  target,
  rel,
  ...rest
}: ButtonProps) {
  const cls = buttonClass(variant, className);
  if (href) {
    if (isExternalHref(href)) {
      return (
        <a href={href} className={cls} target={target} rel={rel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}

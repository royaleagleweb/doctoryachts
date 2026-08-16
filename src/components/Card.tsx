import type { ElementType, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** Paper card used for lists, FAQs, asides, and review/service tiles. */
export function Card({ children, className = "", as: Tag = "div" }: CardProps) {
  return <Tag className={["card", className].filter(Boolean).join(" ")}>{children}</Tag>;
}

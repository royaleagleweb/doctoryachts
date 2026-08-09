import { CaseTag } from "@/components/ChartDecor";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  as = "h2",
}: SectionHeadingProps) {
  const TitleTag = as;
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <CaseTag>{eyebrow}</CaseTag>
        </div>
      )}
      <TitleTag
        className={`font-display mt-4 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl ${
          light ? "text-paper" : "text-navy"
        }`}
      >
        {title}
      </TitleTag>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-[1.05rem] ${
            light ? "text-steel" : "text-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

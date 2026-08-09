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
  as = "h2",
}: SectionHeadingProps) {
  const TitleTag = as;
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <TitleTag className="font-display mt-3 text-3xl font-semibold leading-[1.12] tracking-tight text-pearl sm:text-4xl">
        {title}
      </TitleTag>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-steel sm:text-[1.05rem]">{description}</p>
      )}
    </div>
  );
}

import { ChartPlate } from "@/components/Nautical";

type PageHeroImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  overlay?: "navy" | "soft" | "none";
};

/** Chart plate in the old hero-image slot. Photographs stay out of the page. */
export function PageHeroImage({
  src,
  alt,
  className = "",
}: PageHeroImageProps) {
  void alt;
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <ChartPlate seed={src.length} />
    </div>
  );
}

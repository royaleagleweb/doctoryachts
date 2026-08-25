import Image from "next/image";

type PageHeroImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  overlay?: "navy" | "soft" | "none";
};

export function PageHeroImage({
  src,
  alt,
  priority = false,
  className = "",
  overlay = "navy",
}: PageHeroImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      {overlay === "navy" && (
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/72 via-navy/40 to-transparent" />
      )}
      {overlay === "soft" && (
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/58 via-navy/18 to-transparent" />
      )}
    </div>
  );
}

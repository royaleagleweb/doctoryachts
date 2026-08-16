import { site } from "@/lib/site";

type ReviewLinksProps = {
  className?: string;
};

/** Real Google + Yelp profile links only. No star ratings or invented counts. */
export function ReviewLinks({ className = "" }: ReviewLinksProps) {
  return (
    <span className={["review-links", className].filter(Boolean).join(" ")}>
      <a href={site.profiles.google} target="_blank" rel="noopener noreferrer">
        Google
      </a>
      <span aria-hidden="true">·</span>
      <a href={site.profiles.yelp} target="_blank" rel="noopener noreferrer">
        Yelp
      </a>
    </span>
  );
}

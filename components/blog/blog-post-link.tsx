import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { formatPostDate } from "@/lib/format-post-date";

export type BlogPostLinkProps = {
  title: string;
  slug: string;
  publishedAt: string;
  className?: string;
};

export function BlogPostLink({
  title,
  slug,
  publishedAt,
  className,
}: BlogPostLinkProps) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug }}
      className={cn(
        "group flex items-center justify-between gap-8 transition-colors duration-200 md:gap-20",
        className,
      )}
    >
      <span className="text-foreground group-hover:text-primary truncate">
        {title}
      </span>
      <span className="text-foreground/50 group-hover:text-primary shrink-0 font-mono text-xs font-light">
        {formatPostDate(publishedAt)}
      </span>
    </Link>
  );
}

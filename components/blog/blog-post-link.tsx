import Link from "next/link";
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
      href={`/blog/${slug}`}
      className={cn(
        "group flex items-center justify-between gap-8 transition-colors duration-200 md:gap-20",
        className,
      )}
    >
      <span className="text-foreground truncate group-hover:text-primary">
        {title}
      </span>
      <span className="text-foreground/50 shrink-0 font-mono text-xs font-light group-hover:text-primary">
        {formatPostDate(publishedAt)}
      </span>
    </Link>
  );
}

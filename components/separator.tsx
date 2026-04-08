"use client";

import { cn } from "@/lib/utils";

import { DottedUnderline, type DottedUnderlineProps } from "./dotted-underline";

export type DottedSeparatorProps = Omit<DottedUnderlineProps, "className"> & {
  /** Classes on the full-width wrapper (margins, spacing, etc.). */
  className?: string;
  /** Optional classes merged onto the dotted SVG strip. */
  svgClassName?: string;
};

/**
 * Full-width dotted line matching {@link DottedUnderline}; use between sections.
 */
export function DottedSeparator({
  className,
  svgClassName,
  ...dottedProps
}: DottedSeparatorProps) {
  return (
    <div aria-hidden className={cn("w-full shrink-0", className)}>
      <DottedUnderline
        {...dottedProps}
        className={cn(
          "relative right-auto bottom-auto left-auto block w-full opacity-40",
          svgClassName,
        )}
      />
    </div>
  );
}

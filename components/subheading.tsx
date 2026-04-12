import { cn } from "@/lib/utils";
import React from "react";

export const Subheading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={cn(
        "text-foreground/40 font-mono text-sm uppercase tracking-wide",
        className,
      )}
    >
      {children}
    </h2>
  );
};

import { cn } from "@/lib/utils";

export default function Container({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl px-4", className)} {...rest}>
      {children}
    </div>
  );
}

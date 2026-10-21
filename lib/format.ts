const compact = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 1,
});

const utcDate = new Intl.DateTimeFormat("en-US", {
  timeZone: "UTC",
  month: "short",
  day: "numeric",
  year: "numeric",
});

export const formatCompact = (n: number) => compact.format(n);

export const formatUtcDate = (iso: string) => utcDate.format(new Date(iso));

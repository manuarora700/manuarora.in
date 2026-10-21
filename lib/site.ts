export const SITE_URL = "https://manuarora.in";
export const SITE_NAME = "Manu Arora";
export const DEFAULT_TITLE = "Manu Arora - Developer, writer, creator.";
export const DEFAULT_DESCRIPTION =
  "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.";

export const pageTitle = (title: string) => `${title} – ${SITE_NAME}`;

export const CACHE_HEADERS = {
  "Cache-Control":
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
};

export const YOUTUBE_CHANNEL_ID = "UC7MQDjVfjEPkHMe1lZGkDRA";
export const YOUTUBE_URL = "https://www.youtube.com/@manuarora";

export const FEATURED_VIDEOS = [
  {
    id: "MPyPqlYACA0",
    title: "Gemini 3.0 Claims Frontend Is Over—Here’s My Take!",
    publishedAt: "2025-11-21T11:53:15Z",
    views: 43_374,
    duration: "27:14",
  },
  {
    id: "e6QLqWrsmjU",
    title: "Designing with AI: My Entire Process",
    publishedAt: "2026-10-06T13:00:39Z",
    views: 23_625,
    duration: "26:54",
  },
  {
    id: "Wvj5veMEmE0",
    title: "I vibe-coded my portfolio website in just 2 hours",
    publishedAt: "2026-09-08T13:00:15Z",
    views: 20_243,
    duration: "2:28:56",
  },
];

export const SOCIALS = {
  x: { label: "X", handle: "@mannupaaji", href: "https://x.com/mannupaaji" },
  youtube: { label: "YouTube", handle: "@manuarora", href: YOUTUBE_URL },
  github: {
    label: "GitHub",
    handle: "manuarora700",
    href: "https://github.com/manuarora700",
  },
  linkedin: {
    label: "LinkedIn",
    handle: "manuarora28",
    href: "https://www.linkedin.com/in/manuarora28",
  },
} as const;

export const STATS_UPDATED = "2026-10-21";

export const YOUTUBE_STATS = { subscribers: 33_500 };

export const X_STATS = { followers: 44_000, monthlyImpressions: 700_000 };

export const ACETERNITY_UI_MONTHLY = {
  pageViews: 3_000_000,
  uniqueVisitors: 200_000,
};

import React from "react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Subheading } from "./subheading";
import { formatCompact, formatUtcDate } from "@/lib/format";
import type { YouTubeVideo } from "@/lib/youtube";
import { YOUTUBE_URL } from "@/lib/site";

export const LatestVideos = ({
  videos,
  featured = false,
}: {
  videos: YouTubeVideo[];
  featured?: boolean;
}) => {
  return (
    <section>
      <div className="flex items-baseline justify-between gap-4">
        <Subheading>
          {featured ? "Popular videos" : "Latest videos"}
        </Subheading>
        <a
          href={`${YOUTUBE_URL}/videos`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/50 hover:text-primary flex items-center gap-0.5 text-xs transition-colors duration-150"
        >
          All videos
          <IconArrowUpRight aria-hidden className="size-3.5" />
        </a>
      </div>

      {videos.length ? (
        <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
          {videos.map((video) => (
            <li key={video.id}>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[8.5rem_1fr] items-start gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary) md:flex md:flex-col"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black/5 shadow-sm shadow-black/10">
                  <img
                    src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                    srcSet={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg 320w, https://i.ytimg.com/vi/${video.id}/hqdefault.jpg 480w`}
                    sizes="(min-width: 768px) 210px, 136px"
                    alt=""
                    width={320}
                    height={180}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="pointer-events-none absolute inset-0 rounded-lg outline outline-1 -outline-offset-1 outline-black/10" />
                  {video.duration ? (
                    <span className="absolute right-1.5 bottom-1.5 rounded bg-black/75 px-1 py-px font-mono text-[11px] text-white tabular-nums">
                      {video.duration}
                    </span>
                  ) : null}
                </div>
                <div className="flex min-w-0 flex-col gap-1">
                  <p className="text-foreground group-hover:text-primary line-clamp-2 text-sm font-medium text-pretty transition-colors duration-150">
                    {video.title}
                  </p>
                  <p className="text-foreground/50 font-mono text-xs tabular-nums">
                    {formatUtcDate(video.publishedAt)}
                    {video.views !== null
                      ? ` · ${formatCompact(video.views)} views`
                      : ""}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-foreground/70 mt-4 text-sm">
          The newest videos are on{" "}
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-neutral-400 decoration-dotted underline-offset-[0.2em]"
          >
            my YouTube channel
          </a>
          .
        </p>
      )}
    </section>
  );
};

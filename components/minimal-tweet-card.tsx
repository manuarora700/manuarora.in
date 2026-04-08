import type { Tweet } from "react-tweet/api";
import { enrichTweet, getMediaUrl, type EnrichedTweet } from "react-tweet";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import Link from "next/link";

type MinimalTweetCardProps = {
  tweet: Tweet;
  href: string;
};

function TweetBody({ tweet }: { tweet: EnrichedTweet }) {
  return (
    <p
      className="text-foreground pointer-events-none text-sm leading-snug wrap-break-word whitespace-pre-wrap"
      lang={tweet.lang}
      dir="auto"
    >
      {tweet.entities.map((item, i) => {
        switch (item.type) {
          case "hashtag":
          case "mention":
          case "url":
          case "symbol":
            return (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto relative z-20 text-sky-600 underline decoration-sky-600/40 underline-offset-2 hover:text-sky-700"
              >
                {item.text}
              </a>
            );
          case "media":
            return null;
          default:
            return (
              <span
                key={i}
                // Preserve unicode / line breaks like react-tweet TweetBody
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            );
        }
      })}
    </p>
  );
}

function MediaBlock({ tweet }: { tweet: EnrichedTweet }) {
  const items = tweet.mediaDetails;
  if (!items?.length) return null;

  return (
    <div className="flex flex-col gap-2">
      {items.map((media) => {
        const thumbSrc = getMediaUrl(media, "small");
        const isPhoto = media.type === "photo";
        const showPlayOverlay =
          media.type === "video" || media.type === "animated_gif";

        if (!showPlayOverlay) {
          return (
            <img
              key={media.media_url_https}
              src={thumbSrc}
              alt={isPhoto ? media.ext_alt_text || "" : ""}
              className="pointer-events-none max-h-80 w-full rounded-md object-cover"
              loading="lazy"
            />
          );
        }

        return (
          <div
            key={media.media_url_https}
            className="relative overflow-hidden rounded-md"
          >
            <img
              src={thumbSrc}
              alt=""
              className="pointer-events-none max-h-80 w-full rounded-md object-cover"
              loading="lazy"
            />
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden
            >
              <span className="rounded-full bg-black/50 p-2.5 shadow-sm ring-1 ring-white/25">
                <IconPlayerPlayFilled
                  className="h-7 w-7 text-white"
                  aria-hidden
                />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function MinimalTweetCard({ tweet, href }: MinimalTweetCardProps) {
  const enriched = enrichTweet(tweet);
  const profileUrl = enriched.user.url;

  return (
    <Link
      href={href}
      target="_blank"
      className="mb-4 inline-block w-full min-w-0 break-inside-avoid align-top"
    >
      <article className="relative rounded-lg bg-white p-3 text-sm shadow-sm ring-1 shadow-black/10 ring-black/10">
        {/* <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-10 rounded-lg"
          aria-label={`Open tweet by @${tweet.user.screen_name}`}
        /> */}

        <div className="pointer-events-none relative z-20 space-y-3">
          <div className="flex gap-3">
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto relative z-20 h-10 w-10 shrink-0 overflow-hidden rounded-full"
            >
              <img
                src={tweet.user.profile_image_url_https}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </a>
            <div className="min-w-0 flex-1">
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground pointer-events-auto relative z-20 block truncate font-semibold hover:underline"
              >
                {tweet.user.name}
              </a>
              <p className="text-foreground/40 truncate">
                @{tweet.user.screen_name}
              </p>
            </div>
          </div>

          <TweetBody tweet={enriched} />
          <MediaBlock tweet={enriched} />
        </div>
      </article>
    </Link>
  );
}

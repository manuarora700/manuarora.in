import { FEATURED_VIDEOS, YOUTUBE_CHANNEL_ID } from "./site";

export type YouTubeVideo = {
  id: string;
  title: string;
  publishedAt: string;
  views: number | null;
  duration: string | null;
};

export type YouTubeData = {
  stats: { subscribers: number; views: number; videos: number } | null;
  videos: YouTubeVideo[];
  featured: boolean;
  fetchedAt: string;
};

const API = "https://www.googleapis.com/youtube/v3";
const LONG_FORM_PLAYLIST = `UULF${YOUTUBE_CHANNEL_ID.slice(2)}`;
const TTL_MS = 6 * 60 * 60 * 1000;
const RETRY_MS = 10 * 60 * 1000;

const getJson = async (url: string) => {
  const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
  if (!res.ok) throw new Error(`${res.status} ${url.split("?")[0]}`);
  return res.json();
};

const formatDuration = (iso: string) => {
  const [, h = "0", m = "0", s = "0"] =
    iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) ?? [];
  const mm = h !== "0" ? m.padStart(2, "0") : m;
  return `${h !== "0" ? `${h}:` : ""}${mm}:${s.padStart(2, "0")}`;
};

async function fromApi(
  key: string,
): Promise<Omit<YouTubeData, "fetchedAt" | "featured">> {
  const [channel, playlist] = await Promise.all([
    getJson(
      `${API}/channels?part=statistics&id=${YOUTUBE_CHANNEL_ID}&key=${key}`,
    ),
    getJson(
      `${API}/playlistItems?part=contentDetails&maxResults=3&playlistId=${LONG_FORM_PLAYLIST}&key=${key}`,
    ),
  ]);
  const ids = playlist.items.map((i) => i.contentDetails.videoId).join(",");
  const details = await getJson(
    `${API}/videos?part=snippet,statistics,contentDetails&id=${ids}&key=${key}`,
  );
  const s = channel.items?.[0]?.statistics;

  return {
    stats: s
      ? {
          subscribers: Number(s.subscriberCount),
          views: Number(s.viewCount),
          videos: Number(s.videoCount),
        }
      : null,
    videos: details.items.map((v) => ({
      id: v.id,
      title: v.snippet.title,
      publishedAt: v.snippet.publishedAt,
      views: Number(v.statistics.viewCount),
      duration: formatDuration(v.contentDetails.duration),
    })),
  };
}

async function fromRss(): Promise<Omit<YouTubeData, "fetchedAt" | "featured">> {
  const res = await fetch(
    `https://www.youtube.com/feeds/videos.xml?playlist_id=${LONG_FORM_PLAYLIST}`,
    { signal: AbortSignal.timeout(4000) },
  );
  if (!res.ok) throw new Error(`RSS ${res.status}`);
  const xml = await res.text();
  const pick = (entry: string, re: RegExp) => entry.match(re)?.[1] ?? "";
  const videos = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
    .slice(0, 3)
    .map(([, e]) => ({
      id: pick(e, /<yt:videoId>(.*?)<\/yt:videoId>/),
      title: pick(e, /<title>(.*?)<\/title>/)
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">"),
      publishedAt: pick(e, /<published>(.*?)<\/published>/),
      views: Number(pick(e, /views="(\d+)"/)) || null,
      duration: null,
    }));
  return { stats: null, videos };
}

let cache: { data: YouTubeData; expires: number } | null = null;
let pending: Promise<YouTubeData> | null = null;

async function load(): Promise<YouTubeData> {
  const key = process.env.YOUTUBE_API_KEY;
  try {
    const data = {
      ...(await (key ? fromApi(key) : fromRss())),
      featured: false,
      fetchedAt: new Date().toISOString(),
    };
    cache = { data, expires: Date.now() + TTL_MS };
    return data;
  } catch (error) {
    console.error("[youtube] fetch failed:", (error as Error).message);
    const data = cache?.data ?? {
      stats: null,
      videos: [],
      featured: false,
      fetchedAt: new Date().toISOString(),
    };
    cache = { data, expires: Date.now() + RETRY_MS };
    return data;
  }
}

const withFeatured = (data: YouTubeData): YouTubeData =>
  data.videos.length
    ? data
    : { ...data, videos: FEATURED_VIDEOS, featured: true };

export function getYouTubeData(): Promise<YouTubeData> {
  if (cache && cache.expires > Date.now())
    return Promise.resolve(withFeatured(cache.data));
  pending ??= load().finally(() => (pending = null));
  return pending.then(withFeatured);
}

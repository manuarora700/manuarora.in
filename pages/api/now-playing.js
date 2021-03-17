import { getNowPlaying } from "@/lib/spotify";

export default async (_, res) => {
  const response = await getNowPlaying();
  const { item } = await response.json();
  console.log("item - now-playing", item);

  if (!item) {
    const track = {};

    return res.status(200).json({ track });
  }
  const track = {
    trackName: item.name,
    albumName: item.album.name,
    artistName: item.artists[0].name,
    songUrl: item.external_urls.spotify,
  };

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ track });
};

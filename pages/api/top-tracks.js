import { getTopTracks } from "@/lib/spotify";

export default async (_, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  if (!items) {
    const track = [];

    return res.status(200).json({ track });
  }

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(", "),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ tracks });
};

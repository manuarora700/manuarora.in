import { getNowPlaying } from "@/lib/spotify";

export default async (_, res) => {
  const response = await getNowPlaying();
  const { item } = await response.json();

  const track = {
    trackName: item.name,
    albumName: item.album.name,
    artistName: item.artists[0].name,
    songUrl: item.external_urls.spotify,
  };

  //   console.log("response data", item);

  //   const tracks = items.slice(0, 10).map((track) => ({
  //     artist: track.artists.map((_artist) => _artist.name).join(", "),
  //     songUrl: track.external_urls.spotify,
  //     title: track.name,
  //   }));

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=43200"
  );

  return res.status(200).json({ track });
};

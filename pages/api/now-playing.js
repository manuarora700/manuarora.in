// import { getNowPlaying } from "@/lib/spotify";

// export default async (_, res) => {
//   const response = await getNowPlaying();
//   const { item } = await response.json();
//   console.log("item - now-playing", item);

//   if (!item) {
//     const track = {};

//     return res.status(200).json({ track });
//   }
//   const track = {
//     trackName: item.name,
//     albumName: item.album.name,
//     artistName: item.artists[0].name,
//     songUrl: item.external_urls.spotify,
//   };

//   res.setHeader(
//     "Cache-Control",
//     "public, s-maxage=86400, stale-while-revalidate=43200"
//   );

//   return res.status(200).json({ track });
// };

import { getNowPlaying } from "@/lib/spotify";

export default async (_, res) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = await response.json();
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  const track = {
    isPlaying,
    title,
    artist,
    album,
    albumImageUrl,
    songUrl,
  };

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json(track);
};

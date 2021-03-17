import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import Track from "@/components/Track";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        Top Tracks
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Curious what I'm currently jamming to? Here's my top tracks on Spotify
        updated daily.
      </p>
      {data?.tracks?.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}

{
  /* <>
      <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
        Top Tracks
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Curious what I'm currently jamming to? Here's my top tracks on Spotify
        updated daily.
      </p>
      <Track ranking={index + 1} key={track.songUrl} {...track} />
    </> */
}

// data?.tracks?.map((track, index) => (

//   <Track ranking={index + 1} key={track.songUrl} {...track} />
// ));

import useSWR from "swr";

import fetcher from "@/lib/fetcher";
import Track from "@/components/Track";

export default function TopTracks() {
  const { data } = useSWR("/api/top-tracks", fetcher);
  console.log("data", data);

  if (!data) {
    return null;
  }

  return (
    <>
      <span className="hidden">testing</span>
      {data?.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  );
}
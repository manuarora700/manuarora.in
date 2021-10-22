// import Analytics from "@/components/metrics/Analytics";
// import Buttondown from "@/components/metrics/Buttondown";
import Container from "@/components/Container";
import GitHub from "@/components/metrics/Github";
import Followers from "@/components/metrics/Followers";
import Following from "@/components/metrics/Following";
import Repositories from "@/components/metrics/Repositories";
import TopTracks from "@/components/TopTracks";
import TwitterStatistics from "@/components/metrics/TwitterStatistics";
import Analytics from "@/components/metrics/Analytics";
import { NAME } from "constants/app";
// import NowPlaying from "@/components/NowPlaying";
// import TopTracks from "@/components/TopTracks";
// Have one for twitter

export default function Dashboard() {
  return (
    <Container
      title={`Dashboard – ${NAME}`}
      description="A Dashboard to show various metrics via Next JS _api routes, deployed as serverless functions."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Dashboard
        </h1>
        <div className="mb-8">
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            This dashboard is created with NextJS _api routes converted to
            serverless functions that tracks various metrics across platforms
            like GitHub, Twitter, Spotify and more 🚀.
          </p>
        </div>
        {/* <div className="flex flex-col w-full">
          <Unsplash />
          <YouTube />
        </div> */}
        {/* <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2"> */}
        {/* <Analytics /> */}
        {/* <GitHub />
          <Followers />
        </div>
        <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
          <Following />
          <Repositories />
        </div>{" "}
        <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
          <TwitterStatistics type="followers" />
          <TwitterStatistics type="following" />
        </div>{" "}
        <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
          <TwitterStatistics type="total_tweets" />
          <Analytics />
        </div>{" "} */}
        <h2 className="mt-16 mb-4 text-3xl font-bold tracking-tight text-black dark:text-white">
          Top Tracks
        </h2>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Curious what I'm currently jamming to? Here's my top tracks on Spotify
          updated daily.
        </p>
        <TopTracks />
      </div>
    </Container>
  );
}

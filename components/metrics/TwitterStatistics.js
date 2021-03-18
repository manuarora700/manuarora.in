import useSWR from "swr";
import format from "comma-number";

import fetcher from "@/lib/fetcher";
import { useEffect } from "react";
import TwitterCard from "@/components/metrics/TwitterCard";

export default function TwitterStatistics({ type }) {
  const { data } = useSWR("/api/twitter-user", fetcher);

  if (!data) {
    return null;
  }

  //   useEffect(() => {
  //     return () => {};
  //   }, [data]);

  let followers = data?.user?.public_metrics?.followers_count;
  let following = data?.user?.public_metrics?.following_count;
  let count = data?.user?.public_metrics?.tweet_count;
  let username = data?.user?.username;
  const link = "/tweets";

  return (
    <>
      {type == "followers" && (
        <TwitterCard
          header="Twitter Followers"
          link={link}
          metric={followers}
        />
      )}
      {type == "following" && (
        <TwitterCard
          header="Twitter Following"
          link={link}
          metric={following}
        />
      )}
      {type == "total_tweets" && (
        <TwitterCard header="Tweet Count" link={link} metric={count} />
      )}
      {type == "username" && (
        <TwitterCard header="Twitter username" link={link} metric={username} />
      )}
    </>
  );
}

import useSWR from "swr";
import format from "comma-number";

import fetcher from "@/lib/fetcher";
import MetricCard from "@/components/metrics/Card";

export default function Followers() {
  const { data } = useSWR("/api/github", fetcher);

  const following = format(data?.following);
  const link = "https://github.com/a3har/";

  return (
    <MetricCard header="GitHub Following" link={link} metric={following} />
  );
}

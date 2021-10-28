import useSWR from "swr";
import format from "comma-number";

import fetcher from "@/lib/fetcher";
import MetricCard from "@/components/metrics/Card";

export default function GitHub() {
  const { data } = useSWR("/api/github", fetcher);

  const stars = format(data?.stars);
  const followers = format(data?.followers);
  const link = "https://github.com/a3har";

  return <MetricCard header="GitHub Stars" link={link} metric={stars} />;
}

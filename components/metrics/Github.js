import useSWR from "swr";
import format from "comma-number";

import fetcher from "@/lib/fetcher";
import MetricCard from "@/components/metrics/Card";
import { GITHUB_URL } from "constants/social";

export default function GitHub() {
  const { data } = useSWR("/api/github", fetcher);

  const stars = format(data?.stars);
  const followers = format(data?.followers);

  return <MetricCard header="GitHub Stars" link={GITHUB_URL} metric={stars} />;
}

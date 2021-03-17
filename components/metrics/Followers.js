import useSWR from "swr";
import format from "comma-number";

import fetcher from "@/lib/fetcher";
import MetricCard from "@/components/metrics/Card";

export default function Followers() {
  const { data } = useSWR("/api/github", fetcher);

  const followers = format(data?.followers);
  const link = "https://github.com/manuarora700";

  return (
    <MetricCard header="GitHub Followers" link={link} metric={followers} />
  );
}

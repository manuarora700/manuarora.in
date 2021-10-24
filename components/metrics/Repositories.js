import useSWR from "swr";
import format from "comma-number";

import fetcher from "@/lib/fetcher";
import MetricCard from "@/components/metrics/Card";

export default function Repositories() {
  const { data } = useSWR("/api/github", fetcher);

  const repoCount = format(data?.repoCount);
  const link = "https://github.com/a3har";

  return (
    <MetricCard header="GitHub Repositories" link={link} metric={repoCount} />
  );
}

import type { Metadata } from "next";
import { getTweet } from "react-tweet/api";
import { MinimalTweetCard } from "@/components/minimal-tweet-card";
import { Subheading } from "@/components/subheading";
import Container from "@/components/container";
import { DottedSeparator } from "@/components/separator";

export const metadata: Metadata = {
  title: "Tweets - Manu Arora",
  description:
    "A curated timeline of my tweets on design engineering, building, and the occasional rant.",
  alternates: {
    canonical: "/tweets",
  },
};

const tweetUrls = [
  "https://x.com/mannupaaji/status/2041530769009705360",
  "https://x.com/mannupaaji/status/2041146935445508356",
  "https://x.com/mannupaaji/status/2040405539205820889",
  "https://x.com/mannupaaji/status/2040088998832697451",
  "https://x.com/mannupaaji/status/2039348883026022549",
  "https://x.com/mannupaaji/status/2037485739089486237",
  "https://x.com/mannupaaji/status/2037185597396443403",
  "https://x.com/mannupaaji/status/2036767061553365349",
  "https://x.com/mannupaaji/status/2036343774557905359",
  "https://x.com/mannupaaji/status/2036056939000672341",
  "https://x.com/mannupaaji/status/2034225907158986852",
  "https://x.com/mannupaaji/status/2033919469752602712",
  "https://x.com/mannupaaji/status/2033499402661425661",
  "https://x.com/mannupaaji/status/2033098691733869002",
  "https://x.com/mannupaaji/status/2032368957131538581",
  "https://x.com/mannupaaji/status/2029836905261813971",
  "https://x.com/mannupaaji/status/2029237007977988456",
  "https://x.com/mannupaaji/status/1946105211405455593",
  "https://x.com/mannupaaji/status/1945769893800149262",
  "https://x.com/mannupaaji/status/1945450144180445279",
  "https://x.com/mannupaaji/status/1946533060364931137",
  "https://x.com/mannupaaji/status/1947256830671142979",
  "https://x.com/mannupaaji/status/1947992084172177910",
  "https://x.com/mannupaaji/status/1949002020943544372",
  "https://x.com/mannupaaji/status/1761811288181620772",
  "https://x.com/mannupaaji/status/1726609004246516149",
  "https://x.com/mannupaaji/status/2040045902073835731",
  "https://x.com/mannupaaji/status/2039666418208436293",
] as const;

function getTweetId(url: string) {
  return url.split("/status/")[1]?.split("?")[0] ?? "";
}

export default async function TweetsPage() {
  const items = await Promise.all(
    tweetUrls.map(async (url) => {
      const id = getTweetId(url);
      const tweet = await getTweet(id);
      return { url, id, tweet };
    }),
  );

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
      <Container>
        <Subheading>I post on twitter, you know.</Subheading>
        <p className="text-foreground pt-4 text-base text-balance">
          Most of the time I share my learnings on design engineering and
          building my SaaS. Sometimes I shitpost, Sometimes I rant, and
          sometimes I try to get as much fomo as I can.
        </p>
        <p className="text-foreground pt-4 text-base">
          Here are some of the tweets that I'm proud of.
        </p>
      </Container>

      <div className="mt-8 mb-20 w-full columns-1 gap-x-4 sm:columns-2 lg:columns-3 xl:columns-4 2xl:columns-5">
        {items.map(({ url, tweet }) =>
          tweet ? (
            <MinimalTweetCard key={tweet.id_str} tweet={tweet} href={url} />
          ) : null,
        )}
      </div>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </div>
  );
}

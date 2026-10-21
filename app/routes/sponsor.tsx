import { createFileRoute } from "@tanstack/react-router";
import Container from "@/components/container";
import { Companies } from "@/components/companies";
import { CopyEmailInline } from "@/components/copy-email-inline";
import { Focus } from "@/components/focus";
import { LinkPreview } from "@/components/link-preview";
import { DottedSeparator } from "@/components/separator";
import { Reach } from "@/components/reach";
import { LatestVideos } from "@/components/latest-videos";
import { getYouTube } from "@/lib/youtube";
import { CACHE_HEADERS, pageTitle, SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/sponsor")({
  loader: () => getYouTube(),
  headers: () => CACHE_HEADERS,
  head: () => ({
    meta: [
      { title: pageTitle("Sponsor - Manu Arora") },
      {
        name: "description",
        content:
          "Partner with me to feature products I genuinely use and recommend to my audience.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/sponsor` }],
  }),
  component: SponsorsPage,
});

function SponsorsPage() {
  const youtube = Route.useLoaderData();
  return (
    <>
      <Container className="min-h-screen">
        <div className="text-foreground pt-4 text-base">
          I talk about products and startups on my{" "}
          <LinkPreview url="https://www.youtube.com/@manuarora">
            YouTube Channel
          </LinkPreview>{" "}
          that I like and use myself. I've been using a lot of products and
          would love to feature them in my videos.
        </div>
        <div className="text-foreground pt-4 text-base">
          It should collectively help my audience to build better products. If
          you think your product is a good fit, valuable and useful, please
          reach out to me at <CopyEmailInline>my email</CopyEmailInline>.
        </div>
        <DottedSeparator className="my-8" />
        <Reach youtube={youtube} />
        <DottedSeparator className="my-8" />
        <LatestVideos videos={youtube.videos} featured={youtube.featured} />
        <DottedSeparator className="my-8" />
        <Focus />
        <DottedSeparator className="my-8" />
        <Companies />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </>
  );
}

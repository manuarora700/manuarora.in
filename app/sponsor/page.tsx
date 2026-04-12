import type { Metadata } from "next";
import Container from "@/components/container";
import { Companies } from "@/components/companies";
import { CopyEmailInline } from "@/components/copy-email-inline";
import { Focus } from "@/components/focus";
import { LinkPreview } from "@/components/link-preview";

import { DottedSeparator } from "@/components/separator";

export const metadata: Metadata = {
  title: "Sponsor - Manu Arora",
  description:
    "Partner with me to feature products I genuinely use and recommend to my audience.",
  alternates: {
    canonical: "/sponsor",
  },
};

export default async function SponsorsPage() {
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

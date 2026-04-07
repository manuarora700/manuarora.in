import Container from "@/components/Container";
import { Companies } from "@/components/new-components/companies";
import { CopyEmailInline } from "@/components/new-components/copy-email-inline";
import { Focus } from "@/components/new-components/focus";
import { LinkPreview } from "@/components/new-components/link-preview";

import { DottedSeparator } from "@/components/new-components/separator";

export default async function SponsorsPage() {
  return (
    <>
      <Container className="min-h-screen">
        <div className="text-foreground pt-4 text-base">
          I talk about products and startups on my{" "}
          <LinkPreview url="https://www.youtube.com/@manuarora">
            YouTube Channel
          </LinkPreview>{" "}
          channel that I like and use myself. I've been using a lot of products
          and would love to feature them in my videos.
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

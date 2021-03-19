import Container from "@/components/Container";
import ResourcesCard from "@/components/ResourcesCard";

export default function Snippets({ snippets }) {
  // TODO: Make sections for each type, ex: Javascript, HTML CSS etc
  return (
    <Container
      title="Resources – Manu Arora"
      description="Helpful websites that I've been using for years that have helped me in developing
      applications and much more"
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Resources
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Helpful{" "}
          <span className="bg-gray-100 border rounded-md px-1 py-0.5 tracking-tight dark:text-gray-300 dark:bg-gray-700">
            websites
          </span>{" "}
          that I've been using for years that have helped me in developing
          applications and much more. 🔥
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          <ResourcesCard
            title="UI Gradients"
            link="https://uigradients.com"
            websiteLink="uigradients.com"
            description="Get different gradient range"
          />
          <ResourcesCard
            title="Free Themes & Templates"
            link="https://www.creative-tim.com/templates/free"
            websiteLink="creative-tim.com"
            description="Get free themes, templates & UI Kits"
          />
          <ResourcesCard
            title="Minimal Icons Pack"
            link="https://www.heroicons.com"
            websiteLink="heroicons.com"
            description="Get free icons"
          />
          <ResourcesCard
            title="Waves & SVG blobs"
            link="https://getwaves.io/"
            websiteLink="getwaves.io"
            description="Generate waves for your website."
          />
          {/* https://getwaves.io/ */}
        </div>
      </div>
    </Container>
  );
}

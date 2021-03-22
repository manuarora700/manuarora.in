import Container from "@/components/Container";
import DemosCard from "@/components/DemosCard";
import ResourcesCard from "@/components/ResourcesCard";

export default function Demos() {
  // TODO: Make sections for each type, ex: Javascript, HTML CSS etc
  return (
    <Container
      title="Live Demos – Manu Arora"
      description="Live Demo pages for all the code snippets and blogs I've written."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Live Demos
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          <span className="bg-gray-100 border rounded-md px-1 py-0.5 tracking-tight dark:text-gray-300 dark:bg-gray-700">
            Live Demos
          </span>{" "}
          for all the blog articles & code snippets that I write, I put up live
          demos for those here. The source code is attached here and in the blog
          too. 🙌🏻
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          <DemosCard
            title="Gradient"
            link="demos/demo/gradient"
            description="Gradient text for headers"
          />
          <DemosCard
            title="Tailwind Card"
            link="demos/demo/tailwindcard"
            description="Simple tailwind css card"
          />
          <DemosCard
            title="Moving Cards"
            link="demos/demo/movingcard"
            description="Moving tailwind css cards"
          />
        </div>
      </div>
    </Container>
  );
}

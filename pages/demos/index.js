import Container from "@/components/Container";
import DemosCard from "@/components/DemosCard";
import ResourcesCard from "@/components/ResourcesCard";
import { NAME } from "constants/app";

export default function Demos() {
  // TODO: Make sections for each type, ex: Javascript, HTML CSS etc
  return (
    <Container
      title={`Live Demos – ${NAME}`}
      description="Live Demo pages for all the code snippets and blogs I've written."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Live Demos
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          <span className="bg-gray-100 border rounded-md px-1 py-0.5 tracking-tight dark:text-gray-300 dark:bg-gray-700">
            Live Demos
          </span>{" "}
          for all the blog articles & code snippets that I write, I put up live
          demos for those here. The source code is attached here and in the blog
          too. 🙌🏻
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {/* <DemosCard
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
          <DemosCard
            title="Simple Loader"
            link="demos/demo/loader"
            description="A reusable react loading spinner"
          />
          <DemosCard
            title="React Toasts"
            link="demos/demo/toast"
            description="A reusable react toast notification"
          />
          <DemosCard
            title="Border Gradient"
            link="demos/demo/borderGradient"
            description="Add gradients to border"
          /> */}
        </div>
      </div>
    </Container>
  );
}

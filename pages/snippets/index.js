import Container from "@/components/Container";
import FunctionCard from "@/components/FunctionCard";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { NAME } from "constants/app";

export default function Snippets({ snippets }) {
  return (
    <Container
      title={`Snippets – ${NAME}`}
      description="Reusable code snippets that contains API integrations, custom CSS or something I find cool."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Snippets
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          Reusable{" "}
          <span className="bg-gray-100 border rounded-md px-1 py-0.5 tracking-tight dark:text-gray-300 dark:bg-gray-700">
            code snippets
          </span>{" "}
          that can be easily integrated in your application 🧩. The page
          contains functions and code snippets which can be used on your
          webpage.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 my-2 mt-4 sm:grid-cols-2">
          {/* {snippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))} */}
          <FunctionCard
            title="Adding more"
            slug="/snippets"
            description="Adding more each day.."
            logo="react.png"
          />
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter("snippets");

  return { props: { snippets } };
}

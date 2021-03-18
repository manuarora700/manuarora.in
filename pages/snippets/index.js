import Container from "@/components/Container";
import FunctionCard from "@/components/FunctionCard";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export default function Snippets({ snippets }) {
  return (
    <Container
      title="Snippets – Manu Arora"
      description="Reusable code snippets that contains API integrations, custom CSS or something I find cool."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Snippets
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Reusable{" "}
          <span className="bg-gray-100 border rounded-md px-1 py-0.5 tracking-tight dark:text-gray-300 dark:bg-gray-700">
            code snippets
          </span>{" "}
          that can be easily integrated in your application 🧩. The page
          contains functions and code snippets which can be used on your
          webpage.
        </p>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full mt-4">
          {snippets.map((snippet) => (
            <FunctionCard
              key={snippet.slug}
              title={snippet.title}
              slug={snippet.slug}
              logo={snippet.logo}
              description={snippet.description}
            />
          ))}
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

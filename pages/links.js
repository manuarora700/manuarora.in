import Container from "@/components/Container";
import ResourcesCard from "@/components/ResourcesCard";
import { links } from "@/constants/links";

export default function Links() {
  return (
    <Container
      title="Links – Manu Arora"
      description="Links to all my socials, projects, source codes and memes."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Links
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4 hidden md:block">
          Links to all my socials, projects, source codes and memes.
        </p>
        {links?.map((el) => (
          <a
            key={el?.href}
            href={el?.href}
            target="__blank"
            className="border-2 border-gray-200 rounded-md py-2 px-4 w-full mb-4 hover:bg-gray-100"
          >
            <span className="inline-block mr-2">{el?.icon}</span>{" "}
            <span className="font-bold">{el?.name}</span>
          </a>
        ))}
      </div>
    </Container>
  );
}

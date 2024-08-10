import Container from "@/components/Container";
import FunctionCard from "@/components/FunctionCard";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";

export default function DesignInspiration({ snippets }) {
  const items = [
    {
      name: "James",
      twitter: "https://x.com/jamesm",
      website: "https://wireframe.co",
      images: [
        "/design-inspiration/james-1.jpeg",
        "/design-inspiration/james-2.jpeg",
        "/design-inspiration/james-3.jpeg",
        "/design-inspiration/james-4.jpeg",
      ],
    },
    {
      name: "Oğuz",
      twitter: "https://x.com/oguzyagizkara",
      website: "https://oguzyagiz.com",
      images: [
        "/design-inspiration/oguz-1.jpeg",
        "/design-inspiration/oguz-2.jpeg",
        "/design-inspiration/oguz-3.jpeg",
        "/design-inspiration/oguz-4.jpeg",
      ],
    },
    {
      name: "Rauno",
      twitter: "https://x.com/raunofreiberg",
      website: "https://rauno.me",
      images: [
        "/design-inspiration/rauno-1.jpeg",
        "/design-inspiration/rauno-2.jpg",
        "/design-inspiration/rauno-3.jpg",
        "/design-inspiration/rauno-4.jpg",
      ],
    },
    {
      name: "Mariana Castilho",
      twitter: "https://x.com/mrncst",
      website: "https://www.uilabs.dev",
      images: [
        "/design-inspiration/mariana-1.jpg",
        "/design-inspiration/mariana-2.jpg",
        "/design-inspiration/mariana-3.jpg",
        "/design-inspiration/mariana-4.jpg",
      ],
    },
    {
      name: "Akash Bhadange",
      twitter: "https://x.com/designerdada",
      website: "https://www.peerlist.io",
      images: [
        "/design-inspiration/akash-1.jpeg",
        "/design-inspiration/akash-2.jpeg",
        "/design-inspiration/akash-3.jpeg",
        "/design-inspiration/akash-4.jpg",
      ],
    },
  ];
  return (
    <Container
      title="Design Inspiration - Manu Arora"
      description="Designers and design engineers I follow and look up to."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Designers and Design Engineers
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          A curated list of designers and design engineers I follow and look up
          to.
        </p>
      </div>
      <div className="max-w-2xl mx-auto w-full pb-20">
        {items.map((item) => (
          <div key={item.name} className="md:mb-20">
            <h2 className="font-bold text-base text-black dark:text-white">
              {item.name}
            </h2>
            <div className="flex items-center gap-2">
              <a
                href={item.twitter}
                target="_blank"
                className="text-neutral-600 text-sm dark:text-neutral-300"
              >
                @{item.twitter.split("/").pop()}
              </a>
              <span className="bg-neutral-300 h-1 w-1 text-sm dark:bg-neutral-600 rounded-full"></span>
              <a
                href={item.website}
                target="_blank"
                className="text-neutral-600 text-sm dark:text-neutral-300"
              >
                {item.website.replace("https://", "").replace("www.", "")}
              </a>
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {item.images.map((image) => (
                <Image
                  src={image}
                  alt={item.name}
                  key={image}
                  width={500}
                  height={500}
                  className="rounded-lg w-full object-cover"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter("snippets");

  return { props: { snippets } };
}

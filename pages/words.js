import prisma from "lib/prisma";
import Container from "components/Container";
import Words from "@/components/words";

export default function WordsPage({ fallbackData }) {
  return (
    <Container
      title="Words – Manu Arora"
      description="Sign in and write anything for / about me. Share your knowledge, wisdom or make a joke. "
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Words
        </h1>
        <small className="text-slate-500 dark:text-slate-400">
          Write anything for future visitors of this website. I'd love a random
          joke though. 🤩
        </small>
        <Words fallbackData={fallbackData} />
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const entries = await prisma.words.findMany({
    orderBy: {
      updated_at: "desc",
    },
  });

  const fallbackData = entries.map((entry) => ({
    id: entry.id.toString(),
    body: entry.body,
    created_by: entry.created_by.toString(),
    updated_at: entry.updated_at.toString(),
  }));

  return {
    props: {
      fallbackData,
    },
    revalidate: 60,
  };
}

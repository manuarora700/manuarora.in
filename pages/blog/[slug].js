// import hydrate from "next-mdx-remote/hydrate";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { parseISO, format } from "date-fns";

// import { getFiles, getFileBySlug } from '@/lib/mdx';
import BlogLayout from "@/layouts/blog";
import Container from "@/components/Container";
import Contact from "@/components/Contact";
// import MDXComponents from '@/components/MDXComponents';

async function getPost(slug) {
  const res = await fetch(
    `${process.env.BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${process.env.CONTENT_API_KEY}&fields=title,slug,html,reading_time,published_at,feature_image`
  ).then((res) => res.json());

  const post = res.posts[0];

  return post;
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug);
  return { props: { post } };
}

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export default function Blog(props) {
  //   const content = hydrate(mdxSource, {
  //     components: MDXComponents,
  //   });
  const { post } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container
      title={`${post.title} – Manu Arora`}
      description={post.custom_excerpt}
      image={post.feature_image}
      date={new Date(post?.published_at).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full blog">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {post.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <Image
              alt="Manu Arora"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {/* {frontMatter.by} */}
              {"Manu Arora / "}
              {format(parseISO(post?.published_at), "MMMM dd, yyyy")}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {post.reading_time + " " + "minutes read"}
            {` • `}
            {/* <ViewCounter slug={frontMatter.slug} /> */}
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full text-black blog-content">
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
        </div>
      </article>
      <div className="max-w-2xl mx-auto">
        <Contact />
      </div>
    </Container>
  );

  //   return <BlogLayout frontMatter={frontMatter}>{props.post.html}</BlogLayout>;
}

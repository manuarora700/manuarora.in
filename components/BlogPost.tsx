// @ts-nocheck
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const BlogPost = ({ title, summary, slug }) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className={twMerge(
        "w-full bg-gray-100 dark:bg-zinc-800 dark:border-zinc-700 rounded-md mb-4 p-4 border border-gray-200"
      )}
    >
      <div className="w-full">
        <h4 className="text-base blog-heading md:text-base mb-2 w-full text-gray-900 dark:text-gray-100">
          {title}
        </h4>
        {/* <p className="text-gray-600 dark:text-gray-400">{summary}</p> */}
      </div>
    </Link>
  );
};

export default BlogPost;

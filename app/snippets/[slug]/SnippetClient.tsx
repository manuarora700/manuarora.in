// @ts-nocheck
"use client";

import dynamic from "next/dynamic";

const SnippetRenderer = dynamic(() => import("./SnippetRenderer"), {
  ssr: false,
});

export default function SnippetClient({ mdxSource, frontMatter }) {
  return <SnippetRenderer mdxSource={mdxSource} frontMatter={frontMatter} />;
}

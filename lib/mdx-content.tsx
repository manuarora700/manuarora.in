import { useMemo } from "react";
import * as runtime from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";

export function MDXContent({
  code,
  components,
}: {
  code: string;
  components: MDXComponents;
}) {
  const Content = useMemo(
    () => new Function(code)({ ...runtime }).default,
    [code],
  );
  return <Content components={components} />;
}

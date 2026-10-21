import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

const REDIRECT_TO_HOME = [
  /^\/boxshadows$/,
  /^\/test$/,
  /^\/playground$/,
  /^\/demos(\/.*)?$/,
  /^\/friday$/,
  /^\/snippets(\/.*)?$/,
  /^\/resources$/,
  /^\/links$/,
  /^\/freelance$/,
  /^\/design-inspiration$/,
  /^\/projects$/,
  /^\/freecodecamp$/,
  /^\/api(\/.*)?$/,
  /^\/feed\.xml$/,
];

export const Route = createFileRoute("/$")({
  beforeLoad: ({ location }) => {
    const pathname = location.pathname.replace(/\/+$/, "");
    if (REDIRECT_TO_HOME.some((pattern) => pattern.test(pathname))) {
      throw redirect({ href: "/", statusCode: 308 });
    }
    throw notFound();
  },
});

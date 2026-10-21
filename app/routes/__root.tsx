import type { ReactNode } from "react";
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../globals.css?url";
import { cn } from "@/lib/utils";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import Container from "@/components/container";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Settings } from "@/components/settings";

const analyticsDomain = import.meta.env.VITE_ANALYTICS_DOMAIN;
const analyticsScriptUrl = import.meta.env.VITE_ANALYTICS_SCRIPT_URL;

const themeScript = `(function(){try{var d=document.documentElement,m=window.matchMedia("(prefers-color-scheme: dark)");function a(){var t=localStorage.getItem("theme")||"system",r=t==="system"?(m.matches?"dark":"light"):t;d.classList.remove("light","dark");d.classList.add(r);d.style.colorScheme=r}a();m.addEventListener("change",a)}catch(e){}})()`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
    ],
    scripts: [
      { children: themeScript },
      ...(analyticsDomain && analyticsScriptUrl
        ? [
            {
              src: analyticsScriptUrl,
              "data-domain": analyticsDomain,
              defer: true,
            },
          ]
        : []),
    ],
  }),
  component: Outlet,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("font-sans antialiased")}
      suppressHydrationWarning
    >
      <head>
        <HeadContent />
      </head>
      <body className={cn("font-display bg-theme-bg")}>
        <Settings />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <Container className="min-h-[50vh]">
      <p className="text-primary pt-4 text-base font-medium">404</p>
      <p className="text-foreground pt-2 text-base">
        This page could not be found.
      </p>
    </Container>
  );
}

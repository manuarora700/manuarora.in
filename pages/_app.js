import "../styles/globals.css";
import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";
import Banner from "@/components/Banner";

import MDXComponents from "@/components/MDXComponents";
import Chat from "@/components/Chat";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        {/* <Banner /> */}
        <Component {...pageProps} />
        <Chat />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;

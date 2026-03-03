"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";

import * as gtag from "@/lib/gtag";

function RouteChangeTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      gtag.pageview(pathname);
    }
  }, [pathname]);

  return null;
}

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class">
      <RouteChangeTracker />
      {children}
    </ThemeProvider>
  );
}

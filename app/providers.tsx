"use client";

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

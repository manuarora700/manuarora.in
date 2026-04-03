import Providers from "./providers";
import "./globals.css";

import { Schibsted_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/new-components/navbar";
export const metadata = {
  title: "Manu Arora - Developer, writer, creator.",
  description:
    "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
};

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={schibstedGrotesk.variable}
      suppressHydrationWarning
    >
      <body className={cn("bg-white font-display")}>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

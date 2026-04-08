import Providers from "./providers";
import "./globals.css";

import { Inter, Schibsted_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/new-components/navbar";
import { Footer } from "@/components/new-components/footer";
import { Settings } from "@/components/new-components/settings";
export const metadata = {
  title: "Manu Arora - Developer, writer, creator.",
  description:
    "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-schibsted-grotesk",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={cn(
        inter.variable,
        schibstedGrotesk.variable,
        GeistSans.variable,
      )}
      suppressHydrationWarning
    >
      <body className={cn("font-display bg-theme-bg")}>
        <Settings />
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}

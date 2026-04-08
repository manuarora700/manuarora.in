import Providers from "./providers";
import "./globals.css";

import type { Metadata } from "next";
import { Inter, Schibsted_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Settings } from "@/components/settings";
const siteUrl = "https://manuarora.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Manu Arora - Developer, writer, creator.",
    template: "%s – Manu Arora",
  },
  description:
    "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
  openGraph: {
    title: "Manu Arora - Developer, writer, creator.",
    description:
      "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
    url: siteUrl,
    siteName: "Manu Arora",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manu Arora - Developer, writer, creator.",
    description:
      "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
  },
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

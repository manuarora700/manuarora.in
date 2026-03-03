import Script from "next/script";

import { GA_TRACKING_ID } from "@/lib/gtag";
import Providers from "./providers";
import "./globals.css";

export const metadata = {
  title: "Manu Arora – Developer, writer, creator.",
  description:
    "Full-Stack developer, JavaScript enthusiast, Freelancer and a Learner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/static/favicons/apple-icon.png"
        />
        <link rel="manifest" href="/static/favicons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/static/favicons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="bg-white dark:bg-zinc-900 text-black dark:text-white">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });`}
        </Script>
        <Script
          src="https://cdn.splitbee.io/sb.js"
          strategy="afterInteractive"
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

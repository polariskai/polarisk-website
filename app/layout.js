import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { buildStructuredData, DEFAULT_DESCRIPTION, pageMetadata } from "../lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const homeMetadata = pageMetadata({
  title: "Polarisk | AI Compliance Intelligence for Financial Crime",
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export const metadata = {
  ...homeMetadata,
  metadataBase: new URL("https://polarisk.ai"),
  twitter: {
    card: "summary_large_image",
    title: "Polarisk | AI Compliance Intelligence for Financial Crime",
    description: DEFAULT_DESCRIPTION,
  },
};

const structuredData = buildStructuredData();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#080c14]"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6FLCJVJE2L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6FLCJVJE2L');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

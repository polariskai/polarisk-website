import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import {
  buildStructuredData,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  pageMetadata,
} from "../lib/seo";

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
  openGraph: {
    ...homeMetadata.openGraph,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polarisk | AI Compliance Intelligence for Financial Crime",
    description: DEFAULT_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

const structuredData = buildStructuredData();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
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

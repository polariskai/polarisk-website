import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Polarisk | Compliance Intelligence",
  description:
    "Polarisk is the AI operating system for financial compliance. Reduce investigation time and improve decision quality with compliance intelligence.",
  metadataBase: new URL("https://polarisk.ai"),
  openGraph: {
    title: "Polarisk | Compliance Intelligence",
    description:
      "The AI operating system for financial compliance. Faster investigations. Better signal. Regulator-ready outcomes.",
    url: "https://polarisk.ai",
    siteName: "Polarisk",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
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

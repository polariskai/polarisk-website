import { Inter } from "next/font/google";
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
      <body className={inter.variable}>{children}</body>
    </html>
  );
}

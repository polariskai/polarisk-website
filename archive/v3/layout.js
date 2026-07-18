import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./v3.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
});

export const metadata = {
  title: "Polarisk — Find the signal in the noise",
  robots: { index: false, follow: false },
};

export default function V3Layout({ children }) {
  return (
    <div className={`${grotesk.variable} ${jbmono.variable}`}>{children}</div>
  );
}

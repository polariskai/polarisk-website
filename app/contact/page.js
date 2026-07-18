import Link from "next/link";
import {
  ArrowRight,
  Building2,
  LifeBuoy,
  Mail,
} from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Contact | Polarisk",
  description:
    "Get in touch with Polarisk for sales, product demos, support, and general questions about financial crime compliance.",
  path: "/contact/",
});

const CHANNELS = [
  {
    title: "Sales",
    description:
      "Speak to our team about design partner programs, pilots, pricing, or schedule a product walkthrough.",
    href: "/contact/sales",
    icon: Building2,
    cta: "Contact sales",
    external: false,
  },
  {
    title: "Help & support",
    description:
      "Ask product questions, report an issue, or share feedback with our team.",
    href: "mailto:contact@polarisk.ai",
    icon: LifeBuoy,
    cta: "Email support",
    external: true,
  },
  {
    title: "General communication",
    description: "For press, partnerships, and other inquiries.",
    href: "mailto:contact@polarisk.ai",
    icon: Mail,
    cta: "contact@polarisk.ai",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader solid />
      <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#080c14] px-6 pb-24 pt-14 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animated-orb absolute left-1/2 top-[-140px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-[640px]">
        <header className="border-b border-white/[0.08] pb-14 pt-16 text-center">
          <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold tracking-tight">
            How can we help?
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/45">
            Get in touch for demos, onboarding, product questions, or anything
            else—we typically respond within one business day.
          </p>
        </header>

        <ul className="divide-y divide-white/[0.06]">
          {CHANNELS.map((item) => {
            const Icon = item.icon;
            const inner = (
              <>
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  <Icon className="h-4 w-4 text-blue-400/90" strokeWidth={1.75} />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-[16px] font-semibold tracking-tight text-white">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/45">
                    {item.description}
                  </p>
                </div>
                <span className="flex flex-shrink-0 items-center gap-1 text-[13px] font-medium text-blue-400">
                  {item.cta}
                  <ArrowRight className="h-3.5 w-3.5 opacity-80" />
                </span>
              </>
            );

            const className =
              "group flex w-full items-start gap-4 py-8 text-left transition-colors hover:bg-white/[0.02] md:gap-5";

            if (item.external) {
              return (
                <li key={item.title}>
                  <a href={item.href} className={className}>
                    {inner}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.title}>
                <Link href={item.href} className={className}>
                  {inner}
                </Link>
              </li>
            );
          })}
        </ul>

      </div>
      </main>
      <SiteFooter />
    </>
  );
}

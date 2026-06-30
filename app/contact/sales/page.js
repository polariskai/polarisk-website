import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

const BULLETS = [
  "Request a guided product walkthrough",
  "Explore design partner and pilot options",
  "Discuss security, deployment, and onboarding",
  "Get answers to technical and workflow questions",
];

export default function ContactSalesPage() {
  return (
    <>
      <SiteHeader solid />
      <main className="relative min-h-screen overflow-hidden bg-[#080c14] px-6 pb-24 pt-14 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="animated-orb absolute left-1/2 top-[-140px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-[720px]">
        <div className="pb-4 pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[13px] text-white/40 transition-colors hover:text-white/70"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Contact
          </Link>
        </div>

        <header className="border-b border-white/[0.08] pb-12 pt-8">
          <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold tracking-tight">
            Contact sales
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/45">
            Tell us how we can help. Book a time below, or email{" "}
            <a
              href="mailto:contact@polarisk.ai"
              className="text-blue-400 underline decoration-blue-400/30 underline-offset-2 hover:text-blue-300"
            >
              contact@polarisk.ai
            </a>
            .
          </p>
          <ul className="mt-8 space-y-3">
            {BULLETS.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-[14px] leading-relaxed text-white/55"
              >
                <Check
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400"
                  strokeWidth={2.5}
                />
                {line}
              </li>
            ))}
          </ul>
        </header>

        <section className="pt-10">
          <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-6 py-12 text-center">
            <h2 className="text-[20px] font-semibold tracking-tight text-white">
              Speak with our team
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-white/50">
              Tell us your goals and timeline, and we will follow up to arrange a
              meeting.
            </p>
            <a
              href="mailto:contact@polarisk.ai"
              className="mt-6 inline-flex items-center justify-center rounded-md border border-white/[0.12] px-5 py-2.5 text-[14px] text-white/75 transition-all hover:border-white/25 hover:text-white"
            >
              Email contact@polarisk.ai
            </a>
          </div>
        </section>

      </div>
      </main>
      <SiteFooter />
    </>
  );
}

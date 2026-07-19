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
      <SiteHeader solid tone="light" />
      <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#f6f7fa] px-6 pb-24 pt-14 text-[#0d1326]">

      <div className="relative mx-auto max-w-[720px]">
        <div className="pb-4 pt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[13px] text-[#5c6884] transition-colors hover:text-[#0d1326]"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Contact
          </Link>
        </div>

        <header className="border-b border-black/[0.08] pb-12 pt-8">
          <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold tracking-tight">
            Contact sales
          </h1>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#5c6884]">
            Tell us how we can help. Email{" "}
            <a
              href="mailto:contact@polarisk.ai"
              className="text-blue-400 underline decoration-blue-400/30 underline-offset-2 hover:text-blue-300"
            >
              contact@polarisk.ai
            </a>{" "}
            and our team will follow up within one business day to schedule a call.
          </p>
          <ul className="mt-8 space-y-3">
            {BULLETS.map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-[14px] leading-relaxed text-[#5c6884]"
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
          <div className="rounded-xl border border-black/[0.08] bg-[#f3f5f9] px-6 py-12 text-center">
            <h2 className="text-[20px] font-semibold tracking-tight text-[#0d1326]">
              Speak with our team
            </h2>
            <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-relaxed text-[#5c6884]">
              Tell us your goals and timeline, and we will follow up to arrange a
              meeting.
            </p>
            <a
              href="mailto:contact@polarisk.ai"
              className="mt-6 inline-flex items-center justify-center rounded-md border border-black/[0.12] px-5 py-2.5 text-[14px] text-[#5c6884] transition-all hover:border-[#3d5bff]/40 hover:text-[#0d1326]"
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

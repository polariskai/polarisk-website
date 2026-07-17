import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy | Polarisk",
  description:
    "How Polarisk collects, uses, and protects information submitted through polarisk.ai.",
  path: "/privacy/",
});

const LAST_UPDATED = "July 17, 2026";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader solid />
      <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#080c14] px-6 pb-24 pt-14 text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="animated-orb absolute left-1/2 top-[-140px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
        </div>

        <div className="relative mx-auto max-w-[680px]">
          <header className="border-b border-white/[0.08] pb-10 pt-16">
            <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-[14px] text-white/55">Last updated: {LAST_UPDATED}</p>
          </header>

          <div className="space-y-10 py-12 text-[15px] leading-relaxed text-white/65">
            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-white">Overview</h2>
              <p>
                This Privacy Policy describes how Polarisk.ai Private Limited (&quot;Polarisk&quot;,
                &quot;we&quot;, &quot;us&quot;) handles information collected through
                polarisk.ai (the &quot;Site&quot;). It covers our public marketing
                website only. Data processed within the Polarisk product for our
                customers is governed by the applicable customer agreement, not this
                policy.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-white">Information we collect</h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Contact details you provide, such as name, email address, and
                  company, when you reach out through a form or a{" "}
                  <span className="text-white/85">mailto:</span> link.
                </li>
                <li>
                  Basic usage data collected via Google Analytics (e.g. pages
                  viewed, referring source, device and browser type).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-white">How we use it</h2>
              <p>
                We use the information above to respond to inquiries, operate and
                improve the Site, and understand how visitors use our content. We do
                not sell personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-white">Sharing</h2>
              <p>
                We share information with service providers who help us run the
                Site (such as analytics and email providers), and only to the
                extent needed for them to perform those services. We do not share
                your information with third parties for their own marketing
                purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-white">Your choices</h2>
              <p>
                You can ask us to access, correct, or delete personal information
                you have submitted to us by emailing{" "}
                <a
                  href="mailto:contact@polarisk.ai"
                  className="text-blue-400 underline decoration-blue-400/30 underline-offset-2 hover:text-blue-300"
                >
                  contact@polarisk.ai
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-white">Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Material changes will
                be reflected by updating the &quot;Last updated&quot; date above.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-white">Contact</h2>
              <p>
                Questions about this policy can be sent to{" "}
                <a
                  href="mailto:contact@polarisk.ai"
                  className="text-blue-400 underline decoration-blue-400/30 underline-offset-2 hover:text-blue-300"
                >
                  contact@polarisk.ai
                </a>
                .
              </p>
            </section>
          </div>

          <div className="border-t border-white/[0.08] py-8">
            <Link
              href="/"
              className="text-[13px] text-white/55 transition-colors hover:text-white/85"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

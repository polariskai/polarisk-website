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
      <SiteHeader solid tone="light" />
      <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#f6f7fa] px-6 pb-24 pt-14 text-[#0d1326]">

        <div className="relative mx-auto max-w-[680px]">
          <header className="border-b border-black/[0.08] pb-10 pt-16">
            <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-[14px] text-[#5c6884]">Last updated: {LAST_UPDATED}</p>
          </header>

          <div className="space-y-10 py-12 text-[15px] leading-relaxed text-[#5c6884]">
            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Overview</h2>
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
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Information we collect</h2>
              <ul className="ml-5 list-disc space-y-2">
                <li>
                  Contact details you provide, such as name, email address, and
                  company, when you reach out through a form or a{" "}
                  <span className="text-[#0d1326]">mailto:</span> link.
                </li>
                <li>
                  Basic usage data collected via Google Analytics (e.g. pages
                  viewed, referring source, device and browser type).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">How we use it</h2>
              <p>
                We use the information above to respond to inquiries, operate and
                improve the Site, and understand how visitors use our content. We do
                not sell personal information.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Sharing</h2>
              <p>
                We share information with service providers who help us run the
                Site (such as analytics and email providers), and only to the
                extent needed for them to perform those services. We do not share
                your information with third parties for their own marketing
                purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Your choices</h2>
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
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Changes to this policy</h2>
              <p>
                We may update this policy from time to time. Material changes will
                be reflected by updating the &quot;Last updated&quot; date above.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Contact</h2>
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

          <div className="border-t border-black/[0.08] py-8">
            <Link
              href="/"
              className="text-[13px] text-[#5c6884] transition-colors hover:text-[#0d1326]"
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

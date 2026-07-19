import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Use | Polarisk",
  description: "Terms governing your use of the polarisk.ai marketing website.",
  path: "/terms/",
});

const LAST_UPDATED = "July 17, 2026";

export default function TermsPage() {
  return (
    <>
      <SiteHeader solid tone="light" />
      <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#f6f7fa] px-6 pb-24 pt-14 text-[#0d1326]">

        <div className="relative mx-auto max-w-[680px]">
          <header className="border-b border-black/[0.08] pb-10 pt-16">
            <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold tracking-tight">
              Terms of Use
            </h1>
            <p className="mt-4 text-[14px] text-[#5c6884]">Last updated: {LAST_UPDATED}</p>
          </header>

          <div className="space-y-10 py-12 text-[15px] leading-relaxed text-[#5c6884]">
            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Scope</h2>
              <p>
                These Terms of Use govern your access to and use of polarisk.ai (the
                &quot;Site&quot;), operated by Polarisk.ai Private Limited (&quot;Polarisk&quot;,
                &quot;we&quot;, &quot;us&quot;). They apply to the public marketing
                Site only. Use of the Polarisk product by customers is governed by
                a separate, signed agreement between Polarisk and that customer.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Use of the Site</h2>
              <p>
                You may browse the Site and contact us for legitimate business
                purposes. You agree not to misuse the Site, attempt to gain
                unauthorized access to it, or use it in a way that could disable,
                overburden, or impair it.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">No warranty</h2>
              <p>
                Content on the Site — including product descriptions, statistics,
                and screenshots — is provided for informational purposes and may
                describe features that are in active development. The Site is
                provided &quot;as is&quot; without warranties of any kind.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Intellectual property</h2>
              <p>
                The Polarisk name, logo, and Site content are owned by Polarisk.ai
                Private Limited or its licensors and may not be used without prior written
                permission.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Changes</h2>
              <p>
                We may update these Terms from time to time. Continued use of the
                Site after changes are posted constitutes acceptance of the revised
                Terms.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[18px] font-semibold text-[#0d1326]">Contact</h2>
              <p>
                Questions about these Terms can be sent to{" "}
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

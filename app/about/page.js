import Link from "next/link";
import { Reveal } from "./reveal";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "About | Polarisk",
  description:
    "Polarisk is building the intelligence layer for financial crime compliance — fewer false positives, faster AML investigations, regulator-ready decisions.",
  path: "/about/",
});

const PRINCIPLES = [
  {
    name: "Explainability is non-negotiable.",
    body: "If we cannot show exactly why a decision was made, the decision is worthless. Every output carries a full evidence chain — not because regulators require it, but because trust without a reason isn\u2019t trust.",
  },
  {
    name: "Designed for humans.",
    body: "The best compliance outcomes come from AI speed combined with human judgment. We build for that partnership. The analyst\u2019s expertise is not the bottleneck — the tooling around them is. And creativity is not a luxury - it is a necessity. Good design enables this.",
  },
  {
    name: "Earn trust through outcomes.",
    body: "We measure ourselves on false positive reduction, investigation speed, and narrative quality — not feature counts. Our product succeeds when the compliance function earns more trust from the institution it serves.",
  },
  {
    name: "Deploy in weeks, not years.",
    body: "We integrate with what institutions already run. Programmable trust should not require a system overhaul to get started.",
  },
];

function SectionLabel({ children }) {
  return (
    <p className="mb-10 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#5c6884]">
      <span className="block h-px w-5 bg-black/20" />
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader solid tone="light" />
      <main id="main-content" className="relative min-h-screen overflow-hidden bg-[#f6f7fa] px-6 pb-24 pt-14 text-[#0d1326]">

      <div className="relative mx-auto max-w-[720px]">
        {/* ── Hero ── */}
        <Reveal as="header" className="border-b border-black/[0.08] pb-16 pt-20">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.14em] text-blue-400">
            About Polarisk
          </p>
          <h1 className="text-[clamp(2.6rem,6vw,4rem)] font-light leading-[1.12] tracking-tight">
            Trust should be
            <br />
            <em className="italic text-blue-400">programmable.</em>
          </h1>
          <p className="mt-8 max-w-[580px] text-[17px] font-light leading-[1.75] text-[#5c6884]">
            Polarisk is building the infrastructure for programmable trust in
            financial crime compliance. Today, that trust is assembled by hand —
            one analyst, one alert, one decision at a time.
          </p>
        </Reveal>

        {/* ── The Real Problem ── */}
        <Reveal as="section" className="border-b border-black/[0.08] py-20">
          <SectionLabel>The real problem</SectionLabel>

          <div className="space-y-7 text-[17px] font-light leading-[1.82] text-[#5c6884]">
            <p>
              The financial system doesn&apos;t run on money. It runs on{" "}
              <span className="font-normal text-blue-400">trust</span>.
            </p>
            <p>
              Every transaction, every account, every institution exists because
              somewhere, someone decided: this entity is who they say they are.
              This money is what it appears to be. This risk is acceptable.
            </p>
            <p>
              Trust is what makes commerce possible. And today, that trust is
              verified by hand.
            </p>
          </div>

          {/* Scene */}
          <Reveal
            className="my-12 rounded-r-lg border-l-2 border-blue-400 bg-white p-8"
            delay={80}
          >
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.1em] text-blue-400/50">
              9:00 AM — compliance desk, major bank
            </p>
            <div className="space-y-5 text-[16px] font-light leading-[1.85] text-[#5c6884]">
              <p>
                Forty-seven alerts in the queue. Each one demands the same
                ritual: pull customer data from three different systems.
                Cross-reference transactions. Check sanctions lists. Search for
                adverse media. Write a narrative. Document the rationale.
              </p>
              <p>
                By lunch, 8 are cleared. 39 remain. Tomorrow there
                will be 50 more.
              </p>
              <p>
                Between 95 and 98 percent of those alerts will turn out to be
                nothing. But the analyst cannot know which ones until they have
                done the work. So they do the work. Every single time. And
                somewhere in that noise, a real threat quietly passes through.
              </p>
            </div>
          </Reveal>

          <div className="space-y-7 text-[17px] font-light leading-[1.82] text-[#5c6884]">
            <p>
              This is what programmable trust looks like today — a human being,
              working at human speed, deciding piece by piece whether the
              financial system should trust each transaction, each account, each
              relationship.
            </p>
            <p>
              The criminals adapt in days. The systems meant to catch them take
              years to change.
            </p>
          </div>

          {/* Stat */}
          <Reveal className="my-10 flex items-baseline gap-4" delay={60}>
            <span className="text-[3.5rem] font-light leading-none tracking-tight text-[#0d1326]">
              $274B
            </span>
            <span className="max-w-[240px] text-[14px] font-light leading-snug text-[#5c6884]">
              spent on compliance globally each year — most of it paying people
              to do what machines should
            </span>
          </Reveal>

          <div className="space-y-7 text-[17px] font-light leading-[1.82] text-[#5c6884]">
            <p>
              This is not a training problem. Not a headcount problem. It is a
              structural failure — and it has persisted for decades because the
              technology to fix it did not exist.
            </p>
            <p>
              <strong className="font-medium text-[#0d1326]">Until now.</strong>
            </p>
          </div>
        </Reveal>

        {/* ── The Inflection Point ── */}
        <Reveal as="section" className="border-b border-black/[0.08] py-20">
          <SectionLabel>The inflection point</SectionLabel>

          <div className="space-y-7 text-[17px] font-light leading-[1.82] text-[#5c6884]">
            <p>
              The breakthroughs in AI over the last two years have changed what
              is possible — not chatbots bolted onto compliance workflows, but
              real investigative intelligence.
            </p>
            <p>
              Systems that can read an alert the way a senior analyst would.
              Gather evidence across fragmented data sources. Apply judgment.
              Produce defensible, explainable decisions. At machine speed, at any
              scale.
            </p>
          </div>

          <Reveal className="my-14 border-l-2 border-blue-400/40 pl-8" delay={80}>
            <p className="text-[clamp(1.2rem,2.5vw,1.5rem)] font-light italic leading-[1.5] text-[#0d1326]">
              For the first time,{" "}
              <span className="not-italic text-blue-400">
                trust can be verified programmatically
              </span>{" "}
              — in minutes, not days, without the noise of a thousand false
              positives drowning out the signals that matter.
            </p>
          </Reveal>

          <div className="space-y-7 text-[17px] font-light leading-[1.82] text-[#5c6884]">
            <p>
              We believe compliance should be one of the most intelligent
              functions inside any financial institution — not the most manual
              one. The technology to make that true now exists.
            </p>
            <p>
              That is the company we are building. That is why Polarisk exists.
            </p>
          </div>
        </Reveal>

        {/* ── What We Are Building ── */}
        <Reveal as="section" className="border-b border-black/[0.08] py-20">
          <SectionLabel>What we are building</SectionLabel>

          <div className="space-y-7 text-[17px] font-light leading-[1.82] text-[#5c6884]">
            <p>An AI-native investigation layer for financial crime compliance.</p>
            <p>
              Specialized agents collaborate across alert triage, network
              analysis, external verification, quality control, and narrative
              generation — compressing hours of manual work into minutes. Every
              recommendation is traceable. Every decision is auditable. Analysts
              stay in control.
            </p>
            <p>
              We deploy as an intelligence layer over existing transaction
              monitoring systems.{" "}
              <strong className="font-medium text-[#0d1326]">
                No rip-and-replace. No 18-month migration.
              </strong>{" "}
              Teams see results in weeks, not quarters.
            </p>
            <p>
              Starting with AML alert triage. Expanding across KYC, sanctions,
              surveillance, and the full compliance lifecycle.
            </p>
          </div>
        </Reveal>

        {/* ── How We Build ── */}
        <Reveal as="section" className="border-b border-black/[0.08] py-20">
          <SectionLabel>How we build</SectionLabel>

          <div className="flex flex-col">
            {PRINCIPLES.map((item, i) => (
              <Reveal
                key={item.name}
                delay={40 + i * 50}
                className={`grid gap-2 border-b border-black/[0.08] py-8 md:grid-cols-[180px_1fr] md:gap-8 ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <span className="pt-0.5 text-[13px] font-medium leading-snug text-[#0d1326]">
                  {item.name}
                </span>
                <p className="text-[15px] font-light leading-[1.8] text-[#5c6884]">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ── Where This Goes ── */}
        <Reveal as="section" className="border-b border-black/[0.08] py-20">
          <SectionLabel>Where this goes</SectionLabel>

          <h2 className="mb-10 text-[clamp(1.6rem,3.5vw,2.4rem)] font-light leading-[1.25] tracking-tight">
            A world where{" "}
            <em className="italic text-blue-400">trust is infrastructure</em>{" "}
            — not overhead.
          </h2>

          <div className="space-y-7 text-[17px] font-light leading-[1.82] text-[#5c6884]">
            <p>Compliance is just the beginning.</p>
            <p>
              The mechanisms for verifying trust today — slow, fragmented,
              manual, scattered across institutions that rarely talk to each
              other — were designed for a different era. The financial system has
              scaled enormously. The trust verification layer beneath it has not.
            </p>
            <p>
              We are building toward a world where an institution can scale
              safely without scaling headcount. Where a regulator can see clearly
              across the system. Where a criminal finds not a gap between
              overloaded analysts, but an intelligence that never tires and never
              misses.
            </p>
          </div>

          <Reveal className="my-14 border-l-2 border-blue-400/40 pl-8" delay={80}>
            <p className="text-[clamp(1.2rem,2.5vw,1.5rem)] font-light italic leading-[1.5] text-[#0d1326]">
              When{" "}
              <span className="not-italic text-blue-400">
                trust is programmable
              </span>
              , institutions move faster. Regulators see further. Financial crime
              has nowhere left to hide.
            </p>
          </Reveal>

          <p className="text-[17px] font-light leading-[1.82] text-[#5c6884]">
            That is the long game. And we are just getting started.
          </p>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal className="py-20 text-center">
          <p className="mx-auto max-w-md text-[15px] font-light leading-[1.75] text-[#5c6884]">
            We are looking for design partners, early believers, and people who
            think compliance deserves better technology. If that sounds like you,
            let&apos;s talk.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-white px-6 py-2.5 text-[14px] font-semibold text-[#080c14] transition hover:bg-white/90"
            >
              Contact us
            </Link>
            <a
              href="mailto:contact@polarisk.ai"
              className="rounded-md border border-black/[0.12] px-6 py-2.5 text-[14px] text-[#5c6884] transition hover:border-[#3d5bff]/40 hover:text-[#0d1326]"
            >
              Email us
            </a>
          </div>
        </Reveal>

      </div>
      </main>
      <SiteFooter />
    </>
  );
}

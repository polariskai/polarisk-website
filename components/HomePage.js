"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  FileCheck,
  GitCompare,
  Layers,
  Scale,
  Shield,
  Waypoints,
} from "lucide-react";
import { useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ScrollReveal from "./ScrollReveal";
import HandoffAnimation from "./HandoffAnimation";
import PatternStories from "./PatternStories";
import ProductFlow from "./ProductFlow";
import HeroIntro from "./HeroIntro";
import ScenarioStudio from "./ScenarioStudio";

const FEATURES = [
  {
    icon: Waypoints,
    label: "Reviewed scenario sets",
    description:
      "Suspicious variations and legitimate lookalikes, written in the language risk owners already use.",
  },
  {
    icon: GitCompare,
    label: "Expected versus actual",
    description:
      "Today's control and a proposed change, compared on the same signed-off cases — like for like.",
  },
  {
    icon: Layers,
    label: "Corresponding data",
    description:
      "Reviewed events emitted in your schema, with identity and timing held consistent across every record.",
  },
  {
    icon: Scale,
    label: "Independent challenge",
    description:
      "Separate authorship for development and challenge. The build team does not shape the cases used to test it.",
  },
  {
    icon: FileCheck,
    label: "Evidence for the gate",
    description:
      "Risk statement, review record, findings, and coverage summary — assembled as the work happens.",
  },
  {
    icon: Shield,
    label: "Start with one control",
    description:
      "Improve the system you already run. The bank, the vendor, or Polarisk can implement to the agreed scope.",
  },
];

const EVIDENCE = [
  { n: "01", title: "Risk statement", body: "The concern in the risk owner's words, with its source." },
  { n: "02", title: "Scenario set", body: "Suspicious variations and legitimate lookalikes, versioned." },
  { n: "03", title: "Review record", body: "Realism and expected response, named and dated, before the run." },
  { n: "04", title: "Expected responses", body: "What the control should do, in your configured schema." },
  { n: "05", title: "Actual responses", body: "What it did, case by case, with the reported explanation." },
  { n: "06", title: "Findings", body: "Each mismatch with the reason recorded against it." },
  { n: "07", title: "Coverage summary", body: "What was covered, what was not, and what was not tested." },
];

export default function HomePage() {
  const [introLight, setIntroLight] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f7fa] font-sans text-[#0d1326]">
      <SiteHeader tone={introLight ? "light" : "dark"} />
      <main id="main-content">
        <HeroIntro onLightChange={setIntroLight} />

      <section id="product" className="border-t border-black/[0.06] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-[12px] font-medium uppercase tracking-widest text-[#3d5bff]">
              The solution
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[#0d1326]">
              Build and improve controls around reviewed risk scenarios
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-[#5c6884]">
              Risk owners review the behaviour and expected outcome. Their
              decisions drive the next iteration.
            </p>
          </ScrollReveal>
        </div>
        <div className="mx-auto max-w-5xl lg:max-w-none lg:w-[80vw]">
          <div
            className="overflow-x-auto overflow-y-hidden rounded-xl border border-black/[0.08] bg-white p-4 sm:p-6 md:p-8"
            style={{ boxShadow: "0 12px 40px rgba(13,19,38,0.08)" }}
          >
            <ProductFlow />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-t border-black/[0.06] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-[12px] font-medium uppercase tracking-widest text-[#3d5bff]">
              How Polarisk fixes the process
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[#0d1326]">
              Risk intent stays intact across every handoff
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-[#5c6884]">
              Polarisk carries the reviewed concern through interpretation,
              specification, tagging, and build — so later teams work from the
              same signed-off scenario, not a restatement.
            </p>
          </ScrollReveal>
        </div>
        <div className="mx-auto max-w-5xl lg:max-w-none lg:w-[80vw]">
          <div
            className="overflow-hidden rounded-xl border border-black/[0.08] bg-white p-4 md:p-6"
            style={{ boxShadow: "0 12px 40px rgba(13,19,38,0.08)" }}
          >
            <HandoffAnimation />
          </div>
        </div>
      </section>

      <section id="pattern-stories" className="border-t border-black/[0.06] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-[12px] font-medium uppercase tracking-widest text-[#3d5bff]">
              How Polarisk solves it
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[#0d1326]">
              Polarisk keeps the back-story with the pattern
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-[#5c6884]">
              The same signature can be suspicious or legitimate. Polarisk
              writes both stories — timing, relationships, and purpose — so
              the control is judged on what happened, not only on the shape.
            </p>
          </ScrollReveal>
        </div>
        <div className="mx-auto max-w-5xl lg:max-w-none lg:w-[80vw]">
          <div
            className="overflow-hidden rounded-xl border border-black/[0.08] bg-white p-4 md:p-6"
            style={{ boxShadow: "0 12px 40px rgba(13,19,38,0.08)" }}
          >
            <PatternStories />
          </div>
        </div>
      </section>

      <ScenarioStudio />

      <section className="border-t border-black/[0.06] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-[12px] font-medium uppercase tracking-widest text-[#3d5bff]">
              Capabilities
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[#0d1326]">
              What Scenario Studio carries into development
            </h2>
            <h3 className="text-gradient-brand">Reviewed. Testable. Evidenced.</h3>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-black/[0.06] bg-[#f3f5f9] md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <ScrollReveal
                key={feature.label}
                as="div"
                delay={60 + index * 45}
                threshold={0.2}
                className="group bg-white p-7 transition-colors hover:bg-[#f3f5f9]"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-600/10 transition-colors group-hover:bg-blue-600/20">
                  <feature.icon
                    className="text-blue-400"
                    style={{ width: 18, height: 18 }}
                  />
                </div>
                <div className="mb-2 text-[14px] font-semibold text-[#0d1326]">
                  {feature.label}
                </div>
                <div className="text-[13px] leading-relaxed text-[#5c6884]">
                  {feature.description}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-[12px] font-medium uppercase tracking-widest text-[#3d5bff]">
                Evidence trail
              </span>
              <h2 className="mb-5 mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-tight text-[#0d1326]">
                Assembled as the work happens
              </h2>
              <p className="mb-8 text-[15px] leading-relaxed text-[#5c6884]">
                The record supports governance review and makes remaining
                uncertainty visible, rather than implying comprehensive coverage.
              </p>
              <div className="space-y-4">
                {[
                  "Named review before the run, not after",
                  "Findings tied to the case that produced them",
                  "Coverage that says what was not tested",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span className="text-[13px] text-[#5c6884]">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 text-[13px] font-semibold text-[#0d1326] transition-colors hover:text-[#3d5bff]"
              >
                Contact us
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div
              className="overflow-hidden rounded-xl border border-black/[0.08] bg-white"
              style={{ boxShadow: "0 12px 40px rgba(13,19,38,0.08)" }}
              aria-hidden="true"
            >
              <div className="border-b border-black/[0.06] px-4 py-3">
                <span className="text-[12px] font-medium text-[#0d1326]">
                  Evidence pack
                </span>
              </div>
              <div className="divide-y divide-black/[0.06]">
                {EVIDENCE.map((item) => (
                  <div key={item.n} className="flex gap-3 px-4 py-3">
                    <span className="w-7 shrink-0 font-mono text-[11px] text-[#3d5bff]">
                      {item.n}
                    </span>
                    <div>
                      <div className="text-[12px] font-medium text-[#0d1326]">{item.title}</div>
                      <div className="mt-0.5 text-[11px] leading-relaxed text-[#5c6884]">{item.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/[0.06] px-6 py-28">
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <Image
            src="/polarisk-logo-black.svg"
            alt="Polarisk"
            width={64}
            height={64}
            className="relative mx-auto mb-6 h-16 w-16 object-contain"
            style={{ filter: "drop-shadow(0 0 24px rgba(59,130,246,0.6))" }}
          />
          <h2
            className="relative mb-5 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            <span className="text-[#0d1326]">Bring one control</span>
            <br />
            <span className="text-gradient-brand-2">you want to improve.</span>
          </h2>
          <p className="relative mx-auto mb-10 max-w-lg text-[15px] leading-relaxed text-[#5c6884]">
            Agree the objective and baseline, review cases against a targeted
            improvement, and leave with a clear basis for the next decision.
          </p>
          <div className="relative flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md bg-[#0d1326] px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-[#0d1326]/90"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  );
}

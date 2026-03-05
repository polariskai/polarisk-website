import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

const POLARISK_STATS = [
  { value: "95-98%", label: "Alerts that are false positives in legacy workflows" },
  { value: "$10B+", label: "Annual regulatory fines paid across the industry" },
  { value: "90 days", label: "Typical deployment window without rip-and-replace" },
  { value: "40x", label: "Potential productivity impact from fewer alerts + faster reviews" },
];

const PRINCIPLES = [
  {
    title: "Augment, do not replace",
    description:
      "Polarisk is built as an intelligence layer over existing compliance systems, so teams can improve outcomes without throwing away current infrastructure.",
  },
  {
    title: "Explainability by default",
    description:
      "Every recommendation is backed by traceable evidence and a full audit trail so compliance teams can defend decisions to internal risk teams and regulators.",
  },
  {
    title: "Human-in-the-loop decisions",
    description:
      "Analysts stay in control. Agentic workflows accelerate investigations, while human reviewers make the final calls and continuously train the system.",
  },
  {
    title: "Outcome-first execution",
    description:
      "Our operating model is focused on measurable reduction in noise, faster alert resolution, and higher-quality investigative narratives from day one.",
  },
];

export const metadata = {
  title: "About Us | Polarisk",
  description:
    "Learn about Polarisk's mission to build an AI workforce for financial crime compliance, with explainable investigations and audit-ready outcomes.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080c14] px-6 pb-20 pt-14 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="animated-orb absolute left-1/2 top-[-140px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-14 border-b border-white/[0.08] pb-10">
          <Link
            href="/"
            className="mb-5 inline-flex items-center gap-2 text-xs text-white/45 transition-colors hover:text-white/75"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs text-blue-200/90 ml-2">
            <Sparkles className="h-3.5 w-3.5" />
            About Polarisk
          </div>
          <h1 className="max-w-3xl text-[clamp(2rem,6vw,3.4rem)] font-semibold tracking-tight">
            Building the AI workforce for financial crime compliance.
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/50 md:text-base">
            Polarisk exists to help compliance teams investigate faster, reduce operational noise, and deliver
            regulator-ready decisions with confidence. We focus on practical AI adoption that works inside real
            enterprise environments.
          </p>
        </header>

        <section className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POLARISK_STATS.map((item) => (
            <article key={item.label} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-2xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{item.label}</p>
            </article>
          ))}
        </section>

        <section className="mb-14 grid gap-8 border-y border-white/10 py-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Why we started</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Compliance teams face an impossible tradeoff: massive alert volumes, rising regulatory pressure, and
              tools that are either too rigid or too opaque. Too much time is spent on repetitive data gathering,
              while high-risk signals can get buried in false positives.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Polarisk was created to close this gap with an explainable, agentic investigation layer that reduces
              manual effort and improves decision quality without forcing disruptive system migrations.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">What we are building</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Our multi-agent architecture coordinates specialized investigators for alert analysis, network
              intelligence, external verification, quality control, and narrative generation. The result is a faster,
              more consistent investigation workflow that still keeps analysts in control.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              We are starting with transaction monitoring and expanding toward a full compliance intelligence platform
              across AML, KYC, sanctions, surveillance, and regulatory operations.
            </p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-semibold tracking-tight">Our principles</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {PRINCIPLES.map((item) => (
              <article key={item.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-blue-500/30 bg-blue-500/[0.08] p-8">
          <h2 className="text-2xl font-semibold tracking-tight">Where we are now</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
            The core platform and end-to-end demo are in place, with an active pipeline built through warm
            relationships in India and global markets. Our immediate focus is delivering design-partner pilots,
            proving measurable outcomes, and scaling into production deployments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://demo.polarisk.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#080c14] transition hover:bg-white/90"
            >
              Request a demo
            </a>
            <a
              href="mailto:contact@polarisk.ai"
              className="rounded-md border border-white/25 px-4 py-2 text-sm text-white/90 transition hover:border-white/45"
            >
              Contact us
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

import { ArrowRight } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Careers | Polarisk",
  description:
    "AI/ML Intern at Polarisk in Whitefield, Bengaluru. Six months, on-site. Email careers@polarisk.ai.",
  path: "/careers/",
});

const APPLY_MAIL =
  "mailto:careers@polarisk.ai?subject=AI%2FML%20Intern%20-%20Your%20Name";

const FACTS = [
  ["Duration", "6 months"],
  ["Location", "On-site, Whitefield, Bengaluru"],
  ["Start", "Immediate joiners preferred; up to 1 month notice is fine"],
  ["Openings", "2"],
];

const BUILDING = [
  [
    "Scenario Studio",
    "Turns a risk owner's intent into reviewed scenarios and data that teams use to build and evaluate controls.",
  ],
  [
    "Investigation agents",
    "Multi-agent systems that investigate compliance alerts and produce a complete case file.",
  ],
];

const WORK = [
  "Build and improve the agent harness for compliance investigation.",
  "Develop and evaluate LLM-based extraction, classification and reasoning components.",
  "Build synthetic data generation for agent and control testing.",
  "Write evaluation harnesses that measure accuracy and reasoning quality.",
  "Experiment with model training and fine-tuning where the evaluation data supports it.",
  "Track agentic AI research (context management, long-term memory, agent learning) and bring what works into the product.",
  "Document agent behaviour, evaluation results and design decisions.",
];

const STACK = [
  "LangGraph",
  "Claude",
  "GPT",
  "AWS Bedrock",
  "FastAPI",
  "PostgreSQL with pgvector",
  "MLflow",
];

const APPLY = [
  "Final-year students, recent graduates, and early-career engineers (including those with 2–3 years of experience) who are happy to join as an intern.",
  "Able to work on-site, full-time, for the full 6 months.",
];

const LOOKING_FOR = [
  "Strong Python and comfort with ML libraries.",
  "Hands-on exposure to, or serious curiosity about, LLMs and agentic frameworks.",
  "Ability to own a problem end to end, not only a sub-task.",
  "Clear written communication. You will document and present your work.",
  "Coursework or projects in ML, NLP or distributed systems is a plus.",
  "No fintech or compliance background needed. We will give you the domain context.",
];

const OFFER = [
  "Paid internship from day one.",
  "Weekly 1:1s with a founder, and daily work alongside the founding team.",
  "Structured onboarding covering domain, codebase and architecture.",
  "Premium AI tools (Claude, Cursor) and cloud credits.",
  "Exposure to customer conversations where appropriate.",
  "Pre-placement offer consideration for strong performers.",
];

function SectionList({ title, items }) {
  return (
    <>
      <h3 className="mt-10 text-[14px] font-semibold text-[#0d1326]">{title}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-[#5c6884]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default function CareersPage() {
  return (
    <>
      <SiteHeader solid tone="light" />
      <main
        id="main-content"
        className="relative min-h-screen bg-[#f6f7fa] px-6 pb-24 pt-14 text-[#0d1326]"
      >
        <div className="relative mx-auto max-w-[720px]">
          <header className="border-b border-black/[0.08] pb-14 pt-16">
            <h1 className="text-[clamp(2rem,5vw,2.75rem)] font-semibold tracking-tight">
              Careers
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#5c6884]">
              Ask a compliance head which financial crimes their system is
              missing, and they can&apos;t tell you. That&apos;s the gap Polarisk
              closes.
            </p>
          </header>

          <article className="border-b border-black/[0.08] py-12">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight">
                AI/ML Intern
              </h2>
              <span className="rounded-md border border-[#dce2ff] bg-[#edf0ff] px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#3d5bff]">
                Open
              </span>
            </div>
            <p className="mt-4 text-[13px] text-[#5c6884]">
              6 months · On-site, Whitefield, Bengaluru · 2 openings
            </p>

            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[#5c6884]">
              <p>Polarisk builds AI for financial crime compliance at banks.</p>
              <p>
                Two problems drive the work. Compliance teams spend most of
                their time reviewing alerts that turn out to be legitimate
                activity, and improving a risk control takes months of
                back-and-forth between risk owners, analysts and model teams.
              </p>
            </div>

            <h3 className="mt-10 text-[14px] font-semibold text-[#0d1326]">
              What we are building
            </h3>
            <ul className="mt-3 space-y-4">
              {BUILDING.map(([name, body]) => (
                <li key={name} className="text-[15px] leading-relaxed text-[#5c6884]">
                  <span className="font-medium text-[#0d1326]">{name}</span>
                  {" — "}
                  {body}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-[15px] leading-relaxed text-[#5c6884]">
              We are an early-stage team. The founders come from Goldman Sachs
              (17 years in financial crime and surveillance AI), Intuit, Amazon,
              Microsoft, Adobe and SAP, and all of us write code.
            </p>

            <SectionList title="What you will do" items={WORK} />

            <h3 className="mt-10 text-[14px] font-semibold text-[#0d1326]">
              Stack you will work with
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {STACK.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-black/[0.08] bg-white px-2.5 py-1 text-[13px] text-[#0d1326]"
                >
                  {item}
                </li>
              ))}
            </ul>

            <SectionList title="Who can apply" items={APPLY} />
            <SectionList title="What we are looking for" items={LOOKING_FOR} />
            <SectionList title="What you get" items={OFFER} />

            <h3 className="mt-10 text-[14px] font-semibold text-[#0d1326]">
              Details
            </h3>
            <dl className="mt-3 divide-y divide-black/[0.08] border-y border-black/[0.08]">
              {FACTS.map(([label, value]) => (
                <div
                  key={label}
                  className="grid gap-1 py-3 sm:grid-cols-[140px_1fr] sm:gap-6"
                >
                  <dt className="text-[13px] font-medium text-[#0d1326]">{label}</dt>
                  <dd className="text-[15px] leading-relaxed text-[#5c6884]">{value}</dd>
                </div>
              ))}
            </dl>

            <h3 className="mt-10 text-[14px] font-semibold text-[#0d1326]">
              How to apply
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-[#5c6884]">
              Email your resume and a GitHub or project link to{" "}
              <a
                href={APPLY_MAIL}
                className="font-medium text-[#0d1326] underline decoration-[#3d5bff]/40 underline-offset-4"
              >
                careers@polarisk.ai
              </a>{" "}
              with the subject &quot;AI/ML Intern - [Your Name]&quot;.
            </p>
            <a
              href={APPLY_MAIL}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#0d1326] px-5 py-3 text-[14px] font-semibold text-white transition hover:bg-[#0d1326]/90"
            >
              Email careers@polarisk.ai
              <ArrowRight className="h-4 w-4" />
            </a>
          </article>

          <section className="py-12">
            <h2 className="text-[14px] font-semibold text-[#0d1326]">
              About Polarisk
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#5c6884]">
              <p>
                Banks monitor transactions, trade, communications, sanctions,
                KYC and adverse media — yet only a small fraction of what those
                systems produce ever leads to a law-enforcement outcome. Legacy
                platforms measure activity, not outcomes. The alerts get
                counted. The misses stay invisible.
              </p>
              <p>
                Polarisk is the Northstar for risk and compliance: a
                vendor-neutral evidence loop that makes coverage measurable,
                then closes it.
              </p>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

import { CalendarDays, Sparkles } from "lucide-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

const POSTS = [
  {
    date: "Mar 5, 2026",
    title: "Website design refreshed",
    sections: [
      {
        heading: "Modernized visual system and layout",
        body: "The website received a full design refresh with improved visual hierarchy, updated spacing, and clearer section flow to better communicate product value and user outcomes.",
      },
      {
        heading: "Sharper product storytelling",
        body: "Homepage content and interaction patterns were refined to present alert triage, AI analysis, and surveillance workflows in a more intuitive and professional product narrative.",
      },
    ],
    fixes: [
      "Improved consistency across section borders, card shadows, and typographic scale.",
      "Enhanced readability for dense product UI mockups across viewport sizes.",
      "Standardized supporting microcopy to align with enterprise compliance messaging.",
    ],
  },
  {
    date: "Feb 18, 2026",
    title: "Surveillance Workbench launched",
    preview: "surveillance",
    sections: [
      {
        heading: "Orchestrated investigation workflow",
        body: "Introduced the Surveillance Workbench to coordinate multi-step analysis flows, combine agent outputs, and persist analyst-ready investigation runs in a single workspace.",
      },
      {
        heading: "Parallel intelligence execution",
        body: "The workbench now supports parallel task orchestration for KYC intelligence, behavioral analysis, peer comparison, and compliance screening to reduce investigation turnaround time.",
      },
    ],
    fixes: [
      "Added workflow save controls and token budget visibility to improve operational planning.",
      "Improved card-level status readability for task sequencing and model attribution.",
    ],
  },
  {
    date: "Feb 10, 2026",
    title: "Dashboard released",
    sections: [
      {
        heading: "Operations overview for compliance teams",
        body: "Delivered the first dashboard experience to give compliance leaders a consolidated view of open alerts, investigation health, and risk posture across active cases.",
      },
    ],
    fixes: [
      "Improved KPI card structure for faster executive and analyst-level scanning.",
      "Refined metric groupings to better match triage and case management workflows.",
    ],
  },
  {
    date: "Feb 3, 2026",
    title: "AI Chatbot added",
    preview: "chatbot",
    sections: [
      {
        heading: "Conversational alert intelligence",
        body: "Added an AI Chatbot experience that allows analysts to query alert context in natural language and receive structured, evidence-based explanations for faster decisions.",
      },
      {
        heading: "Case-specific copilot context",
        body: "Chat sessions now anchor to a selected alert so risk summaries, transaction patterns, and recommendation prompts remain scoped to active investigations.",
      },
    ],
    fixes: [
      "Improved response formatting for better readability in analyst workflows.",
      "Reduced latency for common prompts by optimizing context retrieval paths.",
    ],
  },
  {
    date: "Jan 27, 2026",
    title: "Alert analysis and case management",
    preview: "caseManagement",
    sections: [
      {
        heading: "Unified alert triage experience",
        body: "Released alert analysis and case management capabilities to centralize queue prioritization, ownership assignment, and critical-risk tracking within a single operational view.",
      },
      {
        heading: "Investigation-ready case handoff",
        body: "Analysts can now move high-priority alerts into managed case workflows with improved continuity between triage, investigation, and reporting steps.",
      },
    ],
    fixes: [
      "Added clearer priority signal treatment to reduce high-risk alert misses.",
      "Improved queue controls to support faster filtering and analyst action.",
    ],
  },
];

function ChangelogPreview({ preview }) {
  if (!preview) {
    return null;
  }

  if (preview === "caseManagement") {
    return (
      <div
        className="mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0b1019]"
        style={{
          boxShadow: "0 0 80px rgba(37,99,235,0.15), 0 0 0 1px rgba(255,255,255,0.04)",
        }}
        aria-hidden="true"
      >
        <div className="border-b border-white/[0.06] px-4 py-3 text-[12px] text-white/65">
          app.polarisk.ai - Meridian Bank Dashboard
        </div>
        <div className="grid gap-0 md:grid-cols-[1fr_2fr]">
          <div className="border-b border-white/[0.06] bg-[#0d1422] p-4 md:border-b-0 md:border-r">
            <div className="space-y-2 text-[12px] text-white/50">
              <div>Dashboard</div>
              <div className="rounded bg-blue-500/15 px-2 py-1 text-blue-300">Alert Queue 24</div>
              <div>Investigations</div>
              <div>Reports</div>
              <div>Settings</div>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-[13px] font-semibold text-white/90">Alert Queue</div>
                <div className="text-[11px] text-white/50">24 open - 8 high priority</div>
              </div>
              <span className="rounded border border-white/[0.08] bg-white/[0.03] px-2 py-1 text-[11px] text-white/55">
                Filter
              </span>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3 text-[12px] text-white/65">
              <div className="flex items-center justify-between">
                <span className="font-mono text-white/80">ALT-2847</span>
                <span className="rounded bg-red-500/15 px-2 py-0.5 text-[10px] text-red-300">Critical</span>
              </div>
              <div className="mt-1 text-white/55">Rapid funds movement - ACH</div>
              <div className="mt-1 text-white/50">Owner: Lena Vasquez</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (preview === "chatbot") {
    return (
      <div
        className="mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d1422]"
        style={{ boxShadow: "0 0 40px rgba(37,99,235,0.1)" }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
          <span className="text-[12px] font-medium text-white/75">AI Copilot - ALT-2847</span>
          <span className="ml-auto h-2 w-2 rounded-full bg-green-400" />
        </div>
        <div className="space-y-4 p-4">
          <div className="flex justify-end">
            <div className="max-w-[75%] rounded-xl rounded-br-sm border border-blue-500/20 bg-blue-600/20 px-3.5 py-2.5 text-[12px] text-blue-200">
              Summarize the risk factors for this alert
            </div>
          </div>
          <div className="max-w-[85%] rounded-xl rounded-tl-sm border border-white/[0.06] bg-white/[0.04] px-3.5 py-2.5 text-[12px] leading-relaxed text-white/65">
            <span className="mb-1 block font-medium text-white/80">ALT-2847 risk summary</span>
            Lena Vasquez moved $84,400 via ACH across 6 transactions in 72 hours, consistent
            with structuring behavior.
          </div>
        </div>
      </div>
    );
  }

  if (preview === "surveillance") {
    return (
      <div
        className="mt-6 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d1422]"
        style={{ boxShadow: "0 0 40px rgba(37,99,235,0.1)" }}
        aria-hidden="true"
      >
        <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
          <span className="text-[12px] font-medium text-white/80">Surveillance Workbench</span>
          <span className="rounded-md border border-blue-400/25 bg-blue-500/10 px-2.5 py-1 text-[10px] text-blue-300">
            Save workflow
          </span>
        </div>
        <div className="grid gap-3 p-4 text-[11px] text-white/60">
          <div className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2">
            <div className="mb-1 flex items-center justify-between text-white/50">
              <span>Token budget</span>
              <span>26k / 60k</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/[0.08]">
              <div className="h-full w-[43%] rounded-full bg-gradient-to-r from-blue-400 to-blue-300" />
            </div>
          </div>
          <div className="grid gap-2 md:grid-cols-2">
            {[
              "Checklist Analysis + PARALLEL",
              "KYC Intelligence - sonnet-5",
              "Behavioral Analysis - sonnet-5",
              "Peer Comparison - sonnet-5",
              "Compliance Screening - sonnet-5",
            ].map((item) => (
              <div key={item} className="rounded border border-white/[0.06] bg-white/[0.02] px-2.5 py-2">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function ChangelogPost({ post, index }) {
  return (
    <article
      className="reveal-on-scroll rounded-xl border border-white/[0.08] bg-[#0d1420]/85 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="mb-5 flex items-center gap-2 text-xs text-white/55">
        <CalendarDays className="h-3.5 w-3.5 text-blue-300/70" />
        {post.date}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-white">{post.title}</h2>
      <ChangelogPreview preview={post.preview} />
      <div className="mt-6 space-y-5">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h3 className="text-base font-semibold text-white/90">{section.heading}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/60">{section.body}</p>
          </section>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-white/85">Other improvements and fixes</h3>
        <ul className="mt-2 space-y-1.5 pl-4 text-[13px] text-white/60">
          {post.fixes.map((fix) => (
            <li key={fix} className="list-disc">
              {fix}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function ChangelogPage() {
  return (
    <>
      <SiteHeader solid />
      <main
        id="main-content"
        className="relative min-h-screen overflow-hidden bg-[#080c14] px-6 pb-16 pt-24 text-white"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="animated-orb absolute left-1/2 top-[-140px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <header className="mb-10 border-b border-white/[0.08] pb-6">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs text-blue-200/90">
              <Sparkles className="h-3.5 w-3.5" />
              Product updates
            </div>
            <h1 className="text-[clamp(2rem,6vw,3.4rem)] font-semibold tracking-tight">
              Changelog
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
              Ongoing improvements to the Polarisk investigation platform. Entries on
              this page are generated from current capabilities and APIs in the{" "}
              <code className="rounded bg-white/[0.08] px-1.5 py-0.5 font-mono text-[13px] text-blue-300/90">
                polarisk-ui
              </code>{" "}
              application.
            </p>
          </header>

          <section className="space-y-6">
            {POSTS.map((post, index) => (
              <ChangelogPost key={`${post.date}-${post.title}`} post={post} index={index} />
            ))}
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

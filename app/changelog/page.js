"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Sparkles } from "lucide-react";

const POSTS = [
  {
    date: "March 4, 2026",
    title: "Verdict-agent framework integration",
    sections: [
      {
        heading: "Agent execution graph and analysis summary",
        body: "Alert detail now pulls from dedicated APIs for analysis summary and execution graph so the frontend can render phase-level progress and final verdict context consistently across demo and live modes.",
      },
      {
        heading: "Agent-level summary and deep detail APIs",
        body: "Added dedicated summary and detail endpoints per agent so ownership, transaction, sanctions, and risk analysis can be inspected independently with richer findings and audit metadata.",
      },
    ],
    fixes: [
      "Live mode now returns typed API errors for verdict endpoints instead of opaque failures.",
      "Demo mode maps multi-agent case sections into consistent API shapes for UI rendering.",
      "Deprecated the legacy `/api/analyze` flow in favor of alert-scoped verdict APIs.",
    ],
  },
  {
    date: "February 26, 2026",
    title: "Streaming copilot chat proxy",
    sections: [
      {
        heading: "Server-sent event chat streaming",
        body: "The chat endpoint now proxies token streams from the Python LangGraph backend via SSE so analysts receive incremental responses in real time rather than waiting for full completions.",
      },
    ],
    fixes: [
      "Improved error payload passthrough from backend chat failures for faster debugging.",
      "Added resilient fallback to `VERDICT_API_URL` / `AGENT_API_URL` for local and hosted environments.",
    ],
  },
  {
    date: "February 18, 2026",
    title: "Role-based work panel and demo login",
    sections: [
      {
        heading: "Role-tailored work panel APIs",
        body: "Work panel responses now branch by analyst, manager, and audit roles, enabling role-aware queues, team metrics, and compliance snapshots in one endpoint.",
      },
      {
        heading: "Fast demo session switching",
        body: "Added role-based demo login tokens for analyst, manager, and admin personas to simplify onboarding and scripted demos.",
      },
    ],
    fixes: [
      "Standardized role query defaults so analyst data remains the safe fallback.",
      "Improved demo user lookup handling for missing-role scenarios.",
    ],
  },
  {
    date: "February 10, 2026",
    title: "Dashboard intelligence APIs expanded",
    sections: [
      {
        heading: "Risk posture, typologies, and pattern feeds",
        body: "Dashboard endpoints now expose risk posture, top typologies, and emerging pattern cards, matching the insights shown in the UI overview panels.",
      },
      {
        heading: "Alert case-health and volume telemetry",
        body: "Added dedicated APIs for alert funnel health and 14-day alert volume trends, including anomaly flags and priority distribution signals.",
      },
    ],
    fixes: [
      "Kept demo/live parity for dashboard contracts while live services are phased in.",
      "Improved payload consistency to reduce frontend adapter logic.",
    ],
  },
  {
    date: "February 3, 2026",
    title: "Alert queue filtering and sorting",
    sections: [
      {
        heading: "Advanced alert list query controls",
        body: "Alert list API now supports status, priority, type, assignee, and sort controls so teams can triage with faster precision from the queue.",
      },
      {
        heading: "Assigned-to-me matching improvements",
        body: "Added `assignedTo=me` behavior with Clerk user mapping to route alerts to the signed-in analyst experience.",
      },
    ],
    fixes: [
      "Priority ranking sort order now aligns with high/medium/low investigator expectations.",
      "Reduced mismatch cases between display names and mapped user identities.",
    ],
  },
  {
    date: "January 27, 2026",
    title: "Context and tags normalization",
    sections: [
      {
        heading: "Normalized alert context payloads",
        body: "Context responses now normalize backend variants into stable context groups, entries, and transaction lists so UI rendering remains deterministic.",
      },
      {
        heading: "Tag enrichment for typology hints",
        body: "Alert tags now include category, severity, and tooltip metadata, helping analysts understand why a typology marker appears.",
      },
    ],
    fixes: [
      "Added safe value coercion for sparse context records.",
      "Improved default labels for unknown fields to avoid empty UI states.",
    ],
  },
];

function renderPagination(pageNumber) {
  const previousPage = Math.max(pageNumber - 1, 1);
  const nextPage = pageNumber + 1;

  return (
    <div className="mt-14 flex items-center justify-between gap-4 border-t border-white/[0.08] pt-7">
      <Link
        href={pageNumber === 1 ? "/changelog" : `/changelog?page=${previousPage}`}
        className={`group inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs transition-all ${
          pageNumber <= 1
            ? "pointer-events-none border-white/[0.05] bg-white/[0.01] text-white/25"
            : "border-white/[0.1] bg-white/[0.03] text-white/65 hover:border-white/[0.22] hover:text-white"
        }`}
      >
        <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
        Newer updates
      </Link>
      <Link
        href={`/changelog?page=${nextPage}`}
        className="group inline-flex items-center gap-2 rounded-md border border-white/[0.1] bg-white/[0.03] px-3 py-2 text-xs text-white/65 transition-all hover:border-white/[0.22] hover:text-white"
      >
        Older updates
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

function ChangelogPost({ post, index }) {
  return (
    <article
      className="reveal-on-scroll rounded-xl border border-white/[0.08] bg-[#0d1420]/85 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="mb-5 flex items-center gap-2 text-xs text-white/40">
        <CalendarDays className="h-3.5 w-3.5 text-blue-300/70" />
        {post.date}
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-white">{post.title}</h2>
      <div className="mt-6 space-y-5">
        {post.sections.map((section) => (
          <section key={section.heading}>
            <h3 className="text-base font-semibold text-white/90">{section.heading}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-white/55">{section.body}</p>
          </section>
        ))}
      </div>
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-white/85">Other improvements and fixes</h3>
        <ul className="mt-2 space-y-1.5 pl-4 text-[13px] text-white/50">
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
  const searchParams = useSearchParams();
  const parsed = Number(searchParams.get("page"));
  const pageNumber = Number.isNaN(parsed) || parsed < 1 ? 1 : parsed;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080c14] px-6 pb-16 pt-14 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="animated-orb absolute left-1/2 top-[-140px] h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <header className="mb-10 border-b border-white/[0.08] pb-6">
          <Link
            href="/"
            className="mb-5 inline-flex items-center gap-2 text-xs text-white/45 transition-colors hover:text-white/75"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Polarisk
          </Link>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1 text-xs text-blue-200/90">
            <Sparkles className="h-3.5 w-3.5" />
            Product updates
          </div>
          <h1 className="text-[clamp(2rem,6vw,3.4rem)] font-semibold tracking-tight">
            Changelog
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
            Ongoing improvements to the Polarisk investigation platform. Entries on this page are generated from current capabilities and APIs in the `polarisk-ui` application.
          </p>
          <p className="mt-4 text-xs text-white/35">Page {pageNumber}</p>
        </header>

        <section className="space-y-6">
          {POSTS.map((post, index) => (
            <ChangelogPost key={`${post.date}-${post.title}`} post={post} index={index} />
          ))}
        </section>

        {renderPagination(pageNumber)}
      </div>
    </main>
  );
}

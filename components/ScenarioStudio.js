"use client";

import { useEffect, useRef, useState } from "react";
import {
  Database,
  GitBranch,
  ListChecks,
  RotateCcw,
  Shield,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PROMPT = `Distinguish unexplained
pass-through payments
from legitimate treasury
activity.`;

const SCENARIOS = [
  { story: "In and out the same day, no documented purpose.", expect: "ALERT" },
  { story: "The same movement, split over several days.", expect: "ALERT" },
  { story: "Documented treasury sweep, consistent with history.", expect: "NO ALERT" },
  { story: "Intra-group chain, mandate on file.", expect: "NO ALERT" },
];

const VIEWS = [
  { icon: ListChecks, label: "Risk owner", desc: "Review the story" },
  { icon: GitBranch, label: "Investigator", desc: "Timing and evidence" },
  { icon: Database, label: "Modeller", desc: "Corresponding data" },
  { icon: Shield, label: "Validation", desc: "Expected vs actual" },
];

const COMPARISON = [
  {
    case: "Sub-threshold split across three days",
    expected: "Alert",
    today: "No alert",
    finding: "Miss",
    tone: "miss",
  },
  {
    case: "Documented intra-group treasury sweep",
    expected: "No alert",
    today: "Alert",
    finding: "Over-alert",
    tone: "over",
  },
  {
    case: "FX hedging via a regulated broker",
    expected: "No alert",
    today: "No alert",
    finding: "Match",
    tone: "match",
  },
  {
    case: "Pass-through to a venue that does not bank here",
    expected: "Alert",
    today: "Alert",
    finding: "Explanation",
    tone: "review",
  },
];

const TAGLINE = ["Review.", "Compare.", "Approve.", "Implement."];

function findingClass(tone, active) {
  if (!active) return "border-white/10 text-slate-500";
  if (tone === "match") return "border-emerald-400/30 bg-emerald-500/10 text-emerald-300";
  if (tone === "miss") return "border-red-400/30 bg-red-500/10 text-red-300";
  if (tone === "over") return "border-amber-400/30 bg-amber-500/10 text-amber-200";
  return "border-blue-400/30 bg-blue-500/10 text-sky-200";
}

export default function ScenarioStudio() {
  const panelRef = useRef(null);
  const timers = useRef([]);
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState("");
  const reducedRef = useRef(false);

  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  useEffect(() => {
    reducedRef.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const node = panelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (reducedRef.current) {
          setTyped(PROMPT);
          setPhase(5);
        } else {
          setPhase((p) => (p === 0 ? 1 : p));
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    const t = timers.current;
    return () => {
      observer.disconnect();
      t.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    if (phase !== 1) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(PROMPT.slice(0, i));
      if (i >= PROMPT.length) {
        clearInterval(id);
        later(() => setPhase(2), 550);
      }
    }, 26);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase === 2) later(() => setPhase(3), 1700);
    if (phase === 3) later(() => setPhase(4), 2200);
    if (phase === 4) later(() => setPhase(5), 1600);
  }, [phase]);

  const replay = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setTyped("");
    setPhase(0);
    later(() => setPhase(1), 80);
  };

  const compareOn = phase >= 4;

  return (
    <section id="scenario-studio" className="border-t border-black/[0.06] px-6 py-24">
      <div className="mt-12 text-center">
        <span className="text-[11px] font-medium uppercase tracking-widest text-[#3d5bff]">
          Scenario Studio
        </span>
      </div>
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[#0d1326]">
              One scenario every team can understand and use.
            </h2>
            <p className="mt-4 text-[clamp(1.25rem,2.2vw,1.6rem)] font-semibold tracking-tight">
              <span className="text-gradient-brand">Is this the behaviour we mean?</span>
            </p>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-[#5c6884]">
              Scenario Studio turns a risk concern into reviewable variations
              and the corresponding data — so risk owners, investigators, and
              modellers work from the same signed-off examples.
            </p>
          </ScrollReveal>
        </div>

        <div
          ref={panelRef}
          className="overflow-hidden rounded-xl border border-black/[0.08] bg-[#0b1120]"
          aria-hidden="true"
        >
          <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-white/10" />
              <div className="h-3 w-3 rounded-full bg-white/10" />
              <div className="h-3 w-3 rounded-full bg-white/10" />
            </div>
            <span className="ml-2 text-[12px] font-medium text-slate-300">
              Scenario Studio
            </span>
            <button
              type="button"
              onClick={replay}
              className="ml-auto flex items-center gap-1.5 rounded-md border border-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-slate-400 transition-colors hover:border-white/25 hover:text-slate-200"
            >
              <RotateCcw className="h-3 w-3" />
              Replay
            </button>
          </div>

          <div className="grid md:grid-cols-2">
            <div className="border-b border-white/[0.08] p-5 md:border-b-0 md:border-r">
              <div className="mb-2 text-[10px] uppercase tracking-widest text-slate-500">
                Risk concern
              </div>
              <div className="rounded-lg border border-white/[0.08] bg-white/[0.03] p-4">
                <pre className="min-h-[110px] whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-sky-200/90">
                  {typed}
                  {phase >= 1 && phase < 2 && (
                    <span className="ml-0.5 inline-block h-3.5 w-[7px] animate-pulse bg-sky-300/80 align-middle" />
                  )}
                </pre>
              </div>

              <div
                className={`mt-5 flex items-center gap-2 text-[10px] uppercase tracking-widest transition-all duration-700 ${
                  phase >= 2 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                } text-slate-500`}
              >
                Reviewed scenarios
              </div>
              <div className="mt-3 space-y-2">
                {SCENARIOS.map((s, i) => (
                  <div
                    key={s.story}
                    className={`flex items-start justify-between gap-3 rounded-lg border p-3 transition-all duration-500 ${
                      phase >= 2
                        ? "translate-y-0 border-blue-400/25 bg-blue-500/10 opacity-100"
                        : "translate-y-3 border-white/[0.08] bg-white/[0.03] opacity-0"
                    }`}
                    style={{ transitionDelay: phase >= 2 ? `${i * 180}ms` : "0ms" }}
                  >
                    <div className="text-[11px] leading-snug text-slate-200">{s.story}</div>
                    <span
                      className={`shrink-0 rounded px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wide ${
                        s.expect === "ALERT"
                          ? "bg-red-500/15 text-red-300"
                          : "bg-emerald-500/15 text-emerald-300"
                      }`}
                    >
                      {s.expect}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`p-5 transition-opacity duration-700 ${phase >= 3 ? "opacity-100" : "opacity-40"}`}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  Shared across teams
                </span>
                <span
                  className={`flex items-center gap-1.5 text-[10px] text-emerald-400 transition-opacity duration-500 ${
                    compareOn && phase < 5 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Comparing
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {VIEWS.map((c, i) => (
                  <div
                    key={c.label}
                    className={`rounded-lg border p-3 transition-all duration-500 ${
                      phase >= 3
                        ? "translate-y-0 border-blue-400/25 bg-blue-500/10 opacity-100"
                        : "translate-y-3 border-white/[0.08] bg-white/[0.03] opacity-0"
                    }`}
                    style={{ transitionDelay: phase >= 3 ? `${i * 160}ms` : "0ms" }}
                  >
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-200">
                      <c.icon className="h-3.5 w-3.5 text-blue-400" />
                      {c.label}
                    </div>
                    <div className="mt-1 font-mono text-[10px] text-slate-400">
                      {c.desc}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-[10px] uppercase tracking-widest text-slate-500">
                Expected versus actual
              </div>
              <div className="mt-2 space-y-2">
                {COMPARISON.map((row, i) => (
                  <div
                    key={row.case}
                    className={`rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2.5 transition-all duration-500 ${
                      compareOn ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    }`}
                    style={{ transitionDelay: compareOn ? `${i * 180}ms` : "0ms" }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate text-[11px] text-slate-200">{row.case}</span>
                      <span
                        className={`shrink-0 rounded-full border px-1.5 py-0.5 text-[9px] uppercase tracking-wide ${findingClass(row.tone, compareOn)}`}
                      >
                        {row.finding}
                      </span>
                    </div>
                    <div className="mt-1 flex gap-3 font-mono text-[9px] text-slate-500">
                      <span>Expected {row.expected}</span>
                      <span>Today {row.today}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-white/[0.08] px-5 py-4">
            <span
              className={`rounded-md px-4 py-2 text-[12px] font-semibold transition-all duration-700 ${
                phase >= 5
                  ? "bg-[#3d5bff] text-white shadow-[0_0_28px_rgba(61,91,255,0.65)]"
                  : "border border-white/10 bg-white/[0.04] text-slate-500"
              }`}
            >
              Evidence pack
            </span>
            <div className="relative h-px flex-1 overflow-hidden bg-white/[0.08]">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#3d5bff] to-sky-300 transition-[width] duration-1000 ease-out"
                style={{ width: phase >= 5 ? "100%" : "0%" }}
              />
            </div>
            <span
              className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] transition-all duration-500 ${
                phase >= 5
                  ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
                  : "border-white/10 text-slate-500"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  phase >= 5 ? "animate-pulse bg-emerald-400" : "bg-slate-600"
                }`}
              />
              Ready for the gate
            </span>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="mt-3 flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1">
            {TAGLINE.map((word, i) => (
              <span
                key={word}
                className={`text-[clamp(1.5rem,3.2vw,2.4rem)] font-semibold tracking-tight transition-all duration-700 ${
                  phase >= 5 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                } ${i === 3 ? "text-gradient-brand" : "text-[#0d1326]"}`}
                style={{ transitionDelay: phase >= 5 ? `${i * 200}ms` : "0ms" }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import {
  Cpu,
  Gauge,
  GitBranch,
  ListChecks,
  RotateCcw,
  Rocket,
  Sparkles,
} from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const PROMPT = `Detect mule accounts
that receive
>20 transfers
from newly opened accounts
within 48 hours`;

const OBSERVATIONS = [
  "Large cash deposits.",
  "Round-dollar transfers.",
  "Dormant accounts becoming active.",
  "Related businesses sharing directors.",
];

const CONVERSIONS = [
  { icon: GitBranch, label: "Graph logic", desc: "3-hop inflow pattern" },
  { icon: ListChecks, label: "Rules", desc: "count > 20 · window 48h" },
  { icon: Cpu, label: "ML signals", desc: "account-age anomaly" },
  { icon: Gauge, label: "Risk score", desc: "weighted 0 – 100" },
];

const YEARS = ["2019", "2020", "2021", "2022", "2023"];

const DOTS = [
  { x: 8, y: 22, d: 0.1 }, { x: 18, y: 62, d: 0.25 }, { x: 26, y: 30, d: 0.4 },
  { x: 12, y: 82, d: 0.55 }, { x: 34, y: 70, d: 0.7 }, { x: 41, y: 18, d: 0.85 },
  { x: 48, y: 48, d: 1.0 }, { x: 55, y: 76, d: 1.15 }, { x: 61, y: 26, d: 1.3 },
  { x: 68, y: 58, d: 1.45 }, { x: 74, y: 14, d: 1.6 }, { x: 80, y: 44, d: 1.75 },
  { x: 87, y: 68, d: 1.9 }, { x: 93, y: 32, d: 2.05 }, { x: 30, y: 46, d: 2.2 },
  { x: 70, y: 84, d: 2.3 },
  { x: 22, y: 14, d: 1.2, red: true }, { x: 52, y: 34, d: 1.6, red: true },
  { x: 44, y: 86, d: 2.0, red: true }, { x: 83, y: 20, d: 2.35, red: true },
  { x: 64, y: 66, d: 2.6, red: true },
];

const TAGLINE = ["Build.", "Simulate.", "Validate.", "Deploy."];

export default function ScenarioStudio() {
  const panelRef = useRef(null);
  const timers = useRef([]);
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState("");
  const [metrics, setMetrics] = useState({ fp: 62, cov: 71, conf: 52 });
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
          setMetrics({ fp: 18, cov: 94, conf: 91 });
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
    if (phase === 3) later(() => setPhase(4), 3800);
    if (phase === 4) later(() => setPhase(5), 1200);
  }, [phase]);

  const simOn = phase >= 3;
  useEffect(() => {
    if (!simOn || reducedRef.current) return;
    let raf;
    const start = performance.now();
    const dur = 2600;
    const wait = 500;
    const tick = (now) => {
      const p = Math.min(1, Math.max(0, (now - start - wait) / dur));
      const e = 1 - Math.pow(1 - p, 3);
      setMetrics({
        fp: Math.round(62 - 44 * e),
        cov: Math.round(71 + 23 * e),
        conf: Math.round(52 + 39 * e),
      });
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [simOn]);

  const replay = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setTyped("");
    setMetrics({ fp: 62, cov: 71, conf: 52 });
    setPhase(0);
    later(() => setPhase(1), 80);
  };

  return (
    <section id="scenario-studio" className="border-t border-black/[0.06] px-6 py-24">
      <div className="mt-12 text-center">
        <span className="text-[11px] font-medium uppercase tracking-widest text-[#3d5bff]">
          Scenario Studio
        </span>
      </div>
      <div className="mx-auto max-w-5xl">
        {/* Cinematic narrative */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[#0d1326]">
              Every investigation starts as a hypothesis.
            </h2>
            <p className="mt-4 text-[15px] text-[#5c6884]">
              A fraud analyst notices something unusual.
            </p>
          </ScrollReveal>
          <div className="mt-8 space-y-2.5">
            {OBSERVATIONS.map((line, i) => (
              <ScrollReveal key={line} delay={150 + i * 150} threshold={0.4}>
                <p className="font-mono text-[13px] tracking-wide text-[#5c6884]">
                  {line}
                </p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={800} threshold={0.4}>
            <p className="mt-8 text-[clamp(1.25rem,2.2vw,1.6rem)] font-semibold tracking-tight">
              <span className="text-gradient-brand">Can this become a typology?</span>
            </p>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-[#5c6884]">
              Polarisk lets investigators design, test and refine detection
              strategies before they ever reach production.
            </p>
          </ScrollReveal>
        </div>

        {/* Animated studio panel */}
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
            {/* Left: analyst types, AI converts */}
            <div className="border-b border-white/[0.08] p-5 md:border-b-0 md:border-r">
              <div className="mb-2 text-[10px] uppercase tracking-widest text-slate-500">
                Hypothesis
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
                <Sparkles className="h-3 w-3 text-blue-400" />
                AI converts this into
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {CONVERSIONS.map((c, i) => (
                  <div
                    key={c.label}
                    className={`rounded-lg border p-3 transition-all duration-500 ${
                      phase >= 2
                        ? "translate-y-0 border-blue-400/25 bg-blue-500/10 opacity-100"
                        : "translate-y-3 border-white/[0.08] bg-white/[0.03] opacity-0"
                    }`}
                    style={{ transitionDelay: phase >= 2 ? `${i * 220}ms` : "0ms" }}
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
            </div>

            {/* Right: simulation */}
            <div className={`p-5 transition-opacity duration-700 ${simOn ? "opacity-100" : "opacity-40"}`}>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-slate-500">
                  Simulation · Historical dataset
                </span>
                <span
                  className={`flex items-center gap-1.5 text-[10px] text-emerald-400 transition-opacity duration-500 ${
                    simOn && phase < 4 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Running
                </span>
              </div>

              <div className="flex items-center gap-2">
                {YEARS.map((y, i) => (
                  <span
                    key={y}
                    className={`rounded-md border px-2 py-1 font-mono text-[10px] transition-all duration-500 ${
                      simOn
                        ? "border-blue-400/25 bg-blue-500/10 text-sky-200"
                        : "border-white/[0.08] bg-white/[0.03] text-slate-500"
                    }`}
                    style={{ transitionDelay: simOn ? `${400 + i * 480}ms` : "0ms" }}
                  >
                    {y}
                  </span>
                ))}
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-sky-300 transition-[width] ease-out"
                  style={{ width: simOn ? "100%" : "0%", transitionDuration: "2800ms", transitionDelay: "400ms" }}
                />
              </div>

              <div className="relative mt-3 h-32 overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.02]">
                {DOTS.map((d, i) => (
                  <span
                    key={i}
                    className={`absolute rounded-full transition-all duration-500 ${
                      d.red
                        ? "h-2 w-2 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                        : "h-1.5 w-1.5 bg-emerald-400/60"
                    } ${simOn ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
                    style={{
                      left: `${d.x}%`,
                      top: `${d.y}%`,
                      transitionDelay: simOn ? `${400 + d.d * 1000}ms` : "0ms",
                    }}
                  />
                ))}
                <span
                  className={`absolute bottom-2 right-2 font-mono text-[9px] uppercase tracking-wider text-red-400/90 transition-opacity duration-500 ${
                    simOn ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transitionDelay: simOn ? "2300ms" : "0ms" }}
                >
                  5 mule networks flagged
                </span>
              </div>

              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">False positives</span>
                    <span className="font-mono text-emerald-400">{metrics.fp}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-emerald-400/80"
                      style={{ width: `${metrics.fp}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Coverage</span>
                    <span className="font-mono text-sky-300">{metrics.cov}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-sky-400/80"
                      style={{ width: `${metrics.cov}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Risk confidence</span>
                    <span className="font-mono text-blue-300">{metrics.conf}%</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className="h-full rounded-full bg-blue-400/80"
                      style={{ width: `${metrics.conf}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deploy footer */}
          <div className="flex items-center gap-3 border-t border-white/[0.08] px-5 py-4">
            <button
              type="button"
              tabIndex={-1}
              className={`flex items-center gap-2 rounded-md px-4 py-2 text-[12px] font-semibold transition-all duration-700 ${
                phase >= 4
                  ? "bg-[#3d5bff] text-white shadow-[0_0_28px_rgba(61,91,255,0.65)]"
                  : "border border-white/10 bg-white/[0.04] text-slate-500"
              }`}
            >
              <Rocket className="h-3.5 w-3.5" />
              Deploy
            </button>
            <div className="relative h-px flex-1 overflow-hidden bg-white/[0.08]">
              <div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#3d5bff] to-sky-300 transition-[width] duration-1000 ease-out"
                style={{ width: phase >= 4 ? "100%" : "0%" }}
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
              Production
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-12 text-center">
          {/* <span
            className={`text-[11px] font-medium uppercase tracking-widest text-[#3d5bff] transition-opacity duration-700 ${
              phase >= 5 ? "opacity-100" : "opacity-0"
            }`}
          >
            Scenario Studio
          </span> */}
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

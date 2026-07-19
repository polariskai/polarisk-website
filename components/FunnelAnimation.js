"use client";

import { useEffect, useRef, useState } from "react";
import {
  Activity,
  FileText,
  LineChart,
  Newspaper,
  Radio,
  Shield,
} from "lucide-react";

const FUNNEL_SOURCES = [
  { label: "Transactions", icon: Activity },
  { label: "Trades", icon: LineChart },
  { label: "PEP / Sanctions Screening", icon: Shield },
  { label: "SEC Filings / MCA Registry", icon: FileText },
  { label: "Public News", icon: Newspaper },
  { label: "Negative Media Screening", icon: Radio },
];

const AGENT_LABELS = [
  "Client Research Agent",
  "News Analysis Agent",
  "Media Screening Agent",
  "Entity Relationship Agent",
  "Communications Agent",
  "SAR/STR Gen Agent",
  "Trade Analysis Agent",
  "Transaction Analysis Agent",
  "Regulatory Horizon Agent",
];

const FUNNEL_PARTICLES = [
  { color: "#22c55e", isRed: false, delay: 0.0, dur: 3.8, y0: 10, y1: 15, x1: 62, size: 5 },
  { color: "#eab308", isRed: false, delay: 0.3, dur: 3.6, y0: 22, y1: 16, x1: 68, size: 4 },
  { color: "#22c55e", isRed: false, delay: 0.6, dur: 3.5, y0: 30, y1: 22, x1: 58, size: 5 },
  { color: "#ef4444", isRed: true, delay: 0.8, dur: 4.2, y0: 18, y1: 42, x1: 96, size: 6 },
  { color: "#22c55e", isRed: false, delay: 1.2, dur: 4.0, y0: 55, y1: 60, x1: 65, size: 5 },
  { color: "#eab308", isRed: false, delay: 1.5, dur: 3.3, y0: 48, y1: 40, x1: 64, size: 4 },
  { color: "#22c55e", isRed: false, delay: 1.8, dur: 3.6, y0: 75, y1: 82, x1: 55, size: 4 },
  { color: "#ef4444", isRed: true, delay: 2.0, dur: 4.0, y0: 52, y1: 48, x1: 96, size: 6 },
  { color: "#22c55e", isRed: false, delay: 2.4, dur: 3.4, y0: 88, y1: 85, x1: 60, size: 5 },
  { color: "#eab308", isRed: false, delay: 2.7, dur: 3.8, y0: 70, y1: 78, x1: 60, size: 4 },
  { color: "#22c55e", isRed: false, delay: 3.0, dur: 3.7, y0: 20, y1: 15, x1: 58, size: 5 },
  { color: "#ef4444", isRed: true, delay: 3.3, dur: 4.4, y0: 78, y1: 55, x1: 96, size: 6 },
  { color: "#22c55e", isRed: false, delay: 3.6, dur: 3.9, y0: 65, y1: 72, x1: 62, size: 4 },
  { color: "#eab308", isRed: false, delay: 3.9, dur: 3.5, y0: 35, y1: 28, x1: 66, size: 5 },
  { color: "#ef4444", isRed: true, delay: 4.5, dur: 3.9, y0: 40, y1: 50, x1: 96, size: 6 },
];

export default function FunnelAnimation() {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsActive(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true">
      <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:gap-0">
        {/* Data Sources */}
        <div className="flex shrink-0 flex-wrap justify-center gap-2 self-center lg:w-48 lg:flex-col lg:justify-center lg:gap-2.5 lg:self-auto">
          {FUNNEL_SOURCES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded-lg border border-black/[0.08] bg-[#f3f5f9] px-3 py-2"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${150 + i * 100}ms`,
                }}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-blue-400" />
                <span className="whitespace-nowrap text-[11px] text-[#5c6884]">
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Arrow: Sources → Funnel (Desktop) */}
        <div
          className="hidden shrink-0 items-center px-2 lg:flex"
          style={{
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.5s ease 0.6s",
          }}
        >
          <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
            <line
              x1="0" y1="10" x2="28" y2="10"
              stroke="rgba(96,165,250,0.35)" strokeWidth="1.5"
              strokeDasharray="4 3"
              style={isActive ? { animation: "connection-dash 0.6s linear infinite" } : {}}
            />
            <polygon points="28,5 36,10 28,15" fill="rgba(96,165,250,0.45)" />
          </svg>
        </div>
        {/* Arrow: Sources → Funnel (Mobile) */}
        <div
          className="flex justify-center lg:hidden"
          style={{
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.5s ease 0.6s",
          }}
        >
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <line
              x1="10" y1="0" x2="10" y2="20"
              stroke="rgba(96,165,250,0.35)" strokeWidth="1.5"
              strokeDasharray="4 3"
              style={isActive ? { animation: "connection-dash 0.6s linear infinite" } : {}}
            />
            <polygon points="5,20 10,28 15,20" fill="rgba(96,165,250,0.45)" />
          </svg>
        </div>

        {/* Processing Funnel */}
        <div
          className="relative w-full flex-1 overflow-hidden rounded-xl border border-black/[0.06]"
          style={{
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(37,99,235,0.02) 100%)",
            minHeight: 280,
            boxShadow: isActive ? "0 0 60px rgba(37,99,235,0.1)" : "none",
            transition: "box-shadow 1s ease 0.3s",
          }}
        >
          {/* Funnel taper masks - create narrowing right side */}
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              clipPath: "polygon(40% 0, 100% 0, 100% 22%)",
              background: "#ffffff",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              clipPath: "polygon(40% 100%, 100% 78%, 100% 100%)",
              background: "#ffffff",
            }}
          />

          {/* Funnel shape gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 0 100%, 100% 22%, 100% 78%)",
              background:
                "linear-gradient(to right, rgba(37,99,235,0.12), rgba(96,165,250,0.04))",
              opacity: isActive ? 1 : 0,
              transition: "opacity 0.8s ease 0.4s",
            }}
          />

          {/* Agent labels */}
          <div
            className="relative z-30 flex flex-col items-center gap-2 px-4 pt-6"
            style={{
              opacity: isActive ? 1 : 0,
              transition: "opacity 0.6s ease 0.8s",
            }}
          >
            <span className="text-[10px] font-medium uppercase tracking-widest text-[#3d5bff]/80">
              AI Agent Swarm
            </span>
            <div className="flex flex-wrap justify-center gap-1.5">
              {AGENT_LABELS.map((agent) => (
                <span
                  key={agent}
                  className="rounded-md border border-blue-400/20 bg-blue-500/10 px-2 py-1 text-[9px] font-medium text-[#3d5bff]"
                >
                  {agent}
                </span>
              ))}
            </div>
          </div>

          {/* Hide layer until intersecting: paused keyframes + fill-mode still paint; parent opacity avoids any stray flash.
              Uses the same inset-0 (0-100%) coordinate space as the taper masks below, so particle y0/y1 values
              stay within the funnel's actual visible taper instead of drifting under the corner cutouts. */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              opacity: isActive ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            {FUNNEL_PARTICLES.map((p, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  left: "-2%",
                  top: `${p.y0}%`,
                  opacity: 0,
                  backgroundColor: p.color,
                  boxShadow: `0 0 ${p.size + 2}px ${p.color}`,
                  "--p-y0": `${p.y0}%`,
                  "--p-y1": `${p.y1}%`,
                  "--p-x1": `${p.x1}%`,
                  "--p-peak": "0.85",
                  "--p-end": p.isRed ? "0.9" : "0",
                  animation: `particle-traverse ${p.dur}s ease-in-out infinite`,
                  animationDelay: `${p.delay}s`,
                  animationFillMode: "both",
                  animationPlayState: isActive ? "running" : "paused",
                  willChange: "left, top, opacity",
                }}
              />
            ))}
          </div>
        </div>

        {/* Arrow: Funnel → Output (Desktop) */}
        <div
          className="hidden shrink-0 items-center px-2 lg:flex"
          style={{
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.5s ease 1.2s",
          }}
        >
          <svg width="36" height="20" viewBox="0 0 36 20" fill="none">
            <line
              x1="0" y1="10" x2="28" y2="10"
              stroke="rgba(239,68,68,0.35)" strokeWidth="1.5"
              strokeDasharray="4 3"
              style={isActive ? { animation: "connection-dash 0.6s linear infinite" } : {}}
            />
            <polygon points="28,5 36,10 28,15" fill="rgba(239,68,68,0.5)" />
          </svg>
        </div>
        {/* Arrow: Funnel → Output (Mobile) */}
        <div
          className="flex justify-center lg:hidden"
          style={{
            opacity: isActive ? 1 : 0,
            transition: "opacity 0.5s ease 1.2s",
          }}
        >
          <svg width="20" height="28" viewBox="0 0 20 28" fill="none">
            <line
              x1="10" y1="0" x2="10" y2="20"
              stroke="rgba(239,68,68,0.35)" strokeWidth="1.5"
              strokeDasharray="4 3"
              style={isActive ? { animation: "connection-dash 0.6s linear infinite" } : {}}
            />
            <polygon points="5,20 10,28 15,20" fill="rgba(239,68,68,0.5)" />
          </svg>
        </div>

        {/* Output: True Risk Alerts */}
        <div
          className="flex shrink-0 flex-col items-center justify-center gap-3 self-center rounded-xl border border-red-500/10 bg-red-500/[0.03] px-6 py-8 lg:self-auto lg:w-44"
          style={{
            opacity: isActive ? 1 : 0,
            transform: isActive ? "translateX(0)" : "translateX(20px)",
            transition: "all 0.6s ease 1.4s",
          }}
        >
          <div className="flex items-center gap-2.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="rounded-full bg-red-500"
                style={{
                  width: 8,
                  height: 8,
                  boxShadow: "0 0 10px rgba(239,68,68,0.6)",
                  animation: isActive
                    ? `gentle-pulse 2s ease-in-out infinite ${i * 0.4}s`
                    : "none",
                }}
              />
            ))}
          </div>
          <span className="text-center text-[13px] font-medium text-red-600">
            True Risk Alerts
          </span>
          <div className="flex flex-col items-stretch gap-1.5 w-full">
            {["Insider Trading", "Market Manipulation", "AML", "CDD / EDD", "Sanction Screening"].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-black/[0.08] bg-[#f3f5f9] px-3 py-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                <span className="text-[10px] leading-tight text-[#5c6884]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div
        className="mt-8 flex flex-wrap items-center justify-center gap-6"
        style={{
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.6s ease 1.8s",
        }}
      >
        <div className="flex items-center gap-1.5">
          <div
            className="h-2 w-2 rounded-full bg-green-400"
            style={{ boxShadow: "0 0 4px #22c55e" }}
          />
          <span className="text-[10px] text-[#5c6884]">Cleared</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="h-2 w-2 rounded-full bg-yellow-400"
            style={{ boxShadow: "0 0 4px #eab308" }}
          />
          <span className="text-[10px] text-[#5c6884]">Low Risk</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="h-2 w-2 rounded-full bg-red-400"
            style={{ boxShadow: "0 0 4px #ef4444" }}
          />
          <span className="text-[10px] text-[#5c6884]">True Risk</span>
        </div>
      </div>
    </div>
  );
}

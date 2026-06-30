"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Brain,
  CheckCircle,
  ChevronRight,
  Globe,
  LineChart,
  Lock,
  Search,
  Network,
  Shield,
  Zap,
  Cog,
  FileText,
  Newspaper,
  Radio,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

// const polariskLogo = "/polarisk-logo-2.png";
const polariskLogo = "/polarisk-logo.svg";

const FEATURES = [
  {
    icon: Brain,
    label: "AI-Powered Analysis",
    description:
      "Multi-agent AI that autonomously investigates suspicious activity, surfaces connections, and builds evidence chains.",
  },
  {
    icon: Network,
    label: "Entity Graph Intelligence",
    description:
      "Cross-reference entities across jurisdictions, accounts, beneficial ownership, and networks with graph-powered intelligence that catches what rules miss.",
  },
  {
    icon: Zap,
    label: "Real-Time Alert Ingestion",
    description:
      "Sub-second processing across thousands of daily transactions. Every alert scored, contextualized, and queued before it reaches an analyst.",
  },
  {
    icon: Cog,
    label: "Stay in Control",
    description:
      "Adaptive, yet Configurable AI Agents that learn from analyst decisions to continuously improve alert precision. You call the shots, not the AI.",
  },
  {
    icon: Globe,
    label: "Global Watchlist Coverage",
    description:
      "PEP, sanctions, and adverse media screening across 200+ countries and 1,400+ lists - updated daily.",
  },
  {
    icon: Lock,
    label: "Audit-Ready Compliance",
    description:
      "Every decision logged, every workflow traceable. Built to satisfy regulators on Day 1.",
  },
];

const STATS = [
  { value: "70%", label: "Reduction in false positives" },
  { value: "40x", label: "Productivity Gain" },
  { value: "5x", label: "Higher Risk identification" },
];

const FUNNEL_SOURCES = [
  { label: "Transactions", icon: Activity },
  { label: "Trades", icon: LineChart },
  { label: "PEP / Sanctions Screening", icon: Shield },
  { label: "SEC Filings / MCA Registry", icon: FileText },
  { label: "Public News", icon: Newspaper },
  { label: "Negative Media Screening", icon: Radio }  
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
  { color: "#22c55e", isRed: false, delay: 0.0, dur: 3.8, y0: 10, y1: 5, x1: 62, size: 5 },
  { color: "#eab308", isRed: false, delay: 0.3, dur: 3.6, y0: 22, y1: 16, x1: 68, size: 4 },
  { color: "#22c55e", isRed: false, delay: 0.6, dur: 3.5, y0: 30, y1: 22, x1: 58, size: 5 },
  { color: "#ef4444", isRed: true, delay: 0.8, dur: 4.2, y0: 18, y1: 42, x1: 96, size: 6 },
  { color: "#22c55e", isRed: false, delay: 1.2, dur: 4.0, y0: 55, y1: 60, x1: 65, size: 5 },
  { color: "#eab308", isRed: false, delay: 1.5, dur: 3.3, y0: 48, y1: 40, x1: 64, size: 4 },
  { color: "#22c55e", isRed: false, delay: 1.8, dur: 3.6, y0: 75, y1: 82, x1: 55, size: 4 },
  { color: "#ef4444", isRed: true, delay: 2.0, dur: 4.0, y0: 52, y1: 48, x1: 96, size: 6 },
  { color: "#22c55e", isRed: false, delay: 2.4, dur: 3.4, y0: 88, y1: 92, x1: 60, size: 5 },
  { color: "#eab308", isRed: false, delay: 2.7, dur: 3.8, y0: 70, y1: 78, x1: 60, size: 4 },
  { color: "#22c55e", isRed: false, delay: 3.0, dur: 3.7, y0: 20, y1: 15, x1: 58, size: 5 },
  { color: "#ef4444", isRed: true, delay: 3.3, dur: 4.4, y0: 78, y1: 55, x1: 96, size: 6 },
  { color: "#22c55e", isRed: false, delay: 3.6, dur: 3.9, y0: 65, y1: 72, x1: 62, size: 4 },
  { color: "#eab308", isRed: false, delay: 3.9, dur: 3.5, y0: 35, y1: 28, x1: 66, size: 5 },
  { color: "#ef4444", isRed: true, delay: 4.5, dur: 3.9, y0: 40, y1: 50, x1: 96, size: 6 },
];

const TESTIMONIALS = [
  {
    quote:
      "Polarisk cut our SAR filing time from 3 days to 4 hours. The AI copilot feels like having a senior analyst on every case.",
    author: "Sarah Chen",
    role: "Chief Compliance Officer",
    company: "Meridian Bank",
  },
  {
    quote:
      "Finally, an AML platform that works the way analysts actually think. The alert triage workflow is exceptional.",
    author: "Marcus Webb",
    role: "Head of Financial Crime",
    company: "Apex Financial",
  },
  {
    quote:
      "We onboarded in a week and immediately saw a 60% drop in alert volume without sacrificing detection quality.",
    author: "Priya Nair",
    role: "AML Operations Lead",
    company: "NovaPay",
  },
];

function AnimatedCounter({ value }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) {
      return;
    }
    setDisplay(value);
  }, [started, value]);

  return <span ref={ref}>{display}</span>;
}

const PROVIDER_LOGOS = {
  OpenAI: "/provider-logos/openai.svg",
  Anthropic: "/provider-logos/anthropic.svg",
  Google: "/provider-logos/google.svg",
  Groq: "/provider-logos/groq.svg",
};

function ProviderLogo({ provider }) {
  const logoClass =
    provider === "Groq"
      ? "h-2.5 w-6 object-contain"
      : "h-3.5 w-3.5 object-contain";

  return (
    <img
      src={PROVIDER_LOGOS[provider]}
      alt={`${provider} logo`}
      className={logoClass}
      loading="lazy"
    />
  );
}

function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
  as: Tag = "div",
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isVisible, threshold]);

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

function FunnelAnimation() {
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
    <div ref={ref}>
      <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:gap-0">
        {/* Data Sources */}
        <div className="flex shrink-0 flex-wrap justify-center gap-2 self-center lg:w-48 lg:flex-col lg:justify-center lg:gap-2.5 lg:self-auto">
          {FUNNEL_SOURCES.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateX(0)" : "translateX(-20px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${150 + i * 100}ms`,
                }}
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-blue-400" />
                <span className="whitespace-nowrap text-[11px] text-white/60">
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
          className="relative w-full flex-1 overflow-hidden rounded-xl border border-white/[0.06]"
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
              background: "#080c14",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 z-20"
            style={{
              clipPath: "polygon(40% 100%, 100% 78%, 100% 100%)",
              background: "#080c14",
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
            <span className="text-[10px] font-medium uppercase tracking-widest text-blue-400/80">
              AI Agent Swarm
            </span>
            <div className="flex flex-wrap justify-center gap-1.5">
              {AGENT_LABELS.map((agent) => (
                <span
                  key={agent}
                  className="rounded-md border border-blue-400/20 bg-blue-500/10 px-2 py-1 text-[9px] font-medium text-white/75"
                >
                  {agent}
                </span>
              ))}
            </div>
          </div>

          {/* Hide layer until intersecting: paused keyframes + fill-mode still paint; parent opacity avoids any stray flash. */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              top: "20%",
              bottom: "5%",
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
          <span className="text-center text-[13px] font-medium text-red-400/90">
            True Risk Alerts
          </span>
          <div className="flex flex-col items-stretch gap-1.5 w-full">
            {["Insider Trading", "Market Manipulation", "AML", "CDD / EDD", "Sanction Screening"].map((label) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-red-400/80 shrink-0" />
                <span className="text-[10px] leading-tight text-white/60">{label}</span>
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
          <span className="text-[10px] text-white/30">Cleared</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="h-2 w-2 rounded-full bg-yellow-400"
            style={{ boxShadow: "0 0 4px #eab308" }}
          />
          <span className="text-[10px] text-white/30">Low Risk</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div
            className="h-2 w-2 rounded-full bg-red-400"
            style={{ boxShadow: "0 0 4px #ef4444" }}
          />
          <span className="text-[10px] text-white/30">True Risk</span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsPageReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleContactUs = () => {
    window.open("mailto:contact@polarisk.ai", "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden bg-[#080c14] font-sans text-white ${
        isPageReady ? "page-ready" : ""
      }`}
    >
      <SiteHeader />

      <section className="relative flex flex-col items-center overflow-hidden px-6 pb-32 pt-32 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, #2563eb 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div
          className="load-in relative mb-8"
          style={{ "--enter-delay": "220ms" }}
        >
          <img
            src={polariskLogo}
            alt="Polarisk"
            className="mx-auto h-24 w-24 object-contain"
            style={{ filter: "drop-shadow(0 0 32px rgba(59,130,246,0.5))" }}
          />
        </div>

        <h1
          className="load-in relative mb-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight"
          style={{ "--enter-delay": "280ms", lineHeight: 1.08 }}
        >
          <span className="text-white">Polarisk - AI Agents for</span>
          <br />
          <span
            style={{
              background:
                "linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Financial Crime
          </span>
        </h1>

        <div
          className="load-in relative mb-10 w-full max-w-2xl space-y-6"
          style={{ "--enter-delay": "340ms" }}
        >
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="flex flex-col items-center rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  <Zap className="h-4 w-4 text-blue-400" aria-hidden />
                </div>
              </div>
              <p className="text-[13px] font-medium leading-snug text-blue-400">
                READY-TO-DEPLOY AI AGENTS
              </p>
              {/* <div className="mt-3 h-px w-full bg-white/20" aria-hidden /> */}
              <p className="mt-3 max-w-[260px] text-[15px] font-medium leading-snug text-white/85">
                Plug-n-play with your existing tools
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-4 text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  <Cog className="h-4 w-4 text-blue-400" aria-hidden />
                </div>
              </div>
              <p className="text-[13px] font-medium leading-snug text-blue-400">
                BUILD AND CONFIGURE
              </p>
              {/* <div className="mt-3 h-px w-full bg-white/20" aria-hidden /> */}
              <p className="mt-3 max-w-[260px] text-[15px] font-medium leading-snug text-white/85">
                Test and deploy your own AI Agents
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  <Shield className="h-4 w-4 text-blue-400" aria-hidden />
                </div>
              </div>
              <p className="text-[13px] font-medium leading-snug text-blue-400">
                TRANSACTION MONITORING
              </p>
              <p className="mt-1.5 text-[15px] font-medium text-white/85">
                AML / KYC
              </p>
            </div>
            <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] px-5 py-4 text-center">
              <div className="mb-2 flex justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                  <LineChart className="h-4 w-4 text-blue-400" aria-hidden />
                </div>
              </div>
              <p className="text-[13px] font-medium leading-snug text-blue-400">
                TRADE MONITORING
              </p>
              <p className="mt-1.5 text-[15px] font-medium text-white/85">
                Market manipulation
              </p>
            </div>
          </div>

          <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-white/45">
            Polarisk helps compliance teams detect financial crime risk across
            AML, KYC, and transaction monitoring — work that is{" "}
            <span className="text-white/70">humanly impossible</span> at scale.
          </p>
        </div>

        <div
          className="load-in relative flex flex-col items-center gap-3 sm:flex-row"
          style={{ "--enter-delay": "400ms" }}
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-md border border-white/[0.12] px-6 py-2.5 text-[14px] text-white/60 transition-all hover:border-white/25 hover:text-white/90"
          >
            Contact us
            <ArrowRight className="h-4 w-4 opacity-60" />
          </Link>
        </div>

        <p
          className="load-in relative mt-8 text-[12px] text-white/30"
          style={{ "--enter-delay": "470ms" }}
        >
          Stress tested by compliance teams at top global financial institutions
        </p>
      </section>

      <section className="border-y border-white/[0.05] bg-white/[0.02]">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-10 gap-y-10 px-6 py-14 md:gap-x-20 md:gap-y-8">
          {STATS.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              as="div"
              delay={80 + index * 55}
              threshold={0.35}
              className="flex max-w-[220px] flex-col items-center px-4 text-center sm:max-w-[240px] sm:px-6"
            >
              <span
                className="mb-1 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #ffffff 30%, #93c5fd 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-[13px] text-white/40">{stat.label}</span>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Funnel Animation Section */}
      <section className="border-t border-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal className="mb-14 text-center">
            <span className="text-[12px] font-medium uppercase tracking-widest text-blue-400/70">
              How It Works
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              From noise to signal
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/40">
              Our AI agent swarm ingests multiple data sources and filters
              thousands of alerts down to genuine risks.
            </p>
          </ScrollReveal>
          <FunnelAnimation />
        </div>
      </section>

      <section className="border-t border-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-[12px] font-medium uppercase tracking-widest text-blue-400/70">
                Platform
              </span>
              <h2 className="mb-5 mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-tight text-white">
              Train agents, 
              <br />
              <span style={{
                background: "linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>to think like you.</span> 
              </h2>
              <p className="mb-8 text-[15px] leading-relaxed text-white/40">
              Every compliance team has its own risk appetite, escalation logic, 
              and investigative style. 
              Polarisk agents aren't black boxes — you configure them 
              to match how your program actually works.
              </p>
              <div className="space-y-4">
                {[
                  "Create and configure your own agents",
                  "Set your own risk thresholds",
                  "Ground agents in your policies and test run them in a sandbox",
                  "Improve your results with analyst-in-the-loop feedback",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span className="text-[13px] text-white/60">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-colors hover:text-blue-300"
              >
                Contact us
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div
              className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d1422]"
              style={{ boxShadow: "0 0 40px rgba(37,99,235,0.1)" }}
            >
              <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
                <div className="flex items-center gap-2">
                  <Brain className="h-3.5 w-3.5 text-blue-400" />
                  <span className="text-[12px] font-medium text-white/80">
                    Surveillance Workbench
                  </span>
                </div>
                <button className="rounded-md border border-blue-400/25 bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium text-blue-300">
                  Save workflow
                </button>
              </div>

              <div className="grid gap-0 md:grid-cols-[1.65fr_1fr]">
                <div className="border-b border-white/[0.05] p-4 md:border-b-0 md:border-r">
                  <div className="mb-4 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
                    <div className="mb-1 flex items-center justify-between text-[10px] text-white/35">
                      <span>Token budget</span>
                      <span>26k / 60k</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                      <div className="h-full w-[43%] rounded-full bg-gradient-to-r from-blue-400 to-blue-300" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-lg border border-white/[0.06] bg-[#0b1019] p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-medium text-white/80">
                            Checklist Analysis
                          </span>
                          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/[0.14] text-[10px] leading-none text-white/55">
                            +
                          </span>
                        </div>
                        <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-emerald-300">
                          Parallel
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "KYC Intelligence",
                          "Behavioral Analysis",
                          "Peer Comparison",
                          "Compliance Screening",
                        ].map((agent) => {
                          const isSelected = agent === "Compliance Screening";
                          return (
                            <div
                              key={agent}
                              className={`rounded-md px-2 py-2 ${
                                isSelected
                                  ? "border border-blue-400/20 bg-blue-500/[0.08]"
                                  : "border border-white/[0.06] bg-white/[0.03]"
                              }`}
                            >
                              <div
                                className={`text-[10px] font-medium ${
                                  isSelected ? "text-white/85" : "text-white/75"
                                }`}
                              >
                                {agent}
                              </div>
                              <div
                                className={`mt-1 flex items-center gap-1.5 text-[9px] ${
                                  isSelected ? "text-blue-200/70" : "text-white/35"
                                }`}
                              >
                                <ProviderLogo provider="Anthropic" />
                                <span>sonnet-4.6</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/[0.06] bg-[#0b1019] p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-medium text-white/80">
                            Network Analysis
                          </span>
                          <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white/[0.14] text-[10px] leading-none text-white/55">
                            +
                          </span>
                        </div>
                        <span className="rounded bg-blue-500/15 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-blue-300">
                          Sequential
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[10px] text-white/50">
                        <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1.5">
                          Network Intelligence
                        </span>
                        <ChevronRight className="h-3 w-3 text-white/25" />
                        <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1.5">
                          Communication Mining
                        </span>
                      </div>
                    </div>

                    {/* <div className="rounded-lg border border-white/[0.06] bg-[#0b1019] p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-white/80">
                          Adversarial Deliberation
                        </span>
                        <span className="rounded bg-violet-500/15 px-1.5 py-0.5 text-[9px] uppercase tracking-wide text-violet-300">
                          Mixed
                        </span>
                      </div>
                      <div className="text-[10px] text-white/45">
                        Step 1: Prosecutor + Defender in parallel
                      </div>
                      <div className="mt-1 text-[10px] text-white/45">
                        Step 2: Arbiter synthesizes final recommendation
                      </div>
                    </div> */}
                  </div>
                </div>

                <div className="bg-[#0c1220] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-white/85">
                        Agent Config
                      </div>
                      <div className="text-[10px] text-white/35">
                        compliance-screening
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[9px] text-emerald-300">
                      <ProviderLogo provider="Anthropic" />
                      <span>sonnet-4.6</span>
                    </span>
                  </div>

                  <div className="space-y-2 rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
                    <div className="text-[10px] uppercase tracking-wide text-white/35">
                      Provider
                    </div>
                    <div className="grid grid-cols-4 gap-1.5 text-[10px]">
                      {["OpenAI", "Anthropic", "Google", "Groq"].map((provider) => (
                        <span
                          key={provider}
                          title={provider}
                          aria-label={provider}
                          className={`flex h-8 items-center justify-center rounded ${
                            provider === "Anthropic"
                              ? "border border-blue-400/30 bg-blue-500/15 text-blue-300"
                              : "border border-white/[0.06] bg-white/[0.03] text-white/45"
                          }`}
                        >
                          <ProviderLogo provider={provider} />
                        </span>
                      ))}
                    </div>

                    <div className="mt-2 text-[10px] uppercase tracking-wide text-white/35">
                      Model
                    </div>
                    <div className="rounded border border-blue-400/30 bg-blue-500/10 px-2 py-1.5 text-[10px] text-blue-200">
                      sonnet-4.6
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[10px] text-white/45">
                      <span>Temperature</span>
                      <span>0.2</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                      <div className="h-full w-[20%] rounded-full bg-blue-400" />
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[10px] text-white/45">
                      <span>Max tokens</span>
                      <span>2000</span>
                    </div>
                  </div>

                  <div className="mt-3 rounded-lg border border-white/[0.06] bg-[#0b1019] p-3">
                    <div className="mb-1 text-[10px] font-medium text-white/70">
                      YAML Preview
                    </div>
                    <pre className="overflow-x-auto text-[9px] leading-relaxed text-white/40">
                      {`id: compliance-screening
llm:
  provider: openai
  model: gpt-4o-mini
  temperature: 0.2
  max_tokens: 2000`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="text-[12px] font-medium uppercase tracking-widest text-blue-400/70">
              ALERT ANALYSIS
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              Built for the way Compliance Teams work
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/40">
              A unified workspace where every alert, entity, and AI insight
              <br />live together in a single, secure platform.
            </p>
          </div>

          <div
            className="relative overflow-hidden rounded-xl border border-white/[0.08]"
            style={{
              boxShadow:
                "0 0 80px rgba(37,99,235,0.15), 0 0 0 1px rgba(255,255,255,0.04)",
            }}
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0f1520] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.04] px-4 py-1 text-[11px] text-white/30">
                <Lock className="h-2.5 w-2.5" />
                app.polarisk.ai
              </div>
            </div>

            <div className="flex bg-[#0b1019]" style={{ minHeight: 440 }}>
              <div className="hidden w-52 border-r border-white/[0.05] bg-[#0d1422] p-4 md:block">
                <div className="mb-6 flex items-center gap-2">
                  <img src={polariskLogo} alt="" className="h-5 w-5 object-contain" />
                  <span className="text-[12px] font-semibold text-white/80">
                    Meridian Bank
                  </span>
                </div>
                {[
                  "Dashboard",
                  "Alert Queue",
                  "Investigations",
                  "Reports",
                  "Settings",
                ].map((item, i) => (
                  <div
                    key={item}
                    className={`mb-0.5 flex cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[12px] transition-colors ${
                      i === 1
                        ? "bg-blue-600/20 text-blue-400"
                        : "text-white/30 hover:text-white/60"
                    }`}
                  >
                    {i === 0 && <Activity className="h-3.5 w-3.5" />}
                    {i === 1 && <AlertTriangle className="h-3.5 w-3.5" />}
                    {i === 2 && <Search className="h-3.5 w-3.5" />}
                    {i === 3 && <LineChart className="h-3.5 w-3.5" />}
                    {i === 4 && <Shield className="h-3.5 w-3.5" />}
                    {item}
                    {i === 1 && (
                      <span className="ml-auto rounded-full bg-red-500/20 px-1.5 py-0.5 text-[10px] text-red-400">
                        24
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex-1 p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[13px] font-semibold text-white/90">
                      Alert Queue
                    </div>
                    <div className="mt-0.5 text-[11px] text-white/30">
                      24 open - 8 high priority
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/40">
                      Filter
                    </span>
                    {/* <span className="rounded bg-blue-600 px-2.5 py-1 text-[11px] text-white">
                      + New Case
                    </span> */}
                  </div>
                </div>

                {[
                  {
                    id: "ALT-2847",
                    name: "Rapid funds movement - ACH",
                    risk: "Critical",
                    score: 94,
                    entity: "Lena Vasquez",
                  },
                  {
                    id: "ALT-2846",
                    name: "Structuring pattern detected",
                    risk: "High",
                    score: 81,
                    entity: "TechFlow LLC",
                  },
                  {
                    id: "ALT-2841",
                    name: "PEP match - offshore account",
                    risk: "High",
                    score: 77,
                    entity: "Arjun Mehta",
                  },
                  {
                    id: "ALT-2838",
                    name: "Unusual cross-border transfer",
                    risk: "Medium",
                    score: 55,
                    entity: "Global Imports Co.",
                  },
                ].map((alert) => (
                  <div
                    key={alert.id}
                    className="flex cursor-pointer items-center gap-3 rounded border-b border-white/[0.04] px-1 py-2.5 transition-colors hover:bg-white/[0.02]"
                  >
                    <div
                      className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                        alert.risk === "Critical"
                          ? "bg-red-500"
                          : alert.risk === "High"
                            ? "bg-orange-400"
                            : "bg-yellow-400"
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-white/30">
                          {alert.id}
                        </span>
                        <span className="truncate text-[11px] text-white/75">
                          {alert.name}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[10px] text-white/30">
                        {alert.entity}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                          alert.risk === "Critical"
                            ? "bg-red-500/15 text-red-400"
                            : alert.risk === "High"
                              ? "bg-orange-400/15 text-orange-400"
                              : "bg-yellow-400/15 text-yellow-400"
                        }`}
                      >
                        {alert.risk}
                      </span>
                      <span className="w-8 text-right font-mono text-[11px] text-white/60">
                        {alert.score}
                      </span>
                    </div>
                  </div>
                ))}

                <div className="mt-4 flex gap-3 rounded-lg border border-blue-500/20 bg-blue-600/[0.08] p-3">
                  <Brain className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                  <div>
                    <div className="mb-0.5 text-[11px] font-medium text-blue-400">
                      AI Copilot insight
                    </div>
                    <div className="text-[11px] leading-relaxed text-white/50">
                      ALT-2847 and ALT-2841 share a common beneficiary account.
                      Recommend joint investigation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-[12px] font-medium uppercase tracking-widest text-blue-400/70">
              Capabilities
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-white">
              Everything your compliance team needs
            </h2>
            
            <h3 style={{
                background: "linear-gradient(90deg, #60a5fa 0%, #a78bfa 50%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              Un-Opinionated. Secure.
            </h3>
            
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.04] md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <ScrollReveal
                key={feature.label}
                as="div"
                delay={60 + index * 45}
                threshold={0.2}
                className="group bg-[#080c14] p-7 transition-colors hover:bg-[#0d1322]"
              >
                <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-600/10 transition-colors group-hover:bg-blue-600/20">
                  <feature.icon
                    className="text-blue-400"
                    style={{ width: 18, height: 18 }}
                  />
                </div>
                <div className="mb-2 text-[14px] font-semibold text-white">
                  {feature.label}
                </div>
                <div className="text-[13px] leading-relaxed text-white/40">
                  {feature.description}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="text-[12px] font-medium uppercase tracking-widest text-blue-400/70">
                AI Copilot
              </span>
              <h2 className="mb-5 mt-3 text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-tight text-white">
                Your AI analyst, available 24/7
              </h2>
              <p className="mb-8 text-[15px] leading-relaxed text-white/40">
                Ask the Polarisk AI Copilot anything about an alert. It
                retrieves transaction timelines, entity connections, sanctions
                hits, and prior SARs - then explains its reasoning step by
                step.
              </p>
              <div className="space-y-4">
                {[
                  "Automated narrative generation for SAR filings",
                  "Entity network graph with risk propagation",
                  "One-click workflow triggers for common investigations",
                  "Confidence scores with cited evidence",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span className="text-[13px] text-white/60">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-colors hover:text-blue-300"
              >
                Contact us
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div
              className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d1422]"
              style={{ boxShadow: "0 0 40px rgba(37,99,235,0.1)" }}
            >
              <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
                <Brain className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-[12px] font-medium text-white/70">
                  AI Copilot - ALT-2847
                </span>
                <span className="ml-auto h-2 w-2 animate-pulse rounded-full bg-green-400" />
              </div>
              <div className="space-y-4 p-4">
                <div className="flex justify-end">
                  <div className="max-w-[75%] rounded-xl rounded-br-sm border border-blue-500/20 bg-blue-600/20 px-3.5 py-2.5 text-[12px] text-blue-200">
                    Summarize the risk factors for this alert
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-600/20">
                    <Brain className="h-3 w-3 text-blue-400" />
                  </div>
                  <div className="max-w-[80%] rounded-xl rounded-tl-sm border border-white/[0.06] bg-white/[0.04] px-3.5 py-2.5 text-[12px] leading-relaxed text-white/60">
                    <span className="mb-1 block font-medium text-white/80">
                      ALT-2847 risk summary
                    </span>
                    Lena Vasquez moved <span className="text-blue-300">$84,400</span>{" "}
                    via ACH across 6 transactions in 72 hours - consistent with{" "}
                    <span className="text-orange-300">structuring</span>. Account
                    has <span className="text-red-300">2 prior SARs</span>.
                    Beneficiary matches a{" "}
                    <span className="text-orange-300">PEP watchlist entry</span>{" "}
                    (OFAC).
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="max-w-[75%] rounded-xl rounded-br-sm border border-blue-500/20 bg-blue-600/20 px-3.5 py-2.5 text-[12px] text-blue-200">
                    Run the structuring workflow
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-600/20">
                    <Brain className="h-3 w-3 text-blue-400" />
                  </div>
                  <div className="rounded-xl rounded-tl-sm border border-white/[0.06] bg-white/[0.04] px-3.5 py-2.5 text-[12px] leading-relaxed text-white/60">
                    <CheckCircle className="mr-1.5 inline h-3 w-3 text-green-400" />
                    <span className="text-green-400">Workflow complete.</span> SAR
                    draft ready for review. 14-day transaction history exported.
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-2">
                  <span className="flex-1 text-[11px] text-white/20">
                    Ask anything about this alert...
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="border-t border-white/[0.04] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="text-[12px] font-medium uppercase tracking-widest text-blue-400/70">
              Social Proof
            </span>
            <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold tracking-tight text-white">
              Loved by compliance teams
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.author}
                className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
              >
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-5 text-[13px] leading-relaxed text-white/55">
                  "{t.quote}"
                </p>
                <div>
                  <div className="text-[13px] font-semibold text-white/80">
                    {t.author}
                  </div>
                  <div className="mt-0.5 text-[11px] text-white/30">
                    {t.role} - {t.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="border-t border-white/[0.04] px-6 py-28">
        <div className="relative mx-auto max-w-3xl text-center">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)",
            }}
          />
          <img
            src="/polarisk-logo-white.svg"
            alt="Polarisk"
            className="relative mx-auto mb-6 h-16 w-16 object-contain"
            style={{ filter: "drop-shadow(0 0 24px rgba(59,130,246,0.6))" }}
          />
          <h2
            className="relative mb-5 text-[clamp(2rem,5vw,3.5rem)] font-semibold tracking-tight"
            style={{ lineHeight: 1.1 }}
          >
            <span className="text-white">Stop drowning in alerts.</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Start closing cases.
            </span>
          </h2>
          <p className="relative mx-auto mb-10 max-w-lg text-[15px] leading-relaxed text-white/40">
            Join top global financial institutions using Polarisk to catch financial
            crime faster, with less noise and more confidence.
          </p>
          <div className="relative flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md border border-white/[0.12] px-8 py-3 text-[14px] text-white/60 transition-all hover:border-white/25 hover:text-white/90"
            >
              Contact us
              <ArrowRight className="h-4 w-4 opacity-60" />
            </Link>
            <button
              type="button"
              onClick={handleContactUs}
              className="text-[13px] text-white/40 transition-colors hover:text-white/70"
            >
              contact@polarisk.ai
            </button>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            No credit card required
             {/* - SOC 2 Type II certified - GDPR compliant */}
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
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
  Shield,
  Zap,
} from "lucide-react";

const polariskLogo = "/polarisk-logo-2.png";

const NAV_LINKS = [
  { label: "Product", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Changelog", href: "/changelog" },
  { label: "Docs", href: "#" },
];

const FEATURES = [
  {
    icon: Brain,
    label: "AI-Powered Analysis",
    description:
      "Multi-agent AI that autonomously investigates suspicious activity, surfaces connections, and builds evidence chains.",
  },
  {
    icon: Zap,
    label: "Real-Time Detection",
    description:
      "Sub-second alert ingestion across thousands of transactions. Never miss a signal in the noise.",
  },
  {
    icon: Search,
    label: "Deep Entity Resolution",
    description:
      "Cross-reference entities across jurisdictions, accounts, and networks with graph-powered intelligence.",
  },
  {
    icon: LineChart,
    label: "Risk Scoring Engine",
    description:
      "Adaptive ML models that learn from analyst decisions to continuously improve alert precision.",
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
      "Every decision logged, every workflow traceable. Built to satisfy regulators on day one.",
  },
];

const STATS = [
  { value: "94%", label: "Reduction in false positives" },
  { value: "12x", label: "Faster case closure" },
  { value: "80%", label: "Reduction in analyst workload" },
  { value: "60%", label: "Lower cost vs legacy tools" },
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

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [isPageReady, setIsPageReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsPageReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const handleGetStarted = () => {
    window.open("https://demo.polarisk.ai", "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden bg-[#080c14] font-sans text-white ${
        isPageReady ? "page-ready" : ""
      }`}
    >
      <header
        className={`load-in fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/[0.06] bg-[#080c14]/90 backdrop-blur-xl"
            : ""
        }`}
        style={{ "--enter-delay": "40ms" }}
      >
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <img
              src={polariskLogo}
              alt="Polarisk"
              className="h-7 w-7 object-contain"
            />
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Polarisk
            </span>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-white/50 transition-colors hover:text-white/90"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={handleGetStarted}
              className="hidden text-[13px] text-white/60 transition-colors hover:text-white md:block"
            >
              Log in
            </button>
            <button
              onClick={handleGetStarted}
              className="flex items-center gap-1.5 rounded-md bg-white px-4 py-1.5 text-[13px] font-semibold text-[#080c14] transition-all hover:bg-white/90"
            >
              Demo
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </header>

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
          className="load-in relative mb-8 flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-[12px] font-medium text-blue-400"
          style={{ "--enter-delay": "140ms" }}
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
          Now in customer discovery - Polarisk.ai
          <ChevronRight className="h-3 w-3 opacity-60" />
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
          <span className="text-white">Compliance Workforce,</span>
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
            reimagined with AI.
          </span>
        </h1>

        <p
          className="load-in relative mb-10 max-w-xl text-[16px] leading-relaxed text-white/50"
          style={{ "--enter-delay": "340ms" }}
        >
        Configure AI agents across AML, trade surveillance, sanctions, and fraud
        <br />
        trained on <i>your</i> policies, <i>your</i> thresholds, <i>your</i> logic. 
        <br />
        Outcomes — without the overhead.
        </p>

        <div
          className="load-in relative flex flex-col items-center gap-3 sm:flex-row"
          style={{ "--enter-delay": "400ms" }}
        >
          <button
            onClick={handleGetStarted}
            className="flex items-center gap-2 rounded-md bg-white px-6 py-2.5 text-[14px] font-semibold text-[#080c14] shadow-lg shadow-white/10 transition-all hover:bg-white/90"
          >
            Demo
            <ArrowRight className="h-4 w-4" />
          </button>
          {/* <button
            onClick={handleGetStarted}
            className="flex items-center gap-2 rounded-md border border-white/[0.08] bg-white/[0.05] px-6 py-2.5 text-[14px] font-medium text-white/70 transition-all hover:bg-white/[0.08] hover:text-white"
          >
            Watch demo
            <ChevronRight className="h-4 w-4 opacity-60" />
          </button> */}
        </div>

        <p
          className="load-in relative mt-8 text-[12px] text-white/30"
          style={{ "--enter-delay": "470ms" }}
        >
          Trusted by compliance teams at top global financial institutions
        </p>
      </section>

      <section className="border-y border-white/[0.05] bg-white/[0.02]">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4 md:gap-4">
          {STATS.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              as="div"
              delay={80 + index * 55}
              threshold={0.35}
              className="flex flex-col items-center text-center"
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
                  "Improve from analyst decisions",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-400" />
                    <span className="text-[13px] text-white/60">{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={handleGetStarted}
                className="group mt-10 flex items-center gap-2 text-[13px] font-semibold text-white transition-colors hover:text-blue-300"
              >
                Try Polarisk free
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
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
                        <span className="text-[11px] font-medium text-white/80">
                          Checklist Analysis
                        </span>
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
                        ].map((agent) => (
                          <div
                            key={agent}
                            className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-2"
                          >
                            <div className="text-[10px] font-medium text-white/75">
                              {agent}
                            </div>
                            <div className="mt-1 flex items-center gap-1.5 text-[9px] text-white/35">
                              <ProviderLogo provider="OpenAI" />
                              <span>gpt-4o-mini</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-lg border border-white/[0.06] bg-[#0b1019] p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-white/80">
                          Network Analysis
                        </span>
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
                    <span className="rounded border border-emerald-400/20 bg-emerald-500/10 px-2 py-0.5 text-[9px] text-emerald-300">
                      OpenAI gpt-4o-mini
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
                            provider === "OpenAI"
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
                      gpt-4o-mini
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
              <button
                onClick={handleGetStarted}
                className="group mt-10 flex items-center gap-2 text-[13px] font-semibold text-white transition-colors hover:text-blue-300"
              >
                Try Polarisk free
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
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
            src={polariskLogo}
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
            <button
              onClick={handleGetStarted}
              className="flex items-center gap-2 rounded-md bg-white px-8 py-3 text-[14px] font-semibold text-[#080c14] shadow-xl shadow-white/5 transition-all hover:bg-white/90"
            >
              Demo
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={handleGetStarted}
              className="text-[13px] text-white/40 transition-colors hover:text-white/70"
            >
              Talk to sales →
            </button>
          </div>
          <p className="relative mt-6 text-[11px] text-white/25">
            No credit card required
             {/* - SOC 2 Type II certified - GDPR compliant */}
          </p>
        </div>
      </section>

      <footer className="border-t border-white/[0.05] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <img src={polariskLogo} alt="Polarisk" className="h-5 w-5 object-contain" />
            <span className="text-[13px] font-semibold text-white/60">
              Polarisk
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy", "Terms", "Security", "Status", "Docs", "Blog"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[12px] text-white/30 transition-colors hover:text-white/60"
                >
                  {link}
                </a>
              )
            )}
          </div>
          <div className="text-[12px] text-white/25">
            © {new Date().getFullYear()} Polarisk, Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}

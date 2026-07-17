import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Brain,
  CheckCircle,
  ChevronRight,
  Globe,
  Lock,
  Search,
  LineChart,
  Network,
  Shield,
  Zap,
  Cog,
} from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedCounter from "../components/AnimatedCounter";
import FunnelAnimation from "../components/FunnelAnimation";
import ProviderLogo from "../components/ProviderLogo";

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

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080c14] font-sans text-white">
      <SiteHeader />

      <section
        id="main-content"
        className="relative flex flex-col items-center overflow-hidden px-6 pb-32 pt-32 text-center"
      >
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
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

        <div className="load-in relative mb-8" style={{ "--enter-delay": "140ms" }}>
          <Image
            src={polariskLogo}
            alt="Polarisk"
            width={96}
            height={96}
            className="mx-auto h-24 w-24 object-contain"
            style={{ filter: "drop-shadow(0 0 32px rgba(59,130,246,0.5))" }}
            priority
          />
        </div>

        <h1
          className="load-in relative mb-6 max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.08] tracking-tight"
          style={{ "--enter-delay": "200ms", lineHeight: 1.08 }}
        >
          <span className="text-white">Polarisk - AI Agents for</span>
          <br />
          <span className="text-gradient-brand">Financial Crime</span>
        </h1>

        <div
          className="load-in relative mb-10 w-full max-w-2xl space-y-6"
          style={{ "--enter-delay": "260ms" }}
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

          <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-white/55">
            Polarisk helps compliance teams detect financial crime risk across
            AML, KYC, and transaction monitoring — work that is{" "}
            <span className="text-white/80">humanly impossible</span> at scale.
          </p>
        </div>

        <div
          className="load-in relative flex flex-col items-center gap-3 sm:flex-row"
          style={{ "--enter-delay": "320ms" }}
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-md bg-white px-6 py-2.5 text-[14px] font-semibold text-[#080c14] transition hover:bg-white/90"
          >
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
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
              <span className="text-gradient-stat mb-1 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">
                <AnimatedCounter value={stat.value} />
              </span>
              <span className="text-[13px] text-white/55">{stat.label}</span>
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
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/55">
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
                <span className="text-gradient-brand">to think like you.</span>
              </h2>
              <p className="mb-8 text-[15px] leading-relaxed text-white/55">
                Every compliance team has its own risk appetite, escalation logic,
                and investigative style. Polarisk agents aren&apos;t black boxes —
                you configure them to match how your program actually works.
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
                    <span className="text-[13px] text-white/70">{item}</span>
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
              aria-hidden="true"
            >
              <div className="flex items-center justify-between border-b border-white/[0.05] px-4 py-3">
                <div className="flex items-center gap-2">
                  <Brain className="h-3.5 w-3.5 text-blue-400" />
                  <span className="text-[12px] font-medium text-white/80">
                    Surveillance Workbench
                  </span>
                </div>
                <span className="rounded-md border border-blue-400/25 bg-blue-500/10 px-2.5 py-1 text-[10px] font-medium text-blue-300">
                  Save workflow
                </span>
              </div>

              <div className="grid gap-0 md:grid-cols-[1.65fr_1fr]">
                <div className="border-b border-white/[0.05] p-4 md:border-b-0 md:border-r">
                  <div className="mb-4 rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-2.5">
                    <div className="mb-1 flex items-center justify-between text-[10px] text-white/50">
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
                                  isSelected ? "text-blue-200/70" : "text-white/50"
                                }`}
                              >
                                <ProviderLogo provider="Anthropic" />
                                <span>sonnet-5</span>
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
                      <div className="flex items-center gap-1.5 text-[10px] text-white/55">
                        <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1.5">
                          Network Intelligence
                        </span>
                        <ChevronRight className="h-3 w-3 text-white/35" />
                        <span className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-1.5">
                          Communication Mining
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0c1220] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-semibold text-white/85">
                        Agent Config
                      </div>
                      <div className="text-[10px] text-white/50">
                        compliance-screening
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded border border-emerald-400/20 bg-emerald-500/10 px-2 py-1 text-[9px] text-emerald-300">
                      <ProviderLogo provider="Anthropic" />
                      <span>sonnet-5</span>
                    </span>
                  </div>

                  <div className="space-y-2 rounded-lg border border-white/[0.06] bg-white/[0.03] p-3">
                    <div className="text-[10px] uppercase tracking-wide text-white/50">
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
                              : "border border-white/[0.06] bg-white/[0.03] text-white/50"
                          }`}
                        >
                          <ProviderLogo provider={provider} />
                        </span>
                      ))}
                    </div>

                    <div className="mt-2 text-[10px] uppercase tracking-wide text-white/50">
                      Model
                    </div>
                    <div className="rounded border border-blue-400/30 bg-blue-500/10 px-2 py-1.5 text-[10px] text-blue-200">
                      sonnet-5
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[10px] text-white/55">
                      <span>Temperature</span>
                      <span>0.2</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                      <div className="h-full w-[20%] rounded-full bg-blue-400" />
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[10px] text-white/55">
                      <span>Max tokens</span>
                      <span>2000</span>
                    </div>
                  </div>

                  <div className="mt-3 rounded-lg border border-white/[0.06] bg-[#0b1019] p-3">
                    <div className="mb-1 text-[10px] font-medium text-white/70">
                      YAML Preview
                    </div>
                    <pre className="overflow-x-auto text-[9px] leading-relaxed text-white/55">
                      {`id: compliance-screening
llm:
  provider: anthropic
  model: sonnet-5
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
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-white/55">
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
            aria-hidden="true"
          >
            <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0f1520] px-4 py-3">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
                <div className="h-3 w-3 rounded-full bg-white/10" />
              </div>
              <div className="mx-auto flex items-center gap-2 rounded-md border border-white/[0.06] bg-white/[0.04] px-4 py-1 text-[11px] text-white/45">
                <Lock className="h-2.5 w-2.5" />
                app.polarisk.ai
              </div>
            </div>

            <div className="flex bg-[#0b1019]" style={{ minHeight: 440 }}>
              <div className="hidden w-52 border-r border-white/[0.05] bg-[#0d1422] p-4 md:block">
                <div className="mb-6 flex items-center gap-2">
                  <Image src={polariskLogo} alt="" width={20} height={20} className="h-5 w-5 object-contain" />
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
                    className={`mb-0.5 flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[12px] ${
                      i === 1
                        ? "bg-blue-600/20 text-blue-400"
                        : "text-white/45"
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
                    <div className="mt-0.5 text-[11px] text-white/45">
                      24 open - 8 high priority
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded border border-white/[0.06] bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/55">
                      Filter
                    </span>
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
                    className="flex items-center gap-3 rounded border-b border-white/[0.04] px-1 py-2.5"
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
                        <span className="font-mono text-[11px] text-white/45">
                          {alert.id}
                        </span>
                        <span className="truncate text-[11px] text-white/75">
                          {alert.name}
                        </span>
                      </div>
                      <div className="mt-0.5 text-[10px] text-white/45">
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
                    <div className="text-[11px] leading-relaxed text-white/55">
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

            <h3 className="text-gradient-brand">Un-Opinionated. Secure.</h3>
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
                <div className="text-[13px] leading-relaxed text-white/55">
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
              <p className="mb-8 text-[15px] leading-relaxed text-white/55">
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
                    <span className="text-[13px] text-white/70">{item}</span>
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
              aria-hidden="true"
            >
              <div className="flex items-center gap-2 border-b border-white/[0.05] px-4 py-3">
                <Brain className="h-3.5 w-3.5 text-blue-400" />
                <span className="text-[12px] font-medium text-white/70">
                  AI Copilot - ALT-2847
                </span>
                <span className="ml-auto h-2 w-2 rounded-full bg-green-400" />
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
                  <span className="flex-1 text-[11px] text-white/40">
                    Ask anything about this alert...
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 text-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.04] px-6 py-28">
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
            src="/polarisk-logo-white.svg"
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
            <span className="text-white">Stop drowning in alerts.</span>
            <br />
            <span className="text-gradient-brand-2">Start closing cases.</span>
          </h2>
          <p className="relative mx-auto mb-10 max-w-lg text-[15px] leading-relaxed text-white/55">
            Talk to us about becoming a design partner and help shape a
            platform built to catch financial crime faster, with less noise
            and more confidence.
          </p>
          <div className="relative flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-md bg-white px-8 py-3 text-[14px] font-semibold text-[#080c14] transition hover:bg-white/90"
            >
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:contact@polarisk.ai"
              className="text-[13px] text-white/55 transition-colors hover:text-white/80"
            >
              contact@polarisk.ai
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

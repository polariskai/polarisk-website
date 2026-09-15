"use client";

import { useEffect, useRef, useState } from "react";
import "./PatternStories.css";

const PAIRS = [
  {
    id: "passthrough",
    kind: "inout",
    pattern: "One in, one out",
    suspicious: {
      title: "Rapid pass-through",
      body: "In and out within 48 hours, no stated purpose.",
      labels: { in: "Receipt", hub: "Account", out: "Onward 48h" },
    },
    legitimate: {
      title: "Scheduled sweep",
      body: "Documented treasury sweep to a group account.",
      labels: { in: "Operating funds", hub: "Group account", out: "Treasury sweep" },
    },
  },
  {
    id: "split",
    kind: "split",
    pattern: "One in, several out",
    suspicious: {
      title: "Split onward transfers",
      body: "One receipt, several smaller payments.",
      labels: { in: "One receipt", hub: "Account", out: "Split legs" },
    },
    legitimate: {
      title: "Payroll run",
      body: "One funding transfer, recurring salary payments.",
      labels: { in: "Funding", hub: "Payroll account", out: "Salaries" },
    },
  },
  {
    id: "funnel",
    kind: "funnel",
    pattern: "Many in, one out",
    suspicious: {
      title: "Funnel account",
      body: "Many unrelated senders, one onward beneficiary.",
      labels: { in: "Unrelated senders", hub: "Account", out: "One beneficiary" },
    },
    legitimate: {
      title: "Collections account",
      body: "Many customer receipts, one operating sweep.",
      labels: { in: "Customers", hub: "Collections", out: "Operating sweep" },
    },
  },
  {
    id: "layered",
    kind: "layered",
    pattern: "A chain of accounts",
    suspicious: {
      title: "Layered chain",
      body: "Two intermediate accounts, no commercial link.",
      labels: { in: "Origin", hub: "No commercial link", out: "Exit" },
    },
    legitimate: {
      title: "Intra-group chain",
      body: "Entities under one mandate, consistent history.",
      labels: { in: "Group entity", hub: "One mandate", out: "Group entity" },
    },
  },
  {
    id: "roundtrip",
    kind: "roundtrip",
    pattern: "Funds go and return",
    suspicious: {
      title: "Round-trip return",
      body: "Funds return from the same counterparty.",
      labels: { in: "Out to counterparty", hub: "Account", out: "Same party back" },
    },
    legitimate: {
      title: "Returned settlement",
      body: "Failed trade settlement returned by the broker.",
      labels: { in: "To broker", hub: "Trade", out: "Failed settlement" },
    },
  },
];

function FlowGraph({ kind, tone }) {
  const stroke = tone === "alert" ? "#ef4444" : tone === "clear" ? "#059669" : "#3d5bff";
  const fill = tone === "alert" ? "#fef2f2" : tone === "clear" ? "#ecfdf5" : "#eef2ff";
  const packet = tone === "alert" ? "#ef4444" : tone === "clear" ? "#10b981" : "#3d5bff";

  return (
    <svg className="pattern-graph" viewBox="0 0 220 88" aria-hidden="true">
      {kind === "inout" && (
        <>
          <line className="pattern-edge" x1="28" y1="44" x2="92" y2="44" stroke={stroke} />
          <line className="pattern-edge" x1="128" y1="44" x2="192" y2="44" stroke={stroke} />
          <circle cx="22" cy="44" r="8" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <circle cx="110" cy="44" r="14" fill={fill} stroke={stroke} strokeWidth="1.8" />
          <circle cx="198" cy="44" r="8" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <circle className="pattern-packet" r="3.2" fill={packet}>
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M22 44 H198" />
          </circle>
        </>
      )}
      {kind === "split" && (
        <>
          <line className="pattern-edge" x1="28" y1="44" x2="92" y2="44" stroke={stroke} />
          <line className="pattern-edge" x1="124" y1="44" x2="188" y2="18" stroke={stroke} />
          <line className="pattern-edge" x1="124" y1="44" x2="192" y2="44" stroke={stroke} />
          <line className="pattern-edge" x1="124" y1="44" x2="188" y2="70" stroke={stroke} />
          <circle cx="22" cy="44" r="8" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <circle cx="110" cy="44" r="14" fill={fill} stroke={stroke} strokeWidth="1.8" />
          <circle cx="198" cy="18" r="7" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <circle cx="202" cy="44" r="7" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <circle cx="198" cy="70" r="7" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <circle className="pattern-packet" r="3" fill={packet}>
            <animateMotion dur="2.6s" repeatCount="indefinite" path="M22 44 H110" />
          </circle>
          <circle className="pattern-packet" r="2.4" fill={packet}>
            <animateMotion dur="2.2s" begin="0.4s" repeatCount="indefinite" path="M110 44 L198 18" />
          </circle>
        </>
      )}
      {kind === "funnel" && (
        <>
          <line className="pattern-edge" x1="32" y1="16" x2="92" y2="40" stroke={stroke} />
          <line className="pattern-edge" x1="28" y1="44" x2="92" y2="44" stroke={stroke} />
          <line className="pattern-edge" x1="32" y1="72" x2="92" y2="48" stroke={stroke} />
          <line className="pattern-edge" x1="128" y1="44" x2="192" y2="44" stroke={stroke} />
          <circle cx="24" cy="16" r="7" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <circle cx="22" cy="44" r="7" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <circle cx="24" cy="72" r="7" fill={fill} stroke={stroke} strokeWidth="1.5" />
          <circle cx="110" cy="44" r="14" fill={fill} stroke={stroke} strokeWidth="1.8" />
          <circle cx="198" cy="44" r="8" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <circle className="pattern-packet" r="2.4" fill={packet}>
            <animateMotion dur="2.3s" repeatCount="indefinite" path="M24 16 L110 44" />
          </circle>
          <circle className="pattern-packet" r="2.4" fill={packet}>
            <animateMotion dur="2.5s" begin="0.5s" repeatCount="indefinite" path="M22 44 H198" />
          </circle>
        </>
      )}
      {kind === "layered" && (
        <>
          <line className="pattern-edge" x1="28" y1="44" x2="68" y2="44" stroke={stroke} />
          <line className="pattern-edge" x1="84" y1="44" x2="124" y2="44" stroke={stroke} />
          <line className="pattern-edge" x1="140" y1="44" x2="180" y2="44" stroke={stroke} />
          <circle cx="20" cy="44" r="8" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <circle cx="76" cy="44" r="10" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <circle cx="132" cy="44" r="10" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <circle cx="190" cy="44" r="8" fill={fill} stroke={stroke} strokeWidth="1.6" />
          <circle className="pattern-packet" r="3" fill={packet}>
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M20 44 H190" />
          </circle>
        </>
      )}
      {kind === "roundtrip" && (
        <>
          <path
            className="pattern-edge"
            d="M70 44 C70 18 150 18 150 44"
            fill="none"
            stroke={stroke}
          />
          <path
            className="pattern-edge"
            d="M150 44 C150 70 70 70 70 44"
            fill="none"
            stroke={stroke}
          />
          <circle cx="70" cy="44" r="12" fill={fill} stroke={stroke} strokeWidth="1.8" />
          <circle cx="150" cy="44" r="12" fill={fill} stroke={stroke} strokeWidth="1.8" />
          <circle className="pattern-packet" r="3" fill={packet}>
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M70 44 C70 18 150 18 150 44 C150 70 70 70 70 44" />
          </circle>
        </>
      )}
    </svg>
  );
}

function StoryCard({ side, story, kind }) {
  const isAlert = side === "suspicious";
  return (
    <div className={`pattern-card pattern-card--${side}`}>
      <div className="pattern-card-kicker">
        {isAlert ? "Potentially suspicious" : "Legitimate lookalike"}
      </div>
      <FlowGraph kind={kind} tone={isAlert ? "alert" : "clear"} />
      <div className="pattern-card-labels">
        <span>{story.labels.in}</span>
        <span>{story.labels.hub}</span>
        <span>{story.labels.out}</span>
      </div>
      <h3>{story.title}</h3>
      <p>{story.body}</p>
      <span className={`pattern-verdict pattern-verdict--${isAlert ? "alert" : "clear"}`}>
        {isAlert ? "Alert" : "No alert"}
      </span>
    </div>
  );
}

export default function PatternStories() {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsActive(true);
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isActive || paused) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % PAIRS.length);
    }, 4800);
    return () => clearInterval(id);
  }, [isActive, paused]);

  const pair = PAIRS[index];

  return (
    <div
      ref={ref}
      className={`pattern-stories ${isActive ? "is-active" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pattern-stage" key={pair.id}>
        <StoryCard side="suspicious" story={pair.suspicious} kind={pair.kind} />

        <div className="pattern-axis">
          <span className="pattern-axis-label">What Polarisk distinguishes</span>
          <span className="pattern-axis-sig">{pair.pattern}</span>
          <div className="pattern-context">
            <span>Timing</span>
            <span>Relationships</span>
            <span>Purpose</span>
          </div>
          <span className="pattern-axis-note">
            Same signature. Polarisk writes both stories.
          </span>
        </div>

        <StoryCard side="legitimate" story={pair.legitimate} kind={pair.kind} />
      </div>

      <div className="pattern-tabs" role="tablist" aria-label="Matched pattern pairs">
        {PAIRS.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            className={`pattern-tab ${i === index ? "is-on" : ""}`}
            onClick={() => setIndex(i)}
          >
            {item.suspicious.title.split(" ")[0]}
            <span> / {item.legitimate.title.split(" ")[0]}</span>
          </button>
        ))}
      </div>

      <p className="pattern-footnote">
        Polarisk describes what happened, why it matters, and what would change
        the judgment.
        <span> Illustrative examples.</span>
      </p>
    </div>
  );
}

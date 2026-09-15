"use client";

import { useEffect, useRef, useState } from "react";
import {
  Database,
  FileText,
  GitCompare,
  ListChecks,
  PenLine,
  Waypoints,
} from "lucide-react";
import "./HandoffAnimation.css";

const STATIONS = [
  {
    persona: "Risk Owner",
    stage: "Risk Definition",
    body: "The concern in the owner's words",
    icon: FileText,
    delay: "0s",
  },
  {
    persona: "Polarisk",
    stage: "Scenario capture",
    body: "Variations and lookalikes, still in that language",
    icon: Waypoints,
    delay: "2.33s",
  },
  {
    persona: "Risk Owner",
    stage: "Review",
    body: "Expected outcomes signed before the run",
    icon: ListChecks,
    delay: "4.66s",
  },
  {
    persona: "Polarisk",
    stage: "Corresponding data",
    body: "Cases emitted in your schema",
    icon: Database,
    delay: "7s",
  },
  {
    persona: "Engineering",
    stage: "Build",
    body: "Control tested on the signed-off set",
    icon: PenLine,
    delay: "9.33s",
  },
  {
    persona: "Validation",
    stage: "Expected vs actual",
    body: "Mismatches tied to the original concern",
    icon: GitCompare,
    delay: "11.66s",
  },
];

const PIECE_DELAYS = [0, 3.5, 7, 10.5];

const METRICS = [
  {
    label: "Same reviewed set",
    body: "Every stage works from the signed-off scenarios, not a restated spec.",
  },
  {
    label: "Intent stays inspectable",
    body: "The original concern remains attached to the cases used in build and evaluation.",
  },
  {
    label: "Evidence at the gate",
    body: "Expected versus actual is recorded against the same reviewed examples.",
  },
];

function ShapeDocument() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6" y="3" width="12" height="18" rx="1.6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8.5 8h7M8.5 12h7M8.5 16h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Payload({ delay }) {
  return (
    <div
      className="handoff-payload"
      style={{ "--piece-delay": `${delay}s` }}
    >
      <div className="handoff-payload-body">
        <div className="handoff-shape handoff-shape--held">
          <ShapeDocument />
        </div>
      </div>
    </div>
  );
}

export default function HandoffAnimation() {
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
    <div
      ref={ref}
      className={`handoff-line ${isActive ? "is-active" : ""}`}
      aria-hidden="true"
    >
      <div className="handoff-track">
        <div className="handoff-wire" />

        <div className="handoff-payloads">
          {PIECE_DELAYS.map((delay) => (
            <Payload key={delay} delay={delay} />
          ))}
        </div>

        <div className="handoff-stations">
          {STATIONS.map((station) => {
            const Icon = station.icon;
            return (
              <div key={`${station.persona}-${station.stage}`} className="handoff-station">
                <div className="handoff-persona">{station.persona}</div>
                <div
                  className="handoff-node"
                  style={{ "--station-delay": station.delay }}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="handoff-stage">{station.stage}</div>
                <div className="handoff-stage-body">{station.body}</div>
              </div>
            );
          })}
        </div>
      </div>

      <p className="handoff-hold-line">
        Polarisk holds the reviewed scenario through every stage
      </p>

      <div className="handoff-metrics">
        {METRICS.map((metric) => (
          <div key={metric.label}>
            <div className="handoff-metric-label">{metric.label}</div>
            <div className="handoff-metric-body">{metric.body}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

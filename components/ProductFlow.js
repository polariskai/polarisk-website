"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CircleDollarSign,
  Clock,
  FileText,
  ShieldCheck,
  User,
} from "lucide-react";
import "./ProductFlow.css";

function TreeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="5.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="6" cy="18.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="18" cy="18.5" r="2.3" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 7.8v4.2M12 12 6.8 16.3M12 12l5.2 4.3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedSquaresIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.2" y="3.2" width="8.2" height="8.2" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <rect x="12.6" y="12.6" width="8.2" height="8.2" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M11.4 7.3h1.6A3.1 3.1 0 0 1 16.1 10.4v2.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const OUTCOMES = [
  {
    icon: Clock,
    title: "Faster development",
    body: "Less translation and rework",
  },
  {
    icon: CircleDollarSign,
    title: "Lower operating cost",
    body: "Less unnecessary review",
  },
  {
    icon: ShieldCheck,
    title: "Better risk coverage",
    body: "Catch relevant behaviours",
  },
];

function Packets({ delays }) {
  return delays.map((delay) => (
    <span
      key={delay}
      className="product-packet"
      style={{ "--packet-delay": delay }}
    />
  ));
}

export default function ProductFlow() {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsActive(true);
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`product-flow ${isActive ? "is-active" : ""}`}
      aria-hidden="true"
    >
      <div className="product-canvas">
        <div className="product-typologies">
          <div className="product-typologies-head">
            <span className="product-glyph product-glyph--doc">
              <FileText />
            </span>
            <div>
              <div className="product-entity-title">
                Regulatory-derived typologies &amp; emerging risks
              </div>
              <div className="product-entity-body">
                Structured risk knowledge informs scenario creation
              </div>
            </div>
          </div>
          <div className="product-join product-join--down">
            <ArrowDown />
            <Packets delays={["1.05s", "4.4s", "7.75s"]} />
          </div>
        </div>

        <div className="product-owner">
          <span
            className="product-glyph product-glyph--lg"
            style={{ "--station-delay": "0s" }}
          >
            <User />
          </span>
          <div className="product-entity-title">Risk control owner</div>
          <div className="product-entity-body">
            Risk intent in words and expert context
          </div>
        </div>

        <div className="product-join product-join--in">
          <ArrowRight />
          <Packets delays={["0.15s", "3.5s", "6.85s"]} />
        </div>

        <div className="product-box">
          <div className="product-box-label">Polarisk</div>
          <div className="product-studios">
            <div className="product-studio">
              <span className="product-num">1</span>
              <span
                className="product-glyph product-glyph--studio"
                style={{ "--station-delay": "1.4s" }}
              >
                <TreeIcon />
              </span>
              <div className="product-studio-title">Scenario Studio</div>
              <div className="product-studio-body">
                Review scenarios and expected outcomes
              </div>
            </div>

            <div className="product-join product-join--mid">
              <div className="product-join-label">
                Training and evaluation data
              </div>
              <div className="product-join-rail">
                <ArrowRight />
                <Packets delays={["2.2s", "5.55s", "8.9s"]} />
              </div>
            </div>

            <div className="product-studio">
              <span className="product-num">2</span>
              <span
                className="product-glyph product-glyph--studio"
                style={{ "--station-delay": "2.6s" }}
              >
                <LinkedSquaresIcon />
              </span>
              <div className="product-studio-title">Control Studio</div>
              <div className="product-studio-body">
                Build, evaluate and improve controls
              </div>
            </div>
          </div>
        </div>

        <div className="product-join product-join--out">
          <ArrowRight />
          <Packets delays={["3.3s", "6.65s", "10s"]} />
        </div>

        <div className="product-outcomes">
          <div className="product-outcomes-kicker">
            <span className="product-num">3</span>
            <span>Business outcomes</span>
          </div>
          <ul>
            {OUTCOMES.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="product-outcome"
                  style={{ "--hit-delay": `${4 + i * 0.45}s` }}
                >
                  <span className="product-outcome-icon">
                    <Icon />
                  </span>
                  <div>
                    <div className="product-outcome-title">{item.title}</div>
                    <div className="product-outcome-body">{item.body}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="product-findings">
          <div className="product-loop">
            <span className="product-loop-path" />
            <ArrowUp className="product-loop-head" />
            <Packets delays={["5.4s", "8.75s", "12.1s"]} />
          </div>
          <p>Findings guide scenario review and the next control improvement</p>
        </div>
      </div>
    </div>
  );
}

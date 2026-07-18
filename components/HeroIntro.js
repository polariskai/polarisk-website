"use client";

import { useEffect, useRef } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./HeroIntro.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jbmono",
});

const STAR_PATH =
  "M12 0 L14.6 17 L22 20 L14.6 23 L12 32 L9.4 23 L2 20 L9.4 17 Z";
const A_PATH = "M37 0 L74 72 L59.5 72 L37 23.5 L14.5 72 L0 72 Z";

const TXN_LABELS = [
  ["$95,000", "SGP"],
  ["€48,200", "CYP"],
  ["₹4.2Cr", "MUM"],
  ["$310,000", "ARE"],
  ["£72,500", "LDN"],
  ["$1.9M", "HKG"],
  ["CHF 210K", "ZRH"],
  ["$66,000", "PAN"],
];

function GlyphA({ className }) {
  return (
    <svg className={className || "glyphA"} viewBox="0 0 74 72" aria-hidden="true">
      <path d={A_PATH} fill="currentColor" />
    </svg>
  );
}

function Star({ className, fill = "#3D5BFF" }) {
  return (
    <svg className={className} viewBox="0 0 24 32" aria-hidden="true">
      <path d={STAR_PATH} fill={fill} />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg className="playIco" viewBox="0 0 12 12" aria-hidden="true">
      <path d="M2.8 1.6 L10.4 6 L2.8 10.4 Z" fill="currentColor" />
    </svg>
  );
}

export default function HeroIntro({ onLightChange }) {
  const rootRef = useRef(null);
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const copyRef = useRef(null);
  const wordmarkRef = useRef(null);
  const starRef = useRef(null);
  const monoProbeRef = useRef(null);
  const onLightChangeRef = useRef(onLightChange);
  onLightChangeRef.current = onLightChange;

  useEffect(() => {
    const root = rootRef.current;
    const hero = heroRef.current;
    const canvas = canvasRef.current;
    const copy = copyRef.current;
    const wordmark = wordmarkRef.current;
    const star = starRef.current;
    const monoProbe = monoProbeRef.current;
    if (!root || !hero || !canvas || !copy || !wordmark || !star) return;

    const ctx = canvas.getContext("2d");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W, H, DPR;
    let raf = null;
    let t0 = 0;
    let nodes = [];
    let edges = [];
    let txns = [];
    let monoFont = "11px monospace";
    const target = { x: 0, y: 0 };
    let locked = { mark: false, star: false, copy: false, light: false };
    let disposed = false;

    const shimmer = (t, ph) => 0.5 + 0.5 * Math.sin(t * 1.1 + ph);
    const ease = (v) => (v < 0 ? 0 : v > 1 ? 1 : v * v * (3 - 2 * v));

    function setLight(isLight) {
      if (isLight) root.classList.add("light");
      else root.classList.remove("light");
      onLightChangeRef.current?.(isLight);
    }

    function resize() {
      DPR = Math.min(devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }

    function measureTarget() {
      const hr = hero.getBoundingClientRect();
      const sr = star.getBoundingClientRect();
      target.x = sr.left - hr.left + sr.width / 2;
      target.y = sr.top - hr.top + sr.height / 2;
    }

    function build() {
      nodes = [];
      edges = [];
      txns = [];
      const cx = W / 2;
      const cy = H * 0.44;
      const S = Math.min(W, H);
      const AMB = W < 700 ? 52 : 96;
      for (let i = 0; i < AMB; i++) {
        const a = Math.random() * Math.PI * 2;
        const d = (0.06 + Math.random() * 0.5) * S;
        nodes.push({
          x: cx + Math.cos(a) * d,
          y: cy + Math.sin(a) * d * 0.7,
          r: 1 + Math.random() * 1.9,
          sanction: Math.random() < 0.05,
          dx: (Math.random() - 0.5) * 0.12,
          dy: (Math.random() - 0.5) * 0.12,
          jx: (Math.random() - 0.5) * 14,
          jy: (Math.random() - 0.5) * 14,
          delay: Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
          sx: 0,
          sy: 0,
        });
      }
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        const best = [];
        for (let j = 0; j < nodes.length; j++) {
          if (j === i) continue;
          best.push([(n1.x - nodes[j].x) ** 2 + (n1.y - nodes[j].y) ** 2, j]);
        }
        best.sort((a, b) => a[0] - b[0]);
        const k = 1 + Math.floor(Math.random() * 2);
        for (let m = 0; m < k; m++)
          edges.push({ a: i, b: best[m][1], born: 1.2 + Math.random() * 3 });
      }
      for (let i = 0; i < 8; i++) {
        const n = nodes[Math.floor(Math.random() * nodes.length)];
        txns.push({ x: n.x, y: n.y, l: TXN_LABELS[i], born: 0.15 + i * 0.28 });
      }
    }

    function frame(now) {
      if (!t0) t0 = now;
      const t = (now - t0) / 1000;
      ctx.clearRect(0, 0, W, H);

      const pFlag = ease((t - 4.2) / 1.4);
      const pConv = ease((t - 5.8) / 1.8);
      const pFade = ease((t - 6.6) / 1.0);
      const bloom = ease((t - 7.4) / 0.8);

      for (const n of nodes) {
        if (pConv <= 0) {
          n.x += n.dx;
          n.y += n.dy;
        } else if (!n.sx) {
          n.sx = n.x;
          n.sy = n.y;
        }
      }

      if (pFade < 1) {
        for (const e of edges) {
          const grow = ease((t - e.born) / 1.4);
          if (grow <= 0) continue;
          const a = nodes[e.a];
          const b = nodes[e.b];
          const mx = a.x + (b.x - a.x) * grow;
          const my = a.y + (b.y - a.y) * grow;
          const sh = shimmer(t, a.phase);
          ctx.strokeStyle = `rgba(125,155,210,${
            (0.12 + 0.06 * sh) * grow * (1 - pFade)
          })`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }

      for (const n of nodes) {
        const ap = ease((t - 0.7 - n.delay) / 1.6);
        if (ap <= 0) continue;
        let px = n.x;
        let py = n.y;
        let alpha;
        let col = "155,180,225";
        let r = n.r;
        if (pConv > 0) {
          const p = ease(Math.min(1, pConv * 1.15 - n.delay * 0.25));
          const jit = 1 - p;
          px = n.sx + (target.x - n.sx) * p + n.jx * jit;
          py = n.sy + (target.y - n.sy) * p + n.jy * jit;
          alpha = 0.55 * (1 - p * 0.9);
          col = "110,133,255";
          r = n.r * (1 - p * 0.5);
        } else if (n.sanction && pFlag > 0) {
          col = "224,101,79";
          alpha = 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(t * 2.4 + n.phase)) * pFlag;
        } else {
          alpha = (0.4 + 0.12 * shimmer(t, n.phase)) * ap;
        }
        if (alpha <= 0.01) continue;
        ctx.fillStyle = `rgba(${col},${alpha})`;
        ctx.beginPath();
        ctx.arc(px, py, r, 0, 7);
        ctx.fill();
      }

      if (pFade < 1) {
        ctx.font = monoFont;
        for (const x of txns) {
          const life = (t - x.born) / 2.2;
          if (life <= 0 || life >= 1) continue;
          const a = Math.sin(life * Math.PI) * (1 - pFade);
          if (a <= 0) continue;
          ctx.fillStyle = `rgba(110,133,255,${0.9 * a})`;
          ctx.fillText(x.l[0], x.x + 8, x.y - 4);
          ctx.fillStyle = `rgba(131,145,168,${0.85 * a})`;
          ctx.fillText(x.l[1], x.x + 8, x.y + 9);
        }
        if (pFlag > 0) {
          for (const n of nodes) {
            if (!n.sanction) continue;
            ctx.fillStyle = `rgba(224,101,79,${0.8 * pFlag * (1 - pFade)})`;
            ctx.fillText("SANCTIONED", n.x + 7, n.y - 6);
          }
        }
      }

      if (pConv > 0 && bloom < 1) {
        const rad = 60 + bloom * 160;
        const g = ctx.createRadialGradient(
          target.x,
          target.y,
          0,
          target.x,
          target.y,
          rad
        );
        g.addColorStop(
          0,
          `rgba(110,133,255,${(0.45 + 0.12 * shimmer(t, 0)) * pConv * (1 - bloom)})`
        );
        g.addColorStop(1, "rgba(110,133,255,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(target.x, target.y, rad, 0, 7);
        ctx.fill();
      }

      if (t > 7.6 && !locked.star) {
        locked.star = true;
        star.classList.add("on", "breathe");
      }
      if (t > 7.9 && !locked.mark) {
        locked.mark = true;
        wordmark.classList.add("on");
      }
      if (t > 8.3 && !locked.light) {
        locked.light = true;
        setLight(true);
      }
      if (t > 9.0 && !locked.copy) {
        locked.copy = true;
        copy.classList.add("on");
      }

      if (t < 10 || !locked.light) raf = requestAnimationFrame(frame);
    }

    function start() {
      if (disposed) return;
      cancelAnimationFrame(raf);
      t0 = 0;
      locked = { mark: false, star: false, copy: false, light: false };
      setLight(false);
      copy.classList.remove("on");
      wordmark.classList.remove("on");
      star.classList.remove("on", "breathe");
      if (monoProbe) {
        monoFont = `11px ${getComputedStyle(monoProbe).fontFamily}`;
      }
      resize();
      measureTarget();
      build();
      if (reduced) {
        locked = { mark: true, star: true, copy: true, light: true };
        star.classList.add("on");
        wordmark.classList.add("on");
        copy.classList.add("on");
        setLight(true);
        ctx.clearRect(0, 0, W, H);
        return;
      }
      raf = requestAnimationFrame(frame);
    }

    const onResize = () => {
      resize();
      measureTarget();
      build();
    };

    resize();
    addEventListener("resize", onResize);
    const replayBtn = hero.querySelector(".replay");
    replayBtn?.addEventListener("click", start);
    document.fonts.ready.then(start);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      removeEventListener("resize", onResize);
      replayBtn?.removeEventListener("click", start);
    };
  }, []);

  return (
    <div
      className={`hero-intro ${grotesk.variable} ${jbmono.variable}`}
      ref={rootRef}
    >
      <span ref={monoProbeRef} className="mono" aria-hidden="true" style={{ position: "absolute", visibility: "hidden" }}>
        .
      </span>
      <header className="hero" ref={heroRef}>
        <canvas className="net" ref={canvasRef} />
        <div className="hero-veil" />

        <div className="lockup">
          <div className="wordmark" ref={wordmarkRef}>
            {"POLARISK".split("").map((c, i) =>
              c === "A" ? (
                <span key={i} className="ch aChar">
                  <svg
                    ref={starRef}
                    className="polarStar"
                    viewBox="0 0 24 32"
                    aria-hidden="true"
                  >
                    <path d={STAR_PATH} fill="#3D5BFF" />
                  </svg>
                  <span
                    className="chInner"
                    style={{ transitionDelay: `${i * 0.06}s` }}
                  >
                    <GlyphA />
                  </span>
                </span>
              ) : (
                <span key={i} className="ch">
                  <span
                    className="chInner"
                    style={{ transitionDelay: `${i * 0.06}s` }}
                  >
                    {c}
                  </span>
                </span>
              )
            )}
          </div>
        </div>

        <div className="hero-copy" ref={copyRef}>
          <div className="kicker rise">Financial crime intelligence</div>
          <h1>
            <span className="l1 rise" style={{ transitionDelay: "0.25s" }}>
              Every financial crime leaves a pattern.
            </span>
            <span className="l2 rise" style={{ transitionDelay: "1s" }}>
              Polarisk finds these patterns.
            </span>
          </h1>
          <div className="hero-actions rise" style={{ transitionDelay: "1.8s" }}>
            <a className="btn btn-primary" href="/contact">
              <Star className="bstar" fill="#fff" />
              Book a demo
            </a>
            <a className="btn btn-ghost" href="#how-it-works">
              <PlayIcon />
              Watch an investigation
            </a>
          </div>
        </div>
        <button className="replay" type="button">
          ↻ REPLAY
        </button>
      </header>
    </div>
  );
}

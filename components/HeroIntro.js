"use client";

import { useState } from "react";
import { Space_Grotesk } from "next/font/google";
import PolariskWordmark from "./PolariskWordmark";
import "./HeroIntro.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
});

const FILM_SRC =
  "https://player.vimeo.com/video/1247664405?h=ccab9fae69&autopause=0&autoplay=1&player_id=0&app_id=58479&loop=1";

export default function HeroIntro() {
  const [filmPlaying, setFilmPlaying] = useState(false);

  return (
    <div className={`hero-intro ${grotesk.variable}`}>
      <header className="hero">
        <div className="hero-veil" />

        <div className="lockup">
          <div className="wordmark">
            <PolariskWordmark className="markSvg" label="Polarisk" />
          </div>
        </div>

        <div className="hero-copy">
          <h1>
            <span className="l1 rise">
              Find the Gaps
            </span>
            <span className="l2 rise">
              before Fraudsters do.
            </span>
          </h1>
          <p className="hero-sub rise">
            Independent Stress-testing of your Fraud and AML Controls
            against patterns you haven&apos;t seen yet
          </p>
          <div className="hero-actions rise">
            <a className="btn btn-primary" href="/contact">
              Book a demo
            </a>
            <a className="btn btn-ghost" href="https://scenariostudio.polarisk.ai">
              Scenario Studio
            </a>
          </div>
        </div>
      </header>

      <section className="hero-film" aria-label="Scenario Studio">
        <div className="hero-film-frame">
          {filmPlaying ? (
            <iframe
              src={FILM_SRC}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="scenario-studio-by-polarisk"
            />
          ) : (
            <button
              type="button"
              className="hero-film-play"
              aria-label="Play video"
              onClick={() => setFilmPlaying(true)}
            >
              <img src="/scenario-studio-poster.jpg" alt="" />
              <span className="hero-film-play-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="26" height="26">
                  <path d="M8 5.5v13l11-6.5-11-6.5z" fill="currentColor" />
                </svg>
              </span>
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

function parseValue(value) {
  const match = /^([\d.]+)(.*)$/.exec(value);
  if (!match) {
    return { number: 0, decimals: 0, suffix: value };
  }
  const [, numberPart, suffix] = match;
  const decimals = numberPart.includes(".") ? numberPart.split(".")[1].length : 0;
  return { number: parseFloat(numberPart), decimals, suffix };
}

export default function AnimatedCounter({ value, duration = 1100 }) {
  const { number, decimals, suffix } = parseValue(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) {
          return;
        }
        startedRef.current = true;

        if (prefersReducedMotion) {
          setDisplay(number);
          return;
        }

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Number((number * eased).toFixed(decimals)));
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [number, decimals, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

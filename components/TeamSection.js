"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const FOUNDERS = [
  {
    name: "Mohammed Roondiwala",
    role: "CEO · 17 yrs Goldman Sachs",
    photo: "/team/mohammed-roondiwala.jpg",
    featured: true,
    body: "Led AI research in compliance surveillance — Wall Street's first production agentic system for AML & insider trading surveillance.",
    footer: "Petabyte-scale search & knowledge graphs · 2 patents in filing",
  },
  {
    name: "Sumeet Sahu",
    role: "CTO · Amazon · Intuit · Microsoft",
    photo: "/team/sumeet-sahu.jpg",
    body: "Built Amazon's freight reconciliation systems — 1.5B transactions/day at 15K TPS. Shipped GenAI code-gen to 8,000 developers at Intuit. 1 patent.",
  },
];

const ADVISOR = {
  name: "Shobha Jagathpal",
  role: "Advisor · Former MD, Morgan Stanley",
  photo: "/team/shobha-jagathpal.jpg",
  body: "Former Managing Director at Morgan Stanley — Global Chief Controls Officer for Technology, India CISO, and Global Head of Enterprise Security Platforms.",
  footer: "25+ years cybersecurity · ISC2 India Task Force",
};

function PersonCard({ person, featured = false }) {
  return (
    <article
      className={`flex flex-col gap-4 rounded-xl border p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6 ${
        featured
          ? "border-[#3d5bff]/25 bg-[#3d5bff]/[0.04]"
          : "border-black/[0.08] bg-[#f3f5f9]/70"
      }`}
    >
      <Image
        src={person.photo}
        alt={person.name}
        width={featured ? 88 : 72}
        height={featured ? 88 : 72}
        className={`flex-shrink-0 rounded-full object-cover ${
          featured ? "h-[88px] w-[88px]" : "h-[72px] w-[72px]"
        }`}
      />
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
          <h3 className="text-[17px] font-semibold tracking-tight text-[#0d1326]">
            {person.name}
          </h3>
          <p className="text-[13px] font-medium text-[#3d5bff]">{person.role}</p>
        </div>
        <p
          className={`mt-2 leading-relaxed ${
            featured
              ? "text-[15px] font-medium text-[#0d1326]"
              : "text-[14px] text-[#5c6884]"
          }`}
        >
          {person.body}
        </p>
        {person.footer ? (
          <p className="mt-2 text-[13px] leading-relaxed text-[#5c6884]">
            {person.footer}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export default function TeamSection() {
  const featured = FOUNDERS.find((person) => person.featured);
  const otherFounders = FOUNDERS.filter((person) => !person.featured);

  return (
    <section id="company" className="border-t border-black/[0.06] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-12">
          <span className="text-[12px] font-medium uppercase tracking-widest text-[#3d5bff]">
            The company
          </span>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold tracking-tight text-[#0d1326]">
            Built by people who have shipped this before
          </h2>
          <p className="mt-3 text-[15px] italic text-[#5c6884]">
            Goldman Sachs · Amazon · Intuit · Morgan Stanley
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-4">
          <ScrollReveal>
            <PersonCard person={featured} featured />
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2">
            {otherFounders.map((person, index) => (
              <ScrollReveal key={person.name} delay={80 + index * 60}>
                <PersonCard person={person} />
              </ScrollReveal>
            ))}
            <ScrollReveal delay={140}>
              <PersonCard person={ADVISOR} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import { Reveal } from "./reveal";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "About | Polarisk",
  description: "From risk identified to control effectiveness. Polarisk builds Scenario Studio so risk owners stay close to modeling.",
  path: "/about/",
});

const FOUNDING_TEAM = [
  {
    name: "Mohammed Roondiwala",
    role: "Co-founder, CEO",
    photo: "/team/mohammed-roondiwala.jpg",
    blurb: "17 years at Goldman Sachs, building AI for AML and surveillance.",
  },
  {
    name: "Sumeet Sahu",
    role: "Co-founder, CTO",
    photo: "/team/sumeet-sahu.jpg",
    blurb: "Ex-Amazon, Intuit, and Microsoft. Shipped systems at 1.5B transactions a day.",
  },
  {
    name: "Srinath Warrier",
    role: "Co-founder, CPO",
    photo: "/team/srinath-warrier.jpg",
    blurb: "Ex-SAP. 14+ years building AI enterprise product and tech.",
  },
  {
    name: "Shobha Jagathpal",
    role: "Advisor",
    photo: "/team/shobha-jagathpal.jpg",
    blurb: "Former MD at Morgan Stanley. 25+ years in cybersecurity leadership.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader solid tone="light" />
      <main
        id="main-content"
        className="relative min-h-screen bg-[#f6f7fa] px-6 pb-28 pt-14 text-[#0d1326]"
      >
        <div className="relative mx-auto max-w-[720px]">
          <Reveal as="header" className="pb-20 pt-24">
            <h1 className="text-[clamp(2.4rem,5.5vw,3.75rem)] font-light leading-[1.12] tracking-tight">
              From risk identified to{" "}
              <em className="italic text-blue-400">control effectiveness.</em>
            </h1>
            <p className="mt-8 max-w-[540px] text-[18px] font-light leading-[1.7] text-[#5c6884]">
              Scenario-driven development brings risk owners closer to modeling,
              with expectations everyone can review.
            </p>
          </Reveal>

          <Reveal as="section" className="border-t border-black/[0.08] py-20">
            <h2 className="text-[clamp(1.6rem,3.4vw,2.25rem)] font-light leading-[1.25] tracking-tight">
              Making risk intent testable
            </h2>
            <div className="mt-10 space-y-6 text-[17px] font-light leading-[1.8] text-[#5c6884]">
              <p>
                Control effectiveness gets lost in handoffs. A risk starts with
                the person who owns it. By the time a control ships, the original
                intent has been restated through interpretation, specification,
                and build.
              </p>
              <p>
                Scenario Studio enables you to Develop by example with realistic, end-to-end multimodal scenarios. (text, documents, audio, images, and video generation) 
                Capture fraudulent cases and legitimate lookalikes, with customization for research and other domains.
                Control Studio (coming soon) is focused on scenario-driven control development and model risk review.
              </p>
              <p>Our core focus is financial crime. Scenario Studio also supports telecom and research teams with domain-specific generation needs.</p>
            </div>
          </Reveal>
        </div>

        <Reveal as="section" className="mx-auto max-w-6xl border-t border-black/[0.08] py-20">
          <h2 className="text-[clamp(1.6rem,3.4vw,2.25rem)] font-light leading-[1.25] tracking-tight">
            Founding team
          </h2>
          <p className="mt-4 max-w-xl text-[16px] font-light leading-[1.7] text-[#5c6884]">
            Built from years inside banking, AI, and enterprise security.
          </p>
          <ul className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4 lg:gap-12">
            {FOUNDING_TEAM.map((person) => (
              <li key={person.name} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                <Image
                  src={person.photo}
                  alt={person.name}
                  width={280}
                  height={280}
                  className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
                />
                <p className="mt-5 text-[16px] font-medium tracking-tight text-[#0d1326]">
                  {person.name}
                </p>
                <p className="mt-1 text-[14px] font-light text-[#5c6884]">
                  {person.role}
                </p>
                <p className="mt-3 max-w-[240px] text-[13px] font-light leading-relaxed text-[#5c6884]">
                  {person.blurb}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </main>
      <SiteFooter />
    </>
  );
}

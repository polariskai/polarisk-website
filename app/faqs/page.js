import Link from "next/link";
import MarketingPage from "../../components/MarketingPage";
import { faqGroups, STUDIO_URL } from "../../lib/site-content";
import { pageMetadata } from "../../lib/seo";
export const metadata = pageMetadata({
  title: "Frequently asked questions | Polarisk",
  description:
    "Get to know Polarisk, Scenario Studio, and the upcoming Control Studio. Explore our industries, customization, and scenario-driven financial crime development.",
  path: "/faqs/",
});
export default function FAQs() {
  return (
    <MarketingPage
      eyebrow="Get to know Polarisk"
      title="Frequently asked questions"
    >
      <div className="marketing-wrap faq-layout">
        <nav aria-label="FAQ categories">
          {faqGroups.map((g, i) => (
            <a key={g.title} href={`#category-${i}`}>
              {g.title}
            </a>
          ))}
        </nav>
        <div>
          {faqGroups.map((g, i) => (
            <section className="faq-group" id={`category-${i}`} key={g.title}>
              <h2>{g.title}</h2>
              {g.items.map(([q, a]) => (
                <details className="faq-item" key={q}>
                  <summary>
                    {q}
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>
                    {a
                      .split("scenariostudio.polarisk.ai")
                      .map((part, index) => (
                        <span key={index}>
                          {index > 0 && (
                            <a
                              href={STUDIO_URL}
                              className="text-[#304cd9] underline underline-offset-4"
                            >
                              scenariostudio.polarisk.ai
                            </a>
                          )}
                          {part}
                        </span>
                      ))}
                  </p>
                </details>
              ))}
            </section>
          ))}
          <div className="marketing-callout">
            <h2>Have a specific requirement?</h2>
            <p>Tell us what you want to generate, test, or improve.</p>
            <Link className="marketing-text-link" href="/contact">
              Talk to Polarisk →
            </Link>
          </div>
        </div>
      </div>
    </MarketingPage>
  );
}

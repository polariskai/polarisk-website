import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { STUDIO_URL } from "../lib/site-content";

export function Actions({ comingSoon = false }) {
  return (
    <div className="marketing-actions">
      {!comingSoon && (
        <a className="marketing-primary" href={STUDIO_URL}>
          Open Scenario Studio ↗
        </a>
      )}
      <Link className="marketing-secondary" href="/contact">
        {comingSoon ? "Discuss Control Studio" : "Discuss your requirements"} →
      </Link>
    </div>
  );
}
export function Cards({ cards }) {
  return (
    <div className="marketing-grid">
      {cards.map(([title, body], index) => (
        <article className="marketing-card" key={title}>
          <span className="marketing-index">0{index + 1}</span>
          <h3>{title}</h3>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}
export default function MarketingPage({
  eyebrow,
  status,
  title,
  description,
  children,
  comingSoon = false,
}) {
  return (
    <div className="marketing-page">
      <SiteHeader solid />
      <main id="main-content">
        <section className="marketing-hero marketing-wrap">
          <div className="flex items-center gap-2.5">
            <span className="marketing-eyebrow">{eyebrow}</span>
            {status && <span className="nav-status-tag">{status}</span>}
          </div>
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          <Actions comingSoon={comingSoon} />
        </section>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

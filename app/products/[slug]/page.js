import { notFound } from "next/navigation";
import Link from "next/link";
import MarketingPage, {
  Cards,
  Actions,
} from "../../../components/MarketingPage";
import { products } from "../../../lib/site-content";
import { pageMetadata } from "../../../lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return products.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  return p
    ? pageMetadata({
        title: `${p.name} | Polarisk`,
        description: p.description,
        path: `/products/${slug}/`,
      })
    : {};
}
export default async function ProductPage({ params }) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) notFound();
  const comingSoon = slug === "control-studio";
  return (
    <MarketingPage
      eyebrow={p.name}
      status={comingSoon ? p.status : undefined}
      title={p.title}
      description={p.description}
      comingSoon={comingSoon}
    >
      {!comingSoon && (
        <section className="marketing-section marketing-wrap">
          <span className="marketing-eyebrow">
            Why scenario generation matters
          </span>
          <h2 className="mt-4">Test the behaviour, not just the data.</h2>
          <p className="marketing-example">
            Historical data can miss emerging fraud, rare events, and the
            context that distinguishes suspicious activity from legitimate
            behaviour. Scenario generation lets teams define those situations
            deliberately: who is involved, what happens, in what order, and why
            it matters.
          </p>
          <Cards
            cards={[
              [
                "Capture the full case",
                "Connect actors, intent, events, and supporting evidence in a realistic scenario that experts can review.",
              ],
              [
                "Explore meaningful variations",
                "Change the timing, relationships, or circumstances. Include legitimate lookalikes to examine false positives as well as missed detections.",
              ],
              [
                "Develop by example",
                "Give developers, risk owners, and model reviewers concrete examples of the behaviour a system needs to understand.",
              ],
            ]}
          />
        </section>
      )}
      <section className="marketing-section marketing-wrap">
        <h2>
          {comingSoon
            ? "What we are building"
            : "Multiple modalities. A scenario as the starting point."}
        </h2>
        <Cards cards={p.cards} />
      </section>
      <section className="marketing-section marketing-wrap marketing-split">
        <div>
          <span className="marketing-eyebrow">
            {comingSoon ? "Planned workflow" : "From idea to evaluation"}
          </span>
          <h2>
            {comingSoon
              ? "Keep risk intent connected to the decision."
              : "Generate with a purpose. Review with context."}
          </h2>
        </div>
        <ol className="marketing-steps">
          {p.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
      <section className="marketing-section marketing-wrap">
        <div className="marketing-callout">
          <span className="marketing-eyebrow">
            {comingSoon ? "Coming soon" : "Customization on request"}
          </span>
          <h2>{p.heading}</h2>
          <p>{p.body}</p>
          <Actions comingSoon={comingSoon} />
        </div>
        <Link className="marketing-text-link" href="/faqs">
          Questions about products and availability? Read the FAQs →
        </Link>
      </section>
    </MarketingPage>
  );
}

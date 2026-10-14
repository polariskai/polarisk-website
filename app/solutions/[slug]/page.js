import { notFound } from "next/navigation";
import Link from "next/link";
import MarketingPage, {
  Cards,
  Actions,
} from "../../../components/MarketingPage";
import { solutions } from "../../../lib/site-content";
import { pageMetadata } from "../../../lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = solutions.find((p) => p.slug === slug);
  return p
    ? pageMetadata({
        title: `${p.name} | Polarisk`,
        description: p.description,
        path: `/solutions/${slug}/`,
      })
    : {};
}
export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const p = solutions.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <MarketingPage
      eyebrow={`Solutions / ${p.name}`}
      title={p.title}
      description={p.description}
    >
      <section className="marketing-section marketing-wrap">
        <h2>From a domain question to concrete examples.</h2>
        <Cards cards={p.cards} />
      </section>
      <section className="marketing-section marketing-wrap marketing-split">
        <div>
          <span className="marketing-eyebrow">Illustrative use case</span>
          <h2>Make the distinction testable.</h2>
        </div>
        <p className="marketing-example">{p.example}</p>
      </section>
      <section className="marketing-section marketing-wrap">
        <div className="marketing-callout">
          <span className="marketing-eyebrow">
            Start with your requirements
          </span>
          <h2>Bring the scenario you need to explore.</h2>
          <p>
            Scenario Studio is available now for synthetic text, audio, and
            video generation. We can customize it on request. Tell us what you
            need to generate and how you will evaluate it.
          </p>
          <Actions />
          <Link className="marketing-text-link" href="/products/control-studio">
            Explore Control Studio · Coming soon →
          </Link>
        </div>
      </section>
    </MarketingPage>
  );
}

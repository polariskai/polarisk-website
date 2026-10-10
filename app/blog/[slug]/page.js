import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import BlogIllustration from "../../../components/BlogIllustration";
import { posts, readingTime } from "../../../lib/blog";
import { absoluteUrl, pageMetadata } from "../../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) return {};
  const metadata = pageMetadata({ title: `${post.title} | Polarisk`, description: post.description, path: `/blog/${slug}/` });
  return {
    ...metadata,
    openGraph: { ...metadata.openGraph, type: "article", authors: [post.author] },
    twitter: { card: "summary_large_image", title: post.title, description: post.description },
  };
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: post.author, url: absoluteUrl("/") },
    publisher: { "@type": "Organization", name: "Polarisk", url: absoluteUrl("/") },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}/`),
  };

  return (
    <div className="blog-container">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <Link href="/blog/" className="blog-back"><ArrowLeft size={15} /> All articles</Link>
      <article>
        <header className="blog-article-header">
          <div className="blog-meta"><span>{post.category}</span><span>{readingTime(post)}</span></div>
          <h1>{post.title}</h1>
          <p className="blog-article-deck">{post.description}</p>
        </header>
        <figure className="blog-article-figure">
          <BlogIllustration />
          <figcaption>Reviewed scenarios carry risk intent from the original concern to control evidence.</figcaption>
        </figure>
        <div className="blog-reading-layout">
          <aside className="blog-toc">
            <nav aria-label="On this page">
              <p>On this page</p>
              {post.sections.map((section) => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
            </nav>
          </aside>
          <div className="blog-prose">
            {post.intro.map((paragraph, index) => <p key={paragraph} className={index === 0 ? "blog-opening" : undefined}>{paragraph}</p>)}
            {post.sections.map((section) => (
              <section key={section.id} aria-labelledby={section.id}>
                <h2 id={section.id}>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
            <p className="blog-note">{post.note}</p>
            <div className="blog-article-cta">
              <p className="blog-eyebrow">Polarisk Scenario Studio</p>
              <h2>Keep risk intent close to the work.</h2>
              <p>Turn risk concerns into reviewed scenarios, corresponding data, and evidence your team can use.</p>
              <Link href="/contact/" className="blog-read-link">Talk to our team <ArrowRight size={16} /></Link>
            </div>
            <Link href="/blog/" className="blog-back"><ArrowLeft size={15} /> Back to the blog</Link>
          </div>
        </div>
      </article>
    </div>
  );
}

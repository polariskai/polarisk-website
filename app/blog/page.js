import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogIllustration from "../../components/BlogIllustration";
import { posts, readingTime } from "../../lib/blog";
import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Blog | Polarisk",
  description: "Perspectives on financial crime controls, risk judgment, and scenario-driven development from Polarisk.",
  path: "/blog/",
});

export default function BlogPage() {
  return (
    <div className="blog-container">
      <header className="blog-index-header">
        <p className="blog-eyebrow">The Polarisk blog</p>
        <h1>Closer to the risk.</h1>
        <p className="blog-index-description">Ideas on financial crime controls, scenario-driven development, the judgment behind them, and building software that preserves it.</p>
      </header>
      <section className="blog-posts" aria-label="Latest articles">
        <div className="blog-section-label">Latest thinking <span>01 article</span></div>
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}/`} className="blog-featured">
              <BlogIllustration />
              <div className="blog-featured-copy">
                <div className="blog-meta"><span>{post.category}</span><span>{readingTime(post)}</span></div>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span className="blog-read-link">Read article <ArrowRight size={16} /></span>
              </div>
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

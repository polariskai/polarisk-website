import { SITE_URL } from "../lib/seo";
import { products, solutions } from "../lib/site-content";
import { posts } from "../lib/blog";

export const dynamic = "force-static";

export default function sitemap() {
  const now = new Date();
  return [
    {
      url: `${SITE_URL}/faqs/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...products.map((p) => ({
      url: `${SITE_URL}/products/${p.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    })),
    ...solutions.map((s) => ({
      url: `${SITE_URL}/solutions/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/careers/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/contact/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact/sales/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms/`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

export const SITE_URL = "https://polarisk.ai";

export const DEFAULT_DESCRIPTION =
  "Polarisk is the AI operating system for financial crime compliance. Reduce AML false positives, accelerate transaction monitoring investigations, and deliver regulator-ready outcomes.";

/** @param {string} path - e.g. "/about/" */
export function absoluteUrl(path) {
  return new URL(path, SITE_URL).toString();
}

/**
 * @param {object} opts
 * @param {string} opts.title
 * @param {string} opts.description
 * @param {string} opts.path - trailing slash, e.g. "/about/"
 */
export function pageMetadata({ title, description, path }) {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Polarisk",
      type: "website",
    },
  };
}

/** @param {string[]} [sameAs] */
export function buildStructuredData(sameAs = []) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Polarisk",
      url: SITE_URL,
      logo: absoluteUrl("/polarisk-logo.svg"),
      description: "AI operating system for financial crime compliance.",
      ...(sameAs.length > 0 ? { sameAs } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Polarisk",
      url: SITE_URL,
    },
  ];
}

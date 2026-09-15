export const SITE_URL = "https://polarisk.ai";

export const DEFAULT_DESCRIPTION =
  "Scenario Studio helps risk owners shape how financial crime controls are built and improved. Reviewed scenarios, expected responses, and evidence — fewer false positives, less review effort, better coverage.";

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
      legalName: "Polarisk.ai Private Limited",
      url: SITE_URL,
      logo: absoluteUrl("/polarisk-logo.svg"),
      description:
        "Scenario-driven control development for financial crime compliance.",
      founder: [
        {
          "@type": "Person",
          name: "Mohammed Roondiwala",
          jobTitle: "CEO",
        },
        {
          "@type": "Person",
          name: "Sumeet Sahu",
          jobTitle: "CTO",
        },
      ],
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

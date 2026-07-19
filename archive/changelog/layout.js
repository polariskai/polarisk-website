import { pageMetadata } from "../../lib/seo";

export const metadata = pageMetadata({
  title: "Changelog | Polarisk",
  description:
    "Product updates and release notes from Polarisk — AI compliance intelligence for financial crime teams.",
  path: "/changelog/",
});

export default function ChangelogLayout({ children }) {
  return children;
}

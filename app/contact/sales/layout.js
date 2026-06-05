import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata({
  title: "Contact sales | Polarisk",
  description:
    "Talk to the Polarisk team about pilots, enterprise needs, and product demos for AML and transaction monitoring.",
  path: "/contact/sales/",
});

export default function ContactSalesLayout({ children }) {
  return children;
}

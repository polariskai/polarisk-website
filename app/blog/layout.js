import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import "./blog.css";

export default function BlogLayout({ children }) {
  return (
    <>
      <SiteHeader solid tone="light" />
      <main id="main-content" className="blog-main">{children}</main>
      <SiteFooter />
    </>
  );
}

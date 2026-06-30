import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Changelog", href: "/changelog" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.05] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            src="/polarisk-logo.svg"
            alt="Polarisk"
            className="h-5 w-5 object-contain"
          />
          <span className="text-[13px] font-semibold text-white/60">Polarisk</span>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] text-white/40 transition-colors hover:text-white/70"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:contact@polarisk.ai"
            className="text-[12px] text-white/40 transition-colors hover:text-white/70"
          >
            contact@polarisk.ai
          </a>
        </div>
        <div className="text-[12px] text-white/25">
          © {new Date().getFullYear()} Polarisk, Inc.
        </div>
      </div>
    </footer>
  );
}

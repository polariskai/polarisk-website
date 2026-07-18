import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/[0.06] bg-[#f6f7fa] px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/polarisk-logo-black.svg"
            alt="Polarisk"
            width={20}
            height={20}
            className="h-5 w-5 object-contain"
          />
          <span className="text-[13px] font-semibold text-[#5c6884]">
            Polarisk
          </span>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[12px] text-[#5c6884] transition-colors hover:text-[#0d1326]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:contact@polarisk.ai"
            className="text-[12px] text-[#5c6884] transition-colors hover:text-[#0d1326]"
          >
            contact@polarisk.ai
          </a>
        </div>
        <div className="text-[12px] text-[#5c6884]/80">
          © {new Date().getFullYear()} Polarisk.ai Private Limited
        </div>
      </div>
    </footer>
  );
}

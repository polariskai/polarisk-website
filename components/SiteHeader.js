"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import PolariskWordmark from "./PolariskWordmark";

const NAV_LINKS = [{ label: "About", href: "/about" }];

export default function SiteHeader({ solid = false, tone = "light" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = tone === "dark";
  // Hide About / Contact / Contact us while the homepage intro is playing
  // (tone="dark"). Replay sets tone back to dark until light lands again.
  const showNav = !isDark;

  useEffect(() => {
    if (!showNav) setMenuOpen(false);
  }, [showNav]);

  const showBg = solid || scrolled || menuOpen;

  const headerBg = isDark
    ? showBg
      ? "border-b border-white/[0.06] bg-[#05070e]/90 backdrop-blur-xl"
      : ""
    : showBg
      ? "border-b border-black/[0.06] bg-[#f6f7fa]/90 backdrop-blur-xl"
      : "";

  const logoSrc = isDark
    ? "/polarisk-logo-white.svg"
    : "/polarisk-logo-black.svg";

  const wordmarkClass = isDark ? "text-white" : "text-[#0d1326]";

  const linkClass = isDark
    ? "text-[13px] text-white/50 transition-colors hover:text-white/90"
    : "text-[13px] text-[#5c6884] transition-colors hover:text-[#0d1326]";

  const ctaClass = isDark
    ? "hidden items-center gap-1.5 rounded-md border border-white/[0.12] px-4 py-1.5 text-[13px] text-white/60 transition-all hover:border-white/25 hover:text-white/90 md:flex"
    : "hidden items-center gap-1.5 rounded-md border border-[#0d1326]/12 px-4 py-1.5 text-[13px] text-[#5c6884] transition-all hover:border-[#3d5bff]/40 hover:text-[#0d1326] md:flex";

  const menuBtnClass = isDark
    ? "flex h-9 w-9 items-center justify-center rounded-md border border-white/[0.12] text-white/70 transition-colors hover:border-white/25 hover:text-white md:hidden"
    : "flex h-9 w-9 items-center justify-center rounded-md border border-[#0d1326]/12 text-[#5c6884] transition-colors hover:border-[#0d1326]/25 hover:text-[#0d1326] md:hidden";

  const mobileNavClass = isDark
    ? "border-t border-white/[0.06] bg-[#05070e]/95 backdrop-blur-xl md:hidden"
    : "border-t border-black/[0.06] bg-[#f6f7fa]/95 backdrop-blur-xl md:hidden";

  const mobileLinkClass = isDark
    ? "py-2.5 text-[14px] text-white/70 transition-colors hover:text-white"
    : "py-2.5 text-[14px] text-[#5c6884] transition-colors hover:text-[#0d1326]";

  const mobileCtaClass = isDark
    ? "mt-2 flex items-center justify-center gap-1.5 rounded-md border border-white/[0.12] px-4 py-2 text-[14px] text-white/70 transition-all hover:border-white/25 hover:text-white"
    : "mt-2 flex items-center justify-center gap-1.5 rounded-md border border-[#0d1326]/12 px-4 py-2 text-[14px] text-[#5c6884] transition-all hover:border-[#3d5bff]/40 hover:text-[#0d1326]";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src={logoSrc}
            alt="Polarisk"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
            priority
          />
          <PolariskWordmark className={`h-[12px] w-auto ${wordmarkClass}`} />
        </Link>

        {showNav ? (
          <div className="flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`hidden md:inline ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className={ctaClass}>
              Contact us
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={menuBtnClass}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        ) : (
          <div aria-hidden="true" />
        )}
      </div>

      {showNav && menuOpen && (
        <nav className={mobileNavClass}>
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={mobileLinkClass}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className={mobileCtaClass}
            >
              Contact us
              <ArrowRight className="h-4 w-4 opacity-60" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

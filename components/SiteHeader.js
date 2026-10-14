"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import PolariskWordmark from "./PolariskWordmark";
import { products, solutions, STUDIO_URL } from "../lib/site-content";
export default function SiteHeader({ tone = "light" }) {
  const [open, setOpen] = useState(null);
  const [mobile, setMobile] = useState(false);
  const ref = useRef(null);
  const path = usePathname();
  useEffect(() => {
    setOpen(null);
    setMobile(false);
  }, [path]);
  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(null);
        setMobile(false);
      }
    };
    const escape = (e) => {
      if (e.key === "Escape") {
        if (open)
          ref.current?.querySelector(`[aria-controls="nav-${open}"]`)?.focus();
        else ref.current?.querySelector(".nav-mobile-toggle")?.focus();
        setOpen(null);
        setMobile(false);
      }
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  const close = () => {
    setOpen(null);
    setMobile(false);
  };
  return (
    <header
      ref={ref}
      className={`site-nav ${tone === "dark" ? "site-nav-dark" : ""}`}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(null);
      }}
    >
      <div className="site-nav-inner">
        <Link href="/" className="nav-logo" onClick={close}>
          <Image
            src={
              tone === "dark"
                ? "/polarisk-logo-white.svg"
                : "/polarisk-logo-black.svg"
            }
            alt="Polarisk"
            width={28}
            height={28}
          />
          <PolariskWordmark className="h-[12px] w-auto" />
        </Link>
        <button
          className="nav-mobile-toggle"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          aria-controls="main-navigation"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`nav-links ${mobile ? "is-open" : ""}`}
        >
          {["Products", "Solutions"].map((label) => (
            <div className="nav-group" key={label}>
              <button
                aria-expanded={open === label}
                aria-controls={`nav-${label}`}
                onClick={() => setOpen(open === label ? null : label)}
              >
                {label}
                <ChevronDown size={13} />
              </button>
              {open === label && (
                <div
                  id={`nav-${label}`}
                  className={`nav-dropdown ${label === "Solutions" ? "nav-solutions" : ""}`}
                >
                  {label === "Products"
                    ? products.map((p) => (
                        <Link
                          href={`/products/${p.slug}`}
                          onClick={close}
                          key={p.slug}
                        >
                          <span className="nav-product-title">
                            <strong>{p.name}</strong>
                            {p.slug === "control-studio" && (
                              <span className="nav-status-tag">
                                Coming soon
                              </span>
                            )}
                          </span>
                          <small>
                            {p.slug === "scenario-studio"
                              ? "Develop by Example"
                              : "Control development & review"}
                          </small>
                        </Link>
                      ))
                    : ["By use case", "By industry"].map((group) => (
                        <div key={group}>
                          <span className="nav-heading">{group}</span>
                          {solutions
                            .filter((s) => s.group === group)
                            .map((s) => (
                              <Link
                                key={s.slug}
                                href={`/solutions/${s.slug}`}
                                onClick={close}
                              >
                                <strong>{s.name}</strong>
                                <small>{s.navDescription}</small>
                              </Link>
                            ))}
                        </div>
                      ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/faqs" onClick={close}>
            FAQs
          </Link>
          <Link href="/blog" onClick={close}>
            Blog
          </Link>
          <Link href="/contact" onClick={close}>
            Contact
          </Link>
          <Link href="/about" onClick={close}>
            About
          </Link>
          <a className="nav-launch" href={STUDIO_URL}>
            Open Scenario Studio ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

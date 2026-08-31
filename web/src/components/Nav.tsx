"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, CTA, FORM_ANCHOR } from "@/content/site";

/** Sticky nav: gains a shadow on scroll, collapses to a menu on mobile. */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on Escape so keyboard users are never trapped.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-ground/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_var(--color-line),0_6px_20px_rgb(0_0_0/0.04)]" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-[68px] max-w-6xl items-center gap-4 px-5"
      >
        <a href="#top" className="flex items-center gap-2.5 font-display font-bold">
          <span aria-hidden className="size-4 rounded-[5px] bg-accent" />
          VisiFrame
          <span className="rounded-full bg-accent-tint px-2 py-0.5 text-[10px] font-semibold tracking-wide text-accent-deep">
            Early access
          </span>
        </a>

        <div className="ml-auto hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <a href={FORM_ANCHOR} className="btn-primary">
            {CTA}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto flex size-10 items-center justify-center rounded-lg border border-line md:hidden"
        >
          <span aria-hidden className="text-lg leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ground md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-[15px] text-muted hover:bg-surface hover:text-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href={FORM_ANCHOR}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              {CTA}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

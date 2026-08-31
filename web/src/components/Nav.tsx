"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, CTA, FORM_ANCHOR } from "@/content/site";

/**
 * Sticky nav, matching the prototype exactly:
 * mobile below 860px, shadow appears once scrollY > 10.
 */
export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      const m = window.innerWidth < 860;
      setIsMobile(m);
      if (!m) setMenuOpen(false);
    };
    const onScroll = () => setScrolled(window.scrollY > 10);
    onResize();
    onScroll();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-line bg-nav backdrop-blur-[8px] transition-shadow duration-300"
      style={{ boxShadow: scrolled ? "0 4px 20px -8px oklch(19% 0.008 75 / 0.15)" : "none" }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-8 py-[18px]">
        <div className="flex items-center gap-2.5">
          <a
            href="#top"
            className="flex items-center gap-2 font-display text-[20px] font-bold text-ink"
          >
            <span
              aria-hidden
              className="inline-block size-5 rounded-[6px] bg-accent"
              style={{ transform: "rotate(45deg)" }}
            />
            VisiFrame
          </a>
          <span className="rounded-full bg-accent-tint px-2.5 py-1 text-[11px] font-bold tracking-[0.02em] text-accent-deep">
            Early access
          </span>
        </div>

        {isMobile ? (
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex size-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border border-line bg-transparent"
          >
            <span aria-hidden className="h-0.5 w-[18px] rounded-sm bg-ink" />
            <span aria-hidden className="h-0.5 w-[18px] rounded-sm bg-ink" />
          </button>
        ) : (
          <>
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="text-[15px] font-medium text-ink">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3.5">
              <a
                href={FORM_ANCHOR}
                className="rounded-lg bg-accent px-5 py-[11px] text-[15px] font-semibold text-white"
              >
                {CTA}
              </a>
            </div>
          </>
        )}
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="flex flex-col gap-1 border-t border-line px-6 pt-2 pb-6"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="px-2 py-3 text-[16px] font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
          <a
            href={FORM_ANCHOR}
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-lg bg-accent px-4 py-[13px] text-center text-[16px] font-semibold text-white"
          >
            {CTA}
          </a>
        </div>
      )}
    </nav>
  );
}

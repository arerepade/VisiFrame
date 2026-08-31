import { HERO, CTA, FORM_ANCHOR } from "@/content/site";
import HeroDiagram from "./HeroDiagram";

/** Hero — the prototype's <header id="top">. Not a sticky bar; that is Nav. */
export default function Hero() {
  return (
    <header
      id="top"
      className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-14 px-8 pt-[88px] pb-24"
    >
      <div className="min-w-[320px] flex-[1_1_460px]">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-tint px-3.5 py-[7px] text-[13px] font-semibold text-accent-deep">
          <span aria-hidden className="size-1.5 rounded-full bg-accent" />
          {HERO.eyebrow}
        </div>

        <h1 className="m-0 mb-6 font-display text-[clamp(38px,5vw,58px)] font-bold leading-[1.08] tracking-[-0.01em]">
          {HERO.heading}
        </h1>

        <p className="m-0 mb-9 max-w-[480px] text-[19px] leading-[1.6] text-muted">
          {HERO.body}
        </p>

        <div className="flex flex-wrap gap-3.5">
          <a
            href={FORM_ANCHOR}
            className="rounded-[10px] bg-accent px-[26px] py-[15px] text-base font-semibold text-white"
            style={{ boxShadow: "0 8px 20px -6px oklch(62% 0.2 38 / 0.5)" }}
          >
            {CTA}
          </a>
          <a
            href="#examples"
            className="rounded-[10px] border border-line bg-white px-[26px] py-[15px] text-base font-semibold text-ink"
          >
            See Examples
          </a>
        </div>

        <p className="mt-4 text-[13.5px] text-note">{HERO.note}</p>
      </div>

      <HeroDiagram />
    </header>
  );
}

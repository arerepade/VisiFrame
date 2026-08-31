import { HERO, CTA, FORM_ANCHOR } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="bg-surface-warm">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-tint px-3 py-1.5 text-xs font-semibold text-accent-deep">
            <span aria-hidden className="size-1.5 rounded-full bg-accent" />
            {HERO.eyebrow}
          </span>

          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            {HERO.heading}
          </h1>

          <p className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted">
            {HERO.body}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={FORM_ANCHOR} className="btn-primary">
              {CTA}
            </a>
            <a href="#examples" className="btn-secondary">
              See Examples
            </a>
          </div>

          <p className="mt-5 text-xs text-faint">{HERO.note}</p>
        </div>

        <ReferenceDiagram />
      </div>
    </section>
  );
}

/**
 * The "references in, three directions out" diagram. Built in markup rather
 * than as an image so it stays sharp, themable and needs no asset.
 */
function ReferenceDiagram() {
  return (
    <div className="flex items-center justify-center gap-4" aria-hidden>
      <div className="flex flex-col gap-3">
        <Frame tone="cool" />
        <Frame tone="warm" />
        <p className="max-w-[9rem] text-center text-[10px] leading-tight text-faint">
          <span className="block font-semibold text-muted">Websites you admire</span>
          the style you&rsquo;re inspired by
        </p>
      </div>

      <div className="flex flex-col items-center gap-1 text-faint">
        <span className="text-lg">→</span>
        <span className="text-[9px] font-semibold uppercase tracking-widest">VisiFrame</span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="rounded-lg border-2 border-accent bg-white p-2 shadow-sm">
          <Bar w="w-16" tone="accent" />
          <Bar w="w-10" tone="accent" />
        </div>
        <Frame tone="plain" />
        <Frame tone="plain" />
        <p className="max-w-[9rem] text-center text-[10px] leading-tight text-faint">
          <span className="block font-semibold text-muted">Your new homepage, 3 ways</span>
          <span className="text-accent-deep">original — never copied</span>
        </p>
      </div>
    </div>
  );
}

function Frame({ tone }: { tone: "cool" | "warm" | "plain" }) {
  const fill =
    tone === "cool" ? "bg-[#DCE7F5]" : tone === "warm" ? "bg-accent-tint" : "bg-line-soft";
  return (
    <div className="rounded-lg border border-line bg-white p-2">
      <div className={`h-8 w-24 rounded ${fill}`} />
    </div>
  );
}

function Bar({ w, tone }: { w: string; tone: "accent" }) {
  return <div className={`mb-1 h-1.5 rounded ${w} ${tone === "accent" ? "bg-accent/70" : ""}`} />;
}

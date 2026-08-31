import { PLANS, PRICING_NOTE, CTA, FORM_ANCHOR } from "@/content/site";
import Reveal from "./Reveal";

const [free, creator] = PLANS;

export default function Pricing() {
  return (
    <Reveal id="pricing" className="px-8 py-24">
      <div className="mx-auto max-w-[880px]">
        <p className="m-0 mb-3 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-accent-deep">
          Pricing
        </p>
        <h2 className="m-0 mb-3.5 text-center font-display text-[clamp(28px,3.4vw,38px)] font-bold">
          Simple pricing for regular use.
        </h2>

        <div className="mb-[18px] text-center">
          <span className="inline-block rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-bold text-note">
            {PRICING_NOTE.badge}
          </span>
        </div>

        <p className="m-0 mb-14 text-center text-base text-muted">{PRICING_NOTE.body}</p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-6">
          {/* Free Preview — light card */}
          <div className="rounded-2xl border border-line bg-white p-9">
            <p className="m-0 mb-1.5 font-display text-[18px] font-bold">{free.name}</p>
            <p className="m-0 mb-1.5 font-display text-[34px] font-bold">{free.price}</p>
            <p className="m-0 mb-5 text-[13px] text-note">{free.blurb}</p>

            <div className="mb-7 flex flex-col gap-3">
              {free.features.map((f) => (
                <p
                  key={f.text}
                  className="m-0 text-[14.5px]"
                  style={{ color: f.ok ? "oklch(47% 0.01 75)" : "oklch(65% 0.01 75)" }}
                >
                  {f.ok ? "✓" : "✕"} {f.text}
                </p>
              ))}
            </div>

            <a
              href={FORM_ANCHOR}
              className="block rounded-[9px] border border-line px-0 py-[13px] text-center text-[15px] font-semibold text-ink"
            >
              {CTA}
            </a>
          </div>

          {/* Creator — dark card with a notched ribbon */}
          <div className="relative rounded-2xl bg-ink p-9 text-white">
            <div
              className="absolute top-0 right-7 bg-accent px-3.5 pt-2 pb-2.5 text-[11px] font-bold tracking-[0.02em] text-white"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 82%, 0 100%)" }}
            >
              RECOMMENDED
            </div>

            <p className="m-0 mb-1.5 font-display text-[18px] font-bold">{creator.name}</p>
            <p className="m-0 mb-1.5 font-display text-[34px] font-bold">
              {creator.price}
              <span
                className="text-[15px] font-medium"
                style={{ color: "oklch(75% 0.01 75)" }}
              >
                {creator.period}
              </span>
            </p>
            <p className="m-0 mb-5 text-[13px]" style={{ color: "oklch(75% 0.01 75)" }}>
              {creator.blurb}
            </p>

            <div className="mb-5 flex flex-col gap-3">
              {creator.features.map((f) => (
                <p
                  key={f.text}
                  className="m-0 text-[14.5px]"
                  style={{ color: f.ok === "soon" ? "oklch(70% 0.01 75)" : "oklch(85% 0.01 75)" }}
                >
                  {f.ok === "soon" ? "◦" : "✓"} {f.text}
                  {f.ok === "soon" && (
                    <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold whitespace-nowrap">
                      Coming soon
                    </span>
                  )}
                </p>
              ))}
            </div>

            <a
              href={FORM_ANCHOR}
              className="block w-full rounded-[9px] bg-accent px-0 py-[13px] text-center text-[15px] font-semibold text-white"
            >
              {CTA}
            </a>
          </div>
        </div>

        <p
          className="m-0 mt-6 text-center text-[12.5px]"
          style={{ color: "oklch(52% 0.01 75)" }}
        >
          {PRICING_NOTE.footnote}
        </p>
      </div>
    </Reveal>
  );
}

"use client";

import { useEffect, useState } from "react";
import { CTA, FORM_ANCHOR } from "@/content/site";
import PersonalBrand from "./templates/PersonalBrand";
import BeautyWellness from "./templates/BeautyWellness";
import Restaurant from "./templates/Restaurant";
import SaasLanding from "./templates/SaasLanding";
import FitnessStudio from "./templates/FitnessStudio";

/**
 * The auto-cycling template stack. Layering, opacity, scale and rotation all
 * follow the prototype's arithmetic exactly — see the position/dir maths below.
 * Advances every 2400ms.
 */

const TEMPLATES = [
  { name: "Personal Brand", hue: 38, Body: PersonalBrand },
  { name: "Beauty & Wellness", hue: 340, Body: BeautyWellness },
  { name: "Restaurant & Café", hue: 95, Body: Restaurant },
  { name: "SaaS Landing Page", hue: 250, Body: SaasLanding },
  { name: "Fitness Studio", hue: 165, Body: FitnessStudio },
] as const;

const CYCLE_MS = 2400;

export default function PreviewDemo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % TEMPLATES.length), CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="preview-demo" data-reveal="" data-revealed="" className="px-8 py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="m-0 mb-3 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-accent-deep">
          Try It
        </p>
        <h2 className="m-0 mb-12 text-center font-display text-[clamp(28px,3.4vw,38px)] font-bold">
          See VisiFrame turn references into designs.
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-14">
          <div className="relative h-[520px] w-[460px] max-w-full shrink-0">
            {TEMPLATES.map((t, i) => {
              const position = (i - index + TEMPLATES.length) % TEMPLATES.length;
              const dir = position % 2 === 0 ? -1 : 1;
              const isFront = position === 0;
              const { Body } = t;

              return (
                <div
                  key={t.name}
                  aria-hidden={!isFront}
                  className="absolute inset-0 overflow-hidden rounded-[14px] border border-line bg-white"
                  style={{
                    zIndex: 50 - position,
                    opacity: position < 4 ? 1 - position * 0.13 : 0,
                    transform: `translateY(${position * 14}px) scale(${
                      1 - position * 0.055
                    }) rotate(${dir * position * 1.6}deg)`,
                    boxShadow: isFront
                      ? "0 30px 60px -18px oklch(62% 0.2 38 / 0.35)"
                      : "0 24px 55px -22px oklch(19% 0.008 75 / 0.4)",
                    transition:
                      "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease, box-shadow 0.7s ease",
                  }}
                >
                  <div className="flex items-center gap-1.5 border-b border-line bg-surface px-3.5 py-[9px]">
                    <Dot color="oklch(75% 0.1 25)" />
                    <Dot color="oklch(80% 0.12 90)" />
                    <Dot color="oklch(75% 0.13 145)" />
                    <span className="ml-1.5 text-[10px] text-muted">{t.name}</span>
                    {isFront && (
                      <span className="ml-auto rounded-full bg-accent-tint px-2 py-[3px] text-[8.5px] font-bold text-accent-deep">
                        Ready to customize
                      </span>
                    )}
                  </div>

                  {isFront ? (
                    <Body />
                  ) : (
                    <div
                      className="flex items-center justify-center overflow-hidden"
                      style={{
                        height: "calc(100% - 33px)",
                        background: `oklch(93% 0.05 ${t.hue})`,
                      }}
                    >
                      <div
                        className="h-2 w-[60%] rounded-[3px]"
                        style={{ background: `oklch(80% 0.1 ${t.hue})` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="max-w-[320px]">
            <p className="m-0 mb-3 text-[13px] font-bold uppercase tracking-[0.05em] text-accent-deep">
              Directions generated from scratch, every time
            </p>
            <p className="m-0 mb-5 text-[17px] leading-[1.55] text-ink">
              Every project is designed fresh from your references and content — personal
              brands, beauty studios, restaurants, SaaS products, fitness studios and
              beyond. Nothing is pulled from a template library. Used by developers
              pitching a first draft, designers exploring directions, and founders shaping
              their own brand.
            </p>

            <div className="mb-[22px] flex items-center gap-[18px]">
              <Stat value="24 hrs" label="to your three designs" />
              <div className="h-[30px] w-px bg-line" />
              <Stat value="100%" label="original output" />
            </div>

            <a
              href={FORM_ANCHOR}
              className="inline-block rounded-[9px] bg-ink px-5 py-3 text-[14.5px] font-semibold text-white"
            >
              {CTA}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dot({ color }: { color: string }) {
  return <span aria-hidden className="size-2 rounded-full" style={{ background: color }} />;
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="m-0 font-display text-[20px] font-bold text-ink">{value}</p>
      <p className="m-0 mt-0.5 text-[11px] text-muted">{label}</p>
    </div>
  );
}

"use client";

import { useState } from "react";
import { FAQS } from "@/content/site";

export default function Faq() {
  // Single-open accordion; null means all collapsed.
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white">
      <div className="section max-w-3xl">
        <p className="eyebrow text-center">FAQ</p>
        <h2 className="h2 mt-3 text-center">Common questions.</h2>

        <dl className="mt-12 divide-y divide-line border-y border-line">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-[15px] font-bold">{f.q}</span>
                    <span
                      aria-hidden
                      className={`shrink-0 text-muted transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      ＋
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-${i}`}
                  hidden={!isOpen}
                  className="max-w-[68ch] pb-6 text-sm leading-relaxed text-muted"
                >
                  {f.a}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

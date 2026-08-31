"use client";

import { useState } from "react";
import { FAQS } from "@/content/site";

/** Single-open accordion. The prototype opens the first item by default. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      data-reveal=""
      data-revealed=""
      className="border-y border-line bg-white px-8 py-24"
    >
      <div className="mx-auto max-w-[760px]">
        <p className="m-0 mb-3 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-accent-deep">
          FAQ
        </p>
        <h2 className="m-0 mb-12 text-center font-display text-[clamp(28px,3.4vw,38px)] font-bold">
          Common questions.
        </h2>

        <div className="flex flex-col">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-line py-5">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 border-none bg-transparent p-0 text-left font-sans"
                >
                  <span className="text-base font-semibold text-ink">{f.q}</span>
                  <span aria-hidden className="shrink-0 text-[20px] text-accent">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p
                    id={`faq-${i}`}
                    className="m-0 mt-3.5 max-w-[640px] text-[15px] leading-[1.6] text-muted"
                  >
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

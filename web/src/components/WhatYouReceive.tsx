import { DELIVERABLES } from "@/content/site";
import Reveal from "./Reveal";

export default function WhatYouReceive() {
  return (
    <Reveal id="receive" className="border-y border-line bg-white px-8 py-24">
      <div className="mx-auto max-w-[1120px]">
        <p className="m-0 mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-accent-deep">
          What You Receive
        </p>
        <h2 className="m-0 mb-14 max-w-[640px] font-display text-[clamp(28px,3.4vw,38px)] font-bold">
          Everything you need to ship it.
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
          {DELIVERABLES.map((d) => (
            <div key={d.title} className="flex gap-3.5">
              <span
                aria-hidden
                className="mt-2 size-2 shrink-0 rounded-full bg-accent"
              />
              <div>
                <p className="m-0 mb-1 text-[15.5px] font-semibold">{d.title}</p>
                <p className="m-0 text-sm leading-[1.5] text-muted">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

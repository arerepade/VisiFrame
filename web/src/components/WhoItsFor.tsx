import type { CSSProperties } from "react";
import { AUDIENCES } from "@/content/site";
import Reveal from "./Reveal";

export default function WhoItsFor() {
  return (
    <Reveal id="audience" className="px-8 py-24">
      <div className="mx-auto max-w-[1160px]">
        <p className="m-0 mb-3 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-accent-deep">
          Who It&rsquo;s For
        </p>
        <h2 className="m-0 mb-3.5 text-center font-display text-[clamp(28px,3.4vw,38px)] font-bold">
          Built for anyone turning inspiration into a website.
        </h2>
        <p className="mx-auto mb-14 max-w-[600px] text-center text-base text-muted">
          You already know which websites you like — you just need help turning that
          inspiration into an original, development-ready design.
        </p>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {AUDIENCES.map((a) => (
            <div
              key={a.title}
              className="flex flex-col gap-3 rounded-[14px] border border-line bg-white p-[22px]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="relative size-[34px] shrink-0 rounded-[9px]"
                  style={{ background: `oklch(93% 0.05 ${a.hue})` }}
                >
                  <span aria-hidden style={{ position: "absolute", ...(a.icon as CSSProperties) }} />
                </div>
                <p className="m-0 font-display text-[14.5px] font-semibold">{a.title}</p>
              </div>
              <p className="m-0 text-[13.5px] leading-[1.55] text-muted">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

import { STEPS } from "@/content/site";
import Reveal from "./Reveal";

export default function HowItWorks() {
  return (
    <Reveal
      id="how-it-works"
      className="border-y border-line bg-white px-8 py-24"
    >
      <div className="mx-auto max-w-[1120px]">
        <p className="m-0 mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-accent-deep">
          How It Works
        </p>
        <h2 className="m-0 mb-14 max-w-[640px] font-display text-[clamp(28px,3.4vw,38px)] font-bold">
          From inspiration to a finished direction, in three steps.
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">
          {STEPS.map((s) => (
            <div key={s.n}>
              <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-accent-tint font-display text-[18px] font-bold text-accent-deep">
                {s.n}
              </div>
              <h3 className="m-0 mb-2.5 font-display text-[20px] font-semibold">
                {s.title}
              </h3>
              <p className="m-0 text-[15.5px] leading-[1.6] text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

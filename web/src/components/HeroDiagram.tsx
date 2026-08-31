/**
 * The "references in → three directions out" diagram from the prototype hero.
 * Every dimension, colour and bar width is taken from the source markup.
 */
export default function HeroDiagram() {
  return (
    <div className="flex min-w-[320px] flex-[1_1_460px] flex-wrap items-center justify-center gap-[18px]">
      {/* Left: two reference cards */}
      <div className="flex flex-col gap-3.5">
        <RefCard tint="oklch(91% 0.05 250)" w1="70%" w2="45%" />
        <RefCard tint="oklch(90% 0.05 20)" w1="60%" w2="40%" />
        <p className="m-0 mb-0.5 text-center text-[11.5px] font-semibold text-ink">
          Websites you admire
        </p>
        <p className="m-0 text-center text-[10.5px] text-faint">
          the style you&rsquo;re inspired by
        </p>
      </div>

      {/* Middle: arrow */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-[22px] font-bold text-accent">&#8594;</div>
        <span className="text-[9px] font-bold uppercase tracking-[0.04em] whitespace-nowrap text-accent-deep">
          VisiFrame
        </span>
      </div>

      {/* Right: the generated direction, highlighted, plus two more */}
      <div className="flex flex-col gap-2.5">
        <div
          className="w-[168px] overflow-hidden rounded-[10px] border-2 border-accent bg-white"
          style={{ boxShadow: "0 10px 24px -10px oklch(62% 0.2 38 / 0.4)" }}
        >
          <div className="flex items-center gap-1 border-b border-line-warm px-2.5 py-[7px]">
            <span
              aria-hidden
              className="size-[5px] rounded-full"
              style={{ background: "oklch(70% 0.16 38)" }}
            />
            <span
              aria-hidden
              className="ml-[3px] h-1 w-11 rounded-sm"
              style={{ background: "oklch(90% 0.03 38)" }}
            />
          </div>
          <div className="flex flex-col gap-[5px] px-2.5 pt-2.5 pb-3">
            <div
              className="h-[5px] w-[75%] rounded-sm"
              style={{ background: "oklch(25% 0.02 38)" }}
            />
            <div
              className="h-1 w-1/2 rounded-sm"
              style={{ background: "oklch(80% 0.02 75)" }}
            />
            <div className="mt-1 flex gap-1">
              <div className="h-6 flex-1 rounded bg-accent-tint" />
              <div className="h-6 flex-1 rounded bg-accent-tint" />
            </div>
          </div>
        </div>

        <PlainCard w1="65%" w2="42%" />
        <PlainCard w1="55%" w2="38%" />

        <p className="m-0 mb-0.5 text-center text-[11.5px] font-semibold text-ink">
          Your new homepage, 3 ways
        </p>
        <p className="m-0 text-center text-[10.5px] font-semibold text-accent-deep">
          original — never copied
        </p>
      </div>
    </div>
  );
}

function RefCard({ tint, w1, w2 }: { tint: string; w1: string; w2: string }) {
  return (
    <div
      className="w-[148px] overflow-hidden rounded-[10px] border border-line bg-white"
      style={{ boxShadow: "0 8px 20px -10px oklch(19% 0.008 75 / 0.25)" }}
    >
      <CardBar />
      <div className="flex flex-col gap-1.5 p-2.5">
        <div className="h-[30px] rounded-[5px]" style={{ background: tint }} />
        <div
          className="h-1 rounded-sm"
          style={{ width: w1, background: "oklch(90% 0.012 75)" }}
        />
        <div
          className="h-1 rounded-sm"
          style={{ width: w2, background: "oklch(93% 0.01 75)" }}
        />
      </div>
    </div>
  );
}

function PlainCard({ w1, w2 }: { w1: string; w2: string }) {
  return (
    <div
      className="w-[168px] overflow-hidden rounded-[10px] border border-line bg-white"
      style={{ boxShadow: "0 6px 16px -10px oklch(19% 0.008 75 / 0.2)" }}
    >
      <CardBar tight />
      <div className="flex flex-col gap-1 px-2.5 pt-2 pb-2.5">
        <div
          className="h-1 rounded-sm"
          style={{ width: w1, background: "oklch(85% 0.01 75)" }}
        />
        <div
          className="h-1 rounded-sm"
          style={{ width: w2, background: "oklch(90% 0.008 75)" }}
        />
      </div>
    </div>
  );
}

function CardBar({ tight }: { tight?: boolean }) {
  return (
    <div
      className={`flex items-center gap-1 border-b border-line-soft px-2.5 ${
        tight ? "py-1.5" : "py-[7px]"
      }`}
    >
      <span
        aria-hidden
        className="size-[5px] rounded-full"
        style={{ background: "oklch(85% 0.02 75)" }}
      />
      <span
        aria-hidden
        className={`ml-[3px] h-1 rounded-sm ${tight ? "w-11" : "w-10"}`}
        style={{ background: "oklch(90% 0.012 75)" }}
      />
    </div>
  );
}

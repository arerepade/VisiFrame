import Slot from "./Slot";

/** "Restaurant & Café" template mockup — hue 95, dark ground. */
export default function Restaurant() {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ height: "calc(100% - 33px)", background: "oklch(20% 0.02 95)" }}
    >
      <div className="flex items-center justify-between px-[26px] py-[18px]">
        <span
          className="font-display text-[13px] font-bold tracking-[0.03em]"
          style={{ color: "oklch(88% 0.05 95)" }}
        >
          OLIVE &amp; ASH
        </span>
        <span
          className="rounded-[5px] px-2.5 py-[5px] text-[9px]"
          style={{ color: "oklch(75% 0.02 95)", border: "1px solid oklch(45% 0.02 95)" }}
        >
          Reserve a Table
        </span>
      </div>

      <p className="m-0 px-[26px] pb-1 font-display text-[20px] font-semibold leading-[1.2] text-white">
        Seasonal plates, wood-fired.
      </p>
      <p
        className="m-0 max-w-[320px] px-[26px] pb-3.5 text-[9.5px] leading-[1.5]"
        style={{ color: "oklch(65% 0.02 95)" }}
      >
        A neighborhood kitchen built around what&rsquo;s fresh that morning — small
        plates, natural wine, no rush.
      </p>

      <div className="flex flex-1 gap-3 px-[26px] pb-5">
        <div className="flex-[1.3] overflow-hidden rounded-lg">
          <Slot hue={95} label="Plated dish photo" />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="flex-1 overflow-hidden rounded-lg">
            <Slot hue={95} label="Dining room" />
          </div>
          <div className="flex-1 overflow-hidden rounded-lg">
            <Slot hue={95} label="Chef at work" />
          </div>
        </div>
      </div>
    </div>
  );
}

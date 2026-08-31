import Slot from "./Slot";

/** "Personal Brand" template mockup — hue 38. */
export default function PersonalBrand() {
  return (
    <div
      className="overflow-hidden"
      style={{ height: "calc(100% - 33px)", background: "oklch(97.5% 0.015 38)" }}
    >
      <div className="flex items-center justify-between px-[26px] py-[18px]">
        <span
          className="font-display text-[13px] font-bold"
          style={{ color: "oklch(25% 0.02 38)" }}
        >
          Jordan Reyes
        </span>
        <div className="flex gap-3.5">
          {["Work", "About", "Contact"].map((l) => (
            <span key={l} className="text-[9px]" style={{ color: "oklch(45% 0.02 38)" }}>
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-6 px-[26px] pt-1.5 pb-5">
        <div className="flex-1">
          <span
            className="mb-[9px] inline-block rounded-full px-[9px] py-1 text-[8px] font-bold uppercase tracking-[0.04em]"
            style={{ background: "oklch(90% 0.06 38)", color: "oklch(38% 0.1 38)" }}
          >
            Product Designer · Available for Work
          </span>
          <p
            className="m-0 mb-[9px] font-display text-[24px] font-bold leading-[1.15]"
            style={{ color: "oklch(22% 0.02 38)" }}
          >
            Product design with a point of view.
          </p>
          <p
            className="m-0 mb-3.5 text-[10.5px] leading-[1.55]"
            style={{ color: "oklch(45% 0.02 38)" }}
          >
            I help early-stage founders turn rough ideas into interfaces people trust —
            from first wireframe to shipped product.
          </p>
          <div className="flex gap-2">
            <span
              className="inline-block rounded-md px-3.5 py-[7px] text-[9.5px] font-semibold text-white"
              style={{ background: "oklch(45% 0.12 38)" }}
            >
              View My Work
            </span>
            <span
              className="inline-block px-1.5 py-[7px] text-[9.5px] font-semibold"
              style={{ color: "oklch(38% 0.1 38)" }}
            >
              Read the Story →
            </span>
          </div>
        </div>
        <div className="h-[150px] flex-1 overflow-hidden rounded-[10px]">
          <Slot hue={38} label="Portrait photo" />
        </div>
      </div>

      <div className="flex items-baseline justify-between px-[26px] pb-2">
        <span
          className="font-display text-[11px] font-semibold"
          style={{ color: "oklch(25% 0.02 38)" }}
        >
          Selected Work
        </span>
        <span className="text-[9px]" style={{ color: "oklch(50% 0.02 38)" }}>
          12 projects since 2021
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2.5 px-[26px] pb-5">
        {[1, 2, 3].map((n) => (
          <div key={n} className="h-16 overflow-hidden rounded-lg">
            <Slot hue={38} label="Project shot" />
          </div>
        ))}
      </div>
    </div>
  );
}

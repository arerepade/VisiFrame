import Slot from "./Slot";

/** "Beauty & Wellness" template mockup — hue 340. */
export default function BeautyWellness() {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ height: "calc(100% - 33px)" }}
    >
      <div className="relative h-[200px]">
        <Slot hue={340} label="Spa interior photo" />
        <div
          className="absolute inset-0 flex flex-col items-center justify-end gap-1.5 pb-4"
          style={{
            background:
              "linear-gradient(0deg, oklch(20% 0.05 340 / 0.6), transparent 65%)",
          }}
        >
          <p className="m-0 font-display text-[21px] font-semibold tracking-[0.03em] text-white">
            Bloom &amp; Bare
          </p>
          <span className="mb-1 text-[9.5px]" style={{ color: "oklch(95% 0.02 340)" }}>
            Slow skincare, thoughtfully done.
          </span>
          <span
            className="rounded-full bg-white px-4 py-1.5 text-[9px] font-semibold"
            style={{ color: "oklch(35% 0.1 340)" }}
          >
            Book a Session
          </span>
        </div>
      </div>

      <div className="flex items-baseline justify-between px-[26px] pt-3.5 pb-1.5">
        <span
          className="font-display text-[11px] font-semibold"
          style={{ color: "oklch(30% 0.08 340)" }}
        >
          Our Signature Rituals
        </span>
        <span className="text-[9px]" style={{ color: "oklch(50% 0.02 340)" }}>
          ★★★★★ 4.9 (212)
        </span>
      </div>

      <div className="flex flex-1 gap-3 px-[26px] pb-5">
        {["Facial treatment", "Skincare product", "Relaxation room"].map((label) => (
          <div key={label} className="flex-1 overflow-hidden rounded-[10px]">
            <Slot hue={340} label={label} />
          </div>
        ))}
      </div>
    </div>
  );
}

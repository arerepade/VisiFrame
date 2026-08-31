import Slot from "./Slot";

/** "SaaS Landing Page" template mockup — hue 250. */
export default function SaasLanding() {
  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ height: "calc(100% - 33px)", background: "oklch(98% 0.005 75)" }}
    >
      <div className="flex items-center justify-between px-[26px] py-[18px]">
        <span
          className="font-display text-[13px] font-bold"
          style={{ color: "oklch(25% 0.02 250)" }}
        >
          Flowpath
        </span>
        <div className="flex items-center gap-3">
          <span className="text-[9px]" style={{ color: "oklch(45% 0.02 250)" }}>
            Product
          </span>
          <span className="text-[9px]" style={{ color: "oklch(45% 0.02 250)" }}>
            Pricing
          </span>
          <span
            className="rounded-md px-[13px] py-1.5 text-[9px] font-semibold text-white"
            style={{ background: "oklch(50% 0.15 250)" }}
          >
            Get Started
          </span>
        </div>
      </div>

      <div className="px-[26px] pb-1">
        <span
          className="mb-2 inline-block rounded-full px-[9px] py-1 text-[8px] font-bold uppercase tracking-[0.03em]"
          style={{ background: "oklch(93% 0.04 250)", color: "oklch(40% 0.14 250)" }}
        >
          New · Workflow Builder 2.0
        </span>
      </div>

      <p
        className="m-0 max-w-[280px] px-[26px] pb-1.5 font-display text-[22px] font-bold leading-[1.15]"
        style={{ color: "oklch(20% 0.02 250)" }}
      >
        Automate your team&rsquo;s busywork.
      </p>
      <p
        className="m-0 max-w-[300px] px-[26px] pb-3.5 text-[9.5px] leading-[1.5]"
        style={{ color: "oklch(45% 0.02 250)" }}
      >
        Connect your tools, set the rules once, and let Flowpath handle the repetitive
        parts of your day.
      </p>

      <div
        className="mx-[26px] flex-1 overflow-hidden rounded-t-[10px]"
        style={{ boxShadow: "0 10px 30px -14px oklch(19% 0.008 75 / 0.3)" }}
      >
        <Slot hue={250} label="Product dashboard screenshot" />
      </div>
    </div>
  );
}

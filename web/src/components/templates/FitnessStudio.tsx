import Slot from "./Slot";

/** "Fitness Studio" template mockup — hue 165, photo with a diagonal scrim. */
export default function FitnessStudio() {
  return (
    <div className="relative overflow-hidden" style={{ height: "calc(100% - 33px)" }}>
      <Slot hue={165} label="Gym training photo" />

      <div
        className="absolute inset-0 flex flex-col gap-3 px-[26px] py-[22px]"
        style={{
          background:
            "linear-gradient(100deg, oklch(15% 0.01 165 / 0.9) 42%, oklch(15% 0.01 165 / 0.15) 92%)",
        }}
      >
        <div className="flex items-center justify-between">
          <span
            className="font-display text-[13px] font-extrabold tracking-[0.05em]"
            style={{ color: "oklch(80% 0.15 145)" }}
          >
            FORGE STUDIO
          </span>
          <span
            className="rounded-full px-[13px] py-1.5 text-[9px] font-bold"
            style={{ background: "oklch(70% 0.18 145)", color: "oklch(15% 0.01 165)" }}
          >
            Join a Class
          </span>
        </div>

        <p className="mt-1 mb-0 max-w-[220px] font-display text-[24px] font-extrabold uppercase leading-[1.1] text-white">
          Train with intent.
        </p>
        <p
          className="m-0 max-w-[200px] text-[10px] leading-[1.55]"
          style={{ color: "oklch(80% 0.02 165)" }}
        >
          Strength, conditioning and recovery, coached in small groups.
        </p>

        <div className="mt-auto flex gap-4">
          <div>
            <p className="m-0 font-display text-base font-bold text-white">40+</p>
            <p className="m-0 text-[8px]" style={{ color: "oklch(70% 0.02 165)" }}>
              classes / week
            </p>
          </div>
          <div>
            <p className="m-0 font-display text-base font-bold text-white">12</p>
            <p className="m-0 text-[8px]" style={{ color: "oklch(70% 0.02 165)" }}>
              expert coaches
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

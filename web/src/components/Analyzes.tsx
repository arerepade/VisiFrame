import Reveal from "./Reveal";

/**
 * "What VisiFrame actually looks at" — six cards, each with its own CSS-drawn
 * glyph. The prototype draws these in markup rather than using an icon set, so
 * they are reproduced the same way here.
 */
export default function Analyzes() {
  return (
    <Reveal id="analyzes" className="bg-surface-warm px-8 py-24">
      <div className="mx-auto max-w-[1120px]">
        <p className="m-0 mb-3 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-accent-deep">
          Under The Hood
        </p>
        <h2 className="m-0 mb-14 text-center font-display text-[clamp(28px,3.4vw,38px)] font-bold">
          What VisiFrame actually looks at.
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-7">
          <Card label="Page structure">
            <div className="mx-auto mb-3.5 flex size-11 flex-col justify-center gap-1">
              <span className="h-1.5 rounded-sm bg-accent" />
              <span
                className="h-1.5 w-[70%] rounded-sm"
                style={{ background: "oklch(80% 0.1 38)" }}
              />
              <span
                className="h-1.5 w-[45%] rounded-sm"
                style={{ background: "oklch(88% 0.05 38)" }}
              />
            </div>
          </Card>

          <Card label="Typography">
            <div className="mb-2.5 font-display text-[26px] font-bold text-accent">Aa</div>
          </Card>

          <Card label="Color systems">
            <div className="mb-3.5 flex justify-center">
              <span className="size-[22px] rounded-full bg-accent" />
              <span
                className="-ml-2 size-[22px] rounded-full"
                style={{ background: "oklch(70% 0.16 200)" }}
              />
              <span
                className="-ml-2 size-[22px] rounded-full"
                style={{ background: "oklch(75% 0.14 90)" }}
              />
            </div>
          </Card>

          <Card label="Spacing">
            <div className="mx-auto mb-3.5 flex size-11 items-center justify-center rounded-lg border-[1.5px] border-dashed border-line">
              <span className="size-4 rounded-[3px] bg-accent" />
            </div>
          </Card>

          <Card label="Components">
            <div className="mx-auto mb-3.5 grid size-11 grid-cols-2 gap-1">
              <span className="rounded-[3px] bg-accent" />
              <span className="rounded-[3px]" style={{ background: "oklch(80% 0.1 38)" }} />
              <span className="rounded-[3px]" style={{ background: "oklch(80% 0.1 38)" }} />
              <span className="rounded-[3px] bg-accent" />
            </div>
          </Card>

          <Card label="Visual style">
            <div
              className="mx-auto mb-3.5 size-[26px] rounded-[3px] bg-accent"
              style={{ transform: "rotate(45deg)" }}
            />
          </Card>
        </div>
      </div>
    </Reveal>
  );
}

function Card({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[14px] border border-line bg-white p-6 text-center">
      {children}
      <p className="m-0 text-[14.5px] font-semibold">{label}</p>
    </div>
  );
}

import { ANALYSIS_FACETS, DELIVERABLES } from "@/content/site";

export default function UnderTheHood() {
  return (
    <>
      <section className="bg-surface-warm">
        <div className="section text-center">
          <p className="eyebrow">Under The Hood</p>
          <h2 className="h2 mt-3">What VisiFrame actually looks at.</h2>

          <ul className="mt-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {ANALYSIS_FACETS.map((f) => (
              <li key={f} className="card flex flex-col items-center gap-3 py-7">
                <span aria-hidden className="size-6 rounded-md bg-accent-tint" />
                <span className="text-xs font-semibold">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="section">
          <p className="eyebrow">What You Receive</p>
          <h2 className="h2 mt-3 max-w-[16ch]">Everything you need to ship it.</h2>

          <ul className="mt-12 divide-y divide-line border-y border-line">
            {DELIVERABLES.map((d) => (
              <li key={d.title} className="grid gap-1 py-5 md:grid-cols-[22rem_1fr] md:gap-8">
                <h3 className="flex items-start gap-3 font-display text-sm font-bold">
                  <span aria-hidden className="mt-0.5 text-accent">
                    ✓
                  </span>
                  {d.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{d.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

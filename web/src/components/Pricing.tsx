import { PLANS, PRICING_NOTE, CTA, FORM_ANCHOR } from "@/content/site";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-surface-warm">
      <div className="section text-center">
        <p className="eyebrow">Pricing</p>
        <h2 className="h2 mt-3">Simple pricing for regular use.</h2>

        <span className="mt-5 inline-block rounded-full border border-accent/30 bg-accent-tint px-3 py-1.5 text-xs font-semibold text-accent-deep">
          {PRICING_NOTE.badge}
        </span>
        <p className="mx-auto mt-3 max-w-[54ch] text-sm text-muted">
          {PRICING_NOTE.body}
        </p>

        <div className="mt-12 grid items-start gap-5 md:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border bg-white p-7 text-left ${
                plan.recommended ? "border-accent shadow-[0_8px_30px_rgb(0_0_0/0.06)]" : "border-line"
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  Recommended
                </span>
              )}

              <h3 className="font-display text-base font-bold">{plan.name}</h3>
              <p className="mt-3 font-display text-4xl font-bold tracking-tight">
                {plan.price}
                {plan.period && (
                  <span className="text-base font-medium text-faint">{plan.period}</span>
                )}
              </p>
              <p className="mt-3 min-h-[3rem] text-sm leading-relaxed text-muted">
                {plan.blurb}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex gap-2.5 text-sm">
                    <span
                      aria-hidden
                      className={f.ok ? "text-accent" : "text-faint"}
                    >
                      {f.ok ? "✓" : "✕"}
                    </span>
                    <span className={f.ok ? "text-ink" : "text-faint"}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href={FORM_ANCHOR}
                className={`mt-7 w-full justify-center ${
                  plan.recommended ? "btn-primary" : "btn-secondary"
                }`}
              >
                {CTA}
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-[56ch] text-xs text-faint">
          {PRICING_NOTE.footnote}
        </p>
      </div>
    </section>
  );
}

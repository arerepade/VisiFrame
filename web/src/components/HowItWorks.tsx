import { STEPS } from "@/content/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="section">
        <p className="eyebrow">How It Works</p>
        <h2 className="h2 mt-3 max-w-[18ch]">
          From inspiration to a finished direction, in three steps.
        </h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent-tint font-display text-sm font-bold text-accent-deep">
                {s.n}
              </span>
              <h3 className="mt-4 font-display text-base font-bold">{s.title}</h3>
              <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

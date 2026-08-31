import { AUDIENCES } from "@/content/site";

export default function WhoItsFor() {
  return (
    <section className="bg-surface-warm">
      <div className="section text-center">
        <p className="eyebrow">Who It&rsquo;s For</p>
        <h2 className="h2 mx-auto mt-3 max-w-[22ch]">
          Built for anyone turning inspiration into a website.
        </h2>
        <p className="mx-auto mt-4 max-w-[58ch] text-sm leading-relaxed text-muted">
          You already know which websites you like — you just need help turning that
          inspiration into an original, development-ready design.
        </p>

        <ul className="mt-12 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((a) => (
            <li key={a.title} className="card">
              <span aria-hidden className="block size-7 rounded-lg bg-accent-tint" />
              <h3 className="mt-4 font-display text-sm font-bold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

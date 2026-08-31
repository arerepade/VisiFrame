import { FOOTER, CTA, FORM_ANCHOR } from "@/content/site";

export default function Footer() {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center md:py-24">
          <h2 className="mx-auto max-w-[20ch] font-display text-[clamp(1.6rem,3.2vw,2.4rem)] font-bold leading-tight tracking-[-0.02em]">
            You already know what you like. Now make it yours.
          </h2>
          <a href={FORM_ANCHOR} className="btn-primary mt-8">
            {CTA}
          </a>
        </div>
      </section>

      <footer className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 font-display font-bold">
              <span aria-hidden className="size-4 rounded-[5px] bg-accent" />
              VisiFrame
            </p>
            <p className="mt-3 max-w-[38ch] text-sm leading-relaxed text-muted">
              {FOOTER.blurb}
            </p>
          </div>

          <FooterCol title="Product" links={FOOTER.product} />
          <FooterCol title="Company" links={FOOTER.company} />
        </div>

        <div className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-faint">
            <p>{FOOTER.copyright}</p>
            <p>Made with ♥ by Louis</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-faint">
        {title}
      </p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

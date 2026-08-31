import { FOOTER_PRODUCT, FOOTER_COMPANY, FOOTER_BLURB, FOOTER_COPYRIGHT } from "@/content/site";

/** Footer — dark ground, exactly as specified in the prototype. */
export default function Footer() {
  return (
    <footer className="bg-footer px-8 pt-16 pb-10 text-footer-text">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 flex flex-wrap justify-between gap-10">
          <div className="max-w-[260px]">
            <p className="mb-3 flex items-center gap-2 font-display text-[19px] font-bold text-white">
              <span
                aria-hidden
                className="inline-block size-4 rounded bg-accent"
                style={{ transform: "rotate(45deg)" }}
              />
              VisiFrame
            </p>
            <p className="text-sm leading-[1.6]">{FOOTER_BLURB}</p>
          </div>

          <div className="flex flex-wrap gap-14">
            <FooterCol title="Product" links={FOOTER_PRODUCT} />
            <FooterCol title="Company" links={FOOTER_COMPANY} />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-footer-rule pt-6 text-[13px]">
          <span>{FOOTER_COPYRIGHT}</span>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 text-[13px] text-footer-text hover:text-white hover:underline"
          >
            <span>Made with ❤️ by Louis</span>
            <span
              aria-hidden
              className="size-7 shrink-0 overflow-hidden rounded-full bg-footer-rule"
            />
          </a>
        </div>
      </div>
    </footer>
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
    <div className="flex flex-col gap-2.5">
      <p className="mb-1.5 text-[13px] font-semibold text-white">{title}</p>
      {links.map((l) => (
        <a key={l.label} href={l.href} className="text-sm text-footer-text hover:text-white">
          {l.label}
        </a>
      ))}
    </div>
  );
}

import Image from "next/image";
import { FOOTER_PRODUCT, FOOTER_COMPANY, FOOTER_BLURB, FOOTER_COPYRIGHT } from "@/content/site";

/** Footer — dark ground, exactly as specified in the prototype. */
export default function Footer() {
  return (
    <footer className="bg-footer px-8 pt-16 pb-10 text-footer-text">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 flex flex-wrap justify-between gap-10">
          <div className="max-w-[260px]">
            <p className="mb-3 flex items-center gap-2 font-display text-[19px] font-bold text-white">
              <Image src="/visiframe-mark.svg" alt="" width={16} height={16} />
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

          <div className="flex items-center gap-4">
            <a
              href="https://x.com/louisbenagha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="VisiFrame on X"
              className="text-footer-text transition-colors hover:text-white"
            >
              <XIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/louis-benagha-30167a432/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[13px] text-footer-text hover:text-white hover:underline"
            >
              <span>Made with ❤️ by Louis</span>
              <span className="relative size-7 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/louis.jpg"
                  alt="Louis Benagha"
                  fill
                  sizes="28px"
                  className="object-cover object-top"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** The post-rebrand X mark. */
function XIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
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

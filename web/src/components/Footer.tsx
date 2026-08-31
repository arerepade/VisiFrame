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
              aria-label="Louis on X"
              className="text-footer-text transition-colors hover:text-white"
            >
              <XIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/louis-benagha-30167a432/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Louis on LinkedIn"
              className="text-footer-text transition-colors hover:text-white"
            >
              <LinkedInIcon />
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

function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
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

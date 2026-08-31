import { CTA, FORM_ANCHOR } from "@/content/site";
import Reveal from "./Reveal";

/** Coral CTA band between the request form and the footer. */
export default function FinalCta() {
  return (
    <Reveal className="bg-accent-cta px-8 py-24 text-center">
      <h2 className="mx-auto mb-8 max-w-[680px] font-display text-[clamp(28px,4vw,44px)] font-bold leading-[1.15] text-white">
        You already know what you like. Now make it yours.
      </h2>
      <a
        href={FORM_ANCHOR}
        className="inline-block rounded-[10px] bg-white px-[30px] py-4 text-base font-bold text-accent-cta"
      >
        {CTA}
      </a>
    </Reveal>
  );
}

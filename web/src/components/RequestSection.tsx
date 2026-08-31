import RequestForm from "./RequestForm";
import { CTA, FORM_ANCHOR } from "@/content/site";

/**
 * The request section is the entire funnel during the concierge phase — every
 * CTA on the page points here, so it carries its own heading and framing rather
 * than being a bare form.
 */
export default function RequestSection() {
  return (
    <section id={FORM_ANCHOR.slice(1)} className="bg-surface-warm">
      <div className="section max-w-2xl text-center">
        <p className="eyebrow">Get Started</p>
        <h2 className="h2 mt-3">{CTA}.</h2>
        <p className="mt-4 text-sm text-muted">
          Two minutes of your time. We&rsquo;ll hand-build the rest.
        </p>

        <div className="mt-10 text-left">
          <RequestForm />
        </div>
      </div>
    </section>
  );
}

import RequestForm from "./RequestForm";
import Reveal from "./Reveal";

export default function RequestSection() {
  return (
    <Reveal id="request" className="bg-surface-warm px-8 py-24">
      <div className="mx-auto max-w-[560px]">
        <p className="m-0 mb-3 text-center text-[13px] font-bold uppercase tracking-[0.08em] text-accent-deep">
          Get Started
        </p>
        <h2 className="m-0 mb-3 text-center font-display text-[clamp(26px,3.4vw,34px)] font-bold">
          Request your three designs.
        </h2>
        <p className="m-0 mb-10 text-center text-[15.5px] text-muted">
          Two minutes of your time. We&rsquo;ll hand-build the rest.
        </p>

        <RequestForm />
      </div>
    </Reveal>
  );
}

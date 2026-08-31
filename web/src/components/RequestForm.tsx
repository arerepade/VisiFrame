"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Field from "./Field";

/**
 * Early-access request form — the entire product intake during the concierge
 * phase. Layout, sizes and copy follow the approved prototype exactly; the only
 * addition is the Formspree wiring, which the prototype simulated.
 */

const FORM_ID = "xrpgewdy";
const CONTACT = "lbenagha@gmail.com";

const inputCls =
  "w-full rounded-lg border border-line px-[13px] py-[11px] font-sans text-[14.5px] outline-none focus:border-ink";

export default function RequestForm() {
  const [state, handleSubmit] = useForm(FORM_ID);
  // Mirrored so the Formspree subject line can carry the business name — these
  // requests are worked by hand, so a scannable inbox matters.
  const [bizName, setBizName] = useState("");
  const [email, setEmail] = useState("");

  if (state.succeeded) return <SuccessCard />;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-8"
    >
      <input
        type="hidden"
        name="_subject"
        value={`VisiFrame request: ${bizName || "(no name)"}`}
      />
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Field label="Email">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputCls}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className={errCls} />
      </Field>

      <Field label="Reference sites">
        <div className="flex flex-col gap-2">
          <input type="url" name="url1" required placeholder="https://" className={inputCls} />
          <input type="url" name="url2" placeholder="https:// (optional)" className={inputCls} />
          <input type="url" name="url3" placeholder="https:// (optional)" className={inputCls} />
        </div>
        <ValidationError prefix="Reference" field="url1" errors={state.errors} className={errCls} />
        <p className={hintCls}>
          Sites whose design you admire. We study their design language and never copy
          them.
        </p>
      </Field>

      <Field label="Business or website name">
        <input
          type="text"
          name="bizName"
          required
          value={bizName}
          onChange={(e) => setBizName(e.target.value)}
          className={inputCls}
        />
      </Field>

      <Field label="What the site is for">
        <input
          type="text"
          name="purpose"
          required
          placeholder="e.g. Selling a subscription analytics tool to indie founders"
          className={inputCls}
        />
      </Field>

      <Field label="Who it's for" optional>
        <input type="text" name="audience" className={inputCls} />
      </Field>

      <Field label="Main action you want visitors to take" optional>
        <input type="text" name="mainAction" className={inputCls} />
      </Field>

      <Field label="Brand colours and fonts" optional>
        <textarea name="brandNotes" rows={3} className={`${inputCls} resize-y`} />
        <p className={hintCls}>
          Have them? Paste them. Don&rsquo;t? We&rsquo;ll recommend a palette from your
          references.
        </p>
      </Field>

      <Field label="Anything else" optional>
        <textarea name="otherNotes" rows={3} className={`${inputCls} resize-y`} />
      </Field>

      {/* Above the button, not below it — the last thing read before clicking
          should be that it costs nothing. */}
      <p
        className="m-0 rounded-lg bg-accent-tint px-3.5 py-2.5 text-center text-[15px] font-bold"
        style={{ color: "oklch(40% 0.2 38)" }}
      >
        Free while we&rsquo;re in early access — we&rsquo;ll reply within 24 hours with
        three original homepage designs.
      </p>

      <button
        type="submit"
        disabled={state.submitting}
        className="cursor-pointer rounded-[9px] border-none bg-accent p-3.5 font-sans text-[15.5px] font-semibold text-white disabled:opacity-60"
      >
        {state.submitting ? "Sending…" : "Send my request"}
      </button>

      {state.errors && <ErrorNote email={email} />}
    </form>
  );
}

const errCls = "m-0 mt-1.5 text-[12.5px] text-[oklch(50%_0.2_25)]";
const hintCls = "m-0 mt-1.5 text-[12.5px] text-[oklch(52%_0.01_75)]";

function SuccessCard() {
  return (
    <div className="rounded-2xl border border-line bg-white px-8 py-10 text-center">
      <div className="mx-auto mb-[18px] flex size-12 items-center justify-center rounded-full bg-accent-tint text-[22px] text-accent-deep">
        ✓
      </div>
      <p className="m-0 mb-5 font-display text-[19px] font-bold">
        Got it. Check your inbox within 24 hours for three original homepage designs.
      </p>
      <div
        className="mb-1 flex flex-col gap-2.5 rounded-[10px] px-[18px] py-4 text-left"
        style={{ background: "oklch(97.5% 0.007 75)" }}
      >
        <p className="m-0 text-[13.5px] text-muted">
          1. We read your references and brief by hand.
        </p>
        <p className="m-0 text-[13.5px] text-muted">
          2. We generate and review three directions.
        </p>
        <p className="m-0 text-[13.5px] text-muted">
          3. We email you all three, ready to compare.
        </p>
      </div>
    </div>
  );
}

function ErrorNote({ email }: { email: string }) {
  return (
    <p className="m-0 text-center text-[14.5px] text-muted">
      Something went wrong sending your request. Email us at{" "}
      <a className="underline" href={`mailto:${CONTACT}`}>
        {CONTACT}
      </a>
      {email ? ` and mention ${email}.` : " and we'll pick it up."}
    </p>
  );
}

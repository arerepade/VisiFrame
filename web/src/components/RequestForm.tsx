"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

/**
 * VisiFrame early-access request form.
 *
 * This is the entire product intake during the concierge phase — everything
 * needed to run a project by hand replaces wizard steps 1-4 (PRODUCT_VISION.md
 * §10.3) in a single screen.
 *
 * Install:  npm install @formspree/react
 *
 * Field names match the approved design (design_handoff_website/VisiFrame.dc.html)
 * so the marketing page and this component stay in sync.
 */

const FORM_ID = "xrpgewdy";

export default function RequestForm() {
  const [state, handleSubmit] = useForm(FORM_ID);
  // Mirrored so the Formspree email subject can carry the business name —
  // these requests are worked by hand, so a scannable inbox matters.
  const [bizName, setBizName] = useState("");

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-line bg-white p-8">
        <h3 className="text-xl font-semibold">Got it.</h3>
        <p className="mt-2 text-muted">
          Check your inbox within 24 hours.
        </p>
        <ol className="mt-6 space-y-2 text-sm text-muted">
          <li>1. We read the design language of the sites you sent.</li>
          <li>2. We generate three original homepage directions for your brand.</li>
          <li>3. You get them by email — pick one, or tell us what to change.</li>
        </ol>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-2xl border border-line bg-white p-8"
    >
      {/* Formspree specials: readable subject line, and a honeypot bots fill in. */}
      <input type="hidden" name="_subject" value={`VisiFrame request: ${bizName || "(no name)"}`} />
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <Field label="Email" required>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className={inputCls}
          placeholder="you@company.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className={errCls} />
      </Field>

      <Field
        label="Reference sites"
        required
        hint="Sites whose design you admire. We study their design language and never copy them."
      >
        <div className="flex flex-col gap-2">
          <input type="url" name="url1" required className={inputCls} placeholder="https://a-site-you-love.com" />
          <input type="url" name="url2" className={inputCls} placeholder="Optional" />
          <input type="url" name="url3" className={inputCls} placeholder="Optional" />
        </div>
        <ValidationError prefix="Reference" field="url1" errors={state.errors} className={errCls} />
      </Field>

      <Field label="Business or website name" required>
        <input
          type="text"
          name="bizName"
          required
          value={bizName}
          onChange={(e) => setBizName(e.target.value)}
          className={inputCls}
        />
      </Field>

      <Field label="What the site is for" required>
        <input
          type="text"
          name="purpose"
          required
          className={inputCls}
          placeholder="e.g. Sell a $19/month analytics tool to indie founders"
        />
      </Field>

      <Field label="Who it's for">
        <input type="text" name="audience" className={inputCls} />
      </Field>

      <Field label="Main action you want visitors to take">
        <input type="text" name="mainAction" className={inputCls} placeholder="e.g. Start a free trial" />
      </Field>

      <Field
        label="Brand colours and fonts"
        hint="Have them? Paste them. Don't? We'll recommend a palette from your references."
      >
        <textarea name="brandNotes" rows={3} className={inputCls} />
      </Field>

      <Field label="Anything else">
        <textarea name="otherNotes" rows={3} className={inputCls} />
      </Field>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn-primary justify-center disabled:opacity-60"
      >
        {state.submitting ? "Sending…" : "Send my request"}
      </button>

      <p className="text-xs text-faint">
        Free while we&rsquo;re in early access. We&rsquo;ll reply within 24 hours with three
        original homepage designs.
      </p>

      {/* Form-level failure — always give a way through. */}
      {state.errors && (
        <p className={errCls}>
          Something went wrong sending that. Email us at{" "}
          <a className="underline" href="mailto:lbenagha@gmail.com">
            lbenagha@gmail.com
          </a>{" "}
          and we&rsquo;ll pick it up.
        </p>
      )}
    </form>
  );
}

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] outline-none placeholder:text-faint focus:border-ink focus:ring-2 focus:ring-ink/10";

const errCls = "mt-1 text-sm text-[oklch(55%_0.2_25)]";

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[11px] font-semibold uppercase tracking-wider text-faint">
        {label}
        {!required && <span className="ml-1 font-normal normal-case tracking-normal">(optional)</span>}
      </span>
      {hint && <span className="text-xs text-faint">{hint}</span>}
      {children}
    </label>
  );
}

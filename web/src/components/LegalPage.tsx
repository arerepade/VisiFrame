import Link from "next/link";
import Image from "next/image";

/**
 * Shared shell for Terms and Privacy. Both prototypes use an identical layout —
 * a narrow nav with just the wordmark, a 720px column, and a centred footer
 * rule — so it lives in one place rather than being duplicated per page.
 */
export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: readonly { heading: string; body: React.ReactNode }[];
}) {
  return (
    <div className="min-h-screen bg-page text-ink">
      <nav className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-[760px] items-center justify-between px-8 py-5">
          <Link
            href="/"
            className="flex items-center gap-2 font-display text-[19px] font-bold text-ink"
          >
            <Image src="/visiframe-mark.svg" alt="" width={18} height={18} />
            VisiFrame
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-[720px] px-8 pt-[72px] pb-24">
        <p className="m-0 mb-3 text-[13px] font-bold uppercase tracking-[0.08em] text-accent-deep">
          Legal
        </p>
        <h1 className="m-0 mb-2 font-display text-[clamp(30px,4vw,40px)] font-bold">
          {title}
        </h1>
        <p className="m-0 mb-6 text-sm text-faint">{updated}</p>

        {/**
         * These terms describe the self-serve product — accounts, dashboards,
         * monthly billing — none of which exists yet. Rather than rewrite them
         * for a phase that will pass, the gap is stated plainly up front.
         */}
        <p className="mb-12 rounded-xl border border-line bg-accent-tint/50 px-5 py-4 text-sm leading-[1.6] text-muted">
          VisiFrame is in early access. Projects are currently hand-built and
          free, and there are no accounts or subscriptions yet — the terms below
          describe the service as it will operate once self-serve launches.
        </p>

        <div
          className="flex flex-col gap-9 text-[15.5px] leading-[1.7]"
          style={{ color: "oklch(30% 0.008 75)" }}
        >
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="m-0 mb-2.5 font-display text-[19px] font-semibold text-ink">
                {s.heading}
              </h2>
              <p className="m-0">{s.body}</p>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-line p-8 text-center">
        <p className="m-0 text-[13px] text-faint">
          © 2026 VisiFrame. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

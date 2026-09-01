# VisiFrame web

Next.js 16 + TypeScript + Tailwind v4 marketing site. Deploys to Vercel.

## Code rules

**No file may exceed 300 lines.** This applies to every file under `web/` —
components, pages, styles, config, content. Split before you approach the limit:
extract sub-components, move copy into `src/content/`, or lift shared logic into
a hook. A file nearing 300 lines is a signal it is doing more than one job.

## Git workflow

**Never push directly to `main`.** Branch first, push the branch, and let
`main` move only through a merge:

```bash
git checkout feature-dev        # or a task-specific branch cut from main
```

**Run the linter before every push and fix what it reports:**

```bash
npm run lint
```

A failing lint is not ready to push. A passing `npm run build` is not a
substitute — the production build does not run ESLint.

Pushing requires the `arerepade` GitHub account. If `alouisbenagha` is the
active `gh` account the push fails with a 403; switch with
`gh auth switch --user arerepade` and switch back afterwards.

## Structure

- `src/app/` — routes, layout, global styles
- `src/components/` — one section or UI concern per file
- `src/content/` — page copy as typed data, kept out of components so sections
  stay layout-only and copy edits never touch JSX

## Follow the mock exactly — assume nothing

**Never invent, simplify or omit anything from the approved design.** If the mock
has a section, build that section. If it has an icon, build that icon — not a
coloured square standing in for one. If it has an interaction, build the
interaction.

Before building or changing a section, open the corresponding markup in the
prototype and read it. Take colours, spacing, font sizes, weights, radii, copy
and states from there rather than choosing values that look close. Where
something in the mock seems wrong or unclear, ask — do not quietly substitute
a judgement call.

A section missing from the build is a bug, not a simplification.

## Design source

`design_handoff_website/VisiFrame.dc.html` is the approved, high-fidelity
prototype. Colours, type, spacing and copy there are intentional and should be
recreated precisely, not approximated. Design tokens live in
`src/app/globals.css` under `@theme` and stay in oklch as authored — converting
to hex shifts the warm neutrals that give the palette its character.

Do not port `support.js` or `image-slot.js` from the prototype; they are
prototyping-tool shims.

## Current phase

Concierge launch: the site collects requests via Formspree and we hand-run each
project. There is no auth, dashboard or billing yet — do not add links to them.

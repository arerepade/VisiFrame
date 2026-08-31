/**
 * Site copy, kept out of components so sections stay layout-only and wording
 * changes never touch JSX. Text is taken verbatim from the approved prototype.
 */

export const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Examples", href: "#examples" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const CTA = "Request your three designs";
export const FORM_ANCHOR = "#request";

export const HERO = {
  eyebrow: "AI-assisted design, not AI-copied design",
  heading: "Turn website inspiration into a design of your own.",
  body: "Paste the websites you love, describe what you're building and receive original, development-ready design directions in minutes. Built for developers, designers, freelancers and no-code builders — and anyone else turning inspiration into a website.",
  note: "Early access — we hand-build your project and email your designs within 24 hours.",
} as const;

export const STEPS = [
  {
    n: "01",
    title: "Add your inspiration",
    body: "Paste one to three URLs or upload screenshots of sites whose look and feel you admire.",
  },
  {
    n: "02",
    title: "Describe your website",
    body: "Tell VisiFrame what you're building, who it's for, and the tone you want it to strike.",
  },
  {
    n: "03",
    title: "Preview and download",
    body: "Compare three original directions, pick a favorite, and export responsive, dev-ready code.",
  },
] as const;

/**
 * Audience cards. `hue` tints the icon tile; `icon` is the CSS glyph drawn
 * inside it — both taken from the prototype, which draws these in CSS rather
 * than using an icon font or SVG set.
 */
export const AUDIENCES = [
  {
    title: "Developers",
    hue: 250,
    desc: "Explore visual directions before writing the first line of code.",
    icon: { top: 8, left: 8, width: 18, height: 12, border: "2px solid oklch(45% 0.16 250)", borderRadius: 3 },
  },
  {
    title: "UI/UX & Web Designers",
    hue: 38,
    desc: "Turn references into original concepts, design systems and editable files.",
    icon: { top: 7, left: 7, width: 10, height: 10, background: "oklch(55% 0.18 38)", borderRadius: 2, boxShadow: "6px 6px 0 oklch(75% 0.1 38)" },
  },
  {
    title: "Freelancers",
    hue: 340,
    desc: "Give clients multiple website directions without days of concept work.",
    icon: { top: 9, left: 8, width: 16, height: 16, borderRadius: "50%", border: "2px solid oklch(50% 0.18 340)", borderTopColor: "transparent" },
  },
  {
    title: "No-Code & AI Builders",
    hue: 200,
    desc: "Create a clear visual foundation before building in your preferred platform.",
    icon: { top: 9, left: 8, width: 16, height: 2, background: "oklch(45% 0.16 200)", boxShadow: "0 5px 0 oklch(45% 0.16 200), 0 10px 0 oklch(45% 0.16 200)" },
  },
  {
    title: "Founders, Creators & Small Businesses",
    hue: 95,
    desc: "Turn websites you admire into an original direction for your own brand.",
    icon: { top: 7, left: 9, width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderBottom: "12px solid oklch(45% 0.14 95)" },
  },
  {
    title: "Students & New Designers",
    hue: 280,
    desc: "Study website design patterns and turn inspiration into practical design work.",
    icon: { top: 9, left: 9, width: 14, height: 16, border: "2px solid oklch(48% 0.16 280)", borderRadius: "2px 2px 6px 2px" },
  },
] as const;

/**
 * The three references that actually produced the example designs, and the
 * directions they produced. Real output, not mockups — the section says so, so
 * these must stay accurate.
 */
export const EXAMPLE_REFERENCES = ["usefastlane.ai", "datafa.st", "trustmrr.com"] as const;

export const EXAMPLE_DIRECTIONS = [
  { name: "Direction A", caption: "Editorial — type carries the page" },
  { name: "Direction B", caption: "Structured — visible grid, tabular density" },
  { name: "Direction C", caption: "Cinematic — image-led, full-bleed" },
] as const;

export const ANALYSIS_FACETS = [
  "Page structure",
  "Typography",
  "Color systems",
  "Spacing",
  "Components",
  "Visual style",
] as const;

export const DELIVERABLES = [
  {
    title: "Three original directions",
    body: "Distinct takes adapted to your brand, not near-duplicates.",
  },
  {
    title: "Desktop and mobile previews",
    body: "Every direction is previewed at both sizes before you choose.",
  },
  {
    title: "Reusable design system",
    body: "Color, type and spacing tokens documented for reuse.",
  },
  {
    title: "Responsive front-end code",
    body: "Clean, semantic HTML and CSS that works on any screen.",
  },
  {
    title: "Development-ready download",
    body: "Drop the export straight into your project and start building.",
  },
] as const;

export const FAQS = [
  {
    q: "Will my design be copied from the sites I reference?",
    a: "No. VisiFrame studies structural and stylistic patterns — layout rhythm, type pairing, color relationships, spacing — and generates a new design adapted to your brand. It never reuses copy, images, or code from the reference sites.",
  },
  {
    q: "Can I reference any website I like?",
    a: "Yes, paste up to three public URLs or upload screenshots of sites whose look and feel you admire. VisiFrame only reads visual and structural patterns, never the underlying content.",
  },
  {
    q: "What do I actually get when I download?",
    a: "A responsive front-end build of your selected direction — clean HTML and CSS you can drop into any project — plus a short design-system reference covering colors, type and components.",
  },
  {
    q: "Are mobile layouts included?",
    a: "Every generated direction ships with a matching desktop and mobile layout, previewed side by side before you choose.",
  },
  {
    q: "Who owns the design I generate?",
    a: "You do. Once exported, the design and code are yours to use, modify and ship commercially with no attribution required.",
  },
  {
    q: "Is VisiFrame only for developers?",
    a: "No. Developers and designers use it to skip the blank page, freelancers use it to pitch clients faster, and no-code builders, founders, creators and students use it to get a clear direction before building anywhere — Webflow, Framer, WordPress or custom code.",
  },
] as const;

export const PLANS = [
  {
    name: "Free Preview",
    price: "$0",
    period: "",
    blurb: "For trying the core experience.",
    recommended: false,
    features: [
      { ok: true, text: "One free project per account" },
      { ok: true, text: "Analyze one reference website" },
      { ok: true, text: "One limited homepage preview" },
      { ok: true, text: "Desktop preview only" },
      { ok: true, text: "VisiFrame watermark" },
      { ok: false, text: "No AI revisions" },
      { ok: false, text: "No mobile design" },
      { ok: false, text: "No Figma export" },
      { ok: false, text: "No code export" },
    ],
  },
  {
    name: "Creator",
    price: "$19",
    period: "/month",
    blurb:
      "For developers, designers, freelancers and creators who regularly build websites.",
    recommended: true,
    features: [
      { ok: true, text: "Three complete design projects every month" },
      { ok: true, text: "Up to three reference websites per project" },
      { ok: true, text: "Three original homepage variations per project" },
      { ok: true, text: "Desktop and mobile designs" },
      { ok: true, text: "Two AI revision requests per project" },
      { ok: true, text: "Colors, typography and component design system" },
      { ok: true, text: "Editable Figma export — organized frames, text, colors and reusable components" },
      { ok: true, text: "Responsive HTML/CSS export" },
      { ok: true, text: "Commercial usage" },
      { ok: true, text: "No VisiFrame watermark" },
    ],
  },
] as const;

export const PRICING_NOTE = {
  badge: "Planned pricing — free during early access",
  body: "This is the shape pricing will take once self-serve launches. For now, every project is free and hand-built.",
  footnote:
    "Early access is free. When we launch paid plans, early access users get their first month on us.",
} as const;

/**
 * Footer links. The Product column has four entries in the prototype — the
 * first points at the preview-demo section, not at the page top.
 */
export const FOOTER_PRODUCT = [
  { label: "Product", href: "#preview-demo" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Examples", href: "#examples" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const FOOTER_COMPANY = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_BLURB =
  "Original, development-ready website designs — inspired by what you love, built for what you're making.";

export const FOOTER_COPYRIGHT = "© 2026 VisiFrame. All rights reserved.";

/**
 * Replaces the prototype's `image-slot` shim, which the handoff README says not
 * to port. Renders a designed empty slot the user's own photo drops into —
 * tinted from the template's hue rather than flat grey, so a mockup with no
 * photography still reads as finished.
 */
export default function Slot({
  hue,
  label,
  className,
}: {
  hue: number;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center overflow-hidden ${className ?? ""}`}
      style={{
        background: `linear-gradient(135deg, oklch(93% 0.04 ${hue}) 0%, oklch(96% 0.02 ${hue}) 100%)`,
      }}
      role="img"
      aria-label={label}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        style={{ color: `oklch(62% 0.08 ${hue})`, opacity: 0.7 }}
      >
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="8.5" cy="9.5" r="1.6" fill="currentColor" />
        <path d="M4 17l5-4.5 4 3.5 3-2.5 4 3.5" stroke="currentColor" strokeWidth="1.6" fill="none" />
      </svg>
    </div>
  );
}

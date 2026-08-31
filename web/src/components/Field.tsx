/** Form field label + control, matching the prototype's label styling. */
export default function Field({
  label,
  optional,
  children,
}: {
  label: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[13.5px] font-semibold">
        {label}
        {optional && (
          <span className="font-medium" style={{ color: "oklch(60% 0.01 75)" }}>
            {" "}
            (optional)
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

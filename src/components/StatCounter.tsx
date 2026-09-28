// Proof should remain correct before hydration, offscreen, and without JavaScript.
// Kept as a compatible shared component for existing content and future modules.
export function StatCounter({
  value,
  className,
}: {
  value: string;
  className?: string;
  immediate?: boolean;
}) {
  return (
    <span className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {value}
    </span>
  );
}

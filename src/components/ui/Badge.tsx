type BadgeColor = "blue" | "teal" | "orange" | "purple" | "green" | "gray";

interface BadgeProps {
  label: string;
  color?: BadgeColor;
  className?: string;
}

const colorMap: Record<BadgeColor, string> = {
  blue:   "bg-blue-50   text-blue-700  ring-1 ring-blue-200",
  teal:   "bg-teal-50   text-teal-700  ring-1 ring-teal-200",
  orange: "bg-orange-50 text-orange-700 ring-1 ring-orange-200",
  purple: "bg-purple-50 text-purple-700 ring-1 ring-purple-200",
  green:  "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  gray:   "bg-slate-100 text-slate-600  ring-1 ring-slate-200",
};

export default function Badge({ label, color = "blue", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${colorMap[color]} ${className}`}
    >
      {label}
    </span>
  );
}

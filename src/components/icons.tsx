import type { LucideIcon } from "lucide-react";

export function FeatureIcon({
  icon: Icon,
  tone = "light",
  className = "h-10 w-10",
}: {
  icon: LucideIcon;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-xl ${
        tone === "dark"
          ? "bg-white/10 text-[#4ADE80] ring-1 ring-white/10"
          : "bg-gradient-to-br from-[#16A34A] to-[#0B3D24] text-white shadow-[0_6px_16px_rgba(22,163,74,0.3)]"
      } ${className}`}
    >
      <Icon strokeWidth={2} className="h-[50%] w-[50%]" />
    </span>
  );
}

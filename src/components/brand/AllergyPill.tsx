import * as React from "react";
import { cn } from "@/lib/utils";

type AllergyPillProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  tone?: "green" | "amber" | "red" | "blue";
  className?: string;
};

const toneClasses = {
  green: "border-emerald-300 bg-emerald-50 text-emerald-800",
  amber: "border-amber-300 bg-amber-50 text-amber-800",
  red: "border-red-300 bg-red-50 text-red-800",
  blue: "border-sky-300 bg-sky-50 text-sky-800",
};

export function AllergyPill({ children, icon, tone = "green", className }: AllergyPillProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-bold",
        toneClasses[tone],
        className,
      )}
    >
      {icon && <span className="grid h-4 w-4 place-items-center">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}

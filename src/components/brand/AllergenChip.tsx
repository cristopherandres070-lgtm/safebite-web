import * as React from "react";
import { cn } from "@/lib/utils";
import { ALLERGEN_META, type AllergenKey } from "./allergens";

export function AllergenChip({
  allergenKey,
  active,
}: {
  allergenKey: AllergenKey;
  active: boolean;
}) {
  const meta = ALLERGEN_META[allergenKey];
  const Icon = meta.icon;

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-full border px-3 py-2",
        active ? "border-transparent bg-[#16A34A]" : "border-[#E2E8F0] bg-white",
      )}
    >
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: active ? "rgba(255,255,255,0.25)" : meta.bg }}
      >
        <Icon strokeWidth={2.2} className="h-3.5 w-3.5" style={{ color: active ? "#FFFFFF" : meta.color }} />
      </span>
      <span className={cn("text-xs font-bold", active ? "text-white" : "text-[#0F172A]")}>
        Sin {meta.label}
      </span>
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";
import { ALLERGEN_META, type AllergenKey } from "./allergens";

export function AllergenToggleRow({
  allergenKey,
  active,
}: {
  allergenKey: AllergenKey;
  active: boolean;
}) {
  const meta = ALLERGEN_META[allergenKey];
  const Icon = meta.icon;

  return (
    <div className="flex items-center gap-3 py-2">
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: meta.bg }}
      >
        <Icon strokeWidth={2.2} className="h-4 w-4" style={{ color: meta.color }} />
      </span>
      <div className="min-w-0 flex-1">
        <p className={cn("text-xs font-bold", active ? "text-[#16A34A]" : "text-[#0F172A]")}>
          {meta.label}
        </p>
        <p className="truncate text-[10px] text-[#94A3B8]">{meta.sublabel}</p>
      </div>
      <span className={cn("h-4 w-8 shrink-0 rounded-full p-0.5", active ? "bg-[#16A34A]" : "bg-[#E2E8F0]")}>
        <span
          className={cn(
            "block h-3 w-3 rounded-full bg-white transition-transform",
            active && "translate-x-4",
          )}
        />
      </span>
    </div>
  );
}

import * as React from "react";
import { History, ScanLine, Star, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export type MockupTab = "scan" | "history" | "favorites" | "profile";

const TABS: { id: MockupTab; label: string; icon: typeof ScanLine }[] = [
  { id: "scan", label: "Escanear", icon: ScanLine },
  { id: "history", label: "Historial", icon: History },
  { id: "favorites", label: "Favoritos", icon: Star },
  { id: "profile", label: "Perfil", icon: UserRound },
];

export function MockupBottomNav({ activeTab }: { activeTab: MockupTab }) {
  return (
    <div className="mt-auto flex items-center justify-around border-t border-[#E2E8F0] bg-white px-2 py-3">
      {TABS.map((tab) => {
        const active = tab.id === activeTab;
        return (
          <div key={tab.id} className="flex flex-col items-center gap-1">
            <tab.icon
              strokeWidth={2.2}
              className={cn("h-4 w-4", active ? "text-[#16A34A]" : "text-[#94A3B8]")}
            />
            <span
              className={cn(
                "text-[9px] font-semibold",
                active ? "text-[#16A34A]" : "text-[#94A3B8]",
              )}
            >
              {tab.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

import * as React from "react";
import { cn } from "@/lib/utils";
import { STATUS_META, type StatusKey } from "./status";

type StatusShieldIconProps = {
  status: StatusKey;
  className?: string;
};

export function StatusShieldIcon({ status, className }: StatusShieldIconProps) {
  const meta = STATUS_META[status];
  const Icon = meta.icon;

  return (
    <div className={cn("relative inline-flex h-24 w-24 items-center justify-center", className)}>
      <div className="absolute inset-0 rounded-full" style={{ backgroundColor: meta.border, opacity: 0.15 }} />
      <div
        className="relative flex h-20 w-20 items-center justify-center rounded-[28px]"
        style={{ background: `linear-gradient(135deg, ${meta.gradientFrom}, ${meta.gradientTo})` }}
      >
        <Icon className="h-10 w-10 text-white" strokeWidth={3} />
      </div>
    </div>
  );
}

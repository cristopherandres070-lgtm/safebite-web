import * as React from "react";
import { cn } from "@/lib/utils";
import { SafeBiteShield } from "./SafeBiteShield";
import { SafeBiteLeaf } from "./SafeBiteLeaf";

type TrustShieldIllustrationProps = {
  className?: string;
};

export function TrustShieldIllustration({ className }: TrustShieldIllustrationProps) {
  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-[420px]", className)}>
      <div className="absolute inset-8 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute inset-10 rounded-full border border-emerald-200" />
      <div className="absolute inset-20 rounded-full border border-emerald-100" />

      <SafeBiteShield
        tone="light"
        className="absolute left-1/2 top-[43%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
      />

      <SafeBiteLeaf className="absolute bottom-10 left-8 h-24 w-40" rotate={-18} />
      <SafeBiteLeaf className="absolute bottom-12 right-2 h-28 w-48" rotate={8} />

      <div className="absolute left-[18%] top-[18%] h-2 w-2 rounded-full bg-emerald-300" />
      <div className="absolute right-[17%] top-[30%] h-3 w-3 rounded-full bg-emerald-200" />
      <div className="absolute bottom-[28%] left-[23%] h-2.5 w-2.5 rounded-full bg-lime-200" />
    </div>
  );
}

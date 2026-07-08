import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SafeBiteLogoProps = {
  className?: string;
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

export function SafeBiteLogo({ className, tone = "dark", size = "md" }: SafeBiteLogoProps) {
  const textColor = tone === "dark" ? "text-white" : "text-[#0F172A]";
  const sizes = {
    sm: {
      icon: "h-9 w-9",
      text: "text-xl",
    },
    md: {
      icon: "h-12 w-12",
      text: "text-2xl",
    },
    lg: {
      icon: "h-16 w-16",
      text: "text-4xl",
    },
  }[size];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/image/logo-safebite.png"
        alt="Safe Bite"
        width={128}
        height={128}
        className={cn("shrink-0 rounded-full object-cover", sizes.icon)}
      />
      <div className="leading-none">
        <div className={cn("font-black tracking-tight", sizes.text, textColor)}>
          Safe <span className="text-[#22C55E]">Bite</span>
        </div>
        {size === "lg" && (
          <div
            className={cn(
              "mt-2 text-xs font-bold uppercase tracking-[0.28em]",
              tone === "dark" ? "text-emerald-100/80" : "text-slate-500",
            )}
          >
            Verificador de alérgenos
          </div>
        )}
      </div>
    </div>
  );
}

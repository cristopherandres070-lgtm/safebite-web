import * as React from "react";
import { cn } from "@/lib/utils";

type SafeBiteLeafProps = {
  className?: string;
  rotate?: number;
};

export function SafeBiteLeaf({ className, rotate = -12 }: SafeBiteLeafProps) {
  return (
    <svg
      viewBox="0 0 120 72"
      aria-hidden="true"
      className={cn("pointer-events-none shrink-0", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sb-leaf-gradient" x1="15" y1="60" x2="110" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#365314" />
          <stop offset="0.45" stopColor="#65A30D" />
          <stop offset="1" stopColor="#BBF7D0" />
        </linearGradient>
      </defs>
      <path d="M8 58C36 10 86 5 113 14C103 45 72 72 8 58Z" fill="url(#sb-leaf-gradient)" />
      <path
        d="M16 55C45 42 72 29 105 16"
        stroke="#ECFCCB"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path d="M46 42C44 33 41 27 36 21" stroke="#DCFCE7" strokeWidth="1.2" opacity="0.5" />
      <path d="M68 31C66 22 63 17 58 12" stroke="#DCFCE7" strokeWidth="1.2" opacity="0.5" />
      <path d="M82 25C84 17 88 12 94 9" stroke="#DCFCE7" strokeWidth="1.2" opacity="0.5" />
    </svg>
  );
}

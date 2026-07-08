import * as React from "react";
import { cn } from "@/lib/utils";

type SafeBiteShieldProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function SafeBiteShield({ className, tone = "dark" }: SafeBiteShieldProps) {
  const isDark = tone === "dark";

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sb-shield-gradient" x1="10" y1="8" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22C55E" />
          <stop offset="1" stopColor="#15803D" />
        </linearGradient>
        <filter id="sb-shield-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.09 0 0 0 0 0.64 0 0 0 0 0.29 0 0 0 0.35 0"
          />
          <feBlend in="SourceGraphic" />
        </filter>
      </defs>

      <rect width="64" height="64" rx="18" fill="url(#sb-shield-gradient)" filter="url(#sb-shield-glow)" />

      <path
        d="M32 14L46 19V30.5C46 40.2 40.2 48.6 32 52C23.8 48.6 18 40.2 18 30.5V19L32 14Z"
        fill={isDark ? "#052E16" : "#ECFDF5"}
        fillOpacity={isDark ? 0.72 : 0.96}
        stroke="#BBF7D0"
        strokeWidth="2"
      />

      <path
        d="M25.5 32.5L30.1 37.1L39.2 26.8"
        stroke={isDark ? "#BBF7D0" : "#16A34A"}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M40.8 43.5C45.6 42.8 49.2 39.2 50 34.6C45.3 35.2 41.4 38.5 40.8 43.5Z"
        fill="#86EFAC"
      />
      <path
        d="M40.8 43.5C43.5 41.5 46.4 39.3 50 34.6"
        stroke="#15803D"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

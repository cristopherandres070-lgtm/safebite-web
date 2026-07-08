import { cn } from "@/lib/utils";

type AnimatedMeshBackgroundProps = {
  className?: string;
};

export function AnimatedMeshBackground({ className }: AnimatedMeshBackgroundProps) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 z-0 h-full w-full", className)}
      viewBox="0 0 1400 800"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M-100 120 C 300 40, 700 220, 1500 100"
        stroke="#22C55E"
        strokeOpacity="0.12"
        strokeWidth="1.5"
        className="mesh-line-a"
      />
      <path
        d="M-100 300 C 400 380, 900 180, 1500 320"
        stroke="#22C55E"
        strokeOpacity="0.1"
        strokeWidth="1.2"
        className="mesh-line-b"
      />
      <path
        d="M-100 480 C 350 400, 850 560, 1500 460"
        stroke="#22C55E"
        strokeOpacity="0.14"
        strokeWidth="1.5"
        className="mesh-line-c"
      />
      <path
        d="M-100 620 C 400 700, 950 540, 1500 650"
        stroke="#22C55E"
        strokeOpacity="0.08"
        strokeWidth="1"
        className="mesh-line-a"
        style={{ animationDelay: "-11s" }}
      />
      <path
        d="M-100 700 C 300 620, 800 760, 1500 680"
        stroke="#22C55E"
        strokeOpacity="0.1"
        strokeWidth="1.2"
        className="mesh-line-b"
        style={{ animationDelay: "-14s" }}
      />
    </svg>
  );
}

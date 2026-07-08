import * as React from "react";
import { CircleCheck, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { STATUS_META, type StatusKey } from "./status";

type Source = { type: "off" | "ai"; confidence: number };

/**
 * Card compacta de resultado (usada en Historial y en el resultado del Hero).
 * La fuente "off" (Open Food Facts) y "ai" (Análisis IA) son las 2 fuentes
 * vistas en la captura real; el ícono de Open Food Facts se aproxima con un
 * check verde y "Análisis IA" con Sparkles, ya que no existe un ícono exacto
 * de esas marcas en lucide-react.
 */
export function MockupResultCard({
  status,
  product,
  brand,
  allergen,
  source,
  time,
}: {
  status: StatusKey;
  product: string;
  brand?: string;
  allergen?: string;
  source: Source;
  time: string;
}) {
  const meta = STATUS_META[status];
  const confidenceColor = source.confidence >= 70 ? "text-[#16A34A]" : "text-[#DC2626]";

  return (
    <div
      className="rounded-xl border border-[#E2E8F0] bg-white p-3"
      style={{ borderLeftWidth: 4, borderLeftColor: meta.border }}
    >
      <span
        className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold"
        style={{ backgroundColor: meta.bg, color: meta.color }}
      >
        {meta.label}
      </span>

      <p className="mt-1.5 text-sm font-bold text-[#0F172A]">{product}</p>
      {brand && <p className="text-xs text-[#94A3B8]">{brand}</p>}

      {allergen && (
        <span className="mt-1.5 inline-block rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[10px] font-semibold text-[#64748B]">
          {allergen}
        </span>
      )}

      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="flex items-center gap-1 text-[10px] font-semibold text-[#64748B]">
          {source.type === "off" ? (
            <CircleCheck strokeWidth={2.2} className="h-3 w-3 shrink-0 text-[#16A34A]" />
          ) : (
            <Sparkles strokeWidth={2.2} className="h-3 w-3 shrink-0 text-[#94A3B8]" />
          )}
          {source.type === "off" ? "Open Food Facts" : "Análisis IA"}
          <span className={cn("font-bold", confidenceColor)}>{source.confidence}%</span>
        </span>
        <span className="shrink-0 text-[10px] text-[#94A3B8]">{time}</span>
      </div>
    </div>
  );
}

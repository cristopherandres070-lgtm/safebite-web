import * as React from "react";
import { ALLERGEN_META, ALLERGEN_ORDER } from "./allergens";

/**
 * Franja full-bleed (sin border-radius, ancho completo de viewport), no un
 * marquee animado — no existe uno en este proyecto. Se rompe fuera del
 * max-w del sitio con el truco left-1/2 + w-screen + -translate-x-1/2; debe
 * ser hijo directo de un contenedor de ancho completo (no de una columna de
 * grid angosta) para que el cálculo del centro sea correcto.
 */
export function AllergenStrip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative left-1/2 w-screen -translate-x-1/2 border-y border-white/10 ${className}`}
      style={{ backgroundColor: "#0B0F0C" }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 py-3.5 sm:gap-x-6 sm:px-8">
        {ALLERGEN_ORDER.map((key) => (
          <span
            key={key}
            className="whitespace-nowrap font-mono text-[10px] font-semibold uppercase tracking-wider text-[#DCFCE7] sm:text-xs"
          >
            — Sin {ALLERGEN_META[key].label}
          </span>
        ))}
      </div>
    </div>
  );
}

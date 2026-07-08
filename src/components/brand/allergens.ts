import type { LucideIcon } from "lucide-react";
import { CircleDot, Droplet, Egg, Leaf, Nut, Shell, Wheat } from "lucide-react";

export type AllergenKey =
  | "gluten"
  | "lactosa"
  | "nueces"
  | "huevo"
  | "soja"
  | "mariscos"
  | "sesamo";

type AllergenInfo = {
  icon: LucideIcon;
  color: string;
  bg: string;
  label: string;
  sublabel: string;
};

/**
 * Fuente única de verdad para íconos/colores por alérgeno.
 * "sesamo" usa CircleDot como aproximación (lucide-react no tiene un ícono
 * literal de sésamo/semillas) — reemplazar por un ícono custom si se necesita
 * fidelidad exacta a la captura de la app.
 */
export const ALLERGEN_META: Record<AllergenKey, AllergenInfo> = {
  gluten: {
    icon: Wheat,
    color: "#CA8A04",
    bg: "#FEF3C7",
    label: "Gluten",
    sublabel: "Trigo, cebada, centeno",
  },
  lactosa: {
    icon: Droplet,
    color: "#2563EB",
    bg: "#DBEAFE",
    label: "Lactosa",
    sublabel: "Leche y derivados",
  },
  nueces: {
    icon: Nut,
    color: "#A16207",
    bg: "#FEF9C3",
    label: "Nueces",
    sublabel: "Frutos secos",
  },
  huevo: {
    icon: Egg,
    color: "#EA580C",
    bg: "#FFEDD5",
    label: "Huevo",
    sublabel: "Huevo y derivados",
  },
  soja: {
    icon: Leaf,
    color: "#16A34A",
    bg: "#DCFCE7",
    label: "Soja",
    sublabel: "Soja y derivados",
  },
  mariscos: {
    icon: Shell,
    color: "#4F46E5",
    bg: "#E0E7FF",
    label: "Mariscos",
    sublabel: "Crustáceos y moluscos",
  },
  sesamo: {
    icon: CircleDot,
    color: "#9333EA",
    bg: "#F3E8FF",
    label: "Sésamo",
    sublabel: "Semillas de sésamo",
  },
};

export const ALLERGEN_ORDER: AllergenKey[] = [
  "gluten",
  "lactosa",
  "nueces",
  "huevo",
  "soja",
  "mariscos",
  "sesamo",
];

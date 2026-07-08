import type { LucideIcon } from "lucide-react";
import { AlertTriangle, HelpCircle, ShieldCheck, ShieldX } from "lucide-react";

export type StatusKey = "apto" | "precaucion" | "no_apto" | "desconocido";

type StatusInfo = {
  icon: LucideIcon;
  label: string;
  color: string;
  bg: string;
  border: string;
  gradientFrom: string;
  gradientTo: string;
};

/**
 * Fuente única de verdad para los 3+1 estados de veredicto (Decision System,
 * StatusShieldIcon, cards de historial/resultado en los mockups).
 */
export const STATUS_META: Record<StatusKey, StatusInfo> = {
  apto: {
    icon: ShieldCheck,
    label: "APTO",
    color: "#16A34A",
    bg: "#DCFCE7",
    border: "#16A34A",
    gradientFrom: "#4ADE80",
    gradientTo: "#15803D",
  },
  precaucion: {
    icon: AlertTriangle,
    label: "PRECAUCIÓN",
    color: "#B45309",
    bg: "#FEF3C7",
    border: "#F59E0B",
    gradientFrom: "#FCD34D",
    gradientTo: "#D97706",
  },
  no_apto: {
    icon: ShieldX,
    label: "NO APTO",
    color: "#DC2626",
    bg: "#FEE2E2",
    border: "#DC2626",
    gradientFrom: "#F87171",
    gradientTo: "#B91C1C",
  },
  desconocido: {
    icon: HelpCircle,
    label: "DESCONOCIDO",
    color: "#B45309",
    bg: "#FEF3C7",
    border: "#D97706",
    gradientFrom: "#FBBF24",
    gradientTo: "#B45309",
  },
};

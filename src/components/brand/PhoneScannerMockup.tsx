import * as React from "react";
import Image from "next/image";
import { Camera, ScanLine } from "lucide-react";
import { cn } from "@/lib/utils";
import { AllergenChip } from "./AllergenChip";
import { AllergenToggleRow } from "./AllergenToggleRow";
import { MockupResultCard } from "./MockupResultCard";
import { MockupBottomNav } from "./MockupBottomNav";
import { ALLERGEN_ORDER } from "./allergens";

type PhoneScannerMockupProps = {
  variant?: "scanner" | "restrictions" | "history" | "profile-full";
  className?: string;
};

function AppHeader() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-br from-[#16A34A] to-[#0B3D24] px-5 py-4">
      <div className="flex items-center gap-2">
        <Image
          src="/image/logo-safebite.png"
          alt="Safe Bite"
          width={64}
          height={64}
          className="h-8 w-8 shrink-0 rounded-full object-cover ring-2 ring-white/40"
        />
        <p className="text-sm font-bold text-white">Safe Bite</p>
      </div>
      <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold text-white">
        1 activo
      </span>
    </div>
  );
}

function ScannerScreen() {
  return (
    <>
      <AppHeader />

      <div className="flex flex-col gap-4 px-5 pb-5 pt-5">
        <div className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#0B1120] text-center">
          <div className="bg-dot-grid-dark pointer-events-none absolute inset-0 opacity-40" />
          <div className="absolute left-3 top-3 h-5 w-5 rounded-tl-lg border-l-2 border-t-2 border-[#22C55E]" />
          <div className="absolute right-3 top-3 h-5 w-5 rounded-tr-lg border-r-2 border-t-2 border-[#22C55E]" />
          <div className="absolute bottom-3 left-3 h-5 w-5 rounded-bl-lg border-b-2 border-l-2 border-[#22C55E]" />
          <div className="absolute bottom-3 right-3 h-5 w-5 rounded-br-lg border-b-2 border-r-2 border-[#22C55E]" />

          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#334155]">
            <Camera strokeWidth={1.8} className="h-5 w-5 text-[#94A3B8]" />
          </span>
          <p className="relative mt-2.5 text-xs font-bold text-white">Sin acceso a la cámara</p>
          <p className="relative mt-1 max-w-[85%] text-[10px] leading-snug text-[#64748B]">
            Permite el acceso en la configuración del navegador
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-full bg-[#16A34A] py-3 text-xs font-bold uppercase tracking-wide text-white"
        >
          <ScanLine strokeWidth={2.2} className="h-4 w-4" />
          Verificar alérgenos
        </button>

        <MockupResultCard
          status="precaucion"
          product="Barra de Cereal Integral"
          brand="Vitalis"
          allergen="Sin Gluten"
          source={{ type: "ai", confidence: 41 }}
          time="Hace unos segundos"
        />
        <p className="text-center text-[9px] leading-snug text-[#94A3B8]">
          Basado en ingredientes declarados por el fabricante
        </p>
      </div>

      <MockupBottomNav activeTab="scan" />
    </>
  );
}

function RestrictionsScreen() {
  return (
    <>
      <AppHeader />

      <div className="flex flex-col gap-3 px-5 pb-4 pt-5">
        <p className="text-xs font-semibold text-[#64748B]">Mis restricciones</p>
        <div className="grid grid-cols-2 gap-2">
          {ALLERGEN_ORDER.map((key) => (
            <AllergenChip key={key} allergenKey={key} active={key === "gluten"} />
          ))}
        </div>
      </div>

      <MockupBottomNav activeTab="scan" />
    </>
  );
}

function HistoryScreen() {
  return (
    <>
      <div className="bg-white px-5 pb-3 pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#16A34A]">Safe Bite</p>
            <p className="text-xl font-black text-[#0F172A]">Historial</p>
          </div>
          <span className="mt-1 text-xs font-medium text-[#94A3B8]">Limpiar</span>
        </div>

        <div className="mt-3 flex gap-2">
          <span className="rounded-full bg-[#0F172A] px-3 py-1.5 text-[10px] font-bold text-white">
            Todos 5
          </span>
          <span className="rounded-full bg-[#DCFCE7] px-3 py-1.5 text-[10px] font-bold text-[#16A34A]">
            Aptos 4
          </span>
          <span className="rounded-full bg-[#FEF3C7] px-3 py-1.5 text-[10px] font-bold text-[#B45309]">
            Precaución
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 bg-[#F7FAF7] px-5 py-4">
        <MockupResultCard
          status="apto"
          product="Pepsi Zero Azúcar"
          brand="Pepsi"
          allergen="Sin Gluten"
          source={{ type: "off", confidence: 92 }}
          time="Hace 5 días"
        />
        <MockupResultCard
          status="desconocido"
          product="French Fries / Papas Fritas"
          brand="No identificada"
          allergen="Sin Gluten"
          source={{ type: "ai", confidence: 5 }}
          time="Hace 5 días"
        />
      </div>

      <MockupBottomNav activeTab="history" />
    </>
  );
}

function ProfileFullScreen() {
  return (
    <>
      <div className="flex items-center gap-3 bg-gradient-to-br from-[#16A34A] to-[#0B3D24] px-5 py-6">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
          MJ
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-white">María Soto</p>
          <p className="truncate text-xs text-white/70">maria.soto@ejemplo.cl</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-5 pb-4 pt-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-[#F0FDF4] p-3">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#64748B]">Plan</p>
            <p className="mt-0.5 text-sm font-black text-[#16A34A]">Free</p>
          </div>
          <div className="rounded-xl bg-[#F0FDF4] p-3">
            <p className="text-[9px] font-bold uppercase tracking-wider text-[#64748B]">Escaneos</p>
            <p className="mt-0.5 text-sm font-black text-[#0F172A]">
              8 <span className="text-[10px] font-medium text-[#64748B]">este mes</span>
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-[#0F172A]">Mis Alérgenos</p>
          <p className="text-[10px] text-[#94A3B8]">1 restricción activa</p>
          <div className="mt-1.5 divide-y divide-[#F1F5F9]">
            {ALLERGEN_ORDER.slice(0, 4).map((key) => (
              <AllergenToggleRow key={key} allergenKey={key} active={key === "gluten"} />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-bold text-[#0F172A]">Nivel de sensibilidad</p>
          <div className="mt-2 flex flex-col gap-2">
            <div className="rounded-xl border border-[#16A34A]/30 bg-[#F0FDF4] p-3">
              <div className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full border-4 border-[#16A34A]" />
                <p className="text-xs font-bold text-[#0F172A]">Intolerancia</p>
              </div>
              <p className="mt-1 pl-5 text-[10px] leading-snug text-[#64748B]">
                Las advertencias de trazas se muestran como precaución.
              </p>
            </div>
            <div className="rounded-xl border border-[#E2E8F0] p-3">
              <div className="flex items-center gap-2">
                <span className="h-3.5 w-3.5 rounded-full border-2 border-[#CBD5E1]" />
                <p className="text-xs font-bold text-[#0F172A]">Alergia severa</p>
              </div>
              <p className="mt-1 pl-5 text-[10px] leading-snug text-[#64748B]">
                Las advertencias de trazas se elevan a NO APTO. Mayor protección.
              </p>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="rounded-full bg-[#DCFCE7] py-2.5 text-xs font-bold uppercase tracking-wide text-[#16A34A]"
        >
          Guardar perfil
        </button>
      </div>

      <MockupBottomNav activeTab="profile" />
    </>
  );
}

export function PhoneScannerMockup({ variant = "scanner", className }: PhoneScannerMockupProps) {
  return (
    <div
      className={cn(
        "relative w-[250px] shrink-0 rounded-[44px] bg-gradient-to-b from-[#27272A] to-[#09090B] p-[9px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4),0_8px_16px_-6px_rgba(0,0,0,0.35)] sm:w-[290px]",
        className,
      )}
    >
      {/* side buttons */}
      <span className="absolute left-[-2px] top-[84px] h-7 w-[3px] rounded-l-full bg-[#3F3F46]" aria-hidden="true" />
      <span className="absolute left-[-2px] top-[120px] h-7 w-[3px] rounded-l-full bg-[#3F3F46]" aria-hidden="true" />
      <span className="absolute right-[-2px] top-[100px] h-11 w-[3px] rounded-r-full bg-[#3F3F46]" aria-hidden="true" />

      <div className="relative flex min-h-[460px] flex-col overflow-hidden rounded-[36px] bg-white sm:min-h-[520px]">
        <div className="absolute left-1/2 top-3 z-20 h-[28px] w-[90px] -translate-x-1/2 rounded-[20px] bg-black" aria-hidden="true" />

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />

        <div className="flex flex-1 flex-col pt-9">
          {variant === "scanner" && <ScannerScreen />}
          {variant === "restrictions" && <RestrictionsScreen />}
          {variant === "history" && <HistoryScreen />}
          {variant === "profile-full" && <ProfileFullScreen />}
        </div>
      </div>
    </div>
  );
}

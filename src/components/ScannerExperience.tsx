"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Camera, ScanLine, ShieldCheck, UserRound } from "lucide-react";
import { Reveal } from "./Reveal";
import { AllergyPill } from "./brand/AllergyPill";
import { EASE_OUT } from "@/lib/motion";

const BARS = [
  { label: "Ingredientes detectados", width: "80%", bar: "bg-green-500" },
  { label: "Posibles trazas", width: "50%", bar: "bg-amber-400" },
  { label: "Advertencias", width: "25%", bar: "bg-red-500" },
];

const STEPS = [
  {
    icon: UserRound,
    title: "Perfil",
    desc: "Define lo que evitas: alergias, intolerancias y el nivel de riesgo que estás dispuesto a asumir.",
    visual: (
      <div className="flex flex-wrap gap-1.5">
        <AllergyPill tone="green" className="px-2.5 py-1 text-[11px]">
          Gluten
        </AllergyPill>
        <AllergyPill tone="green" className="px-2.5 py-1 text-[11px]">
          Nueces
        </AllergyPill>
        <AllergyPill tone="blue" className="px-2.5 py-1 text-[11px]">
          Lactosa
        </AllergyPill>
      </div>
    ),
  },
  {
    icon: ScanLine,
    title: "Escaneo",
    desc: "Apunta la cámara a la etiqueta o al código de barras del producto que quieres revisar.",
    visual: (
      <div className="relative flex h-20 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#0B0F0C] to-[#1F2937]">
        <Camera strokeWidth={1.5} className="h-7 w-7 text-white/30" />
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "100%" }}
          transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop", ease: EASE_OUT }}
          className="absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-[#22C55E]/60 to-transparent"
        />
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "Revisión",
    desc: "Cruzamos ingredientes, trazas y advertencias contra tu perfil en cuestión de segundos.",
    visual: (
      <div className="flex flex-col gap-2">
        {BARS.map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            <span className="w-[92px] shrink-0 text-[10px] font-medium text-[#64748B]">{row.label}</span>
            <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: row.width }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE_OUT }}
                className={`block h-full rounded-full transition-all ${row.bar}`}
              />
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Resultado",
    desc: "Recibes un veredicto simple: Apto, Precaución o No apto, con el motivo explicado.",
    visual: (
      <div className="inline-flex items-center gap-2 rounded-full border border-green-300 bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
        <ShieldCheck strokeWidth={2.2} className="h-4 w-4" />
        APTO
      </div>
    ),
  },
];

export function ScannerExperience() {
  return (
    <section
      id="scanner-flow"
      className="relative overflow-hidden bg-[#F7FAF7] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2
              className="text-3xl font-extrabold text-[#0F172A] sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-1px" }}
            >
              De la etiqueta a una decisión clara.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 text-lg text-[#64748B]">
              Safe Bite cruza ingredientes, trazas y tu perfil en segundos.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 90} className="relative">
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:gap-5 sm:p-7">
                <div className="flex flex-col items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#16A34A] to-[#0B3D24] text-white shadow-[0_6px_16px_rgba(22,163,74,0.3)]">
                    <step.icon strokeWidth={2} className="h-5 w-5" />
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold text-[#0F172A]">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#64748B]">{step.desc}</p>
                </div>
                <div className="mt-auto">{step.visual}</div>
              </div>

              {i < STEPS.length - 1 && (
                <ArrowRight
                  strokeWidth={2.5}
                  className="absolute -right-5 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-[#16A34A]/30 lg:block"
                />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

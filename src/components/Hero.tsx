"use client";

import { motion } from "framer-motion";
import { ArrowRight, CircleCheck, PlayCircle, Sparkles } from "lucide-react";
import { EASE_OUT } from "@/lib/motion";
import { PhoneScannerMockup } from "./brand/PhoneScannerMockup";
import { AnimatedMeshBackground } from "./brand/AnimatedMeshBackground";
import { AllergenStrip } from "./brand/AllergenStrip";

const APP_URL = "https://app.safebite.cl";

const BULLETS = [
  "Detecta alérgenos y trazas",
  "Personaliza tu perfil de riesgo",
  "Recibe una respuesta clara al instante",
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24"
      style={{
        background: "linear-gradient(160deg, #052E16 0%, #0B3D24 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.06] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_20%,black,transparent)]" />
      <div className="animate-float-slow pointer-events-none absolute -top-48 left-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#16A34A]/20 blur-[120px]" />
      <AnimatedMeshBackground />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative mx-auto grid max-w-[1400px] gap-12 px-5 pb-20 pt-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-28 lg:pt-10"
      >
        <div className="text-center lg:text-left">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#DCFCE7]"
          >
            <Sparkles strokeWidth={2.2} className="h-3.5 w-3.5 text-[#4ADE80]" />
            Beta en Chile
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
            style={{ letterSpacing: "-1.5px" }}
          >
            Escanea productos.
            <br />
            Detecta riesgos.
            <br />
            Decide con <span className="text-shimmer">confianza</span>.
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-6 max-w-md text-lg text-[#DCFCE7]/75 lg:mx-0 lg:max-w-lg">
            Safe Bite revisa ingredientes, trazas y advertencias según tu perfil alimentario.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <a
              href={APP_URL}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16A34A] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] transition-[background-color,transform] duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#22C55E] active:scale-[0.97] sm:w-auto"
            >
              Probar beta
              <ArrowRight strokeWidth={2.2} className="h-4 w-4" />
            </a>

            <a
              href="#scanner-flow"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white transition-colors duration-300 [@media(hover:hover)_and_(pointer:fine)]:hover:border-white/40 sm:w-auto"
            >
              Ver cómo funciona
              <PlayCircle strokeWidth={2} className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.ul
            variants={item}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 text-left sm:max-w-none lg:mx-0"
          >
            {BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2.5 text-sm font-medium text-[#DCFCE7]/85">
                <CircleCheck strokeWidth={2.2} className="h-4 w-4 shrink-0 text-[#4ADE80]" />
                {bullet}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          variants={item}
          className="relative mx-auto flex h-[400px] w-full max-w-md items-center justify-center sm:h-[460px] lg:h-[540px] lg:max-w-none"
        >
          <div className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#22C55E]/20 blur-[80px] sm:h-96 sm:w-96" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: EASE_OUT }}
            className="relative z-10"
          >
            <PhoneScannerMockup variant="scanner" />
          </motion.div>
        </motion.div>
      </motion.div>

      <AllergenStrip />
    </section>
  );
}

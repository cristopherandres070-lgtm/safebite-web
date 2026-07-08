"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { EASE_OUT } from "@/lib/motion";

const ITEMS = [
  {
    q: "¿Reemplaza leer la etiqueta?",
    a: "No. Te ayuda a revisar, pero siempre debes confirmar en el envase.",
  },
  {
    q: "¿Funciona con productos chilenos?",
    a: "Estamos priorizando productos disponibles en Chile.",
  },
  {
    q: "¿Qué pasa si no reconoce un producto?",
    a: "Puedes escanear directamente la lista de ingredientes.",
  },
  {
    q: "¿Qué significa Precaución?",
    a: "Hay trazas o advertencias que conviene revisar.",
  },
  {
    q: "¿Está disponible para todos?",
    a: "Está en beta y seguiremos abriendo accesos.",
  },
];

function FaqIllustration() {
  return (
    <div className="relative flex h-full min-h-[180px] items-center justify-center lg:min-h-[420px]">
      <div className="pointer-events-none absolute h-40 w-40 rounded-full bg-[#16A34A]/[0.08] blur-3xl lg:h-80 lg:w-80" />
      <div className="relative w-full max-w-[200px] lg:max-w-[320px]">
        <Image
          src="/image/trust-shield-safebite.png"
          alt="Escudo verde de confianza Safe Bite con hojas"
          width={1254}
          height={1254}
          sizes="(min-width: 1024px) 320px, 200px"
          className="h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}

export function VisualFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-white px-5 py-32 sm:px-8 sm:py-40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[#16A34A]/[0.05] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="text-center sm:text-left">
            <Reveal>
              <h2
                className="text-3xl font-extrabold text-[#0F172A] sm:text-4xl"
                style={{ letterSpacing: "-0.5px" }}
              >
                Preguntas frecuentes
              </h2>
            </Reveal>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-[#E2E8F0]">
            {ITEMS.map((item, i) => {
              const isOpen = open === i;

              return (
                <Reveal key={item.q} delay={i * 60}>
                  <div
                    className={`border-b border-[#E2E8F0] last:border-b-0 ${isOpen ? "bg-[#F7FAF7]" : "bg-white"}`}
                  >
                    <motion.button
                      layout
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      whileTap={{
                        scale: 0.99,
                        transition: { duration: 0.12, ease: EASE_OUT },
                      }}
                      transition={{ duration: 0.2, ease: EASE_OUT }}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#F7FAF7]"
                    >
                      <span className="font-semibold text-[#0F172A]">
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2, ease: EASE_OUT }}
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${isOpen ? "bg-[#16A34A] text-white" : "bg-[#F7FAF7] text-[#64748B]"}`}
                      >
                        <ChevronDown strokeWidth={2} className="h-4 w-4" />
                      </motion.span>
                    </motion.button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2, ease: EASE_OUT }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm leading-relaxed text-[#64748B]">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <FaqIllustration />
      </div>
    </section>
  );
}

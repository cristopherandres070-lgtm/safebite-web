"use client";

import { History, Sliders, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { FeatureIcon } from "./icons";
import { PhoneScannerMockup } from "./brand/PhoneScannerMockup";

const BLOCKS = [
  {
    icon: Sliders,
    variant: "restrictions" as const,
    title: "Perfil alimentario",
    desc: "Configura alergias, intolerancias y nivel de sensibilidad.",
  },
  {
    icon: History,
    variant: "history" as const,
    title: "Historial y favoritos",
    desc: "Guarda tus escaneos y revisa productos fácilmente.",
  },
  {
    icon: UserRound,
    variant: "profile-full" as const,
    title: "Perfil completo",
    desc: "Gestiona tus alérgenos y tu nivel de sensibilidad cuando quieras.",
  },
];

export function ProductScreens() {
  return (
    <section
      id="product-preview"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[#16A34A]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2
              className="text-3xl font-extrabold text-[#0F172A] sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-1px" }}
            >
              Una app pensada para tu perfil.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 text-lg text-[#64748B]">
              No todos comen con el mismo riesgo.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-6">
          {BLOCKS.map((block, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={block.title}>
                <div
                  className={cn(
                    "grid grid-cols-1 items-center gap-10 rounded-[2rem] p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16",
                    i % 2 === 0 ? "bg-[#F7FAF7]" : "bg-white",
                  )}
                >
                  <div
                    className={cn(
                      "flex justify-center",
                      reversed ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <div className="relative flex items-center justify-center">
                      <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-[#16A34A]/[0.08] blur-3xl" />
                      <PhoneScannerMockup variant={block.variant} className="relative" />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "text-center lg:text-left",
                      reversed ? "lg:order-1" : "lg:order-2",
                    )}
                  >
                    <FeatureIcon icon={block.icon} className="mx-auto h-14 w-14 lg:mx-0" />
                    <p className="mt-5 text-2xl font-extrabold text-[#0F172A] sm:text-3xl" style={{ letterSpacing: "-0.5px" }}>
                      {block.title}
                    </p>
                    <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[#64748B] lg:mx-0">
                      {block.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

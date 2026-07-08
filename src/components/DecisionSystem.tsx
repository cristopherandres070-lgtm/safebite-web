"use client";

import { Reveal } from "./Reveal";
import { MotionSection } from "./MotionSection";
import { MotionCard } from "./MotionCard";
import { StatusShieldIcon } from "./brand/StatusShieldIcon";
import { AnimatedMeshBackground } from "./brand/AnimatedMeshBackground";
import { STATUS_META, type StatusKey } from "./brand/status";

const STATES: { status: StatusKey; desc: string }[] = [
  { status: "apto", desc: "Sin conflictos detectados." },
  { status: "precaucion", desc: "Revisa trazas o advertencias." },
  { status: "no_apto", desc: "Evítalo según tu perfil." },
];

export function DecisionSystem() {
  return (
    <section
      id="decision-system"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
      style={{
        background: "linear-gradient(160deg, #052E16 0%, #0B3D24 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.06]" />
      <div className="animate-float-slow pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#16A34A]/15 blur-[100px]" />
      <AnimatedMeshBackground />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2
              className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-1px" }}
            >
              Una decisión. Tres estados.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 text-lg text-[#DCFCE7]/70">
              Simple para leer. Responsable para decidir.
            </p>
          </Reveal>
        </div>

        <MotionSection className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {STATES.map(({ status, desc }) => {
            const meta = STATUS_META[status];
            return (
              <MotionCard
                key={status}
                className="hover-lift relative flex flex-col items-center gap-3 overflow-hidden rounded-[2rem] border p-10 text-center backdrop-blur-sm"
                style={{
                  borderColor: `${meta.border}33`,
                  backgroundColor: "rgba(255,255,255,0.03)",
                }}
              >
                <div
                  className="pointer-events-none absolute inset-x-8 -top-16 h-40 rounded-full blur-[70px]"
                  style={{ backgroundColor: meta.border, opacity: 0.1 }}
                />

                <StatusShieldIcon status={status} className="relative" />
                <div className="relative mt-2">
                  <p className="text-2xl font-black" style={{ color: meta.gradientFrom, letterSpacing: "-0.3px" }}>
                    {meta.label}
                  </p>
                  <p className="mt-2 text-sm text-[#DCFCE7]/80">{desc}</p>
                </div>
              </MotionCard>
            );
          })}
        </MotionSection>
      </div>
    </section>
  );
}

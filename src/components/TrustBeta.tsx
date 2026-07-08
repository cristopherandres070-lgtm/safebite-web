import { AlertTriangle, CircleCheck, Database, Lock, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { MotionSection } from "./MotionSection";
import { MotionCard } from "./MotionCard";
import { FeatureIcon } from "./icons";

const APP_URL = "https://app.safebite.cl";

const CARDS = [
  {
    icon: ShieldCheck,
    title: "Beta cerrada completada",
    desc: "Probado por personas con alergias reales.",
  },
  {
    icon: CircleCheck,
    title: "Productos locales en mejora",
    desc: "Cada día reconocemos más etiquetas chilenas.",
  },
  {
    icon: Lock,
    title: "Historial privado",
    desc: "Tus escaneos se guardan solo en tu cuenta.",
  },
  {
    icon: Database,
    title: "Datos separados por usuario",
    desc: "Tu perfil y preferencias son tuyos.",
  },
];

export function TrustBeta() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden bg-white px-5 py-32 sm:px-8 sm:py-40"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center sm:text-left">
          <Reveal>
            <h2
              className="text-4xl font-extrabold text-[#0F172A] sm:text-5xl"
              style={{ letterSpacing: "-1px" }}
            >
              Construido con cuidado.
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mx-auto mt-5 max-w-lg text-lg text-[#64748B] sm:mx-0">
              Estamos mejorando Safe Bite con usuarios reales en Chile.
            </p>
          </Reveal>
        </div>

        <MotionSection className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <MotionCard
              key={card.title}
              className="flex flex-col items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-[#F7FAF7] p-6 text-left"
            >
              <FeatureIcon icon={card.icon} className="h-9 w-9" />
              <div>
                <p className="text-sm font-bold text-[#0F172A]">{card.title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#64748B]">
                  {card.desc}
                </p>
              </div>
            </MotionCard>
          ))}
        </MotionSection>

        <Reveal delay={220}>
          <div className="mt-10 flex flex-col items-center gap-6 rounded-3xl border border-[#E2E8F0] bg-[#F7FAF7] p-6 sm:flex-row sm:justify-between sm:p-7">
            <div className="flex gap-3 text-left">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FEF3C7] text-[#F59E0B]">
                <AlertTriangle strokeWidth={1.8} className="h-4.5 w-4.5" />
              </span>
              <p className="max-w-md text-sm leading-relaxed text-[#64748B]">
                Safe Bite es una herramienta de apoyo. Revisa siempre el
                envase y consulta a un profesional si tienes alergias severas.
              </p>
            </div>
            <a
              href={APP_URL}
              className="hover-lift-sm w-full shrink-0 rounded-full bg-[#16A34A] px-8 py-3.5 text-center text-sm font-bold text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#22C55E] active:scale-[0.97] active:duration-150 sm:w-auto"
            >
              Quiero probar Safe Bite
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

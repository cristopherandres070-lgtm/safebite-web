import Link from "next/link";
import { MapPin, Music2 } from "lucide-react";
import { SafeBiteLogo } from "./brand/SafeBiteLogo";

const APP_URL = "https://app.safebite.cl";
const TIKTOK_URL = "#";

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden px-5 py-14 sm:px-8"
      style={{
        background: "linear-gradient(160deg, #052E16 0%, #0B3D24 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.05]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-full max-w-4xl -translate-x-1/2 bg-gradient-to-r from-transparent via-[#22C55E]/30 to-transparent" />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <SafeBiteLogo tone="dark" className="justify-center md:justify-start" />
          <p className="mt-3 max-w-xs text-sm text-[#DCFCE7]/70">
            Verificador de alérgenos alimentarios
          </p>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#DCFCE7]/60 md:justify-start">
            <MapPin strokeWidth={2.2} className="h-3.5 w-3.5 text-[#4ADE80]" />
            Hecho en Chile
          </p>
        </div>

        <div className="flex flex-col items-center gap-5 md:items-end">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-[#DCFCE7]/80">
            <Link
              href="/privacidad"
              className="transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:text-white"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:text-white"
            >
              Términos
            </Link>
            <a
              href="mailto:contacto@safebite.cl"
              className="transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:text-white"
            >
              Contacto
            </a>
            <a
              href={TIKTOK_URL}
              aria-label="Safe Bite en TikTok"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[#DCFCE7]/80 transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:border-white/40 [@media(hover:hover)_and_(pointer:fine)]:hover:text-white"
            >
              <Music2 strokeWidth={2} className="h-3.5 w-3.5" />
            </a>
            <a
              href={APP_URL}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-white transition-colors [@media(hover:hover)_and_(pointer:fine)]:hover:border-white/40"
            >
              Acceso beta
            </a>
          </div>
        </div>
      </div>

      <p className="relative mx-auto mt-10 max-w-[1200px] border-t border-white/10 pt-6 text-center text-xs text-[#DCFCE7]/50">
        © {new Date().getFullYear()} Safe Bite. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}

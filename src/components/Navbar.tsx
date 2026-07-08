"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { SafeBiteLogo } from "./brand/SafeBiteLogo";

const APP_URL = "https://app.safebite.cl";

const LINKS = [
  { href: "#scanner-flow", label: "Cómo funciona" },
  { href: "#product-preview", label: "Características" },
  { href: "#trust", label: "Confianza" },
  { href: "#faq", label: "Preguntas" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#052E16]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 sm:px-8 sm:py-5">
        <a href="#top" aria-label="Safe Bite, ir al inicio">
          <SafeBiteLogo tone="dark" />
        </a>

        <div
          className="hidden items-center gap-8 text-base font-medium text-[#DCFCE7]/80 md:flex"
          style={{ "--hover-color": "#ffffff" } as React.CSSProperties}
        >
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="interactive-hover">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={APP_URL}
            className="hidden items-center gap-1.5 rounded-full bg-[#16A34A] px-6 py-3 text-sm font-semibold text-white transition-[background-color,transform] duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:bg-[#22C55E] active:scale-[0.97] sm:inline-flex"
          >
            Probar beta
            <ArrowRight strokeWidth={2.2} className="h-3.5 w-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          >
            {menuOpen ? (
              <X strokeWidth={2} className="h-5 w-5" />
            ) : (
              <Menu strokeWidth={2} className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#052E16] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm font-medium text-[#DCFCE7]/80">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_URL}
              className="mt-1 rounded-full bg-[#16A34A] px-5 py-2.5 text-center text-sm font-semibold text-white transition-transform duration-200 active:scale-[0.97]"
            >
              Probar beta
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

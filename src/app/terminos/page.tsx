import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos - Safe Bite",
  description: "Términos de uso de Safe Bite.",
  alternates: {
    canonical: "https://www.safebite.cl/terminos",
  },
};

export default function TerminosPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-[#0F172A]">
      <Navbar />
      <main className="mx-auto w-full max-w-[900px] flex-1 px-5 py-24 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="h-28 w-28 overflow-hidden rounded-[1.75rem] shadow-[0_12px_30px_rgba(5,46,22,0.25)] sm:h-32 sm:w-32">
            <Image
              src="/image/logo-safebite.png"
              alt="Safe Bite, verificador de alérgenos"
              width={256}
              height={256}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="mt-6 inline-flex items-center rounded-full border border-[#E2E8F0] bg-[#F7FAF7] px-4 py-1.5 text-xs font-semibold text-[#64748B]">
            Documento legal
          </span>
        </div>
        <h1
          className="mt-6 text-center text-3xl font-extrabold sm:text-4xl"
          style={{ letterSpacing: "-0.5px" }}
        >
          Términos de uso
        </h1>
        <p className="mt-8 rounded-3xl border border-[#E2E8F0] bg-[#F7FAF7] p-7 text-[#64748B]">
          Esta página está en preparación. Safe Bite está trabajando en sus
          términos de uso antes del lanzamiento público.
        </p>
        <div className="text-center">
          <Link
            href="/"
            className="mt-8 inline-block text-sm font-semibold text-[#16A34A] hover:text-[#0B3D24]"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

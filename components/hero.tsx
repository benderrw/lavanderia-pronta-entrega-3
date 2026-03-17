"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useGsapFadeIn } from "@/lib/gsap";

export function Hero() {
  const heroRef = useGsapFadeIn<HTMLDivElement>();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50/60"
      aria-label="Lavanderia Pronta Entrega 3 em Pelotas"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/hero-background.jpg"
          alt=""
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-white/60 via-white/45 to-slate-100/35" />
      </div>

      <div
        ref={heroRef}
        className="relative z-10 mx-auto flex w-full max-w-2xl flex-col gap-10 px-4 py-24 sm:px-6 lg:px-8"
      >
        <div className="space-y-6">
          <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Sua roupa pronta, cheirosa e entregue{" "}
            <span className="text-primary">no tempo certo.</span>
          </h1>
          <p className="max-w-lg text-base text-slate-600 sm:text-lg">
            A Lavanderia Pronta Entrega 3 cuida das suas peças com carinho e
            oferece retirada e entrega no Jardim das Tradições e regiões
            próximas. Atendimento ágil, pronto para o seu dia a dia.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/5553984394682?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20r%C3%A1pido%20de%20lavanderia"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:bg-secondary"
            >
              Pedir orçamento rápido
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-6 grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
              <p className="font-semibold text-slate-900">Retirada &amp; entrega</p>
              <p className="text-xs text-slate-500">
                Comodidade para você não se preocupar com deslocamento.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
              <p className="font-semibold text-slate-900">Peças delicadas</p>
              <p className="text-xs text-slate-500">
                Cuidado especial com edredons, ternos e roupas sociais.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-3 shadow-sm">
              <p className="font-semibold text-slate-900">Avaliação no Google</p>
              <p className="text-xs text-slate-500">
                Clientes satisfeitos recomendam a Lavanderia Pronta Entrega 3.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


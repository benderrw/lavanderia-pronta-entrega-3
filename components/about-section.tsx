"use client";

import Image from "next/image";
import { SectionWrapper } from "./section-wrapper";
import { useGsapFadeIn } from "@/lib/gsap";

const values = [
  {
    title: "Cuidado",
    description:
      "Cuidado especial com tecidos delicados e peças favoritas.",
  },
  {
    title: "Praticidade",
    description:
      "Retirada e entrega combinadas conforme a sua disponibilidade.",
  },
  {
    title: "Experiência",
    description:
      "Equipe experiente e atendimento direto pelo WhatsApp.",
  },
  {
    title: "Qualidade",
    description:
      "Foco em praticidade sem abrir mão da qualidade.",
  },
] as const;

export function AboutSection() {
  const aboutRef = useGsapFadeIn<HTMLDivElement>({ delay: 0.1 });

  return (
    <SectionWrapper
      id="sobre"
      className="border-y border-border bg-surface"
      containerClassName="max-w-7xl px-4 py-32 sm:px-6 lg:px-8"
    >
      <div
        ref={aboutRef}
        className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20"
      >
        {/* Coluna 1: imagem */}
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border">
          <Image
            src="/atendimento.jpg"
            alt="Profissional da lavanderia concentrada trabalhando"
            fill
            className="object-cover opacity-90"
            loading="lazy"
          />
        </div>

        {/* Coluna 2: texto */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-light tracking-tight text-foreground lg:text-5xl">
            Sobre a Lavanderia Pronta Entrega 3
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Localizada no Jardim das Tradições, em Pelotas/RS, a Lavanderia
            Pronta Entrega 3 nasceu para facilitar a sua rotina. Cuidamos das
            suas roupas como se fossem nossas, com processos pensados para
            garantir limpeza, conservação e praticidade. Seja para o dia a dia
            da família, enxoval, peças sociais ou itens volumosos, oferecemos
            serviços completos com retirada e entrega, sempre com atendimento
            próximo pelo WhatsApp.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            {values.map(({ title, description }) => (
              <div key={title}>
                <h3 className="text-sm font-medium uppercase tracking-wider text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

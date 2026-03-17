"use client";

import Image from "next/image";
import { WashingMachine, Shirt, Sofa, Sparkles, Flame, type LucideIcon } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { useGsapFadeIn } from "@/lib/gsap";

/** Altura padrão da área de imagem em todos os cards (px). */
const CARD_IMAGE_HEIGHT = 220;
const CARD_IMAGE_WIDTH = 400;

type ServiceItem = {
  title: string;
  description: string;
  /** URL da imagem (ex.: Unsplash) ou caminho em public (ex.: /servicos/roupas-kg.jpg). */
  image?: string;
  /** Texto alternativo obrigatório quando há imagem. */
  imageAlt?: string;
  icon: LucideIcon;
};

const services: ServiceItem[] = [
  {
    title: "Roupas do dia a dia por Kg",
    description: "Lavagem completa com produtos de qualidade para o uso diário.",
    image: "/servicos/roupas-por-kg.jpg",
    imageAlt: "Roupas do dia a dia sendo lavadas por quilo em lavanderia.",
    icon: WashingMachine,
  },
  {
    title: "Camisas sociais e ternos",
    description: "Passadoria e acabamento para peças sociais e de trabalho.",
    image: "/servicos/camisas-sociais.jpg",
    imageAlt: "Camisas sociais e ternos passados e prontos para uso.",
    icon: Shirt,
  },
  {
    title: "Edredons, cobertores e colchas",
    description: "Higienização profunda de itens volumosos.",
    image: "/servicos/cobertor.jpg",
    imageAlt: "Edredons, cobertores e colchas higienizados.",
    icon: Sofa,
  },
  {
    title: "Tapetes e peças especiais",
    description: "Tratamento cuidadoso para peças delicadas e de maior valor.",
    image: "/servicos/tapetes-e-pecas-especiais-2.jpg",
    imageAlt: "Tapetes e peças especiais com tratamento delicado.",
    icon: Sparkles,
  },
  {
    title: "Passadoria avulsa",
    description: "Suas roupas prontas para vestir, sem esforço.",
    image: "/servicos/passadoria.jpg",
    imageAlt: "Passadoria avulsa: roupas passadas e prontas para vestir.",
    icon: Flame,
  },
];

export function ServicesCarousel() {
  const sectionRef = useGsapFadeIn<HTMLDivElement>({ delay: 0.1 });

  return (
    <SectionWrapper id="servicos">
      <div ref={sectionRef} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl text-balance">
            Serviços pensados para o seu dia a dia
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
            Da roupa do cotidiano aos edredons e tapetes, a Lavanderia Pronta Entrega 3
            cuida de cada peça com atenção.
          </p>
        </div>
      </div>

      <div
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        role="region"
        aria-label="Serviços da Lavanderia Pronta Entrega 3"
      >
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm transition-[box-shadow,border-color] duration-200 hover:border-primary/50 hover:shadow-md focus-within:border-primary/50 focus-within:shadow-md focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
          >
            <div
              className="relative w-full shrink-0 overflow-hidden rounded-t-2xl bg-slate-100"
              style={{ height: CARD_IMAGE_HEIGHT }}
            >
              {service.image && service.imageAlt ? (
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={CARD_IMAGE_WIDTH}
                  height={CARD_IMAGE_HEIGHT}
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover object-center"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center bg-primary/5"
                  aria-hidden="true"
                >
                  <service.icon className="h-14 w-14 text-primary/60" aria-hidden="true" />
                </div>
              )}
            </div>
            <div className="flex min-w-0 flex-col gap-2 p-5">
              <h3 className="text-base font-semibold text-slate-900 text-balance wrap-break-word">
                {service.title}
              </h3>
              <p className="min-w-0 text-sm text-slate-600 wrap-break-word">
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

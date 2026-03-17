"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import type { WheelEvent } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { useGsapFadeIn } from "@/lib/gsap";

const FALLBACK_TESTIMONIALS = [
  {
    name: "Cliente Google",
    rating: 5,
    text: "Serviço excelente, roupas bem limpas e cheirosas. Atendimento muito atencioso.",
    avatar: "/logo.png",
  },
  {
    name: "Morador do Jardim das Tradições",
    rating: 5,
    text: "A retirada e entrega facilitam demais. Sempre pontuais e cuidadosos com as peças.",
    avatar: "/logo.png",
  },
  {
    name: "Família Cliente",
    rating: 5,
    text: "Levo edredons e cobertores todo inverno. Ficam impecáveis e bem acondicionados.",
    avatar: "/logo.png",
  },
];

type Testimonial = (typeof FALLBACK_TESTIMONIALS)[number];

export function TestimonialsCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(FALLBACK_TESTIMONIALS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data: { reviews?: Testimonial[]; error?: string }) => {
        if (data.reviews?.length) {
          setTestimonials(data.reviews);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    loop: false,
    watchDrag: true,
    dragFree: true,
  });
  const headerRef = useGsapFadeIn<HTMLDivElement>({ delay: 0.1 });

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
      event.preventDefault();
    }
  };

  return (
    <SectionWrapper id="depoimentos">
      <div ref={headerRef} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Quem já confia na<br />Lavanderia Pronta Entrega 3
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
            Depoimentos inspirados nas avaliações reais dos clientes no Google.
          </p>
        </div>
        <p className="mt-2 text-xs text-slate-500 sm:text-sm md:hidden">
          Arraste para o lado para ver mais depoimentos.
        </p>
      </div>

      <div
        className="relative mt-6"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Depoimentos de clientes"
      >
        <div className="w-full overflow-hidden" ref={emblaRef} onWheel={onWheel}>
          <div className="flex gap-4">
            {testimonials.map((testimonial, index) => (
              <figure
                key={`${index}-${testimonial.name}`}
                className={`min-w-[260px] flex-1 select-none rounded-2xl border border-slate-200 bg-white p-5 shadow-sm pointer-events-none ${index === testimonials.length - 1 ? "mr-4" : ""}`}
              >
                <div className="flex items-center gap-1 text-yellow-500 mt-3" aria-label={`${testimonial.rating} de 5 estrelas`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4"
                      aria-hidden="true"
                      fill={index < Math.round(testimonial.rating) ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm text-slate-700">
                  “{testimonial.text}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-200">
                    <Image
                      src={testimonial.avatar}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {testimonial.name}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}


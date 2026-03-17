"use client";

import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { SectionWrapper } from "./section-wrapper";
import { useGsapFadeIn } from "@/lib/gsap";
import { X, ChevronLeft, ChevronRight, Share2 } from "lucide-react";

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
};

const defaultMockItems: GalleryItem[] = Array.from({ length: 12 }).map(
  (_, i) => ({
    id: String(i + 1),
    title: `Imagem ${i + 1}`,
    description: `Momento ${i + 1} da lavanderia.`,
    imageUrl: `https://picsum.photos/seed/galeria-${i + 1}/600/400`,
    order: i + 1,
  })
);

function getBentoClasses(i: number): string {
  const mod = i % 12;
  if (mod === 0 || mod === 6) {
    return "min-h-[200px] col-span-2 row-span-2 md:col-span-2 md:row-span-2";
  }
  if (mod === 3 || mod === 9) {
    return "col-span-2 row-span-1";
  }
  return "";
}

type GalleryBentoProps = {
  items: GalleryItem[];
  initialItemId?: string;
};

export function GalleryBento({ items, initialItemId }: GalleryBentoProps) {
  const titleRef = useGsapFadeIn<HTMLDivElement>({ delay: 0.1 });
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortedItems = useMemo(
    () => [...items].sort((a, b) => a.order - b.order),
    [items]
  );

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [sharedFeedback, setSharedFeedback] = useState(false);
  const shareTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const deepLinkHandled = useRef(false);

  // Deep link: abrir lightbox na carga se ?item=<id> (uma vez)
  useEffect(() => {
    if (deepLinkHandled.current || sortedItems.length === 0) return;
    const itemId = searchParams.get("item") ?? initialItemId;
    if (!itemId) return;
    const idx = sortedItems.findIndex((it) => it.id === itemId);
    if (idx !== -1) {
      setOpenIndex(idx);
      deepLinkHandled.current = true;
    }
  }, [searchParams, initialItemId, sortedItems]);

  // Atualizar URL ao abrir ou navegar
  const updateUrl = useCallback(
    (index: number | null) => {
      if (index === null) {
        const url = pathname || "/";
        router.replace(url, { scroll: false });
        return;
      }
      const item = sortedItems[index];
      if (item) {
        const url = `${pathname || "/"}?item=${encodeURIComponent(item.id)}`;
        router.replace(url, { scroll: false });
      }
    },
    [pathname, router, sortedItems]
  );

  const goPrev = useCallback(() => {
    if (openIndex === null) return;
    const next = (openIndex - 1 + sortedItems.length) % sortedItems.length;
    setOpenIndex(next);
    updateUrl(next);
  }, [openIndex, sortedItems.length, updateUrl]);

  const goNext = useCallback(() => {
    if (openIndex === null) return;
    const next = (openIndex + 1) % sortedItems.length;
    setOpenIndex(next);
    updateUrl(next);
  }, [openIndex, sortedItems.length, updateUrl]);

  const openLightbox = useCallback(
    (index: number) => {
      setOpenIndex(index);
      updateUrl(index);
    },
    [updateUrl]
  );

  const closeLightbox = useCallback(() => {
    const trigger = triggerRef.current;
    setOpenIndex(null);
    updateUrl(null);
    if (trigger) {
      trigger.focus();
    }
  }, [updateUrl]);

  // Teclado: setas + Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (openIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openIndex, goPrev, goNext, closeLightbox]);

  // Foco no botão fechar ao abrir
  useEffect(() => {
    if (openIndex !== null) {
      closeButtonRef.current?.focus();
    }
  }, [openIndex]);

  // Bloquear scroll da página com lightbox aberto
  useEffect(() => {
    if (openIndex !== null) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [openIndex]);

  // Compartilhar: copiar URL e feedback ~2s; limpar timeout no unmount
  const handleShare = useCallback(() => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    if (!url) return;
    navigator.clipboard.writeText(url).then(() => {
      setSharedFeedback(true);
      if (shareTimeoutRef.current) clearTimeout(shareTimeoutRef.current);
      shareTimeoutRef.current = setTimeout(() => {
        setSharedFeedback(false);
        shareTimeoutRef.current = null;
      }, 2000);
    });
  }, []);

  useEffect(() => {
    return () => {
      if (shareTimeoutRef.current) {
        clearTimeout(shareTimeoutRef.current);
      }
    };
  }, []);

  const total = sortedItems.length;

  return (
    <SectionWrapper id="galeria" containerClassName="max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div
        ref={titleRef}
        className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Galeria de momentos e cuidados
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-600 sm:text-base">
            Um olhar sobre o cuidado no dia a dia da lavanderia. Toques de
            rotina que deixam suas peças prontas para serem usadas de novo.
          </p>
        </div>
      </div>

      <div
        className="mt-8 grid grid-cols-2 auto-rows-[120px] gap-3 md:grid-cols-4 md:auto-rows-[160px] md:gap-4"
        aria-label="Galeria de imagens da Lavanderia Pronta Entrega 3"
      >
        {sortedItems.map((item, index) => (
          <button
            type="button"
            key={item.id}
            onClick={(e) => {
              triggerRef.current = e.currentTarget as HTMLButtonElement;
              openLightbox(index);
            }}
            className={`group relative overflow-hidden rounded-2xl bg-slate-200 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 ${getBentoClasses(index)
              }`}
            aria-label={item.title || `Ver imagem ${index + 1} de ${total}`}
          >
            <Image
              src={item.imageUrl}
              alt={item.title || `Imagem ${index + 1} da galeria`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-900/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
          </button>
        ))}
      </div>

      {openIndex !== null && sortedItems[openIndex] && (
        <Lightbox
          item={sortedItems[openIndex]}
          index={openIndex}
          total={total}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          onShare={handleShare}
          sharedFeedback={sharedFeedback}
          closeButtonRef={closeButtonRef}
        />
      )}
    </SectionWrapper>
  );
}

type LightboxProps = {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onShare: () => void;
  sharedFeedback: boolean;
  closeButtonRef: React.RefObject<HTMLButtonElement | null>;
};

/** Carrega itens de /data/galeria.json ou usa mock Picsum. Use na página para fornecer items ao GalleryBento. */
export function GalleryBentoWithData() {
  const [items, setItems] = useState<GalleryItem[]>(defaultMockItems);

  useEffect(() => {
    fetch("/data/galeria.json")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((data: GalleryItem[]) => {
        if (Array.isArray(data) && data.length > 0) setItems(data);
      })
      .catch(() => { });
  }, []);

  return <GalleryBento items={items} />;
}

const SWIPE_THRESHOLD = 50;

function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
  onShare,
  sharedFeedback,
  closeButtonRef,
}: LightboxProps) {
  const swipeStartX = useRef<number | null>(null);
  const swipeAreaRef = useRef<HTMLDivElement>(null);

  const getClientX = (e: TouchEvent) => e.touches[0]?.clientX ?? 0;
  const getClientXEnd = (e: TouchEvent) => e.changedTouches[0]?.clientX ?? swipeStartX.current ?? 0;

  const handleSwipeStart = useCallback(
    (clientX: number) => {
      swipeStartX.current = clientX;
    },
    []
  );
  const handleSwipeEnd = useCallback(
    (clientXEnd: number) => {
      const start = swipeStartX.current;
      swipeStartX.current = null;
      if (start === null) return;
      const deltaX = clientXEnd - start;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        if (deltaX > 0) onPrev();
        else onNext();
      }
    },
    [onPrev, onNext]
  );

  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      handleSwipeStart(getClientX(e.nativeEvent));
    },
    [handleSwipeStart]
  );
  const onTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      handleSwipeEnd(getClientXEnd(e.nativeEvent));
    },
    [handleSwipeEnd]
  );

  useEffect(() => {
    const el = swipeAreaRef.current;
    if (!el) return;
    const onTouchMove = (e: TouchEvent) => {
      if (swipeStartX.current !== null) e.preventDefault();
    };
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => el.removeEventListener("touchmove", onTouchMove);
  }, []);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      handleSwipeStart(e.clientX);
    },
    [handleSwipeStart]
  );
  const onMouseUp = useCallback(
    (e: React.MouseEvent) => {
      handleSwipeEnd(e.clientX);
    },
    [handleSwipeEnd]
  );

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/90"
      role="dialog"
      aria-modal="true"
      aria-label="Visualização da imagem da galeria"
    >
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
        <button
          type="button"
          onClick={onShare}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <Share2 className="h-5 w-5" />
          {sharedFeedback ? "Link copiado" : "Compartilhar link"}
        </button>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      <button
        type="button"
        onClick={onPrev}
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-4"
        aria-label="Imagem anterior"
      >
        <ChevronLeft className="h-8 w-8 md:h-10 md:w-10" />
      </button>
      <button
        type="button"
        onClick={onNext}
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-4"
        aria-label="Próxima imagem"
      >
        <ChevronRight className="h-8 w-8 md:h-10 md:w-10" />
      </button>

      <div
        className="absolute inset-0 cursor-default"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        role="presentation"
      >
        <div className="flex h-full w-full flex-col items-center justify-center p-8 pt-16 pb-10 md:p-12 md:pt-20 md:pb-10">
          <div
            ref={swipeAreaRef}
            className="relative h-full w-full max-h-[85vh] flex-1 touch-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={item.imageUrl}
              alt={item.title || "Imagem da galeria"}
              fill
              className="object-contain pointer-events-none select-none"
              sizes="100vw"
            />
          </div>
          <div className="mt-4 w-full max-w-2xl text-center text-white">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            {item.description && (
              <p className="mt-1 text-sm text-white/80">{item.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

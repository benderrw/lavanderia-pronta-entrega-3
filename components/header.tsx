"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";

const NAV_ITEMS = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#planos", label: "Tabela de preços" },
  { href: "#contato", label: "Contato" },
  { href: "#faq", label: "FAQ" },
];

const WHATSAPP_URL =
  "https://wa.me/5553984394682?text=Ol%C3%A1,%20gostaria%20de%20um%20or%C3%A7amento%20de%20lavanderia";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/50 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a
          href="#hero"
          aria-label="Ir para o início da página Lavanderia Pronta Entrega 3"
        >
          <div className="relative h-9 w-32 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Logo Lavanderia Pronta Entrega 3"
              fill
              className="object-contain"
            />
          </div>
        </a>
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 text-sm font-medium text-slate-700 min-[769px]:flex"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-secondary"
          >
            Pedir orçamento
          </a>
        </nav>
        <div className="flex items-center gap-2 min-[769px]:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary focus-visible:outline focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Abrir menu de navegação"
            aria-expanded={open}
          >
            <Menu className="h-6 w-6" aria-hidden />
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm"
          >
            Orçamento
          </a>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-3/4 sm:max-w-sm">
          <nav
            aria-label="Navegação principal (menu mobile)"
            className="flex flex-col gap-1 pt-8"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 mx-4 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-secondary"
            >
              Pedir orçamento
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}

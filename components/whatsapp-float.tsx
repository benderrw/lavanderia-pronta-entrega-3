"use client";

import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WHATSAPP_URL = "https://wa.me/5553984394682";

export function WhatsAppFloat() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
      aria-label="Contato por WhatsApp"
    >
      <span
        className="whatsapp-float-pulse absolute inset-0 rounded-full"
        aria-hidden
      />
      <WhatsAppIcon className="relative h-6 w-6" aria-hidden="true" />
    </a>
  );
}

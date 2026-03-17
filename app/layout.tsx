import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lavanderia Pronta Entrega 3 | Lavanderia em Pelotas/RS",
  description:
    "Lavanderia Pronta Entrega 3 em Pelotas/RS. Lavagem por kg, peças delicadas, edredons, tapetes e mais, com retirada e entrega rápidas e atendimento via WhatsApp.",
  metadataBase: new URL("https://lavanderiaprontaentrega3.com/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lavanderia Pronta Entrega 3 | Lavanderia em Pelotas/RS",
    description:
      "Serviço de lavanderia com pronta entrega em Pelotas/RS. Coleta e entrega, cuidado com peças delicadas e atendimento personalizado.",
    url: "https://lavanderiaprontaentrega3.com/",
    siteName: "Lavanderia Pronta Entrega 3",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${display.variable} ${sans.variable} bg-background text-foreground antialiased`}
      >
        {children}
        <WhatsAppFloat />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

import { SectionWrapper } from "./section-wrapper";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { GoogleIcon } from "@/components/icons/GoogleIcon";

/**
 * URL do iframe do Google Maps. Defina NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC no .env
 * com o src gerado em Google Maps (Compartilhar → Incorporar um mapa) para exibir o mapa.
 */
const MAPS_IFRAME_SRC =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_SRC ||
  "https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=place_id:Chc8YSD02m7mZm9rYXRhcw";

const GOOGLE_MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Lavanderia+Pronta+Entrega+3&query_place_id=Chc8YSD02m7mZm9rYXRhcw";

export function ContactSection() {
  return (
    <SectionWrapper
      id="contato"
      className="border-y border-border bg-surface"
      containerClassName="max-w-7xl px-4 py-32 sm:px-6 lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Coluna 1: texto */}
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Contato &amp; localização
          </h2>
          <p className="max-w-xl text-base text-muted-foreground">
            Estamos no Jardim das Tradições, em Pelotas/RS. Fale com a equipe
            para combinar retirada e entrega ou tirar dúvidas sobre os serviços.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Endereço
              </p>
              <p className="mt-1 text-foreground">
                Passeio 4 Nº 693, Jardim das Tradições – Pelotas/RS
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Telefone
              </p>
              <p className="mt-1">
                <a
                  href="tel:+555332781294"
                  className="text-primary underline-offset-2 hover:underline"
                >
                  +55 53 3278-1294
                </a>
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                WhatsApp
              </p>
              <p className="mt-1">
                <a
                  href="https://wa.me/5553984394682"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary underline-offset-2 hover:underline"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  +55 53 98439-4682
                </a>
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-muted-foreground">
                E-mail
              </p>
              <p className="mt-1">
                <a
                  href="mailto:lavanderia.prontaentrega3@gmail.com"
                  className="inline-flex items-center gap-1.5 text-primary underline-offset-2 hover:underline"
                >
                  <EmailIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  lavanderia.prontaentrega3@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5553984394682?text=Ol%C3%A1,%20gostaria%20de%20combinar%20a%20retirada%20das%20minhas%20roupas"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-secondary"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              Chamar no WhatsApp
            </a>
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-elevated px-6 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary hover:text-primary"
            >
              <GoogleIcon className="h-4 w-4" aria-hidden="true" />
              Abrir no Google Maps
            </a>
          </div>
        </div>

        {/* Coluna 2: mapa */}
        <div className="flex flex-col gap-3">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-border bg-muted">
            <iframe
              title="Mapa da Lavanderia Pronta Entrega 3"
              src={MAPS_IFRAME_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

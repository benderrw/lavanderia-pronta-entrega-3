import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50" role="contentinfo">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="relative h-10 w-36 shrink-0 overflow-hidden">
            <Image
              src="/logo.png"
              alt="Logo Lavanderia Pronta Entrega 3"
              fill
              className="object-contain"
            />
          </div>

          <div className="grid min-w-0 gap-8 text-sm text-slate-700 md:grid-cols-2">
            <div className="min-w-0">
              <h2
                id="footer-location-heading"
                className="text-sm font-semibold uppercase tracking-wide text-slate-500"
              >
                Localização / Horários
              </h2>
              <p className="mt-2 leading-relaxed">
                Passeio 4 Nº 693
                <br />
                Jardim das Tradições – Pelotas/RS
              </p>
              <dl className="mt-3 space-y-1">
                <div className="flex gap-2">
                  <dt className="text-slate-700">Segunda a sexta</dt>
                  <dd className="text-secondary tabular-nums">09:00 – 17:30</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-slate-700">Sábado</dt>
                  <dd className="text-secondary">Fechada</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="text-slate-700">Domingo</dt>
                  <dd className="text-secondary">Fechada</dd>
                </div>
              </dl>
            </div>

            <section aria-labelledby="footer-contact-heading" className="min-w-0">
              <h2
                id="footer-contact-heading"
                className="text-sm font-semibold uppercase tracking-wide text-slate-500"
              >
                Contato &amp; redes
              </h2>
              <ul className="mt-2 space-y-1.5">
                <li>
                  <a
                    href="tel:+555332781294"
                    className="inline-flex items-center gap-2 rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Telefone: +55 53 3278-1294
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5553984394682"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                  >
                    <WhatsAppIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    WhatsApp: +55 53 98439-4682
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:lavanderia.prontaentrega3@gmail.com"
                    className="inline-flex items-center gap-2 rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                  >
                    <EmailIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    E-mail: lavanderia.prontaentrega3@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                  >
                    <InstagramIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Lavanderia+Pronta+Entrega+3&query_place_id=Chc8YSD02m7mZm9rYXRhcw"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50"
                  >
                    <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                    Google Maps
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-4 text-center text-xs text-slate-500">
          © {currentYear} Lavanderia Pronta Entrega 3 · Todos os direitos
          reservados
        </div>
      </div>
    </footer>
  );
}


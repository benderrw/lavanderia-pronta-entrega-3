import * as AccordionPrimitive from "@radix-ui/react-accordion";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { SectionWrapper } from "./section-wrapper";

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "Qual é o prazo médio para entrega das roupas?",
    answer:
      "O prazo varia conforme o volume de peças, mas em geral trabalhamos com pronta entrega em até 48 horas. Para urgências, consulte nossa equipe pelo WhatsApp.",
  },
  {
    question: "Vocês fazem retirada e entrega em domicílio?",
    answer:
      "Sim. Atendemos o Jardim das Tradições e região próxima. A retirada e entrega são combinadas diretamente pelo WhatsApp.",
  },
  {
    question: "Posso enviar peças delicadas, como ternos e vestidos de festa?",
    answer:
      "Sim. Trabalhamos com lavagem específica para peças delicadas, incluindo lavagem a seco. Informe detalhes das peças na hora do contato.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos dinheiro, cartão de crédito/débito e PIX. Informe sua preferência no momento do atendimento.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/5553984394682?text=Ol%C3%A1,%20tenho%20algumas%20d%C3%BAvidas%20sobre%20os%20servi%C3%A7os%20da%20Lavanderia%20Pronta%20Entrega%203";

export function FaqSection() {
  return (
    <SectionWrapper
      id="faq"
      ariaLabelledBy="faq-heading"
      className="border-border bg-surface"
      containerClassName="max-w-6xl px-4 py-32 sm:px-6 lg:px-8"
    >
      <h2
        id="faq-heading"
        className="text-3xl font-light tracking-tight text-foreground sm:text-4xl"
      >
        Perguntas frequentes
      </h2>

      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-6">
        {/* Coluna 1 (4/6): bloco do Accordion */}
        <div className="flex flex-col lg:col-span-4">
          <AccordionPrimitive.Root
            type="single"
            collapsible
            defaultValue="item-0"
            className="flex h-full flex-col rounded-xl border border-border bg-elevated/50 shadow-sm"
          >
            {faqs.map((item, index) => (
              <AccordionPrimitive.Item
                key={item.question}
                value={`item-${index}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionPrimitive.Header>
                  <AccordionPrimitive.Trigger className="group flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-sm font-medium tracking-wide text-foreground transition-shadow hover:bg-muted/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2">
                    <span>{item.question}</span>
                    <span className="shrink-0 text-muted-foreground" aria-hidden="true">
                      <Plus className="h-4 w-4 group-data-[state=open]:hidden" />
                      <Minus className="hidden h-4 w-4 group-data-[state=open]:inline" />
                    </span>
                  </AccordionPrimitive.Trigger>
                </AccordionPrimitive.Header>
                <AccordionPrimitive.Content
                  className="overflow-hidden text-sm text-muted-foreground leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                >
                  <div className="px-5 pb-4 pt-0">{item.answer}</div>
                </AccordionPrimitive.Content>
              </AccordionPrimitive.Item>
            ))}
          </AccordionPrimitive.Root>
        </div>

        {/* Coluna 2 (2/6): card FaqIllustration */}
        <aside
          className="flex flex-col rounded-xl border border-border bg-elevated p-8 shadow-sm lg:col-span-2"
          aria-labelledby="faq-card-heading"
        >
          <div className="flex flex-1 flex-col items-center text-center">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden" aria-hidden="true">
              <Image
                src="/faq-illustration.png"
                alt=""
                width={80}
                height={80}
                className="object-contain"
                aria-hidden
              />
            </div>
            <h3
              id="faq-card-heading"
              className="mt-4 text-lg font-medium text-foreground"
            >
              Ainda tem dúvidas?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Tire suas dúvidas pelo WhatsApp e receba uma resposta rápida.
            </p>
            <div className="mt-auto flex flex-col gap-3 pt-6 w-full">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label="Fale pelo WhatsApp para tirar dúvidas"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                Fale pelo WhatsApp
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                aria-label="Acesse nosso Instagram"
              >
                <InstagramIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                Instagram
              </a>
            </div>
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}

import { SectionWrapper } from "./section-wrapper";

type PriceItem = { label: string; price?: string };

const priceCategories: { title: string; items: PriceItem[] }[] = [
  {
    title: "Roupas por Kg",
    items: [
      { label: "Lava/Seca/Passa", price: "R$ 38,00" },
      { label: "Lava/Seca", price: "R$ 30,00" },
      { label: "Seca", price: "R$ 24,00" },
      { label: "Passa", price: "R$ 30,00" },
    ],
  },
  {
    title: "Roupas por Peça",
    items: [
      { label: "Edredom e Cobertor (Casal)", price: "R$ 78,00" },
      { label: "Edredom e Cobertor (Solteiro)", price: "R$ 58,00" },
      { label: "Jaquetas e Parkas", price: "de R$ 48,00 a R$ 65,00" },
      { label: "Camisas e Calças Sociais", price: "R$ 38,00" },
      { label: "Tênis", price: "R$ 66,00" },
      { label: "Couro e Camurça – Lavado e Hidratado" },
    ],
  },
  {
    title: "Por Peça Lavado a Seco",
    items: [
      { label: "Ternos", price: "R$ 92,00" },
      { label: "Vestidos de Festa", price: "Especial" },
      { label: "Casacos e Blazers", price: "Especial" },
      { label: "Paletós", price: "Especial" },
    ],
  },
  {
    title: "Por Metro",
    items: [
      { label: "Tapetes", price: "R$ 58,00" },
      { label: "Tapetes especiais", price: "sob consulta" },
    ],
  },
];

export function PlansSection() {
  return (
    <SectionWrapper id="planos">
      <div className="flex flex-col gap-4 text-center sm:text-left">
        <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
          Tabela de preços
        </h2>
        <p className="max-w-2xl text-sm text-slate-600 sm:text-base">
          Valores inspirados na tabela atual para ajudar você a ter uma ideia
          dos investimentos. Consulte sempre pelo WhatsApp para confirmar
          promoções e condições especiais.
        </p>
        <p className="text-xs text-slate-500 sm:text-sm">
          Valores de referência. Confirme disponibilidade e preços vigentes.
        </p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {priceCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur sm:p-6"
          >
            <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900 mb-4 border-b border-slate-100 pb-3">
              {category.title}
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-700">
              {category.items.map((item) => (
                <li
                  key={item.label + (item.price ?? "")}
                  className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5"
                >
                  <span>{item.label}</span>
                  {item.price != null && (
                    <span className="shrink-0 font-medium text-slate-900 tabular-nums">
                      {item.price}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

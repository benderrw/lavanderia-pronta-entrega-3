## Visão do projeto

A **Lavanderia Pronta Entrega 3** é um serviço de lavanderia em Pelotas/RS, com foco em **praticidade, confiança e atendimento próximo**.  
O site existe para facilitar o primeiro contato do cliente, explicar os serviços e direcionar rapidamente para o atendimento via WhatsApp.

### Público-alvo

- Moradores de Pelotas/RS, especialmente região do **Jardim das Tradições**.  
- Famílias e profissionais que não querem se preocupar com lavar, secar e passar roupas.  
- Pessoas que valorizam **entrega rápida**, **cuidado com peças delicadas** e **atendimento humano**.

### Objetivos principais

- **O1 — Facilitar o primeiro contato**: tornar simples e claro para o visitante entender o que a lavanderia faz e como falar pelo WhatsApp.
- **O2 — Transmitir confiança e cuidado**: reforçar a sensação de que as roupas serão tratadas com carinho e profissionalismo.
- **O3 — Explicar serviços e faixas de preço**: mostrar, de forma transparente, os principais tipos de serviço (por kg, por peça, por metro, lavagem a seco).
- **O4 — Integrar canais de contato**: centralizar telefone, WhatsApp, e‑mail e localização em um lugar fácil de encontrar.

### Premissas e restrições

- Site **informativo + conversão para WhatsApp**, sem fluxo de compra online neste momento.
- **Mobile-first**: boa experiência em smartphones é prioridade.
- Conteúdos e layout devem se manter coerentes com o **logo atual** (`public/logo.png`) e a identidade visual de lavanderia (azuis, brancos, sensação de limpeza).
- Integrações externas focadas em:
  - Rastreamento básico (Vercel Analytics / Speed Insights).
  - Google Maps para localização.

### Papel da página inicial (home)

A página inicial atua como **landing page principal**, composta pelas seções implementadas em `app/page.tsx` e componentes em `components/*`:

- **Hero (`Hero`)** — apresenta a proposta de valor (“roupa pronta, cheirosa e entregue no tempo certo”) com CTA forte para WhatsApp.  
- **Serviços (`ServicesCarousel`)** — lista os principais tipos de serviços (por kg, peças delicadas, volumosos, tapetes, passadoria).  
- **Sobre (`AboutSection`)** — conta a história e a forma de trabalho da lavanderia, reforçando proximidade e praticidade.  
- **Depoimentos (`TestimonialsCarousel`)** — reforçam confiança visual e social.  
- **Planos (`PlansSection`)** — mostra faixas de preço e exemplos de serviços para alinhar expectativas.  
- **Contato & FAQ (`ContactSection`, `FaqSection`)** — concentram endereço, canais de contato e respostas rápidas às dúvidas comuns.

A home é o ponto de entrada padrão para campanhas, buscas no Google e acessos diretos, conectando o visitante aos objetivos **O1–O4** por meio de CTAs consistentes para WhatsApp e seções bem estruturadas.


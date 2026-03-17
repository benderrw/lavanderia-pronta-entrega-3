## Roadmap de alto nível

### Fase 1 — Presença sólida e conversão básica (MVP)

- **F1-1 — Landing page de serviços**  
  - Home clara com seções de hero, serviços, sobre, planos, depoimentos, galeria, contato e FAQ (já implementadas nos componentes da pasta `components/`).  
  - CTAs consistentes para WhatsApp em pontos estratégicos da página (hero, planos, contato, FAQ, botão flutuante).

- **F1-2 — Conteúdo local e SEO básico**  
  - Metadados configurados para Pelotas/RS.  
  - Destaque para endereço, bairro e formas de contato.  
  - Estrutura semântica adequada (títulos, descrições, links).

- **F1-3 — Otimização visual e responsiva**  
  - Layout responsivo para mobile, tablet e desktop.  
  - Tipografia, cores e espaçamentos alinhados com a identidade da lavanderia.

### Fase 2 — Confiança, prova social e relacionamento

- **F2-1 — Depoimentos e avaliações**  
  - Seção de depoimentos conectada à narrativa da marca.  
  - Espaço para reforçar avaliações do Google/indicações.

- **F2-2 — Conteúdos de educação rápida**  
  - Pequenos textos ou seções explicando cuidados com tecidos, vantagens da lavanderia, boas práticas para roupas delicadas.

- **F2-3 — Experiência de FAQ aprimorada**  
  - Revisão contínua das perguntas frequentes com base nas dúvidas reais recebidas pelo WhatsApp.

### Fase 3 — Operação digital e automações leves

- **F3-1 — Fluxo de pedido assistido**  
  - Estruturar especificação para um fluxo de “simulação de pedido” guiado, ainda redirecionando para WhatsApp ao final.

- **F3-2 — Área de informações para clientes recorrentes**  
  - Página com orientações para quem utiliza o serviço com frequência (ex.: recomendações de preparo das peças, combinados de retirada).

- **F3-3 — Métricas e melhoria contínua**  
  - Definir métricas simples (cliques em WhatsApp, scroll em seções chave, origem de acessos) para guiar futuros ajustes de layout e conteúdo.

### Conexão com especificações futuras

As features acima poderão ter especificações detalhadas em `.specs/features/`, por exemplo:

- `.specs/features/landing-page-servicos/`
- `.specs/features/depoimentos-e-prova-social/`
- `.specs/features/fluxo-pedido-assistido/`

Cada pasta de feature seguirá o padrão do método tlc-spec-driven:

- `spec.md` — requisitos com IDs rastreáveis.  
- `context.md` — decisões e combinações feitas com o cliente.  
- `design.md` — arquitetura de componentes/front-end quando necessário.  
- `tasks.md` — tarefas atômicas com critérios de verificação.


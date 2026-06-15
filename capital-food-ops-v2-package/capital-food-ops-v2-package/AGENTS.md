# AGENTS.md — Capital Food Ops v2

## Prioridade de instruções

1. Este `AGENTS.md`.
2. `PROMPT-CODEX-HARD-RESET.md`.
3. `DESIGN-BIBLE.md`.
4. `REFERENCE-LOCKS.md`.
5. `ANTI-AI-DESIGN-PROTOCOL.md`.
6. `UX-FLOW.md`.
7. `COMPONENT-ARCHITECTURE.md`.
8. Boas práticas de Next.js, acessibilidade, performance e segurança.

## Objetivo

Reconstruir a demo **Capital Food Ops / Brasa & Bairro** do zero como uma experiência de food ordering premium brasileiro, com nível visual Awwwards como régua de ambição.

Não implementar “site tech com comida”. Implementar restaurante primeiro.

## Regra-mãe

**Brasa & Bairro domina a experiência pública.**  
**Capital Food Ops aparece como tecnologia demonstrativa.**  
**Capital Tecnologia aparece como assinatura comercial.**

## Refero Skill

Se a skill Refero estiver disponível, instale e use antes de implementar UI:

```bash
npx skills add https://github.com/referodesign/refero_skill --skill refero-design
```

Obrigatório antes de UI final:

- pesquisar referências reais;
- criar reference locks;
- comparar a implementação contra Burek, Haven, Crav, La Revoltosa, Eatnaked e ALMI;
- não aceitar layout sem inspeção visual.

## Capital Skills obrigatórias

Aplicar com peso máximo:

```txt
capital-site-design-master
capital-ui-ux-premium
capital-restaurant-foodops
capital-product-demo-experience
capital-ecommerce-checkout
capital-motion-interaction
capital-copy-conversion
capital-brand-system
capital-performance-web-vitals
capital-accessibility-wcag
capital-qa-redteam-release
capital-nextjs-production
capital-frontend-architecture
capital-security-max-asvs
capital-github-vercel-release
```

Não aplicar `capital-supabase-rls-security` nesta versão, pois o MVP não usa Supabase, banco, auth nem RLS.

## Dependências aprovadas

Pode usar somente estas dependências novas para a experiência v2:

```bash
npm install gsap @gsap/react lenis embla-carousel-react vaul class-variance-authority clsx tailwind-merge
```

Não adicionar:

```txt
Three.js
React Three Fiber
shadcn inteira
Zustand
TanStack Query
bibliotecas pesadas de gráfico
bibliotecas de UI inteiras sem necessidade
```

## Regras de execução

- Comece pela marca, hero, cardápio e fluxo de pedido.
- Não comece por dashboard.
- Não use dashboard na primeira dobra.
- Não use copy SaaS na primeira dobra.
- Não use foto IA ruim.
- Se não houver foto real forte, use grafismos premium de prato, ticket, embalagem, recibo e mesa.
- Desktop pode ter cinematografia avançada.
- Mobile deve ser reduzido, rápido e focado em conversão.

## Logo

A logo oficial do Brasa & Bairro está em:

```txt
assets/brasa/logo-brasa.png
project-scaffold/public/brasa/logo-original.png
project-scaffold/public/brasa/logo-seal.png
```

Usar `next/image` na UI. Não substituir a marca por ícone Lucide.

## Fluxo intocável

Preservar:

- Landing → Cardápio → Preview WhatsApp → Diagnóstico → WhatsApp Capital;
- WhatsApp oficial: `https://wa.me/559870288070`;
- frase: “Dados fictícios. Fluxos reais. Estrutura adaptável.”;
- rodapé: “DESENVOLVIDO POR [logo Capital]”;
- dados mockados e explícitos como demonstrativos;
- sem banco, auth, pagamento real, dados reais ou Server Action.

## Critério de aprovação

A versão só passa se:

- parecer restaurante real;
- parecer food ordering premium;
- parecer Brasa & Bairro antes de parecer Capital;
- parecer humano, não IA;
- ter cardápio desejável;
- ter hero cinematográfico de verdade no desktop;
- manter mobile impecável;
- manter funil funcionando.

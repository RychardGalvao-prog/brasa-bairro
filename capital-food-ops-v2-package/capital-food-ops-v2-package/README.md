# Capital Food Ops v2 — Brasa & Bairro

Pacote v2 para reconstruir a demo **Capital Food Ops / Brasa & Bairro** do zero, com foco em uma experiência de **restaurante brasileiro premium + food ordering app + WhatsApp organizado + assinatura Capital**.

## Decisão central

A v2 não nasce como “demo de tecnologia para restaurante”. Ela nasce como:

> **Brasa & Bairro — um restaurante brasileiro premium com pedido digital bonito, criado pela Capital.**

A tecnologia entra por trás.

## Direção oficial

**Balcão Cinematográfico Brasileiro**

Um restaurante brasileiro premium de bairro, com alma de cardápio físico, textura de embalagem, comida quente, pedido digital cinematográfico e WhatsApp organizado — desenvolvido pela Capital.

## Produto herói

**Prato Feito da Brasa**

O produto herói deve comunicar restaurante brasileiro, almoço/delivery, comida de verdade e bairro premium. Não usar burger como protagonista principal da primeira dobra para não cair em estética de food app gringo/hamburgueria genérica.

## Estrutura do pacote

```txt
capital-food-ops-v2-package/
├─ README.md
├─ AGENTS.md
├─ PROMPT-CODEX-HARD-RESET.md
├─ SDD-CAPITAL-FOOD-OPS-V2.md
├─ DESIGN-BIBLE.md
├─ REFERENCE-LOCKS.md
├─ ANTI-AI-DESIGN-PROTOCOL.md
├─ MOTION-STRATEGY.md
├─ TYPOGRAPHY-SYSTEM.md
├─ UX-FLOW.md
├─ COMPONENT-ARCHITECTURE.md
├─ COPY.md
├─ MOCKDATA.md
├─ DEPENDENCIES.md
├─ QA-CHECKLIST.md
├─ DEPLOY.md
├─ COMMIT-SUGERIDO.md
├─ assets/
│  ├─ brasa/
│  └─ capital/
└─ project-scaffold/
```

## Como usar no Codex

1. Extraia o pacote.
2. Leia `AGENTS.md` primeiro.
3. Instale a skill Refero no ambiente do Codex, se disponível:

```bash
npx skills add https://github.com/referodesign/refero_skill --skill refero-design
```

4. Abra `PROMPT-CODEX-HARD-RESET.md` e execute o projeto seguindo a ordem.
5. Use `project-scaffold/` como base zerada, não o projeto antigo.

## Instalação do scaffold

```bash
cd project-scaffold
npm install
npm run dev
```

Antes de considerar pronto:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm audit
```

## Critério de aprovação

```txt
Em 5 segundos: parece restaurante.
Em 15 segundos: parece pedido digital premium.
Em 30 segundos: dá vontade de falar com a Capital.
```

Se parecer site tech com comida por cima, falhou.

# Dependencies

## Instalação aprovada

```bash
npm install gsap @gsap/react lenis embla-carousel-react vaul class-variance-authority clsx tailwind-merge
```

## Função de cada dependência

### GSAP + @gsap/react

Cenas cinematográficas da home e hero. Usar com `useGSAP()` e cleanup correto.

### Lenis

Scroll premium desktop/tablet. Respeitar reduced motion e desativar/reduzir em mobile pequeno.

### Embla Carousel

Carrossel de mais pedidos e categorias.

### Vaul

Carrinho mobile como drawer/bottom sheet.

### CVA + clsx + tailwind-merge

Sistema organizado de variantes para botões, cards, badges e tickets.

## Não adicionar

```txt
Three.js
React Three Fiber
shadcn inteira
Zustand
TanStack Query
bibliotecas pesadas de gráfico
```

## Auditoria

Rodar:

```bash
npm audit
```

Se houver falso positivo/transitivo sem correção segura, documentar. Não fazer upgrade arriscado que quebre o projeto.

# Component Architecture

## Componentes principais

```txt
BrasaBrand
CapitalSignature
SmoothScroll
RestaurantHero
HeroDishGraphic
RestaurantSignals
TopSellersCarousel
CategoryRail
ProductCard
ProductHighlight
ReceiptPanel
CartDrawer
WhatsAppPreview
OpsPeek
DiagnosticForm
SiteFooter
```

## Princípios

- componentes pequenos;
- variantes com CVA;
- `cn()` centralizado;
- client components apenas onde necessário;
- lógica de carrinho isolada;
- assets em `public/brasa` e `public/capital`;
- sem CSS solto/desordenado.

## Classes semânticas permitidas

```txt
kiosk-shell
brand-stamp
menu-ticket
heat-stage
receipt-strip
ops-peek
paper-surface
counter-shadow
```

Cada classe precisa ter função clara.

## Estado de produto

`Product` pode conter:

```ts
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  serves?: string;
  whatsappHint?: string;
  pairing?: string;
  orderNote?: string;
  menuBadge?: string;
  prepTime?: string;
  available?: boolean;
  accent?: string;
};
```

## Carrinho

```ts
type CartItem = {
  productId: string;
  quantity: number;
  note?: string;
};
```

## Client boundaries

Client components:

- hero com GSAP;
- SmoothScroll/Lenis;
- carrossel Embla;
- menu/cart state;
- Vaul drawer;
- DiagnosticForm.

Server components:

- layout;
- páginas estáticas;
- seções sem interação.

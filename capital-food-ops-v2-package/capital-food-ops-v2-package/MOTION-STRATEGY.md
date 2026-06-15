# Motion Strategy — Cinematografia com Função

## Princípio

A v2 deve ter cinematografia avançada no desktop, mas a animação precisa servir à experiência de pedido.

## Desktop

Permitido:

- hero cinematográfico;
- entrada da logo como placa/selo;
- prato herói surgindo com escala e profundidade;
- ticket térmico deslizando;
- WhatsApp preview entrando como prova;
- transições suaves entre seções principais;
- carrossel de produtos com ritmo.

## Mobile

Reduzir:

- intro curta ou quase imperceptível;
- sem travar scroll;
- sem parallax pesado;
- sem elementos bloqueando CTA;
- animações focadas em feedback.

## GSAP

Usar para:

- cenas do hero;
- entrada de elementos complexos;
- timelines com controle;
- microcenas importantes.

Regras:

- usar somente em client components;
- usar `useGSAP()`;
- fazer cleanup correto;
- respeitar `prefers-reduced-motion`;
- não bloquear interação.

## Lenis

Usar para:

- scroll premium desktop/tablet;
- sensação cinematográfica na home.

Regras:

- reduzir/desativar em mobile pequeno;
- respeitar `prefers-reduced-motion`;
- usar `data-lenis-prevent` em drawer, carrinho, formulários e áreas com scroll próprio.

## Embla

Usar para:

- Mais pedidos;
- categorias;
- destaques.

Não usar carrossel decorativo sem função.

## Vaul

Usar para:

- carrinho mobile;
- preview de pedido se necessário.

O drawer precisa ser usável, acessível e rápido.

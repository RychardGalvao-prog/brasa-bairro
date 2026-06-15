# QA Checklist — Capital Food Ops v2

## Comandos obrigatórios

```bash
npm run lint
npm run typecheck
npm run test
npm run build
npm audit
```

## Rotas

Validar:

```txt
/
/cardapio
/acompanhar
/gerente
/diagnostico
```

## Viewports

```txt
375x812
414x896
768x1024
1440x1000
```

## Funil

Validar:

```txt
Landing
→ Cardápio
→ adicionar produto
→ carrinho
→ preview WhatsApp
→ diagnóstico
→ link WhatsApp Capital
```

## Visual

Checar:

- primeira leitura é restaurante;
- Brasa & Bairro domina;
- Capital é assinatura;
- produto herói aparece forte;
- cardápio dá vontade de clicar;
- não parece dashboard;
- não parece SaaS;
- não parece template de IA;
- logo oficial está visível;
- tipografia tem personalidade.

## Mobile

Checar:

- sem overflow horizontal;
- drawer usável;
- CTA visível;
- scroll nativo preservado;
- motion reduzido;
- formulário legível;
- safe-area respeitada.

## Acessibilidade

Checar:

- foco visível;
- labels em inputs;
- botões com texto claro;
- contraste prático;
- reduced motion;
- navegação por teclado básica.

## Console

Checar:

- sem console errors;
- sem hydration warning;
- sem imagem quebrada;
- sem rota quebrada.

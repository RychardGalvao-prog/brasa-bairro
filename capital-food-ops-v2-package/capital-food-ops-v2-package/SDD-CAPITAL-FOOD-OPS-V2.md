# SDD — Capital Food Ops v2 / Brasa & Bairro

## 1. Visão geral

A Capital Food Ops v2 é uma experiência demonstrativa externa para mostrar como a Capital pode construir uma operação digital de pedido, cardápio, WhatsApp e gestão para restaurantes.

A experiência pública deve parecer um restaurante real fictício: **Brasa & Bairro**.

## 2. Problema

A versão anterior ficou funcional, mas visualmente ainda parecia tech/IA. O restaurante não tinha alma suficiente e a primeira leitura era sistema/demo, não comida/pedido.

## 3. Solução

Reconstruir do zero como:

- restaurante brasileiro premium de bairro;
- cardápio digital cinematográfico;
- pedido organizado no WhatsApp;
- operação como bastidor;
- Capital como assinatura comercial.

## 4. Público

- donos de restaurantes;
- lanchonetes e negócios de comida;
- gestores que usam WhatsApp/Instagram para pedidos;
- negócios que querem cardápio digital e operação mais organizada.

## 5. Objetivos de negócio

- fazer o cliente pensar “isso poderia ser meu”;
- gerar conversa no WhatsApp da Capital;
- demonstrar capacidade de design/produto da Capital;
- mostrar operação sem parecer dashboard SaaS.

## 6. Funil

```txt
Landing → Cardápio → Preview WhatsApp → Diagnóstico → WhatsApp Capital
```

## 7. Rotas

### `/`
Home cinematográfica. Restaurante primeiro. Pouca informação na primeira dobra.

### `/cardapio`
Tela central de pedido. Categorias, produtos, carrinho, observação, subtotal, preview WhatsApp.

### `/acompanhar`
Status demonstrativo de pedido.

### `/diagnostico`
Formulário comercial com React Hook Form + Zod.

### `/gerente`
Bastidor operacional demonstrativo.

## 8. Requisitos funcionais

- listar produtos mockados;
- filtrar por categoria;
- adicionar/remover itens;
- calcular subtotal;
- adicionar observação;
- mostrar preview de WhatsApp;
- gerar link para WhatsApp oficial;
- validar diagnóstico com Zod/RHF;
- rotas estáticas e acessíveis.

## 9. Requisitos não funcionais

- Next.js App Router;
- TypeScript;
- Tailwind CSS;
- acessibilidade prática;
- mobile impecável;
- desktop cinematográfico;
- sem dados reais;
- sem banco;
- sem auth;
- sem pagamento real;
- sem Server Action.

## 10. Restrições

- Não usar `dangerouslySetInnerHTML`.
- Não usar foto IA ruim.
- Não usar Capital como protagonista da primeira dobra.
- Não usar dashboard na home.
- Não quebrar o funil comercial.

## 11. WhatsApp

URL oficial:

```txt
https://wa.me/559870288070
```

Mensagem final deve incluir:

- origem: Capital Food Ops / Brasa & Bairro;
- itens do pedido ou interesse;
- respostas do diagnóstico;
- intenção de adaptar ao restaurante do cliente.

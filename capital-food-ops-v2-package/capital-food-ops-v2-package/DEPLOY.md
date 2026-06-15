# Deploy — Capital Food Ops v2

## Projeto sugerido

```txt
capital-food-ops-demo
```

## Domínio futuro

```txt
foodops.capitaltechslz.com.br
```

## Variáveis recomendadas

```env
NEXT_PUBLIC_CAPITAL_WHATSAPP_URL=https://wa.me/559870288070
NEXT_PUBLIC_CAPITAL_SITE_URL=https://capitaltechslz.com.br
NEXT_PUBLIC_DEMO_DOMAIN=https://foodops.capitaltechslz.com.br
```

## Vercel

1. Criar/importar projeto.
2. Rodar build.
3. Adicionar domínio `foodops.capitaltechslz.com.br`.
4. Configurar DNS na Cloudflare com CNAME indicado pela Vercel.
5. Manter Cloudflare como DNS only no subdomínio inicialmente.

## Antes de produção

- validar Open Graph;
- validar favicon/app icon;
- validar WhatsApp link;
- validar SEO básico;
- validar mobile;
- validar rodapé Capital.

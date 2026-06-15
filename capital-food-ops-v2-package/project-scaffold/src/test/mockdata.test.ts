import { describe, expect, it } from "vitest";
import { products } from "../lib/mockdata";
import { decrementCartItem, getCartItemCount, getCartLines, getCartSubtotal, incrementCartItem } from "../lib/cart";
import { diagnosticSchema } from "../lib/diagnostic";
import { operationsSummary, kitchenQueue } from "../lib/operations";
import { activeOrders, selectedOrder } from "../lib/orders";
import { restaurantAssets, restaurantMedia } from "../lib/restaurant-assets";
import { buildCapitalDiagnosticMessage, buildOrderPreview, withWhatsAppMessage } from "../lib/whatsapp";

it("has the hero product in mock data", () => {
  expect(products.some((product) => product.id === "prato-feito-brasa")).toBe(true);
});

describe("products", () => {
  it("all products have positive prices", () => {
    expect(products.every((product) => product.price > 0)).toBe(true);
  });
});

describe("cart helpers", () => {
  it("increments, decrements and totals selected products", () => {
    const cart = incrementCartItem(incrementCartItem({}, "prato-feito-brasa"), "guarana-lata");
    const reducedCart = decrementCartItem(cart, "guarana-lata");
    const lines = getCartLines(reducedCart);

    expect(getCartItemCount(lines)).toBe(1);
    expect(getCartSubtotal(lines)).toBe(32.9);
  });

  it("keeps quantities, totals and notes consistent for a fuller order", () => {
    const cart = incrementCartItem(
      incrementCartItem(
        incrementCartItem({}, "prato-feito-brasa"),
        "prato-feito-brasa"
      ),
      "guarana-lata"
    );
    const lines = getCartLines(cart);
    const preview = buildOrderPreview(lines, "molho separado e retirar no balcão");

    expect(getCartItemCount(lines)).toBe(3);
    expect(getCartSubtotal(lines)).toBeCloseTo(72.7);
    expect(preview).toContain("2x Prato Feito da Brasa");
    expect(preview).toContain("1x Guaraná Lata");
    expect(preview).toContain("molho separado e retirar no balcão");
  });
});

describe("whatsapp preview", () => {
  it("builds an encoded WhatsApp link with order context", () => {
    const lines = getCartLines({ "prato-feito-brasa": 1 });
    const preview = buildOrderPreview(lines, "molho separado");
    const url = withWhatsAppMessage(preview);

    expect(preview).toContain("Prato Feito da Brasa");
    expect(preview).toContain("molho separado");
    expect(preview).toContain("Origem: Cardápio Brasa & Bairro");
    expect(preview).not.toContain("Dados fictícios");
    expect(preview).not.toContain("Fluxos reais");
    expect(url).toContain("https://wa.me/559870288070?text=");
    expect(url).toContain("Prato%20Feito%20da%20Brasa");
  });
});

describe("diagnostic schema", () => {
  it("accepts a valid commercial diagnostic", () => {
    const parsed = diagnosticSchema.safeParse({
      businessType: "Restaurante brasileiro",
      channels: ["WhatsApp", "Instagram"],
      pains: ["Pedidos bagunçados no WhatsApp"],
      interest: "Sim, quero conversar com a Capital"
    });

    expect(parsed.success).toBe(true);
  });

  it("rejects empty diagnostics", () => {
    const parsed = diagnosticSchema.safeParse({
      businessType: "",
      channels: [],
      pains: [],
      interest: ""
    });

    expect(parsed.success).toBe(false);
  });

  it("builds a commercial WhatsApp message with diagnostic context", () => {
    const data = {
      businessType: "Marmitaria de bairro",
      channels: ["WhatsApp", "Balcão"],
      pains: ["Pedidos bagunçados no WhatsApp"],
      interest: "Sim, quero conversar com a Capital"
    };
    const parsed = diagnosticSchema.parse(data);
    const message = buildCapitalDiagnosticMessage(parsed);
    const url = withWhatsAppMessage(message);

    expect(message).toContain("Capital Food Ops / Brasa & Bairro");
    expect(message).toContain("Marmitaria de bairro");
    expect(url).toContain("https://wa.me/559870288070?text=");
    expect(url).toContain("Marmitaria%20de%20bairro");
  });
});

describe("operation data", () => {
  it("keeps kitchen queue aligned with active orders", () => {
    expect(kitchenQueue.map((order) => order.code)).toEqual(activeOrders.map((order) => order.code));
    expect(operationsSummary.focusOrder).toBe(selectedOrder.code);
    expect(operationsSummary.lastOrder).toBe(activeOrders.at(-1)?.code);
  });
});

describe("restaurant assets", () => {
  it("uses a small curated Unsplash set with direct image URLs and credits", () => {
    expect(restaurantAssets).toHaveLength(3);

    for (const asset of restaurantAssets) {
      expect(asset.alt).toBeTruthy();
      expect(asset.author).toBeTruthy();
      expect(asset.authorUrl).toMatch(/^https:\/\/unsplash\.com\//);
      expect(asset.unsplashUrl).toMatch(/^https:\/\/unsplash\.com\/photos\//);
      expect(asset.imageUrl).toContain("https://images.unsplash.com/");
      expect(asset.imageWidth).toBeGreaterThan(0);
      expect(asset.imageHeight).toBeGreaterThan(0);
      expect(asset.caption).toBeTruthy();
    }

    expect(restaurantMedia.counter.id).toBe("balcao-patrick-tomasso");
    expect(restaurantMedia.kitchen.id).toBe("preparo-pylyp-sukhenko");
    expect(restaurantMedia.grill.id).toBe("brasa-emerson-vieira");
  });
});

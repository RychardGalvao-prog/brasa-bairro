import { products, type Product } from "./mockdata";

export type CartState = Record<string, number>;

export type CartItem = {
  productId: string;
  quantity: number;
  note?: string;
};

export type CartLine = {
  product: Product;
  quantity: number;
};

const MAX_ITEM_QUANTITY = 12;

export function incrementCartItem(cart: CartState, productId: string): CartState {
  const currentQuantity = cart[productId] ?? 0;
  return {
    ...cart,
    [productId]: Math.min(currentQuantity + 1, MAX_ITEM_QUANTITY)
  };
}

export function decrementCartItem(cart: CartState, productId: string): CartState {
  const currentQuantity = cart[productId] ?? 0;

  if (currentQuantity <= 1) {
    const rest = { ...cart };
    delete rest[productId];
    return rest;
  }

  return {
    ...cart,
    [productId]: currentQuantity - 1
  };
}

export function getCartLines(cart: CartState, catalog: Product[] = products): CartLine[] {
  return Object.entries(cart).flatMap(([productId, quantity]) => {
    const product = catalog.find((item) => item.id === productId);

    if (!product || quantity <= 0) {
      return [];
    }

    return [{ product, quantity }];
  });
}

export function getCartSubtotal(lines: CartLine[]) {
  return lines.reduce((acc, line) => acc + line.product.price * line.quantity, 0);
}

export function getCartItemCount(lines: CartLine[]) {
  return lines.reduce((acc, line) => acc + line.quantity, 0);
}

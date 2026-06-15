"use client";

import { Drawer } from "vaul";
import { getCartItemCount, type CartLine } from "@/lib/cart";
import { ReceiptPanel } from "./receipt-panel";

export function CartDrawer({
  lines,
  note,
  onNoteChange
}: {
  lines: CartLine[];
  note?: string;
  onNoteChange: (value: string) => void;
}) {
  const itemCount = getCartItemCount(lines);

  if (itemCount === 0) {
    return null;
  }

  return (
    <Drawer.Root>
      <div className="cart-drawer-dock md:hidden">
        <Drawer.Trigger className="cart-drawer-trigger w-full rounded-full bg-[var(--charcoal)] px-5 py-4 text-sm font-bold text-[var(--paper)]">
          Abrir pedido ({itemCount})
        </Drawer.Trigger>
      </div>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Drawer.Content className="cart-drawer-content fixed inset-x-0 bottom-0 z-50 max-h-[86vh] overflow-y-auto rounded-t-2xl bg-[var(--cream)] p-4 outline-none" data-lenis-prevent>
          <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-black/20" />
          <Drawer.Title className="sr-only">Carrinho do pedido</Drawer.Title>
          <Drawer.Description className="sr-only">Revise itens, observação, subtotal e preview de WhatsApp.</Drawer.Description>
          <ReceiptPanel lines={lines} note={note} onNoteChange={onNoteChange} />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

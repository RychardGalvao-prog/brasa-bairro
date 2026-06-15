"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { categories, products, type Category } from "@/lib/mockdata";
import { decrementCartItem, getCartLines, incrementCartItem, type CartLine, type CartState } from "@/lib/cart";
import { cn } from "@/lib/ui";
import { ProductCard } from "./product-card";
import { ReceiptPanel } from "./receipt-panel";
import { CartDrawer } from "./cart-drawer";

export function MenuExperience() {
  const [category, setCategory] = useState<Category>("Mais pedidos");
  const [cart, setCart] = useState<CartState>({});
  const [note, setNote] = useState("");

  const visible = category === "Mais pedidos"
    ? products.slice(0, 5)
    : products.filter((product) => product.category === category);
  const lines = useMemo<CartLine[]>(() => getCartLines(cart, products), [cart]);
  const hasCartItems = lines.length > 0;

  const add = (id: string) => setCart((current) => incrementCartItem(current, id));
  const remove = (id: string) => setCart((current) => decrementCartItem(current, id));

  return (
    <main className={cn("px-5 pt-5 md:pb-16", hasCartItems ? "pb-40" : "pb-16")}>
      <header className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-[var(--charcoal)] p-5 text-[var(--paper)] md:flex-row md:items-end md:justify-between md:p-8">
        <div>
          <Link className="mb-5 inline-flex items-center gap-2 text-xs font-bold text-white/55 transition hover:text-white" href="/">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Brasa & Bairro
          </Link>
          <p className="font-hand text-3xl text-[#ffb377]">cardápio vivo</p>
          <h1 className="font-display text-6xl font-bold md:text-8xl">Monte seu pedido.</h1>
          <p className="mt-4 max-w-2xl text-lg font-semibold text-white/65">Escolha os pratos, veja o recibo e envie tudo organizado no WhatsApp.</p>
        </div>
        <Link href="/diagnostico" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ember)] px-6 py-4 text-center text-sm font-bold text-white">
          <ClipboardList aria-hidden="true" className="h-4 w-4" />
          Adaptar
        </Link>
      </header>

      <div className="mx-auto mt-8 flex max-w-7xl gap-3 overflow-x-auto pb-3" data-lenis-prevent>
        {categories.map((item) => (
          <button key={item} onClick={() => setCategory(item)} className={cn("focus-ring shrink-0 rounded-full border px-5 py-3 text-xs font-bold transition", category === item ? "border-[var(--charcoal)] bg-[var(--charcoal)] text-[var(--paper)]" : "border-black/10 bg-white/55 text-[var(--charcoal)]")}>{item}</button>
        ))}
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px]">
        <section className="grid gap-5 md:grid-cols-2">
          {visible.map((product, index) => (
            <ProductCard key={product.id} product={product} quantity={cart[product.id] ?? 0} onAdd={() => add(product.id)} onDecrement={() => remove(product.id)} featured={index === 0} />
          ))}
        </section>
        <div className="hidden lg:block lg:sticky lg:top-6 lg:self-start">
          <ReceiptPanel lines={lines} note={note} onNoteChange={setNote} />
        </div>
      </div>

      <CartDrawer lines={lines} note={note} onNoteChange={setNote} />
    </main>
  );
}

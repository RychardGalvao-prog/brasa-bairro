import Link from "next/link";
import { MessageCircle, ReceiptText } from "lucide-react";
import { selectedOrder } from "@/lib/orders";
import { money } from "@/lib/ui";

export function WhatsAppProof() {
  const order = selectedOrder;

  return (
    <section className="px-5 py-20 md:py-28">
      <div className="section-shell whatsapp-proof-grid">
        <div>
          <p className="font-hand text-4xl text-[#ffb377]">sem bagunça no atendimento</p>
          <h2 className="display-poster mt-4 text-5xl leading-none md:text-7xl">O pedido chega claro no WhatsApp.</h2>
          <p className="mt-6 max-w-lg text-lg font-semibold text-white/62">Em vez de áudio perdido, print cortado e item esquecido, o cliente envia uma mensagem organizada com itens, quantidade, subtotal e observação.</p>
          <Link href="/cardapio" className="whatsapp-proof-cta">
            <ReceiptText aria-hidden="true" className="h-4 w-4" />
            Montar pedido no cardápio
          </Link>
        </div>
        <div className="whatsapp-proof-ticket menu-ticket text-[var(--charcoal)]">
          <p className="text-xs font-bold uppercase text-black/45">Preview WhatsApp</p>
          <div className="mt-5 rounded-xl bg-[#e8fff0] p-5 text-sm font-bold leading-relaxed text-[#155a39]">
            <MessageCircle aria-hidden="true" className="mb-3 h-5 w-5" />
            Olá, Brasa & Bairro! Quero fazer um pedido:<br /><br />
            {order.items.map((item) => (
              <span key={item}>- 1x {item}<br /></span>
            ))}
            <br />
            Subtotal: {money(order.value)}<br />
            Observação: {order.observation}.
          </div>
        </div>
      </div>
    </section>
  );
}

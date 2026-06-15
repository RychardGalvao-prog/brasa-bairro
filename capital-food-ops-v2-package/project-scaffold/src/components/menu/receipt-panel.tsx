import Link from "next/link";
import { MessageCircle, PencilLine, ReceiptText, ShoppingBag } from "lucide-react";
import { getCartSubtotal, type CartLine } from "@/lib/cart";
import { buildOrderPreview, withWhatsAppMessage } from "@/lib/whatsapp";
import { money } from "@/lib/ui";

export function ReceiptPanel({
  lines,
  note,
  onNoteChange
}: {
  lines: CartLine[];
  note?: string;
  onNoteChange?: (value: string) => void;
}) {
  const subtotal = getCartSubtotal(lines);
  const preview = buildOrderPreview(lines, note);
  const whatsappUrl = withWhatsAppMessage(preview);

  return (
    <aside className="menu-ticket rounded-2xl p-5 shadow-sm">
      <div className="border-b border-dashed border-black/20 pb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-black/45">Recibo do pedido</p>
        <h2 className="mt-2 font-display text-3xl font-bold">Seu pedido</h2>
      </div>
      <div className="py-4">
        {lines.length === 0 ? (
          <div className="receipt-empty-state">
            <ReceiptText aria-hidden="true" className="h-5 w-5 text-[var(--sauce)]" />
            <p className="text-sm font-bold text-black/65">Seu recibo aparece aqui.</p>
            <span className="text-sm font-semibold text-black/52">Escolha um prato para liberar o WhatsApp organizado.</span>
          </div>
        ) : (
          <div className="space-y-3">
            {lines.map((line) => (
              <div key={line.product.id} className="flex justify-between gap-4 text-sm font-bold">
                <span>{line.quantity}x {line.product.name}</span>
                <span>{money(line.product.price * line.quantity)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      {onNoteChange && (
        <label className="mb-4 block">
          <span className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black/45">
            <PencilLine aria-hidden="true" className="h-4 w-4" />
            Observação
          </span>
          <textarea
            value={note}
            onChange={(event) => onNoteChange(event.target.value)}
            aria-label="Observação do pedido"
            maxLength={180}
            placeholder="Molho separado, ponto da carne, retirada..."
            className="min-h-24 w-full resize-none rounded-xl border border-black/10 bg-white/70 p-4 text-sm font-semibold outline-none transition focus:border-[var(--ember)]"
            data-lenis-prevent
          />
        </label>
      )}
      <div className="border-t border-dashed border-black/20 pt-4">
        <div className="flex justify-between font-display text-2xl font-bold">
          <span>Total</span>
          <span>{money(subtotal)}</span>
        </div>
        <pre className="mt-4 max-h-56 whitespace-pre-wrap break-words rounded-2xl bg-[#e8fff0] p-4 text-xs font-bold leading-relaxed text-[#155a39]" data-lenis-prevent>
          {preview}
        </pre>
        <p className="demo-mark mt-2">Dados fictícios. Fluxos reais. Estrutura adaptável.</p>
        <div className="mt-4 grid gap-3">
          {lines.length > 0 ? (
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[var(--status)] px-5 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Abrir WhatsApp organizado
            </a>
          ) : (
            <button
              className="focus-ring inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-full bg-[var(--status)] px-5 py-4 text-center text-sm font-bold text-white opacity-50"
              disabled
              type="button"
            >
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Abrir WhatsApp organizado
            </button>
          )}
          <Link className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-black/15 bg-[var(--paper)] px-5 py-4 text-center text-sm font-bold text-[var(--charcoal)] transition hover:-translate-y-0.5" href="/diagnostico">
            <ShoppingBag aria-hidden="true" className="h-4 w-4" />
            Adaptar para meu restaurante
          </Link>
        </div>
      </div>
    </aside>
  );
}

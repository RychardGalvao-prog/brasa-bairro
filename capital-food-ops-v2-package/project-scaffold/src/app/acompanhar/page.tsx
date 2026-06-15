import Link from "next/link";
import { ArrowLeft, Clock3, MessageCircle, ReceiptText, Utensils } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { selectedOrder, selectedOrderTimeline } from "@/lib/orders";
import { money } from "@/lib/ui";
import { withWhatsAppMessage } from "@/lib/whatsapp";

const order = selectedOrder;
const whatsappUrl = withWhatsAppMessage([
  `Olá, Brasa & Bairro! Quero acompanhar o pedido ${order.code}.`,
  "",
  `Cliente: ${order.customer}`,
  `Origem: ${order.source}`,
  `Status: ${order.status}`,
  `Previsão: ${order.eta}`
].join("\n"));

export default function AcompanharPage() {
  return (
    <>
      <main className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <Link className="mb-7 inline-flex items-center gap-2 text-sm font-bold text-black/58 transition hover:text-black" href="/cardapio">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Voltar ao cardápio
          </Link>

          <div className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="font-hand text-4xl text-[var(--sauce)]">pedido {order.code}</p>
              <h1 className="font-display text-6xl font-bold leading-none md:text-8xl">Acompanhe o pedido.</h1>
            </div>
            <div className="menu-ticket rounded-lg border border-black/14 p-5">
              <p className="text-base font-semibold leading-relaxed text-black/62">
                Pedido via {order.source}, com retirada, itens, observação e previsão no mesmo recibo.
              </p>
              <p className="demo-mark mt-3">Dados fictícios. Fluxos reais. Estrutura adaptável.</p>
            </div>
          </div>

          <section className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <aside className="paper-surface rounded-lg p-6 md:p-8">
              <div className="flex flex-col gap-4 border-b border-dashed border-black/20 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-black/45">Pedido</p>
                  <h2 className="mt-2 font-display text-4xl font-bold leading-none">{order.code}</h2>
                </div>
                <span className="inline-flex rounded-full bg-[var(--status)] px-4 py-2 text-sm font-bold text-white">
                  {order.status}
                </span>
              </div>

              <div className="mt-6 grid gap-4 text-sm font-semibold text-black/62 sm:grid-cols-2">
                <InfoLine label="Origem" value={order.source} />
                <InfoLine label="Cliente" value={order.customer} />
                <InfoLine label="Horário" value={order.time} />
                <InfoLine label="Previsão" value={order.eta} />
              </div>

              <div className="mt-6 border-t border-dashed border-black/20 pt-6">
                <p className="mb-3 flex items-center gap-2 text-sm font-bold text-black/58">
                  <Utensils aria-hidden="true" className="h-4 w-4" />
                  Itens do pedido
                </p>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item} className="flex items-center justify-between gap-4 border-b border-dotted border-black/14 pb-2 text-sm font-bold">
                      <span>1x {item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex justify-between font-display text-2xl font-bold">
                  <span>Total</span>
                  <span>{money(order.value)}</span>
                </div>
                <p className="mt-4 rounded-lg bg-white/60 p-4 text-sm font-semibold text-black/62">
                  Observação: {order.observation}.
                </p>
              </div>
            </aside>

            <section className="paper-surface rounded-lg p-6 md:p-8">
              <div className="mb-7 flex flex-col gap-3 border-b border-dashed border-black/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="flex items-center gap-2 text-sm font-bold text-black/52">
                    <Clock3 aria-hidden="true" className="h-4 w-4" />
                    Linha do pedido
                  </p>
                  <h2 className="mt-2 font-display text-4xl font-bold leading-none">Cozinha e balcão</h2>
                </div>
                <span className="text-sm font-bold text-black/55">ETA {order.eta}</span>
              </div>

              <div className="space-y-0">
                {selectedOrderTimeline.map((step, index) => (
                  <div key={step.label} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span
                        className={[
                          "grid h-10 w-10 place-items-center rounded-full text-sm font-bold",
                          step.state === "done" ? "bg-[var(--charcoal)] text-[var(--paper)]" : "",
                          step.state === "current" ? "bg-[var(--ember)] text-[var(--charcoal)]" : "",
                          step.state === "next" ? "border border-black/18 bg-white/65 text-black/48" : ""
                        ].join(" ")}
                      >
                        {index + 1}
                      </span>
                      {index !== selectedOrderTimeline.length - 1 && <span className="h-full min-h-10 w-px bg-black/15" />}
                    </div>
                    <div className="pb-7">
                      <h3 className="font-display text-3xl font-bold leading-none">{step.label}</h3>
                      <p className="mt-1 font-semibold text-black/62">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <a
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--status)] px-5 py-4 text-center text-sm font-bold text-white transition hover:-translate-y-0.5"
                  href={whatsappUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  <MessageCircle aria-hidden="true" className="h-4 w-4" />
                  Chamar no WhatsApp
                </a>
                <Link
                  className="focus-ring inline-flex items-center justify-center gap-2 rounded-lg border border-black/15 bg-[var(--paper)] px-5 py-4 text-center text-sm font-bold text-[var(--charcoal)] transition hover:-translate-y-0.5"
                  href="/cardapio"
                >
                  <ReceiptText aria-hidden="true" className="h-4 w-4" />
                  Montar outro pedido
                </Link>
              </div>
            </section>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function InfoLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-black/10 bg-white/55 p-4">
      <p className="text-xs font-bold text-black/45">{label}</p>
      <p className="mt-1 text-base font-bold text-[var(--charcoal)]">{value}</p>
    </div>
  );
}

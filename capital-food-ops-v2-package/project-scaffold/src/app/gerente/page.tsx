import Link from "next/link";
import { ArrowLeft, Clock3, MessageCircle, ReceiptText } from "lucide-react";
import { kitchenQueue, operationsMetrics, operationsSummary, serviceChannels } from "@/lib/operations";
import { restaurantProfile } from "@/lib/restaurant-profile";
import { money } from "@/lib/ui";
import { SiteFooter } from "@/components/layout/site-footer";

export default function GerentePage() {
  const maxChannel = Math.max(...serviceChannels.map((channel) => channel.value));

  return (
    <>
      <main className="px-5 py-14 md:py-16">
        <div className="section-shell">
          <Link className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-black/58 transition hover:text-black" href="/">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Voltar para o balcão
          </Link>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="section-kicker">bastidor operacional</p>
              <h1 className="display-poster mt-3 text-[3.4rem] leading-[0.94] md:text-[7rem]">Gerente da casa.</h1>
            </div>
            <div className="menu-ticket border border-black/14 p-5">
              <p className="text-sm font-semibold leading-relaxed text-black/62">
                Enquanto o cliente pede bonito, o Fábio acompanha fila, canais e horários para a cozinha não se perder.
              </p>
              <p className="demo-mark mt-3">{restaurantProfile.notice}</p>
            </div>
          </div>

          <section className="operation-board mt-10">
            <div className="operation-metric-grid">
              {operationsMetrics.map((metric) => (
                <article className="operation-metric" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-8 grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
            <div className="kitchen-queue">
              <div className="queue-header">
                <span>Comandas recentes</span>
                <strong>{operationsSummary.alert}</strong>
              </div>
              <div className="grid gap-3">
                {kitchenQueue.map((order) => (
                  <article key={order.code} className="queue-ticket">
                    <div>
                      <p>{order.code} · {order.customer}</p>
                      <span>{order.channel} · {order.time} · {order.item}</span>
                      <small>{order.note}</small>
                    </div>
                    <div className="text-right">
                      <strong>{order.status}</strong>
                      <span>{money(order.value)}</span>
                      <small>{order.eta}</small>
                      <em>{order.action}</em>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="product-ops-slip">
                <ReceiptText aria-hidden="true" className="h-8 w-8 text-[var(--ember)]" />
                <span>Leitura do dia</span>
                <strong>{operationsSummary.topProduct}</strong>
                <p>
                  Produto mais vendido. Pico em {operationsSummary.peak}. Canal principal: {operationsSummary.mainChannel}.
                </p>
              </div>

              <div className="channel-board">
                {serviceChannels.map((channel) => (
                  <div key={channel.label} className="channel-row">
                    <div className="flex items-center justify-between gap-4">
                      <span>{channel.label}</span>
                      <strong>{channel.value}%</strong>
                    </div>
                    <div className="channel-track" aria-hidden="true">
                      <span style={{ width: `${(channel.value / maxChannel) * 100}%` }} />
                    </div>
                    <p>{channel.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="time-slip">
              <span><Clock3 aria-hidden="true" className="mr-2 inline h-4 w-4" /> Pico almoço</span>
              <strong>{operationsSummary.peak}</strong>
            </div>
            <div className="time-slip time-slip--charcoal">
              <span><MessageCircle aria-hidden="true" className="mr-2 inline h-4 w-4" /> Canal principal</span>
              <strong>{operationsSummary.mainChannel}</strong>
            </div>
            <div className="time-slip time-slip--sauce">
              <span>Gargalo do almoço</span>
              <strong>{operationsSummary.bottleneck}</strong>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

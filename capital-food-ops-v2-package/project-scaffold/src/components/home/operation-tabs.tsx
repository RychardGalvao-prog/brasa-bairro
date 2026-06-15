"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Clock3, Flame, PackageCheck, ReceiptText } from "lucide-react";
import { kitchenQueue, operationsMetrics, operationsSummary, operationTabs, serviceChannels } from "@/lib/operations";
import { selectedOrder } from "@/lib/orders";
import { cn, money } from "@/lib/ui";

export function OperationTabs() {
  return (
    <Tabs.Root defaultValue="pedidos" className="operation-board">
      <div className="daily-command" aria-label="Comanda do dia">
        <div className="daily-command__head">
          <span>COMANDA DO DIA</span>
          <strong>{operationsSummary.focusOrder}</strong>
        </div>
        {operationsMetrics.map((metric) => (
          <article className="daily-command__line" key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.detail}</small>
          </article>
        ))}
        <div className="daily-command__line daily-command__line--wide">
          <span>Mais vendido</span>
          <strong>{operationsSummary.topProduct}</strong>
          <small>produto que puxa combo com Guaraná e saída no almoço</small>
        </div>
        <div className="daily-command__line daily-command__line--wide">
          <span>Alerta do balcão</span>
          <strong>{operationsSummary.alert}</strong>
          <small>confirmação antes da cozinha perder ritmo</small>
        </div>
        <div className="daily-command__line daily-command__line--wide">
          <span>Gargalo</span>
          <strong>{operationsSummary.bottleneck}</strong>
          <small>retirada e WhatsApp chegam juntos no pico</small>
        </div>
      </div>

      <Tabs.List className="operation-tab-list" aria-label="Visões do balcão operacional">
        {operationTabs.map((tab) => (
          <Tabs.Trigger
            key={tab.id}
            value={tab.id}
            data-operation-tab={tab.id}
            className="operation-tab-trigger focus-ring"
          >
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {operationTabs.map((tab) => (
        <Tabs.Content key={tab.id} value={tab.id} className="operation-tab-content">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <div className="operation-copy-panel">
              <p className="operation-panel-label">Balcão da casa</p>
              <h3>{tab.title}</h3>
              <p>{tab.description}</p>
              <div className="mt-6 grid gap-3 text-sm font-semibold text-black/64">
                <span><ReceiptText aria-hidden="true" className="h-4 w-4" /> Pedido em foco: {selectedOrder.code} · {selectedOrder.customer}</span>
                <span><Clock3 aria-hidden="true" className="h-4 w-4" /> Pico: {operationsSummary.peak}</span>
                <span><Flame aria-hidden="true" className="h-4 w-4" /> Último da fila: {operationsSummary.lastOrder}</span>
              </div>
            </div>

            <PanelForTab id={tab.id} />
          </div>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

function PanelForTab({ id }: { id: string }) {
  if (id === "canais") return <ChannelPanel />;
  if (id === "horarios") return <TimePanel />;
  if (id === "produtos") return <ProductPanel />;
  return <KitchenQueuePanel />;
}

function KitchenQueuePanel() {
  return (
    <div className="kitchen-queue">
      <div className="queue-header">
        <span>Fila da cozinha</span>
        <strong>{operationsSummary.activeQueue} · {operationsSummary.alert}</strong>
      </div>
      <div className="grid gap-3">
        {kitchenQueue.map((order) => (
          <article className="queue-ticket" key={order.code}>
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
  );
}

function ChannelPanel() {
  const max = Math.max(...serviceChannels.map((channel) => channel.value));

  return (
    <div className="channel-board">
      {serviceChannels.map((channel) => (
        <div className="channel-row" key={channel.label}>
          <div className="flex items-center justify-between gap-4">
            <span>{channel.label}</span>
            <strong>{channel.value}%</strong>
          </div>
          <div className="channel-track" aria-hidden="true">
            <span style={{ width: `${(channel.value / max) * 100}%` }} />
          </div>
          <p>{channel.description}</p>
        </div>
      ))}
    </div>
  );
}

function TimePanel() {
  const slots = [
    { label: "Almoço", value: operationsSummary.peak, tone: "ember" },
    { label: "Noite", value: operationsSummary.eveningPeak, tone: "charcoal" },
    { label: "Gargalo", value: operationsSummary.bottleneck, tone: "sauce" }
  ];

  return (
    <div className="time-board">
      {slots.map((slot) => (
        <div className={cn("time-slip", `time-slip--${slot.tone}`)} key={slot.label}>
          <span>{slot.label}</span>
          <strong>{slot.value}</strong>
        </div>
      ))}
      <p className="demo-mark">{operationsSummary.notice}</p>
    </div>
  );
}

function ProductPanel() {
  return (
    <div className="product-ops-slip">
      <PackageCheck aria-hidden="true" className="h-8 w-8 text-[var(--ember)]" />
      <span>Produto âncora</span>
      <strong>{operationsSummary.topProduct}</strong>
      <p>
        O prato herói organiza o cardápio, puxa combo com Guaraná e ajuda o gerente a entender o movimento sem tirar o foco do balcão.
      </p>
    </div>
  );
}

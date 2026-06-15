import { activeOrderCount, activeOrders, latestOrder, pendingConfirmationCount, selectedOrder } from "./orders";

export const operationsSummary = {
  ordersToday: 48,
  revenue: 2847.9,
  averageTicket: 59.33,
  prepTime: "28 min",
  topProduct: "Prato Feito da Brasa",
  peak: "11h30 às 13h30",
  eveningPeak: "18h30 às 21h",
  mainChannel: "WhatsApp",
  bottleneck: "retirada entre 12h e 13h",
  alert: `${pendingConfirmationCount} pedido aguardando confirmação`,
  activeQueue: `${activeOrderCount} pedidos ativos na fila`,
  focusOrder: selectedOrder.code,
  lastOrder: latestOrder.code,
  notice: "Dados fictícios. Fluxos reais. Estrutura adaptável."
} as const;

export const operationsMetrics = [
  {
    label: "Pedidos hoje",
    value: "48",
    detail: "movimento do almoço",
    tab: "pedidos"
  },
  {
    label: "Faturamento",
    value: "R$ 2.847,90",
    detail: "soma dos pedidos do dia",
    tab: "pedidos"
  },
  {
    label: "Ticket médio",
    value: "R$ 59,33",
    detail: "média por pedido",
    tab: "produtos"
  },
  {
    label: "Tempo médio",
    value: "28 min",
    detail: "entre recebido e preparo",
    tab: "horarios"
  },
  {
    label: "Canal principal",
    value: "WhatsApp",
    detail: "maior origem do dia",
    tab: "canais"
  },
  {
    label: "Fila ativa",
    value: String(activeOrderCount),
    detail: "pedidos em andamento",
    tab: "pedidos"
  }
] as const;

export const kitchenQueue = activeOrders.map((order) => ({
  code: order.code,
  channel: order.source,
  customer: order.customer,
  status: order.status,
  value: order.value,
  note: `${order.items.join(" + ")} · ${order.observation}`,
  time: order.time,
  eta: order.eta,
  action: order.action,
  item: order.items[0]
}));

export const serviceChannels = [
  { label: "WhatsApp", value: 42, description: "pedido já chega formatado" },
  { label: "Balcão", value: 24, description: "comanda de atendimento local" },
  { label: "Retirada", value: 18, description: "cliente passa no horário" },
  { label: "Instagram", value: 11, description: "vira conversa no WhatsApp" },
  { label: "Telefone", value: 5, description: "registrado manualmente" }
] as const;

export const operationTabs = [
  {
    id: "pedidos",
    label: "Pedidos",
    title: "Fila de cozinha sem conversa perdida",
    description: "Cada comanda mostra origem, cliente, item principal, horário, status e próxima ação."
  },
  {
    id: "canais",
    label: "Canais",
    title: "De onde o pedido chega",
    description: "WhatsApp lidera a rotina, mas balcão, retirada e Instagram também entram no mesmo ritmo."
  },
  {
    id: "horarios",
    label: "Horários",
    title: "Pico do almoço pede atenção",
    description: "O gargalo fica entre 12h e 13h, quando retirada e WhatsApp chegam juntos."
  },
  {
    id: "produtos",
    label: "Produtos",
    title: "PF da Brasa puxa o movimento",
    description: "O prato herói orienta combos, bebida sugerida e leitura comercial do cardápio."
  }
] as const;

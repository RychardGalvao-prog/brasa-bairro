export type OrderStatus =
  | "Recebido"
  | "Em preparo"
  | "Pronto"
  | "Saiu para entrega"
  | "Aguardando confirmação";

export type OrderSource = "WhatsApp" | "Balcão" | "Retirada" | "Delivery" | "Instagram";

export type RestaurantOrder = {
  code: string;
  source: OrderSource;
  customer: string;
  items: string[];
  value: number;
  status: OrderStatus;
  time: string;
  eta: string;
  observation: string;
  action: string;
};

export type OrderTimelineItem = {
  label: string;
  time: string;
  state: "done" | "current" | "next";
};

export const activeOrders = [
  {
    code: "#BB-1049",
    source: "WhatsApp",
    customer: "Retirada",
    items: ["Prato Feito da Brasa", "Guaraná lata"],
    value: 39.8,
    status: "Recebido",
    time: "12:42",
    eta: "25 min",
    observation: "carne de sol, molho separado",
    action: "próximo"
  },
  {
    code: "#BB-1050",
    source: "Balcão",
    customer: "Retirada",
    items: ["Prato Feito da Brasa"],
    value: 32.9,
    status: "Em preparo",
    time: "12:47",
    eta: "18 min",
    observation: "farofa caprichada",
    action: "em preparo"
  },
  {
    code: "#BB-1051",
    source: "Retirada",
    customer: "Lucas",
    items: ["Combo Bairro"],
    value: 54.8,
    status: "Pronto",
    time: "12:58",
    eta: "retirar no balcão",
    observation: "chamar no balcão",
    action: "pronto"
  },
  {
    code: "#BB-1052",
    source: "Delivery",
    customer: "Amanda",
    items: ["X-Bairro Especial", "Batata da Casa"],
    value: 68.7,
    status: "Saiu para entrega",
    time: "13:04",
    eta: "14 min",
    observation: "molho da batata separado",
    action: "em rota"
  },
  {
    code: "#BB-1053",
    source: "Instagram",
    customer: "Rafael",
    items: ["Pastel de Carne de Sol", "Limonada da Casa"],
    value: 31.8,
    status: "Aguardando confirmação",
    time: "13:09",
    eta: "confirmar pedido",
    observation: "confirmar retirada e forma de pagamento",
    action: "confirmar"
  }
] as const satisfies readonly RestaurantOrder[];

export const selectedOrderCode = "#BB-1049";

export function getOrderByCode(code: string) {
  return activeOrders.find((order) => order.code === code);
}

export const selectedOrder = getOrderByCode(selectedOrderCode) ?? activeOrders[0];

export const selectedOrderTimeline = [
  { label: "Pedido recebido", time: "12:42", state: "done" },
  { label: "Entrou na cozinha", time: "12:45", state: "done" },
  { label: "Em preparo", time: "12:48", state: "current" },
  { label: "Conferência final", time: "previsão 13:07", state: "next" },
  { label: "Pronto para retirada", time: "aguardando", state: "next" }
] as const satisfies readonly OrderTimelineItem[];

export const activeOrderCount = activeOrders.length;

export const pendingConfirmationCount = activeOrders.filter((order) => order.status === "Aguardando confirmação").length;

export const latestOrder = activeOrders[4];

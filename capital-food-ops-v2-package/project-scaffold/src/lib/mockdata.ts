export type Category =
  | "Mais pedidos"
  | "Pratos brasileiros"
  | "Combos"
  | "Lanches da chapa"
  | "Petiscos"
  | "Bebidas"
  | "Sobremesas";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  tags: string[];
  serves?: string;
  whatsappHint?: string;
  pairing?: string;
  orderNote?: string;
  menuBadge?: string;
  prepTime?: string;
  available?: boolean;
  accent?: "ember" | "sauce" | "charcoal" | "green";
};

export const categories: Category[] = [
  "Mais pedidos",
  "Pratos brasileiros",
  "Combos",
  "Lanches da chapa",
  "Petiscos",
  "Bebidas",
  "Sobremesas"
];

export const products: Product[] = [
  {
    id: "prato-feito-brasa",
    name: "Prato Feito da Brasa",
    description: "Arroz, feijão ou baião, carne de sol ou frango na chapa, farofa, vinagrete, macaxeira e molho da casa.",
    price: 32.9,
    category: "Mais pedidos",
    tags: ["Almoço da casa", "Pedido campeão"],
    serves: "Serve 1 pessoa",
    whatsappHint: "Mais pedido no almoço",
    pairing: "Combina com Guaraná",
    orderNote: "Pronto em média 25 min",
    menuBadge: "Pedido campeão da casa",
    prepTime: "25 min",
    available: true,
    accent: "ember"
  },
  {
    id: "carne-sol",
    name: "Carne de Sol Acebolada",
    description: "Carne de sol acebolada, baião cremoso, macaxeira, farofa e vinagrete fresco.",
    price: 42.9,
    category: "Pratos brasileiros",
    tags: ["Da casa", "Regional"],
    serves: "Serve 1 pessoa",
    whatsappHint: "Feito na chapa",
    pairing: "Combina com Suco de Cupuaçu",
    orderNote: "Chapa finalizada na hora",
    prepTime: "30 min",
    available: true,
    accent: "sauce"
  },
  {
    id: "baiao-cremoso",
    name: "Baião Cremoso",
    description: "Baião de dois cremoso com queijo coalho, carne de sol em cubos e cheiro-verde.",
    price: 34.9,
    category: "Pratos brasileiros",
    tags: ["Conforto", "Quente"],
    serves: "Serve 1 pessoa",
    whatsappHint: "Sai bem na retirada",
    pairing: "Combina com Limonada da Casa",
    orderNote: "Bem cremoso",
    prepTime: "24 min",
    available: true,
    accent: "charcoal"
  },
  {
    id: "frango-chapa",
    name: "Frango na Chapa",
    description: "Frango grelhado, arroz, feijão, salada, farofa e molho de alho da casa.",
    price: 29.9,
    category: "Pratos brasileiros",
    tags: ["Leve", "Chapa"],
    serves: "Serve 1 pessoa",
    whatsappHint: "Feito na chapa",
    pairing: "Combina com Guaraná",
    orderNote: "Pronto em média 20 min",
    prepTime: "20 min",
    available: true,
    accent: "green"
  },
  {
    id: "combo-almoco",
    name: "Combo Almoço Rápido",
    description: "Prato Feito da Brasa + bebida lata. Pedido simples, completo e organizado.",
    price: 39.9,
    category: "Combos",
    tags: ["Combo", "Delivery"],
    serves: "Serve 1 pessoa",
    whatsappHint: "Pronto para montar no WhatsApp",
    pairing: "Já vem com bebida",
    orderNote: "Ideal para almoço corrido",
    prepTime: "25 min",
    available: true,
    accent: "ember"
  },
  {
    id: "x-bairro",
    name: "X-Bairro Especial",
    description: "Pão selado, burger artesanal, queijo, bacon crocante, salada e molho da casa.",
    price: 28.9,
    category: "Lanches da chapa",
    tags: ["Noite", "Chapa"],
    serves: "Serve 1 pessoa",
    whatsappHint: "Sai muito na retirada",
    pairing: "Combina com Batata da Casa",
    orderNote: "Pão tostado na chapa",
    prepTime: "22 min",
    available: true,
    accent: "sauce"
  },
  {
    id: "pastel-carne-sol",
    name: "Pastel de Carne de Sol",
    description: "Pastel crocante com carne de sol desfiada, queijo e toque de cheiro-verde.",
    price: 16.9,
    category: "Petiscos",
    tags: ["Petisco", "Regional"],
    serves: "Unidade grande",
    whatsappHint: "Feito na hora",
    pairing: "Combina com Limonada",
    orderNote: "Frito na hora",
    prepTime: "15 min",
    available: true,
    accent: "ember"
  },
  {
    id: "batata-casa",
    name: "Batata da Casa",
    description: "Batata crocante com molho Brasa & Bairro e finalização de cheiro-verde.",
    price: 19.9,
    category: "Petiscos",
    tags: ["Compartilhar", "Crocante"],
    serves: "Serve 2 pessoas",
    whatsappHint: "Combina com a chapa",
    pairing: "Combina com X-Bairro",
    orderNote: "Molho separado no delivery",
    prepTime: "18 min",
    available: true,
    accent: "charcoal"
  },
  {
    id: "guarana-lata",
    name: "Guaraná Lata",
    description: "Clássico gelado para acompanhar prato, combo ou lanche da chapa.",
    price: 6.9,
    category: "Bebidas",
    tags: ["Gelado", "Clássico"],
    serves: "350 ml",
    whatsappHint: "Combina com o PF da Brasa",
    pairing: "Vai com tudo",
    orderNote: "Bem gelado",
    prepTime: "Agora",
    available: true,
    accent: "green"
  },
  {
    id: "suco-cupuacu",
    name: "Suco de Cupuaçu",
    description: "Suco regional gelado, cremoso e feito para equilibrar comida de brasa.",
    price: 10.9,
    category: "Bebidas",
    tags: ["Regional", "Gelado"],
    serves: "400 ml",
    whatsappHint: "Muito pedido no almoço",
    pairing: "Combina com Carne de Sol",
    orderNote: "Copo lacrado para delivery",
    prepTime: "Agora",
    available: true,
    accent: "green"
  },
  {
    id: "pudim-casa",
    name: "Pudim da Casa",
    description: "Pudim cremoso com calda de caramelo, porção individual.",
    price: 12.9,
    category: "Sobremesas",
    tags: ["Da casa", "Doce"],
    serves: "1 fatia",
    whatsappHint: "Fecha bem o pedido",
    pairing: "Depois do almoço",
    orderNote: "Vai embalado separado",
    prepTime: "Agora",
    available: true,
    accent: "ember"
  }
];

export const opsMetrics = {
  ordersToday: 48,
  revenue: 2847.9,
  averageTicket: 59.33,
  prepTime: "28 min",
  topProduct: "Prato Feito da Brasa",
  peak: "11h30–13h30 e 18h30–21h",
  mainChannel: "WhatsApp"
};

export const recentOrders = [
  ...activeOrders.map((order) => ({
    code: order.code,
    channel: order.source,
    status: order.status,
    value: order.value
  }))
];

export const channelMix = [
  { label: "WhatsApp", value: 42 },
  { label: "Balcão", value: 24 },
  { label: "Retirada", value: 18 },
  { label: "Instagram", value: 11 },
  { label: "Telefone", value: 5 }
];
import { activeOrders } from "./orders";

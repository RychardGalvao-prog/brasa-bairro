import type { DiagnosticFormData } from "./diagnostic";
import type { CartLine } from "./cart";
import { money } from "./ui";

export const CAPITAL_WHATSAPP_URL = process.env.NEXT_PUBLIC_CAPITAL_WHATSAPP_URL ?? "https://wa.me/559870288070";

export function buildOrderPreview(lines: CartLine[], note?: string) {
  const subtotal = lines.reduce((acc, line) => acc + line.product.price * line.quantity, 0);
  const items = lines
    .map((line) => `- ${line.quantity}x ${line.product.name} (${money(line.product.price * line.quantity)})`)
    .join("\n");
  const safeNote = note?.trim().slice(0, 180);

  return [
    "Olá, Brasa & Bairro! Quero fazer um pedido:",
    "",
    items || "- Nenhum item selecionado ainda",
    "",
    `Subtotal: ${money(subtotal)}`,
    safeNote ? `Observação: ${safeNote}` : "Observação: sem observações",
    "",
    "Origem: Cardápio Brasa & Bairro"
  ].join("\n");
}

export function buildCapitalDiagnosticMessage(data: DiagnosticFormData) {
  return [
    "Olá, Equipe Capital! Testei a experiência Capital Food Ops / Brasa & Bairro.",
    "",
    "Vi cardápio digital, pedido organizado no WhatsApp e bastidor operacional para restaurante.",
    "",
    `Meu negócio é: ${data.businessType}`,
    `Hoje recebo pedidos por: ${data.channels.join(", ")}`,
    `Minhas principais dores são: ${data.pains.join(", ")}`,
    `Interesse: ${data.interest}`,
    "",
    "Quero entender como adaptar uma experiência parecida para meu restaurante."
  ].join("\n");
}

export function withWhatsAppMessage(message: string) {
  const separator = CAPITAL_WHATSAPP_URL.includes("?") ? "&" : "?";
  return `${CAPITAL_WHATSAPP_URL}${separator}text=${encodeURIComponent(message)}`;
}

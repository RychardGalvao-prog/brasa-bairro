import { z } from "zod";

export const diagnosticChannels = [
  "WhatsApp",
  "Instagram",
  "Balcão",
  "Telefone",
  "iFood/outro app",
  "QR Code"
] as const;

export const diagnosticPains = [
  "Pedidos bagunçados no WhatsApp",
  "Cardápio desatualizado",
  "Pouca presença digital",
  "Não sei quais produtos vendem mais",
  "Atendimento manual demais",
  "Quero vender melhor pelo celular"
] as const;

export const diagnosticInterests = [
  "Sim, quero conversar com a Capital",
  "Quero entender os valores",
  "Quero ver se serve para meu negócio",
  "Ainda estou só explorando"
] as const;

function isDiagnosticInterest(value: string) {
  return (diagnosticInterests as readonly string[]).includes(value);
}

export const diagnosticSchema = z.object({
  businessType: z
    .string()
    .trim()
    .min(2, "Informe o tipo de negócio.")
    .max(80, "Use no máximo 80 caracteres."),
  channels: z.array(z.enum(diagnosticChannels)).min(1, "Escolha pelo menos um canal.").max(6),
  pains: z.array(z.enum(diagnosticPains)).min(1, "Escolha pelo menos uma dor.").max(6),
  interest: z.string().refine(isDiagnosticInterest, "Escolha seu interesse.")
});

export type DiagnosticFormData = z.infer<typeof diagnosticSchema>;

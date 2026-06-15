"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { MessageCircle } from "lucide-react";
import {
  diagnosticChannels,
  diagnosticInterests,
  diagnosticPains,
  diagnosticSchema,
  type DiagnosticFormData
} from "@/lib/diagnostic";
import { buildCapitalDiagnosticMessage, withWhatsAppMessage } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function DiagnosticForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<DiagnosticFormData>({
    resolver: zodResolver(diagnosticSchema),
    defaultValues: { channels: [], pains: [] }
  });

  function onSubmit(data: DiagnosticFormData) {
    const message = buildCapitalDiagnosticMessage(data);
    window.open(withWhatsAppMessage(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="diagnostic-form paper-surface mx-auto max-w-3xl space-y-8 rounded-2xl p-6 md:p-10">
      <Field label="Qual tipo de negócio você tem?" htmlFor="businessType" error={errors.businessType?.message}>
        <input
          {...register("businessType")}
          id="businessType"
          aria-invalid={Boolean(errors.businessType)}
          autoComplete="organization"
          className="w-full rounded-xl border border-black/10 bg-white/70 p-4 font-semibold outline-none transition focus:border-[var(--ember)]"
          maxLength={80}
          placeholder="Restaurante, lanchonete, marmitaria..."
        />
      </Field>
      <Field label="Por onde você recebe pedidos hoje?" error={errors.channels?.message}>
        <CheckboxGrid items={diagnosticChannels} register={register("channels")} />
      </Field>
      <Field label="Qual sua maior dor atualmente?" error={errors.pains?.message}>
        <CheckboxGrid items={diagnosticPains} register={register("pains")} />
      </Field>
      <Field label="Você quer adaptar uma experiência parecida?" htmlFor="interest" error={errors.interest?.message}>
        <select {...register("interest")} id="interest" aria-invalid={Boolean(errors.interest)} className="w-full rounded-xl border border-black/10 bg-white/70 p-4 font-semibold outline-none transition focus:border-[var(--ember)]">
          <option value="">Selecione</option>
          {diagnosticInterests.map((interest) => (
            <option key={interest} value={interest}>{interest}</option>
          ))}
        </select>
      </Field>
      <Button type="submit" variant="ember" size="lg" className="w-full gap-2" disabled={isSubmitting}>
        <MessageCircle aria-hidden="true" className="h-4 w-4" />
        {isSubmitting ? "Preparando mensagem..." : "Abrir conversa com a Capital"}
      </Button>
      <p className="diagnostic-form__note">
        Dados fictícios nesta demo. Suas respostas servem para orientar uma conversa comercial real.
      </p>
    </form>
  );
}

function Field({ label, htmlFor, error, children }: { label: string; htmlFor?: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="block">
      {htmlFor ? (
        <label htmlFor={htmlFor} className="mb-3 block font-display text-3xl font-bold">{label}</label>
      ) : (
        <p className="mb-3 block font-display text-3xl font-bold">{label}</p>
      )}
      {children}
      {error && <span className="mt-2 block text-sm font-bold text-[var(--sauce)]">{error}</span>}
    </div>
  );
}

function CheckboxGrid({ items, register }: { items: readonly string[]; register: UseFormRegisterReturn }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <label key={item} className="flex items-center gap-3 rounded-xl border border-black/10 bg-white/60 p-4 text-sm font-bold transition hover:border-[var(--ember)]">
          <input type="checkbox" value={item} {...register} className="h-5 w-5 accent-[var(--ember)]" />
          {item}
        </label>
      ))}
    </div>
  );
}

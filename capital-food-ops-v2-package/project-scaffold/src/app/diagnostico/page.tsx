import { DiagnosticForm } from "@/components/diagnostic/diagnostic-form";
import { SiteFooter } from "@/components/layout/site-footer";

export default function DiagnosticoPage() {
  return (
    <>
      <main className="px-5 py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="font-hand text-4xl text-[var(--sauce)]">agora imagine no seu restaurante</p>
          <h1 className="mt-3 font-display text-6xl font-bold leading-none md:text-8xl">Adaptar para sua casa.</h1>
          <p className="mt-5 text-lg font-semibold text-black/62">
            Conte como o pedido chega hoje. A Capital devolve uma conversa mais objetiva para transformar cardápio, WhatsApp e balcão em um fluxo só.
          </p>
          <p className="mt-3 text-lg font-semibold text-black/72">
            A mensagem abre no WhatsApp oficial da Capital com suas respostas já organizadas.
          </p>
        </div>
        <DiagnosticForm />
      </main>
      <SiteFooter />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[var(--charcoal)] px-5 py-12 text-[var(--paper)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-bold text-white/50">Capital Food Ops</p>
          <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-none md:text-6xl">Agora imagine isso com o nome do seu restaurante.</h2>
          <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-white/64">
            Se o seu restaurante recebe pedidos pelo WhatsApp, Instagram ou balcão, a Capital pode adaptar uma experiência parecida para sua rotina.
          </p>
          <p className="mt-3 max-w-2xl text-base font-semibold leading-relaxed text-white/74">
            Cardápio bonito para o cliente. Pedido organizado para a equipe. Operação clara para o dono.
          </p>
          <Link href="/diagnostico" className="mt-6 inline-flex rounded-full bg-[var(--ember)] px-6 py-4 text-sm font-bold text-white transition hover:bg-[var(--sauce)]">Adaptar para meu restaurante</Link>
        </div>
        <div className="space-y-3 text-sm text-white/60">
          <p>Dados fictícios. Fluxos reais. Estrutura adaptável.</p>
          <div className="flex items-center gap-3">
            <span>DESENVOLVIDO POR</span>
            <Image src="/capital/logo-capital-horizontal-white.png" alt="Capital Tecnologia" width={160} height={42} className="h-auto w-36" />
          </div>
        </div>
      </div>
    </footer>
  );
}

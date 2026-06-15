import { MapPin, Timer, Utensils } from "lucide-react";
import { RestaurantPhoto } from "@/components/RestaurantPhoto";
import { restaurantMedia } from "@/lib/restaurant-assets";
import { founderArtifacts, restaurantProfile } from "@/lib/restaurant-profile";
import { DemoContextPopover } from "./demo-context-popover";

export function FounderNote() {
  return (
    <aside className="founder-note paper-surface relative overflow-hidden p-6 md:p-8">
      <div className="receipt-tear" aria-hidden="true" />
      <div className="founder-stamp" aria-hidden="true">{founderArtifacts.stamp}</div>
      <p className="section-kicker">anotação do Fábio</p>
      <blockquote className="mt-4 font-display text-[2.55rem] leading-[0.95] md:text-[4.4rem]">
        Almoço quente, pedido claro, balcão sem confusão.
      </blockquote>
      <RestaurantPhoto
        asset={restaurantMedia.counter}
        className="mt-5"
        frameClassName="founder-photo-frame"
        sizes="(max-width: 768px) 88vw, 32vw"
      />
      <div className="counter-note mt-5">
        <span>{founderArtifacts.commandCode}</span>
        <p>{founderArtifacts.counterNote}</p>
      </div>
      <p className="mt-5 text-sm font-semibold leading-relaxed text-black/58">
        No balcão, cada pedido entra com nome, itens, observação e origem. Na cozinha, a equipe sabe o que preparar primeiro. No WhatsApp, o cliente recebe tudo organizado.
      </p>

      <dl className="mt-7 grid gap-3 text-sm font-semibold">
        <div className="story-ledger-row">
          <dt><MapPin aria-hidden="true" className="h-4 w-4" /> Endereço</dt>
          <dd>{restaurantProfile.fullAddressNote}</dd>
        </div>
        <div className="story-ledger-row">
          <dt><Timer aria-hidden="true" className="h-4 w-4" /> Horário</dt>
          <dd>{restaurantProfile.hours}</dd>
        </div>
        <div className="story-ledger-row">
          <dt><Utensils aria-hidden="true" className="h-4 w-4" /> Casa</dt>
          <dd>{restaurantProfile.specialty}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="founder-signature" aria-label={`Assinatura de ${restaurantProfile.founder}`}>
          {founderArtifacts.signature}
        </span>
        <span className="demo-mark">{restaurantProfile.addressNote}</span>
        <span className="demo-mark">{founderArtifacts.proof}</span>
        <DemoContextPopover label="Experiência ilustrativa" title="Capital Food Ops">
          <p>{restaurantProfile.notice}</p>
          <p className="mt-2">A história usa uma persona para mostrar o fluxo com realismo comercial.</p>
        </DemoContextPopover>
      </div>
    </aside>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RestaurantPhoto } from "@/components/RestaurantPhoto";
import { restaurantMedia } from "@/lib/restaurant-assets";
import { restaurantProfile } from "@/lib/restaurant-profile";
import { DemoContextPopover } from "./demo-context-popover";
import { OperationTabs } from "./operation-tabs";

export function OperationsStory() {
  return (
    <section id="operacao" className="operation-section px-5 py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-8 grid gap-6 md:grid-cols-[1fr_0.88fr] md:items-end">
          <div>
            <p className="section-kicker text-[#ffb377]">por trás do balcão</p>
            <h2 className="display-poster mt-3 text-[3rem] leading-[0.96] text-[var(--paper)] md:text-[5.8rem]">
              Enquanto o cliente pede bonito, o Fábio enxerga a operação.
            </h2>
          </div>
          <div className="space-y-4 text-[var(--paper)]">
            <p className="text-lg font-semibold leading-relaxed text-white/66">
              A operação aparece como comanda viva: fila de cozinha, canal de entrada, pico de horário e produto que puxa o almoço.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/gerente" className="operation-cta">
                Ver gerente da casa
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <DemoContextPopover
                label="Dados simulados"
                title="Experiência ilustrativa"
                className="border-white/18 bg-white/10 text-white/72 hover:border-white/32 hover:text-white"
              >
                <p>{restaurantProfile.notice}</p>
                <p className="mt-2">Os números montam uma rotina plausível de balcão para explicar valor comercial.</p>
              </DemoContextPopover>
            </div>
            <RestaurantPhoto
              asset={restaurantMedia.kitchen}
              className="operation-photo"
              creditClassName="text-white/46"
              frameClassName="operation-photo-frame"
              sizes="(max-width: 768px) 92vw, 38vw"
            />
          </div>
        </div>

        <OperationTabs />
      </div>
    </section>
  );
}

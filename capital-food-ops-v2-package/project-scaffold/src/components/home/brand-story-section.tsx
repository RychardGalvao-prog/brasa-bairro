import Link from "next/link";
import { ClipboardList } from "lucide-react";
import { restaurantProfile } from "@/lib/restaurant-profile";
import { CinematicTextReveal } from "./cinematic-text-reveal";
import { FounderNote } from "./founder-note";
import { TypographyPosterBlock } from "./typography-poster-block";

const storyCommands = [
  { code: "#BB-1049", label: "PF da Brasa + Guaraná", meta: "12:42 · WhatsApp" },
  { code: "#BB-1050", label: "Farofa caprichada", meta: "12:47 · balcão" },
  { code: "#BB-1051", label: "Retirada no balcão", meta: "pronto para chamar" }
];

export function BrandStorySection() {
  return (
    <section id="historia" className="px-5 py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-start">
          <div className="story-stage relative overflow-hidden border border-black/12 bg-[#211610] p-6 text-[var(--paper)] md:p-9">
            <div className="story-board-lines" aria-hidden="true" />
            <p className="section-kicker text-[#ffb377]">casa de bairro com alma</p>
            <CinematicTextReveal
              as="h2"
              text="O balcão tem dono. O pedido tem ritmo."
              className="mt-5 block max-w-4xl font-display text-[3rem] leading-[0.93] md:text-[6rem]"
              by="words"
            />
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-relaxed text-white/68">
              {restaurantProfile.story}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <TypographyPosterBlock />
              <div className="story-ticket">
                <span>Comanda editorial</span>
                <strong>{restaurantProfile.motherPhrase}</strong>
                <p>{restaurantProfile.proofLine}</p>
                <Link href="/diagnostico" className="story-ticket__cta">
                  <ClipboardList aria-hidden="true" className="h-4 w-4" />
                  Adaptar para meu restaurante
                </Link>
              </div>
            </div>

            <div className="story-mini-ledger" aria-label="Mini comandas do balcão">
              {storyCommands.map((command) => (
                <div key={command.code}>
                  <span>{command.code}</span>
                  <strong>{command.label}</strong>
                  <small>{command.meta}</small>
                </div>
              ))}
            </div>
          </div>

          <FounderNote />
        </div>
      </div>
    </section>
  );
}

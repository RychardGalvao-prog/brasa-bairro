import { Clock3, Flame, MapPin, MessageCircle, PackageCheck, ReceiptText, Utensils } from "lucide-react";
import { serviceSignals } from "@/lib/restaurant-profile";

const iconsByLabel = {
  "Aberto hoje": Clock3,
  Cidade: MapPin,
  Retirada: ReceiptText,
  Delivery: PackageCheck,
  "Tempo médio": Clock3,
  Campeão: Flame,
  "Canal principal": MessageCircle
} as const;

const visibleSignalLabels = ["Aberto hoje", "Cidade", "Retirada", "Delivery", "Campeão", "Tempo médio"];

export function RestaurantSignals() {
  const homeSignals = visibleSignalLabels
    .map((label) => serviceSignals.find((signal) => signal.label === label))
    .filter((signal): signal is (typeof serviceSignals)[number] => Boolean(signal));

  return (
    <section className="px-5 py-7 md:py-9">
      <div className="section-shell">
        <div className="signal-board" aria-label="Sinais do restaurante">
          {homeSignals.map((signal) => {
            const Icon = iconsByLabel[signal.label] ?? Utensils;
            return (
              <div key={signal.label} className="signal-ticket">
                <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-[var(--ember)]" />
                <div>
                  <p>{signal.label}</p>
                  <strong>{signal.value}</strong>
                  <span>{signal.detail}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

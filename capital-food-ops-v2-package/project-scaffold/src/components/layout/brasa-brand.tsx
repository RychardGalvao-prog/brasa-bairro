import Image from "next/image";
import { cn } from "@/lib/ui";

export function BrasaBrand({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/brasa/logo-seal.png"
        alt="Brasa & Bairro"
        width={compact ? 46 : 70}
        height={compact ? 46 : 70}
        className="rounded-full object-cover shadow-[0_8px_18px_rgba(22,20,18,.14)]"
        priority={!compact}
      />
      <div className={compact ? "leading-tight" : "leading-tight"}>
        <p className="font-display text-xl font-bold text-[var(--charcoal)] md:text-2xl">Brasa & Bairro</p>
        {!compact && <p className="font-hand text-xl text-[var(--sauce)]">feito no capricho</p>}
      </div>
    </div>
  );
}

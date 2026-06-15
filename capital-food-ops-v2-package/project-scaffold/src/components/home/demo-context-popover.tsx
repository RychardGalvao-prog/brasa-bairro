"use client";

import * as Popover from "@radix-ui/react-popover";
import { Info, X } from "lucide-react";
import { cn } from "@/lib/ui";

export function DemoContextPopover({
  label = "Detalhe da experiência",
  title,
  children,
  className
}: {
  label?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={cn(
          "focus-ring inline-flex items-center gap-2 border border-black/15 bg-[var(--paper)] px-3 py-2 text-xs font-semibold text-black/62 transition hover:border-black/28 hover:text-black",
          className
        )}
      >
        <Info aria-hidden="true" className="h-3.5 w-3.5" />
        <span>{label}</span>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align="start"
          sideOffset={8}
          className="z-50 w-[min(20rem,calc(100vw-2rem))] border border-black/15 bg-[#fffaf1] p-4 text-[var(--charcoal)] shadow-[0_18px_46px_rgba(22,20,18,.16)]"
        >
          <div className="flex items-start justify-between gap-4">
            <p className="font-display text-xl leading-none">{title}</p>
            <Popover.Close className="focus-ring grid h-7 w-7 shrink-0 place-items-center border border-black/12 bg-white/60" aria-label="Fechar">
              <X aria-hidden="true" className="h-3.5 w-3.5" />
            </Popover.Close>
          </div>
          <div className="mt-3 text-sm font-semibold leading-relaxed text-black/62">{children}</div>
          <Popover.Arrow className="fill-[#fffaf1]" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

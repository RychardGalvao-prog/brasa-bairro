"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { Info } from "lucide-react";

export function MetricHelp({ label, detail }: { label: string; detail: string }) {
  return (
    <>
      <span className="mt-2 block text-xs font-semibold leading-snug text-black/50 md:hidden">{detail}</span>
      <Tooltip.Provider delayDuration={120}>
        <Tooltip.Root>
          <Tooltip.Trigger
            className="focus-ring ml-2 hidden h-6 w-6 place-items-center border border-black/12 bg-white/60 text-black/52 transition hover:border-black/28 hover:text-black md:inline-grid"
            aria-label={`Detalhe sobre ${label}`}
          >
            <Info aria-hidden="true" className="h-3.5 w-3.5" />
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              sideOffset={8}
              className="z-50 max-w-60 border border-black/15 bg-[var(--charcoal)] px-3 py-2 text-xs font-semibold leading-relaxed text-[var(--paper)] shadow-[0_14px_36px_rgba(22,20,18,.2)]"
            >
              {detail}
              <Tooltip.Arrow className="fill-[var(--charcoal)]" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </>
  );
}

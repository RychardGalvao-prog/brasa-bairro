import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/ui";

const badgeVariants = cva("inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold tracking-wider", {
  variants: {
    tone: {
      paper: "border-[var(--line)] bg-[var(--paper)] text-[var(--charcoal)]",
      ember: "border-transparent bg-[var(--ember)] text-white",
      charcoal: "border-transparent bg-[var(--charcoal)] text-[var(--paper)]",
      green: "border-transparent bg-[var(--status)] text-white"
    }
  },
  defaultVariants: { tone: "paper" }
});

export function Badge({ className, tone, children }: { className?: string; children: React.ReactNode } & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone, className }))}>{children}</span>;
}

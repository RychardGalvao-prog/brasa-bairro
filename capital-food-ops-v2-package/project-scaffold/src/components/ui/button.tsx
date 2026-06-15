import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/ui";

const buttonVariants = cva(
  "focus-ring inline-flex items-center justify-center rounded-full font-bold transition duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-[var(--charcoal)] text-[var(--paper)] shadow-[0_18px_50px_rgba(22,20,18,.22)] hover:-translate-y-0.5 hover:bg-black",
        ember: "bg-[var(--ember)] text-white shadow-[0_18px_50px_rgba(242,106,27,.28)] hover:-translate-y-0.5 hover:bg-[var(--sauce)]",
        paper: "border border-[var(--line)] bg-[var(--paper)] text-[var(--charcoal)] hover:-translate-y-0.5 hover:border-[rgba(22,20,18,.28)]",
        ghost: "text-[var(--charcoal)] hover:bg-black/5"
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-sm",
        lg: "h-14 px-7 text-base"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };

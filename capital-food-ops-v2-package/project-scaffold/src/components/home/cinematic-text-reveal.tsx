"use client";

import { useRef, type HTMLAttributes, type Ref } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { cn } from "@/lib/ui";

type RevealTag = "h1" | "h2" | "p" | "span" | "strong";

export function CinematicTextReveal({
  as = "span",
  text,
  className,
  delay = 0,
  by = "words",
  ...props
}: HTMLAttributes<HTMLElement> & {
  as?: RevealTag;
  text: string;
  delay?: number;
  by?: "words" | "chars";
}) {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const element = ref.current;
    if (!element) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    if (reduce || small) return;

    const split = new SplitType(element, {
      types: by === "chars" ? "words,chars" : "words"
    });
    const targets = by === "chars" ? split.chars : split.words;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        yPercent: 110,
        rotate: by === "chars" ? 2 : 0,
        opacity: 0,
        filter: "blur(6px)",
        duration: 0.72,
        delay,
        stagger: by === "chars" ? 0.012 : 0.045,
        ease: "power4.out"
      });
    }, element);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, { dependencies: [text, delay, by] });

  const revealClassName = cn("cinematic-text-reveal", className);

  if (as === "h1") {
    return <h1 {...props} ref={ref as Ref<HTMLHeadingElement>} className={revealClassName}>{text}</h1>;
  }

  if (as === "h2") {
    return <h2 {...props} ref={ref as Ref<HTMLHeadingElement>} className={revealClassName}>{text}</h2>;
  }

  if (as === "p") {
    return <p {...props} ref={ref as Ref<HTMLParagraphElement>} className={revealClassName}>{text}</p>;
  }

  if (as === "strong") {
    return <strong {...props} ref={ref as Ref<HTMLElement>} className={revealClassName}>{text}</strong>;
  }

  return <span {...props} ref={ref as Ref<HTMLSpanElement>} className={revealClassName}>{text}</span>;
}

"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { BarChart3, BookOpenText, ClipboardList, MessageCircle, ReceiptText, Timer, Utensils } from "lucide-react";
import { BrasaBrand } from "@/components/layout/brasa-brand";
import { CinematicTextReveal } from "./cinematic-text-reveal";
import { HeroDishGraphic } from "./hero-dish-graphic";

const kioskLinks = [
  { href: "/cardapio", label: "Cardápio", helper: "Montar", icon: BookOpenText },
  { href: "/acompanhar", label: "Pedido", helper: "#BB-1049", icon: ReceiptText },
  { href: "/gerente", label: "Operação", helper: "Casa", icon: BarChart3 },
  { href: "/diagnostico", label: "Adaptar", helper: "Capital", icon: ClipboardList }
];

const orderSteps = ["PF da Brasa", "Guaraná lata", "WhatsApp pronto"];

export function RestaurantHero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;

    let removeParallax: (() => void) | undefined;
    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set("[data-scene-part]", { clearProps: "all" });
        return;
      }

      gsap.set("[data-camera-stage]", { transformPerspective: 1000, transformStyle: "preserve-3d" });
      gsap.set("[data-product-scene]", { transformOrigin: "50% 68%" });
      gsap.set("[data-ticket-scene]", { transformOrigin: "50% 0%" });
      gsap.set("[data-kiosk-action]", { transformOrigin: "50% 50%" });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from("[data-environment]", {
          clipPath: "inset(0 0 72% 0)",
          opacity: 0,
          filter: "blur(10px)",
          duration: small ? 0.36 : 0.56
        })
        .from("[data-brand-plaque]", {
          y: small ? -12 : -28,
          rotateX: small ? 0 : -9,
          opacity: 0,
          filter: "blur(8px)",
          duration: small ? 0.34 : 0.48
        }, "-=0.18")
        .from("[data-kiosk-nav]", {
          y: small ? -8 : -16,
          opacity: 0,
          stagger: small ? 0.03 : 0.055,
          duration: small ? 0.26 : 0.38
        }, "-=0.2")
        .from("[data-product-scene]", {
          scale: small ? 0.88 : 0.72,
          y: small ? 24 : 74,
          rotateX: small ? 0 : 8,
          rotateZ: small ? -1 : -4,
          opacity: 0,
          filter: "blur(12px)",
          duration: small ? 0.46 : 0.76
        }, "-=0.06")
        .from("[data-food-layer]", {
          scale: 0.72,
          y: small ? -10 : -34,
          rotate: () => gsap.utils.random(-5, 5),
          opacity: 0,
          filter: "blur(6px)",
          stagger: { each: small ? 0.025 : 0.045, from: "center" },
          duration: small ? 0.34 : 0.52
        }, "-=0.46")
        .from("[data-ticket-scene]", {
          clipPath: "inset(0 0 100% 0)",
          y: small ? -8 : -28,
          rotate: small ? 0 : -3,
          opacity: 0,
          filter: "blur(5px)",
          duration: small ? 0.42 : 0.62
        }, "-=0.18")
        .from("[data-whatsapp-scene]", {
          clipPath: "inset(0 100% 0 0)",
          x: small ? 0 : -18,
          opacity: 0,
          duration: small ? 0.34 : 0.46
        }, "-=0.22")
        .from("[data-kiosk-action]", {
          y: small ? 14 : 26,
          scale: small ? 0.98 : 0.94,
          opacity: 0,
          duration: small ? 0.34 : 0.48
        }, "-=0.18");

      if (!small) {
        const stage = root.current;
        const parallaxItems = gsap.utils.toArray<HTMLElement>("[data-depth]");
        const handleMove = (event: PointerEvent) => {
          const bounds = stage?.getBoundingClientRect();
          if (!bounds) return;
          const x = (event.clientX - bounds.left) / bounds.width - 0.5;
          const y = (event.clientY - bounds.top) / bounds.height - 0.5;
          parallaxItems.forEach((item) => {
            const depth = Number(item.dataset.depth ?? 1);
            gsap.to(item, {
              x: x * depth * 12,
              y: y * depth * 9,
              rotate: x * depth * 0.8,
              duration: 0.45,
              ease: "power2.out",
              overwrite: "auto"
            });
          });
        };
        stage?.addEventListener("pointermove", handleMove);
        removeParallax = () => stage?.removeEventListener("pointermove", handleMove);
      }
    }, root);

    return () => {
      removeParallax?.();
      ctx.revert();
    };
  }, { scope: root });

  return (
    <section ref={root} className="kiosk-stage relative isolate overflow-hidden px-4 pb-8 pt-4 md:min-h-[94svh] md:px-7 md:pb-10 md:pt-6">
      <div data-environment data-scene-part className="kiosk-environment absolute inset-0 -z-10" />

      <div data-camera-stage className="mx-auto flex min-h-[calc(94svh-56px)] max-w-7xl flex-col">
        <nav data-brand-plaque data-scene-part className="kiosk-rail">
          <Link href="/" aria-label="Brasa & Bairro - início" className="brand-plaque">
            <BrasaBrand compact />
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-2 md:flex">
            {kioskLinks.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  data-kiosk-nav
                  data-scene-part
                  className="kiosk-nav-key"
                  href={item.href}
                  key={item.href}
                  aria-current={index === 0 ? "page" : undefined}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  <span>{item.label}</span>
                  <small>{item.helper}</small>
                </Link>
              );
            })}
          </div>

          <Link data-kiosk-nav data-scene-part href="/diagnostico" className="kiosk-adapt-key">
            <ClipboardList aria-hidden="true" className="h-4 w-4" />
            <span>Adaptar</span>
          </Link>
        </nav>

        <div className="mobile-kiosk-keys md:hidden" aria-label="Controles da experiência">
          {kioskLinks.slice(0, 3).map((item) => {
            const Icon = item.icon;
            return (
              <Link data-kiosk-nav data-scene-part href={item.href} key={item.href}>
                <Icon aria-hidden="true" className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="order-stage relative flex flex-1 items-center justify-center py-7 md:py-8">
          <div data-depth="0.7" className="hero-lettering pointer-events-none absolute left-0 top-[8%] hidden md:block">
            <p className="font-hand text-4xl text-[var(--sauce)]">feito na chapa</p>
            <CinematicTextReveal
              as="p"
              text="Comida brasileira de bairro"
              className="mt-2 block max-w-[18rem] font-display text-[3.35rem] leading-[0.93] text-[var(--charcoal)]"
              by="words"
              delay={0.25}
            />
          </div>

          <div data-depth="1.15" data-product-scene data-scene-part className="hero-product-wrap">
            <HeroDishGraphic />
          </div>

          <div data-depth="0.85" data-ticket-scene data-scene-part className="thermal-order">
            <div className="thermal-order__top">
              <span>Pedido #BB-1049</span>
              <span>25 min</span>
            </div>
            <h2>Prato Feito da Brasa</h2>
            <p>Carne de sol ou frango na chapa, baião/arroz e feijão, farofa, vinagrete, macaxeira e molho da casa.</p>
            <div className="thermal-order__items">
              {orderSteps.map((step) => (
                <span key={step}>{step}</span>
              ))}
            </div>
            <div data-whatsapp-scene data-scene-part className="whatsapp-continuation">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              <span>Pedido organizado no WhatsApp, sem áudio perdido.</span>
            </div>
          </div>

          <div data-depth="0.55" className="mobile-stage-copy md:hidden">
            <h1>Comida brasileira de bairro</h1>
            <p>Pedido bonito. WhatsApp organizado.</p>
          </div>
        </div>

        <div data-kiosk-action data-scene-part className="kiosk-console">
          <div className="console-status">
            <span>Capital Food Ops</span>
            <strong>Cardápio, WhatsApp e balcão trabalhando juntos.</strong>
          </div>

          <Link href="/cardapio" className="console-primary">
            <Utensils aria-hidden="true" className="h-5 w-5" />
            <span>Ver cardápio da casa</span>
          </Link>

          <div className="console-meta">
            <span><Timer aria-hidden="true" className="h-4 w-4" /> Pronto em média 25 min</span>
            <Link href="/diagnostico">Adaptar para meu restaurante</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

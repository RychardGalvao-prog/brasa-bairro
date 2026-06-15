"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { restaurantFaq } from "@/lib/faq";
import { restaurantProfile } from "@/lib/restaurant-profile";

export function RestaurantFaqSection() {
  return (
    <section id="faq" className="px-5 py-20 md:py-28">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="section-kicker">perguntas de balcão</p>
          <h2 className="display-poster mt-3 text-[3rem] leading-[0.96] md:text-[5rem]">Dúvidas antes de adaptar.</h2>
          <p className="mt-5 text-base font-semibold leading-relaxed text-black/62">
            O que muda para cliente, equipe e dono quando o pedido chega em formato de comanda.
          </p>
          <p className="faq-side-note mt-5">{restaurantProfile.notice}</p>
        </div>

        <Accordion.Root
          type="single"
          collapsible
          defaultValue="faq-0"
          className="faq-stack"
          aria-label="Perguntas frequentes"
        >
          {restaurantFaq.map((item, index) => (
            <Accordion.Item value={`faq-${index}`} className="faq-item" key={item.question}>
              <Accordion.Header>
                <Accordion.Trigger className="faq-trigger focus-ring group">
                  <span>{item.question}</span>
                  <ChevronDown aria-hidden="true" className="faq-chevron h-5 w-5 shrink-0" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="faq-content">
                <p>{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

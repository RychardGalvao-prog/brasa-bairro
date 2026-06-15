"use client";

import useEmblaCarousel from "embla-carousel-react";
import { RestaurantPhoto } from "@/components/RestaurantPhoto";
import { restaurantMedia } from "@/lib/restaurant-assets";
import { products } from "@/lib/mockdata";
import { ProductCard } from "@/components/menu/product-card";

export function TopSellersCarousel() {
  const [emblaRef] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const top = products.slice(0, 5);

  return (
    <section className="px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-5 md:grid-cols-[0.82fr_1fr] md:items-end">
          <div>
            <p className="font-hand text-3xl text-[var(--sauce)]">sai muito no balcão</p>
            <h2 className="display-poster text-5xl md:text-7xl">Mais pedidos</h2>
          </div>
          <div className="menu-heat-panel">
            <div>
              <p className="text-lg font-semibold text-black/60">Os pratos que mais saem no balcão e no WhatsApp, prontos para montar no recibo.</p>
              <p className="demo-mark mt-2">Seleção da casa.</p>
            </div>
            <RestaurantPhoto
              asset={restaurantMedia.grill}
              className="menu-heat-photo"
              frameClassName="menu-heat-photo-frame"
              sizes="(max-width: 768px) 90vw, 22vw"
            />
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {top.map((product) => (
              <div key={product.id} className="min-w-0 flex-[0_0_86%] md:flex-[0_0_44%] lg:flex-[0_0_34%]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

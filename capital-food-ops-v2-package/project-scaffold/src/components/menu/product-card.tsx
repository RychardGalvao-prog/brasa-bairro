import { Product } from "@/lib/mockdata";
import { cn, money } from "@/lib/ui";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Utensils } from "lucide-react";

export function ProductCard({
  product,
  quantity = 0,
  onAdd,
  onDecrement,
  featured = false
}: {
  product: Product;
  quantity?: number;
  onAdd?: () => void;
  onDecrement?: () => void;
  featured?: boolean;
}) {
  const isHeroProduct = product.id === "prato-feito-brasa";

  return (
    <article className={cn("product-card group paper-surface relative overflow-hidden rounded-xl p-4 transition duration-300 hover:-translate-y-1 md:p-5", featured && "product-card--featured md:col-span-2 md:grid md:grid-cols-[0.95fr_1.15fr] md:gap-6 md:p-6")}>
      {isHeroProduct && <span className="product-card__hero-stamp">PF da Brasa</span>}
      <div className="product-card__media relative mb-5 aspect-[1.08] overflow-hidden rounded-lg bg-[#2a1810] p-5 text-[var(--paper)] md:mb-0">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(180deg,rgba(255,247,234,0),rgba(255,247,234,0.14))]" />
        <div className="relative flex h-full flex-col justify-between gap-4">
          <Badge tone="ember">{product.menuBadge ?? product.tags[0]}</Badge>
          <div>
            <p className="font-hand text-3xl text-[#ffd19c]">{product.whatsappHint}</p>
            <ProductMenuArt product={product} featured={featured} />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-black/45">{product.category}</p>
            <h3 className="mt-2 font-display text-3xl font-bold leading-none md:text-4xl">{product.name}</h3>
          </div>
          <p className="font-display text-3xl font-bold text-[var(--sauce)]">{money(product.price)}</p>
        </div>
        <p className="mt-4 text-sm font-semibold leading-relaxed text-black/65">{product.description}</p>
        <div className="product-card__meta mt-5 flex flex-wrap gap-2">
          {[product.serves, product.pairing, product.orderNote].filter(Boolean).map((item) => (
            <span key={item} className="rounded-full border border-black/10 bg-white/50 px-3 py-1 text-xs font-bold text-black/65">{item}</span>
          ))}
        </div>
        {onAdd && (
          <div className="mt-6 flex items-center gap-3">
            {quantity > 0 && (
              <Button aria-label={`Remover uma unidade de ${product.name}`} onClick={onDecrement} type="button" variant="paper" className="h-12 w-12 shrink-0 px-0">
                <Minus aria-hidden="true" className="h-4 w-4" />
              </Button>
            )}
            <Button onClick={onAdd} type="button" variant={quantity ? "ember" : "primary"} className="min-w-0 flex-1 gap-2">
              {quantity > 0 ? (
                <>
                  <Plus aria-hidden="true" className="h-4 w-4" />
                  <span>Adicionar mais ({quantity})</span>
                </>
              ) : (
                <>
                  <Utensils aria-hidden="true" className="h-4 w-4" />
                  <span>Adicionar ao pedido</span>
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </article>
  );
}

function ProductMenuArt({ product, featured }: { product: Product; featured: boolean }) {
  const plateTone = product.accent === "green" ? "bg-[#f8f1d6]" : "bg-[#fff4df]";
  const sauceTone = product.accent === "sauce" ? "bg-[var(--sauce)]" : "bg-[var(--ember)]";
  const accent = product.accent ?? "ember";

  return (
    <div className={cn("product-menu-art relative mt-3 h-36 overflow-hidden rounded-lg border border-white/15 bg-[#3a2115] shadow-[inset_0_-24px_40px_rgba(0,0,0,.22)]", featured && "product-menu-art--featured")} data-accent={accent}>
      <div className="product-menu-art__label">{product.tags[0]}</div>
      <div className="absolute inset-x-5 bottom-3 h-5 rounded-full bg-black/25 blur-sm" />
      <div className={cn("product-menu-art__plate absolute left-1/2 top-1/2 h-24 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[48%] shadow-[inset_0_0_0_8px_rgba(255,255,255,.55),0_18px_35px_rgba(0,0,0,.28)]", plateTone)}>
        <span className="absolute left-4 top-4 h-8 w-10 rounded-[45%] bg-[#7b371e] shadow-[inset_-5px_-4px_0_rgba(0,0,0,.18)]" />
        <span className="absolute right-4 top-5 h-8 w-8 rounded-full bg-[#f1d287] shadow-[inset_-4px_-3px_0_rgba(163,98,19,.2)]" />
        <span className="absolute bottom-4 left-5 h-5 w-10 rotate-[-8deg] rounded-full bg-[#f7df9d]" />
        <span className="absolute bottom-5 right-4 h-6 w-9 rounded-[45%] bg-[#2f7b52]" />
        <span className={cn("absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-85", sauceTone)} />
      </div>
      <div className="absolute right-3 top-3 rounded-full bg-white/12 px-3 py-1 text-[0.62rem] font-bold text-white/80">
        {product.prepTime}
      </div>
      <div className="product-menu-art__note">
        {product.pairing}
      </div>
    </div>
  );
}

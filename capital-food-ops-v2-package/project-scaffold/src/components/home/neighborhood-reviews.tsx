import { Star } from "lucide-react";
import { neighborhoodReviews, reviewsNotice } from "@/lib/reviews";

export function NeighborhoodReviews() {
  return (
    <section id="avaliacoes" className="overflow-hidden px-5 py-20 md:py-28">
      <div className="section-shell">
        <div className="mb-8 grid gap-5 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="section-kicker">voz do bairro</p>
            <h2 className="display-poster mt-3 text-[3rem] leading-[0.96] md:text-[5.6rem]">Avaliações que parecem balcão.</h2>
          </div>
          <p className="max-w-xl text-lg font-semibold leading-relaxed text-black/62">
            Bilhetes curtos de clientes para mostrar comida real, pedido claro e atendimento sem retrabalho.
          </p>
        </div>

        <div className="reviews-board" aria-label="Avaliações ilustrativas">
          <div className="reviews-counter-strip" aria-hidden="true">bilhetes do balcão · clientes da casa · WhatsApp claro</div>
          <div className="reviews-track">
            {neighborhoodReviews.map((review, index) => (
              <article className="review-ticket" key={review.name} data-review-note={index + 1}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold">{review.name}</p>
                    <p className="text-xs font-semibold text-black/48">{review.context}</p>
                  </div>
                  <span className="inline-flex gap-0.5 text-[var(--ember)]" aria-label="5 estrelas">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} aria-hidden="true" className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </span>
                </div>
                <p className="mt-5 text-base font-semibold leading-relaxed text-black/68">{review.quote}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="demo-mark mt-5">{reviewsNotice}</p>
      </div>
    </section>
  );
}

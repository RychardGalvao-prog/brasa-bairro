const farofaCrumbs = Array.from({ length: 18 }, (_, index) => index);
const riceGrains = Array.from({ length: 16 }, (_, index) => index);
const vinaigretteBits = Array.from({ length: 14 }, (_, index) => index);
const grillMarks = Array.from({ length: 5 }, (_, index) => index);
const macaxeiraPieces = Array.from({ length: 7 }, (_, index) => index);

export function HeroDishGraphic() {
  return (
    <div
      aria-label="Prato Feito da Brasa com carne de sol ou frango na chapa, baião, arroz, feijão, farofa, vinagrete, macaxeira, molho da casa e Guaraná no balcão."
      className="hero-dish"
      role="img"
    >
      <div className="dish-counter-shadow" />

      <div data-food-layer className="guarana-can" aria-hidden="true">
        <span className="guarana-can__shine" />
        <span className="guarana-can__seal">G</span>
        <span className="guarana-can__label">Guaraná</span>
      </div>

      <div className="plate-rim" aria-hidden="true">
        <div className="plate-well">
          <div data-food-layer className="grilled-meat">
            {grillMarks.map((mark) => (
              <span key={mark} className={`grill-mark grill-mark--${mark + 1}`} />
            ))}
            <span className="onion onion--one" />
            <span className="onion onion--two" />
          </div>

          <div data-food-layer className="baiao-mound">
            {riceGrains.map((grain) => (
              <span key={grain} className={`rice-grain rice-grain--${grain + 1}`} />
            ))}
            <span className="bean bean--one" />
            <span className="bean bean--two" />
            <span className="bean bean--three" />
          </div>

          <div data-food-layer className="farofa-mound">
            {farofaCrumbs.map((crumb) => (
              <span key={crumb} className={`farofa-crumb farofa-crumb--${crumb + 1}`} />
            ))}
          </div>

          <div data-food-layer className="vinaigrette">
            {vinaigretteBits.map((bit) => (
              <span key={bit} className={`vinaigrette-bit vinaigrette-bit--${bit + 1}`} />
            ))}
          </div>

          <div data-food-layer className="macaxeira">
            {macaxeiraPieces.map((piece) => (
              <span key={piece} className={`macaxeira-piece macaxeira-piece--${piece + 1}`} />
            ))}
          </div>

          <div data-food-layer className="house-sauce">
            <span />
          </div>
        </div>
      </div>

      <div data-food-layer className="brand-ticket-fragment" aria-hidden="true">
        <span>Brasa & Bairro</span>
        <strong>PF da casa</strong>
      </div>
    </div>
  );
}

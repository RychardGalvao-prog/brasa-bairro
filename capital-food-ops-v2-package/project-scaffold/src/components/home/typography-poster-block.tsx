import { restaurantProfile } from "@/lib/restaurant-profile";

export function TypographyPosterBlock() {
  return (
    <div className="type-poster" aria-label="Cartaz editorial do Prato Feito da Brasa">
      <span className="type-poster__eyebrow">PF DA CASA</span>
      <strong>Prato Feito</strong>
      <em>da Brasa</em>
      <div className="type-poster__notes">
        {restaurantProfile.heroNotes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </div>
    </div>
  );
}

import { RestaurantHero } from "@/components/home/restaurant-hero";
import { RestaurantSignals } from "@/components/home/restaurant-signals";
import { BrandStorySection } from "@/components/home/brand-story-section";
import { TopSellersCarousel } from "@/components/home/top-sellers-carousel";
import { WhatsAppProof } from "@/components/home/whatsapp-proof";
import { OperationsStory } from "@/components/home/operations-story";
import { NeighborhoodReviews } from "@/components/home/neighborhood-reviews";
import { RestaurantFaqSection } from "@/components/home/restaurant-faq-section";
import { SiteFooter } from "@/components/layout/site-footer";

export default function HomePage() {
  return (
    <main>
      <RestaurantHero />
      <RestaurantSignals />
      <BrandStorySection />
      <TopSellersCarousel />
      <WhatsAppProof />
      <OperationsStory />
      <NeighborhoodReviews />
      <RestaurantFaqSection />
      <SiteFooter />
    </main>
  );
}

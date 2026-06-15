import type { RestaurantAsset } from "@/lib/restaurant-assets";
import { cn } from "@/lib/ui";

type PhotoCreditProps = {
  asset: Pick<RestaurantAsset, "author" | "authorUrl" | "unsplashUrl">;
  className?: string;
};

export function PhotoCredit({ asset, className }: PhotoCreditProps) {
  return (
    <p className={cn("text-xs font-semibold text-black/50", className)}>
      Foto:{" "}
      <a className="underline underline-offset-2" href={asset.authorUrl} rel="noreferrer" target="_blank">
        {asset.author}
      </a>{" "}
      via{" "}
      <a className="underline underline-offset-2" href={asset.unsplashUrl} rel="noreferrer" target="_blank">
        Unsplash
      </a>
    </p>
  );
}

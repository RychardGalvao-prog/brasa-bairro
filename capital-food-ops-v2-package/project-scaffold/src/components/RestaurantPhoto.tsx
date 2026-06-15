import Image from "next/image";
import { PhotoCredit } from "@/components/PhotoCredit";
import type { RestaurantAsset } from "@/lib/restaurant-assets";
import { cn } from "@/lib/ui";

type RestaurantPhotoProps = {
  asset: RestaurantAsset;
  className?: string;
  frameClassName?: string;
  imageClassName?: string;
  creditClassName?: string;
  sizes?: string;
};

export function RestaurantPhoto({
  asset,
  className,
  frameClassName,
  imageClassName,
  creditClassName,
  sizes = "(max-width: 768px) 92vw, 42vw"
}: RestaurantPhotoProps) {
  if (!asset.imageUrl) {
    return null;
  }

  return (
    <figure className={cn("restaurant-photo", className)}>
      <div className={cn("restaurant-photo__frame", frameClassName)}>
        <Image
          alt={asset.alt}
          className={cn("restaurant-photo__image", imageClassName)}
          height={asset.imageHeight ?? 720}
          loading="lazy"
          sizes={sizes}
          src={asset.imageUrl}
          width={asset.imageWidth ?? 1080}
        />
        <figcaption>{asset.caption}</figcaption>
      </div>
      <PhotoCredit asset={asset} className={cn("mt-2", creditClassName)} />
    </figure>
  );
}

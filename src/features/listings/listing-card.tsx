import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RATING_MAX, type Listing } from "@/data/listings";

/**
 * One restaurant listing (dish, restaurant, location, price, rating, and the
 * existing "Order Now" link). Reusable by the other category pages.
 */
export function ListingCard({
  listing,
  headingLevel: Heading = "h2",
}: {
  listing: Listing;
  /** Heading element for the dish name; use "h3" under a group heading. */
  headingLevel?: "h2" | "h3";
}) {
  const {
    name,
    restaurant,
    location,
    price,
    rating,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    orderHref,
  } = listing;

  return (
    <Card className="gap-0 overflow-hidden py-0 md:flex-row">
      <img
        src={image}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        decoding="async"
        className="bg-muted aspect-[3/2] w-full object-cover md:aspect-auto md:w-2/5 md:shrink-0"
      />
      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div className="space-y-1">
          <Heading className="text-2xl md:text-3xl">{name}</Heading>
          <p className="text-primary text-lg font-semibold">{restaurant}</p>
        </div>

        <p className="text-muted-foreground flex items-center gap-2">
          <MapPin aria-hidden="true" className="size-4 shrink-0" />
          {location}
        </p>

        <p className="text-xl font-semibold">
          <span aria-hidden="true">₹</span>
          <span className="sr-only">Rupees </span>
          {price}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Ratings:</span>
          <span className="flex items-center gap-0.5">
            {Array.from({ length: RATING_MAX }, (_, i) => (
              <Star
                key={i}
                aria-hidden="true"
                className={
                  i < rating
                    ? "text-warning-foreground fill-warning size-5"
                    : "text-muted-foreground size-5"
                }
              />
            ))}
          </span>
          <span className="sr-only">
            {rating} out of {RATING_MAX}
          </span>
        </div>

        <div className="mt-auto pt-2">
          <Button asChild size="lg">
            <a href={orderHref}>
              Order Now
              <span className="sr-only"> – {name}</span>
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}

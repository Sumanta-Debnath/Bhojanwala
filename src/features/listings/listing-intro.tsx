import { Container } from "@/components/layout/container";
import type { ListingPageContent } from "@/data/listings";

type ListingIntroProps = Pick<
  ListingPageContent,
  | "heading"
  | "subheading"
  | "description"
  | "image"
  | "imageAlt"
  | "imageWidth"
  | "imageHeight"
>;

/** Dark intro banner at the top of a category page: image, headline, copy. */
export function ListingIntro({
  heading,
  subheading,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
}: ListingIntroProps) {
  return (
    <section className="mt-6 bg-neutral-900 text-white">
      <Container className="grid items-center gap-8 py-10 md:grid-cols-[2fr_3fr] md:gap-10 md:py-14">
        <img
          src={image}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          decoding="async"
          className="aspect-video w-full rounded-lg object-cover"
        />
        <div className="space-y-4">
          <h1 className="text-2xl text-white md:text-3xl lg:text-4xl">
            {heading}
          </h1>
          <p className="text-lg font-medium text-white/90">{subheading}</p>
          <p className="leading-relaxed text-white/80">{description}</p>
        </div>
      </Container>
    </section>
  );
}

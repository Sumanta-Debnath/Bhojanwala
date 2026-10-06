import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ServiceCategory } from "@/data/home";

/**
 * One service category. The description is always visible (reachable on touch
 * and keyboard).
 */
export function CategoryCard({ category }: { category: ServiceCategory }) {
  const { href, title, tagline, description, image, imageAlt } = category;

  return (
    <Card className="h-full gap-0 overflow-hidden rounded-lg py-0">
      <img
        src={image}
        alt={imageAlt}
        width={category.imageWidth}
        height={category.imageHeight}
        loading="lazy"
        decoding="async"
        className="bg-muted aspect-[16/10] w-full object-cover"
      />
      <CardHeader className="gap-1 px-5 pt-5">
        <CardTitle>
          <h3 className="text-xl font-normal md:text-2xl">{title}</h3>
        </CardTitle>
        <CardDescription className="font-medium">{tagline}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 px-5 pt-3">
        <p className="text-muted-foreground text-sm leading-relaxed md:text-base lg:text-[0.9375rem]">
          {description}
        </p>
      </CardContent>
      <CardFooter className="px-5 py-5">
        <Button asChild>
          <a href={href}>
            Order Now
            <span className="sr-only"> – {title}</span>
            <ArrowRight
              aria-hidden="true"
              className="transition-transform motion-safe:group-hover/button:translate-x-0.5 motion-safe:group-focus-visible/button:translate-x-0.5"
            />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

import { useId } from "react";
import { Container } from "@/components/layout/container";
import type { ListingGroup as ListingGroupData } from "@/data/listings";
import { ListingCard } from "@/features/listings/listing-card";

type ListingGroupProps = Omit<ListingGroupData, "title"> & {
  /** Visible group title (h2); dish names then become h3. */
  title?: string;
  /** Accessible name for the list when there is no visible title. */
  label?: string;
};

/**
 * A section of listing cards. With a `title` the title is an h2 and dish
 * names are h3; without one, dish names are h2.
 */
export function ListingGroup({ title, label, listings }: ListingGroupProps) {
  const headingId = useId();

  return (
    <section
      aria-labelledby={title ? headingId : undefined}
      className="py-10 md:py-14"
    >
      <Container>
        {title && (
          <h2 id={headingId} className="mb-6 md:mb-8">
            {title}
          </h2>
        )}
        <ul
          aria-label={title ? undefined : label}
          className="grid gap-6 md:gap-8"
        >
          {listings.map((listing) => (
            <li key={listing.name}>
              <ListingCard
                listing={listing}
                headingLevel={title ? "h3" : "h2"}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { biryaniAndRolls } from "@/data/item1";
import { ListingCard } from "@/features/listings/listing-card";
import { ListingIntro } from "@/features/listings/listing-intro";

export function BiryaniAndRollsPage() {
  const { listings, ...intro } = biryaniAndRolls;

  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "index.html" },
        { label: "Biryani & Rolls" },
      ]}
    >
      <ListingIntro {...intro} />
      <section className="py-10 md:py-14">
        <Container>
          <ul
            aria-label="Biryani & Rolls listings"
            className="grid gap-6 md:gap-8"
          >
            {listings.map((listing) => (
              <li key={listing.name}>
                <ListingCard listing={listing} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}

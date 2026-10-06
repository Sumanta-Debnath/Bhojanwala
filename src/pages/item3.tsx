import { PageShell } from "@/components/layout/page-shell";
import { desserts } from "@/data/item3";
import { ListingGroup } from "@/features/listings/listing-group";
import { ListingIntro } from "@/features/listings/listing-intro";

export function DessertsPage() {
  const { listings, ...intro } = desserts;

  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "index.html" },
        { label: "Desserts" },
      ]}
    >
      <ListingIntro {...intro} />
      <ListingGroup label="Dessert listings" listings={listings} />
    </PageShell>
  );
}

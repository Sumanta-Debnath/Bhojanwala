import { PageShell } from "@/components/layout/page-shell";
import { indianCuisines } from "@/data/item2";
import { ListingGroup } from "@/features/listings/listing-group";
import { ListingIntro } from "@/features/listings/listing-intro";

export function IndianCuisinesPage() {
  const { groups, ...intro } = indianCuisines;

  return (
    <PageShell
      breadcrumbs={[
        { label: "Home", href: "index.html" },
        { label: "Indian Cuisines" },
      ]}
    >
      <ListingIntro {...intro} />
      {groups.map((group) => (
        <ListingGroup key={group.title} {...group} />
      ))}
    </PageShell>
  );
}

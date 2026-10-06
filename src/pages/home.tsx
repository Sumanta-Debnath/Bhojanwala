import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { hero, services } from "@/data/home";
import { CategoryCard } from "@/features/home/category-card";
import { HeroVideo } from "@/features/home/hero-video";

export function HomePage() {
  return (
    <PageShell>
      <HeroVideo title={hero.title} tagline={hero.tagline} video={hero.video} />

      {/* id="service" is the anchor targeted by the Services links. */}
      <section
        id="service"
        aria-labelledby="services-title"
        className="scroll-mt-16 py-12 md:py-20"
      >
        <Container className="space-y-8 md:space-y-10">
          <h2 id="services-title">Services</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((category) => (
              <li key={category.href}>
                <CategoryCard category={category} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </PageShell>
  );
}

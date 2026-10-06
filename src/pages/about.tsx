import { Container } from "@/components/layout/container";
import { PageShell } from "@/components/layout/page-shell";
import { about } from "@/data/about";
import { ReadMore } from "@/features/about/read-more";

export function AboutPage() {
  return (
    <PageShell>
      <section
        aria-labelledby="about-title"
        className="relative isolate overflow-hidden bg-neutral-900"
      >
        <img
          src={about.image}
          alt=""
          width={1920}
          height={1080}
          decoding="async"
          className="absolute inset-0 -z-10 size-full object-cover object-[center_70%]"
        />
        <div
          className="absolute inset-0 -z-10 bg-black/55"
          aria-hidden="true"
        />
        <Container className="flex min-h-48 items-end py-10 sm:min-h-56 md:min-h-64 lg:min-h-72">
          <h1 id="about-title" className="text-white">
            {about.title}
          </h1>
        </Container>
      </section>

      <section className="py-10 md:py-16">
        <Container>
          <div className="max-w-3xl">
            <ReadMore
              intro={about.intro}
              more={about.more}
              ellipsis={about.ellipsis}
            />
          </div>
        </Container>
      </section>
    </PageShell>
  );
}

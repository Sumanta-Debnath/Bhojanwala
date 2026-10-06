import { siteName } from "@/data/site";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";
import { SiteNav } from "./site-nav";
import { SiteWordmark } from "./site-wordmark";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 border-b">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="index.html"
          aria-label={`${siteName} home`}
          className="shrink-0 rounded-md"
        >
          <SiteWordmark className="text-foreground text-2xl" />
        </a>

        <div className="flex items-center gap-1">
          <nav aria-label="Primary" className="hidden md:block">
            <SiteNav />
          </nav>
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

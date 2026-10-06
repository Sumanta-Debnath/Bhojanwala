import { SocialIcon } from "@/components/icons/social-icon";
import { copyright, footerNav, socialLinks } from "@/data/site";
import { Container } from "./container";
import { SiteWordmark } from "./site-wordmark";

/**
 * Site footer. Always a dark surface (like the page hero scrims) so it reads
 * the same in light and dark mode. Content comes from src/data/site.ts.
 */
export function SiteFooter() {
  return (
    <footer className="mt-16 bg-neutral-900 text-white">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SiteWordmark className="text-2xl" />

          <nav aria-label="Footer">
            <ul className="-mx-3 flex flex-wrap">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block rounded-sm px-3 py-2 text-sm font-medium text-white/75 underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/70">{copyright}</p>

          <nav aria-label="Social media">
            <ul className="-mx-2 flex">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-label={item.label}
                    className="flex size-10 items-center justify-center rounded-full text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-white"
                  >
                    <SocialIcon label={item.label} className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

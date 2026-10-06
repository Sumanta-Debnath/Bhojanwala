import { Container } from "./container";
import { PageBreadcrumbs, type Crumb } from "./page-breadcrumbs";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type PageShellProps = {
  children: React.ReactNode;
  /** Optional trail, only for pages that sit under another existing page. */
  breadcrumbs?: Crumb[];
};

/** Global layout: skip link, header, main landmark, footer. */
export function PageShell({ children, breadcrumbs }: PageShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="bg-primary text-primary-foreground sr-only rounded-md px-4 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to main content
      </a>
      <SiteHeader />
      {/* Short opacity-only fade softens the pop-in after client render. */}
      <main
        id="main"
        tabIndex={-1}
        className="flex-1 outline-none motion-safe:animate-in motion-safe:fade-in-0 motion-safe:duration-200"
      >
        {breadcrumbs && (
          <Container className="pt-6">
            <PageBreadcrumbs items={breadcrumbs} />
          </Container>
        )}
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

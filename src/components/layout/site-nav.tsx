import { cn } from "@/lib/utils";
import { useIsActiveHref } from "@/hooks/use-active-href";
import { primaryNav } from "@/data/site";

type SiteNavProps = {
  orientation?: "horizontal" | "vertical";
  /** Called after a link is activated (used to close the mobile sheet). */
  onNavigate?: () => void;
};

/** The primary link list. Rendered by both the desktop bar and mobile sheet. */
export function SiteNav({
  orientation = "horizontal",
  onNavigate,
}: SiteNavProps) {
  const isActive = useIsActiveHref();

  return (
    <ul
      className={cn(
        "flex gap-1",
        orientation === "vertical" ? "flex-col" : "items-center",
      )}
    >
      {primaryNav.map((item) => {
        const active = isActive(item.href);
        return (
          <li key={item.href}>
            <a
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={onNavigate}
              className={cn(
                "text-muted-foreground hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                "aria-[current=page]:bg-accent aria-[current=page]:text-accent-foreground aria-[current=page]:font-semibold",
                orientation === "vertical" && "py-3 text-base",
              )}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

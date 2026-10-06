import { siteName } from "@/data/site";
import { cn } from "@/lib/utils";

/** Text logo. Inherits colour so it works on light, dark and image surfaces. */
export function SiteWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-sans text-xl font-extrabold tracking-tight",
        className,
      )}
    >
      {siteName}
    </span>
  );
}

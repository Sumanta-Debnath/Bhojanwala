import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ReadMoreProps = {
  intro: string;
  more: string;
  /** Text shown after the intro while collapsed. */
  ellipsis: string;
};

/**
 * "Read more" toggle: collapsed by default, the extra text and the ellipsis
 * swap on click. aria-expanded / aria-controls announce the state.
 */
export function ReadMore({ intro, more, ellipsis }: ReadMoreProps) {
  const [expanded, setExpanded] = useState(false);
  const moreId = useId();

  return (
    <div>
      <p className="text-base leading-relaxed md:text-lg md:leading-8">
        {intro}
        {!expanded && <span aria-hidden="true">{ellipsis}</span>}
      </p>
      {/* Height animates via grid rows (no JS measuring). `inert` keeps the
          collapsed text out of the accessibility tree and tab order. */}
      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-200",
          expanded
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p
            id={moreId}
            inert={!expanded}
            className="pt-4 text-base leading-relaxed md:text-lg md:leading-8"
          >
            {more}
          </p>
        </div>
      </div>
      <Button
        variant="outline"
        size="lg"
        className="mt-4"
        aria-expanded={expanded}
        aria-controls={moreId}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Read less" : "Read more"}
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "transition-transform duration-200",
            expanded && "rotate-180",
          )}
        />
      </Button>
    </div>
  );
}

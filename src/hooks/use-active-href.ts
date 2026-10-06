import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}

const getSnapshot = () => window.location.pathname + window.location.hash;
const getServerSnapshot = () => "";

/** "/about.html", "/about", "about.html" -> "about"; "/" and "" -> "index" */
function pageName(pathname: string) {
  const file = pathname.split("/").filter(Boolean).pop() ?? "index";
  return file.replace(/\.html$/, "");
}

/**
 * Returns a function telling whether a nav href points at the current
 * page (and, for hash links such as "#service", the current section).
 * Works with the existing multi-page .html navigation; no router needed.
 */
export function useIsActiveHref() {
  useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (href: string) => {
    if (typeof window === "undefined") return false;
    const target = new URL(href, window.location.href);
    if (pageName(target.pathname) !== pageName(window.location.pathname)) {
      return false;
    }
    const here = window.location.hash;
    // Hash links are active only when that section is targeted; plain page
    // links are active unless a sibling section link is targeted.
    return target.hash ? here === target.hash : here !== "#service";
  };
}

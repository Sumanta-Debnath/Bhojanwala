// Single source of truth for global navigation, social links and copyright.

export type NavItem = {
  label: string;
  href: string;
};

export const siteName = "Bhojanwala";

/** Header navigation. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "index.html" },
  { label: "Services", href: "index.html#service" },
  { label: "About Us", href: "about.html" },
  { label: "Contact Us", href: "contactus.html" },
];

/** Footer navigation. */
export const footerNav: NavItem[] = [
  { label: "Home", href: "index.html" },
  { label: "Services", href: "index.html#service" },
  { label: "About", href: "about.html" },
  { label: "Contact", href: "contactus.html" },
];

/**
 * Footer social links. All point to "#" today.
 * NEEDS CONFIRMATION: real URLs.
 */
export const socialLinks: NavItem[] = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "YouTube", href: "#" },
];

/** Footer copyright text (year preserved as authored). */
export const copyright = "Bhojanwala © 2022";
